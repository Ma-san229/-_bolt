'use client'

import { useState } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { ja } from 'date-fns/locale'
import { Badge } from "@/components/ui/badge"

// 仮のデータ
const mockHistory = [
  {
    id: 1,
    type: 'received',
    points: 50,
    from: '田中さん',
    message: 'プロジェクトへの貢献ありがとうございます！',
    timestamp: new Date(2024, 2, 15),
  },
  {
    id: 2,
    type: 'sent',
    points: 30,
    to: '鈴木さん',
    message: 'サポートありがとうございました',
    timestamp: new Date(2024, 2, 14),
  },
]

export function PointHistory() {
  const [history] = useState(mockHistory)

  return (
    <div className="space-y-4">
      {history.map((item) => (
        <div key={item.id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
          <Badge variant={item.type === 'received' ? 'default' : 'secondary'}>
            {item.type === 'received' ? '受取' : '送信'}
          </Badge>
          <div className="flex-1">
            <p className="text-sm text-gray-600">
              {item.type === 'received' ? `${item.from}から` : `${item.to}へ`}
            </p>
            <p className="font-medium">{item.points} ポイント</p>
            <p className="text-sm mt-1">{item.message}</p>
            <p className="text-xs text-gray-500 mt-2">
              {formatDistanceToNow(item.timestamp, { addSuffix: true, locale: ja })}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}