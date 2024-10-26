import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { authOptions } from '@/lib/auth'

const messageSchema = z.object({
  recipientId: z.string().uuid(),
  content: z.string().min(1),
  points: z.number().min(1).max(100),
  templateId: z.string().uuid().optional(),
  stampId: z.string().uuid().optional(),
  imageUrl: z.string().url().optional(),
  isAnonymous: z.boolean().default(false),
  scheduledFor: z.string().datetime().optional(),
})

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const json = await req.json()
    const body = messageSchema.parse(json)

    // ポイント残高チェック
    const sender = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: { pointsBalance: true }
    })

    if (!sender || sender.pointsBalance < body.points) {
      return NextResponse.json(
        { error: 'Insufficient points' },
        { status: 400 }
      )
    }

    // トランザクション開始
    const message = await prisma.$transaction(async (tx) => {
      // メッセージ作成
      const message = await tx.message.create({
        data: {
          senderId: session.user.id,
          recipientId: body.recipientId,
          content: body.content,
          points: body.points,
          templateId: body.templateId,
          stampId: body.stampId,
          imageUrl: body.imageUrl,
          isAnonymous: body.isAnonymous,
          scheduledFor: body.scheduledFor,
        },
      })

      // ポイント移動
      await tx.pointTransaction.create({
        data: {
          userId: session.user.id,
          amount: -body.points,
          type: 'SENT',
          referenceId: message.id,
          referenceType: 'MESSAGE',
          description: 'メッセージ送信',
        },
      })

      await tx.pointTransaction.create({
        data: {
          userId: body.recipientId,
          amount: body.points,
          type: 'RECEIVED',
          referenceId: message.id,
          referenceType: 'MESSAGE',
          description: 'メッセージ受信',
        },
      })

      // ユーザーのポイント残高更新
      await tx.user.update({
        where: { id: session.user.id },
        data: { pointsBalance: { decrement: body.points } },
      })

      await tx.user.update({
        where: { id: body.recipientId },
        data: { pointsBalance: { increment: body.points } },
      })

      return message
    })

    return NextResponse.json(message)
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid request data', details: error.errors },
        { status: 400 }
      )
    }
    console.error('Message creation error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(req.url)
    const type = searchParams.get('type')

    const messages = await prisma.message.findMany({
      where: {
        OR: [
          { senderId: session.user.id },
          { recipientId: session.user.id },
        ],
        ...(type === 'sent' ? { senderId: session.user.id } :
            type === 'received' ? { recipientId: session.user.id } : {}),
      },
      include: {
        sender: {
          select: { id: true, name: true, email: true },
        },
        recipient: {
          select: { id: true, name: true, email: true },
        },
        template: true,
        stamp: true,
        likes: {
          include: {
            user: {
              select: { id: true, name: true },
            },
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json(messages)
  } catch (error) {
    console.error('Message fetch error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}