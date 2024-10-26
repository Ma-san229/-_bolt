'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AdminStats } from "@/components/admin/stats"
import { UserManagement } from "@/components/admin/user-management"
import { PointAnalytics } from "@/components/admin/point-analytics"
import { EngagementChart } from "@/components/admin/engagement-chart"

export default function AdminDashboardPage() {
  const { data: session } = useSession()

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">管理者ダッシュボード</h1>

        <AdminStats />

        <Tabs defaultValue="analytics" className="mt-8">
          <TabsList>
            <TabsTrigger value="analytics">分析</TabsTrigger>
            <TabsTrigger value="users">ユーザー管理</TabsTrigger>
            <TabsTrigger value="points">ポイント管理</TabsTrigger>
          </TabsList>

          <TabsContent value="analytics" className="mt-6">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>エンゲージメント分析</CardTitle>
                </CardHeader>
                <CardContent>
                  <EngagementChart />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="users">
            <UserManagement />
          </TabsContent>

          <TabsContent value="points">
            <PointAnalytics />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}