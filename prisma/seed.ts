import { PrismaClient } from '@prisma/client'
import { hash } from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  // デモ用管理者アカウント作成
  const adminPassword = await hash('admin123', 10)
  await prisma.user.create({
    data: {
      email: 'admin@example.com',
      name: '管理者',
      passwordHash: adminPassword,
      role: 'ADMIN',
      pointsBalance: 1000,
    },
  })

  // デモ用テンプレート作成
  await prisma.template.createMany({
    data: [
      {
        name: 'シンプル',
        description: 'シンプルなデザイン',
        designData: JSON.stringify({ style: 'simple' }),
      },
      {
        name: '春のお祝い',
        description: '桜をモチーフにした春らしいデザイン',
        designData: JSON.stringify({ style: 'spring' }),
      },
      {
        name: '感謝状',
        description: 'フォーマルな感謝状デザイン',
        designData: JSON.stringify({ style: 'formal' }),
      },
    ],
  })

  // デモ用スタンプ作成
  await prisma.stamp.createMany({
    data: [
      { name: 'いいね！', emoji: '👍', category: 'positive' },
      { name: 'すばらしい', emoji: '🌟', category: 'positive' },
      { name: 'おめでとう', emoji: '🎉', category: 'celebration' },
      { name: 'ありがとう', emoji: '🙏', category: 'gratitude' },
      { name: 'がんばって', emoji: '💪', category: 'motivation' },
      { name: '感謝', emoji: '💝', category: 'gratitude' },
    ],
  })

  // デモ用部署作成
  await prisma.department.createMany({
    data: [
      { name: '営業部', description: '営業部門' },
      { name: '開発部', description: '開発部門' },
      { name: '人事部', description: '人事部門' },
    ],
  })

  // ポイント設定
  await prisma.pointSetting.createMany({
    data: [
      { settingKey: 'daily_limit', settingValue: 100, description: '1日あたりの付与上限' },
      { settingKey: 'like_points', settingValue: 10, description: 'いいねの付与ポイント' },
    ],
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })