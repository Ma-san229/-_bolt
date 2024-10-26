'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import { MessageTemplateSelector } from "@/components/messages/template-selector"
import { StampSelector } from "@/components/messages/stamp-selector"
import { ImageUpload } from "@/components/messages/image-upload"

export default function NewMessagePage() {
  const { data: session } = useSession()
  const router = useRouter()
  const { toast } = useToast()
  const [recipient, setRecipient] = useState('')
  const [points, setPoints] = useState(10)
  const [message, setMessage] = useState('')
  const [selectedTemplate, setSelectedTemplate] = useState('')
  const [selectedStamp, setSelectedStamp] = useState('')
  const [isAnonymous, setIsAnonymous] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // TODO: 実際のAPI呼び出し
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      toast({
        title: "メッセージを送信しました",
        description: `${recipient}さんにメッセージが送信されました。`,
      })
      router.push('/messages')
    } catch (error) {
      toast({
        title: "エラー",
        description: "メッセージの送信に失敗しました。",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <Card>
          <CardHeader>
            <CardTitle>新規メッセージ作成</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="recipient">送信先</Label>
                <Input
                  id="recipient"
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  placeholder="送信先の名前を入力"
                  required
                />
              </div>

              <MessageTemplateSelector
                selectedTemplate={selectedTemplate}
                onSelect={setSelectedTemplate}
              />

              <div>
                <Label htmlFor="message">メッセージ</Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="感謝のメッセージを入力してください"
                  required
                  className="h-32"
                />
              </div>

              <StampSelector
                selectedStamp={selectedStamp}
                onSelect={setSelectedStamp}
              />

              <ImageUpload />

              <div>
                <Label htmlFor="points">ポイント</Label>
                <Input
                  id="points"
                  type="number"
                  min={1}
                  max={100}
                  value={points}
                  onChange={(e) => setPoints(parseInt(e.target.value))}
                  required
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="anonymous"
                  checked={isAnonymous}
                  onChange={(e) => setIsAnonymous(e.target.checked)}
                  className="rounded border-gray-300"
                />
                <Label htmlFor="anonymous">匿名で送信する</Label>
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? '送信中...' : 'メッセージを送信'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}