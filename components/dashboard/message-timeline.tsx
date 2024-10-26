'use client'

import { useState } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { ja } from 'date-fns/locale'
import { Heart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// 仮のデータ
const mockTimeline = [
  {
    id: 1,
    from: '山田太郎',
    to: '佐藤花子',
    message: 'いつも丁寧な対応ありがとうございます！',
    points: 30,
    likes: 2,
    hasLiked: false,
    timestamp: new Date(2024, 2, 15, 14, 30),
  },
  {
    id: 2,
    from: '鈴木一郎',
    to: '田中次郎',
    message: 'プロジェクトでの的確なアドバイスに感謝です',
    points: 50,
    likes: 5,
    hasLiked: true,
    timestamp: new Date(2024, 2, 15, 13, 15),
  },
]

export function MessageTimeline() {
  const [timeline, setTimeline] = useState(mockTimeline)

  const handleLike = (messageId: number) => {
    setTimeline(timeline.map(message => {
      if (message.id === messageId) {
        return {
          ...message,
          likes: message.hasLiked ? message.likes - 1 : message.likes + 1,
          hasLiked: !message.hasLiked,
        }
      }
      return message
    }))
  }

  return (
    <div className="space-y-6">
      {timeline.map((message) => (
        <div key={message.id} className="border-b pb-4 last:border-0">
          <div className="flex items-start space-x-4">
            <Avatar>
              <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${message.from}`} />
              <AvatarFallback>{message.from[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="text-sm">
                <span className="font-medium">{message.from}</span>
                <span className="text-gray-500"> から </span>
                <span className="font-medium">{message.to}</span>
                <span className="text-gray-500"> へ</span>
              </p>
              <p className="mt-1">{message.message}</p>
              <div className="flex items-center space-x-4 mt-2">
                <span className="text-sm font-medium">{message.points} ポイント</span>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`flex items-center space-x-1 ${message.hasLiked ? 'text-red-500' : 'text-gray-500'}`}
                  onClick={() => handleLike(message.id)}
                >
                  <Heart size={16} className={message.hasLiked ? 'fill-current' : ''} />
                  <span>{message.likes}</span>
                </Button>
                <span className="text-xs text-gray-500">
                  {formatDistanceToNow(message.timestamp, { addSuffix: true, locale: ja })}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}