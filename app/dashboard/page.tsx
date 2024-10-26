'use client'

import { useSession } from 'next-auth/react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SideMenu } from "@/components/side-menu"
import { PointHistory } from "@/components/dashboard/point-history"
import { MessageTimeline } from "@/components/dashboard/message-timeline"
import { UserStats } from "@/components/dashboard/user-stats"

export default function DashboardPage() {
  const { data: session } = useSession()

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        <aside className="w-64 min-h-screen bg-white p-4 shadow-sm">
          <SideMenu />
        </aside>
        
        <main className="flex-1 p-8">
          <h1 className="text-2xl font-bold mb-8">ダッシュボード</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <UserStats />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>最近のポイント履歴</CardTitle>
              </CardHeader>
              <CardContent>
                <PointHistory />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>タイムライン</CardTitle>
              </CardHeader>
              <CardContent>
                <MessageTimeline />
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}