'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const pointHistory = [
  {
    id: 1,
    date: '2024-03-15',
    type: '付与',
    amount: 500,
    department: '営業部',
    description: '四半期目標達成ボーナス',
  },
  {
    id: 2,
    date: '2024-03-14',
    type: '使用',
    amount: -200,
    department: '開発部',
    description: 'プロジェクト完了祝い',
  },
]

const departmentStats = [
  {
    department: '営業部',
    totalPoints: 12500,
    usedPoints: 8900,
    averagePerUser: 450,
  },
  {
    department: '開発部',
    totalPoints: 15800,
    usedPoints: 12400,
    averagePerUser: 520,
  },
]

export function PointAnalytics() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>ポイント利用状況</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="history">
            <TabsList>
              <TabsTrigger value="history">履歴</TabsTrigger>
              <TabsTrigger value="department">部署別統計</TabsTrigger>
            </TabsList>

            <TabsContent value="history" className="mt-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>日付</TableHead>
                    <TableHead>種類</TableHead>
                    <TableHead>ポイント</TableHead>
                    <TableHead>部署</TableHead>
                    <TableHead>詳細</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pointHistory.map((record) => (
                    <TableRow key={record.id}>
                      <TableCell>{record.date}</TableCell>
                      <TableCell>{record.type}</TableCell>
                      <TableCell className={record.amount > 0 ? 'text-green-600' : 'text-red-600'}>
                        {record.amount > 0 ? `+${record.amount}` : record.amount}
                      </TableCell>
                      <TableCell>{record.department}</TableCell>
                      <TableCell>{record.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="department" className="mt-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>部署</TableHead>
                    <TableHead>総付与ポイント</TableHead>
                    <TableHead>使用済みポイント</TableHead>
                    <TableHead>ユーザーあたり平均</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {departmentStats.map((stat) => (
                    <TableRow key={stat.department}>
                      <TableCell>{stat.department}</TableCell>
                      <TableCell>{stat.totalPoints}</TableCell>
                      <TableCell>{stat.usedPoints}</TableCell>
                      <TableCell>{stat.averagePerUser}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}