'use client'

import { 
  Trophy,
  Heart,
  Send,
  Coins
} from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

const stats = [
  {
    label: '獲得ポイント',
    value: '2,500',
    icon: Trophy,
    color: 'text-yellow-600',
  },
  {
    label: 'いいね数',
    value: '42',
    icon: Heart,
    color: 'text-red-500',
  },
  {
    label: '送信数',
    value: '156',
    icon: Send,
    color: 'text-blue-500',
  },
]

export function UserStats() {
  return (
    <>
      {stats.map((stat) => (
        <Card key={stat.label}>
          <CardContent className="flex items-center p-6">
            <div className={`rounded-full p-3 ${stat.color} bg-opacity-10`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">{stat.label}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  )
}