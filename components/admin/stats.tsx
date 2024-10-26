'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, MessageCircle, Award, TrendingUp } from 'lucide-react'

const stats = [
  {
    title: '総ユーザー数',
    value: '1,234',
    change: '+12%',
    icon: Users,
  },
  {
    title: '今月のメッセージ数',
    value: '5,678',
    change: '+23%',
    icon: MessageCircle,
  },
  {
    title: '付与ポイント総額',
    value: '89,012',
    change: '+8%',
    icon: Award,
  },
  {
    title: '月間アクティブユーザー',
    value: '892',
    change: '+15%',
    icon: TrendingUp,
  },
]

export function AdminStats() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">
              <span className={stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
                {stat.change}
              </span>
              {' '}vs 先月
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}