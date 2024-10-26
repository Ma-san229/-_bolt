'use client'

import { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const mockUsers = [
  {
    id: 1,
    name: '山田太郎',
    email: 'yamada@example.com',
    department: '営業部',
    status: 'active',
    points: 1200,
  },
  {
    id: 2,
    name: '鈴木花子',
    email: 'suzuki@example.com',
    department: '人事部',
    status: 'active',
    points: 850,
  },
]

export function UserManagement() {
  const [users] = useState(mockUsers)
  const [search, setSearch] = useState('')

  const filteredUsers = users.filter(user =>
    user.name.includes(search) || user.email.includes(search)
  )

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Input
          placeholder="ユーザーを検索..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-sm"
        />
        <Button>ユーザーを追加</Button>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>名前</TableHead>
              <TableHead>メール</TableHead>
              <TableHead>部署</TableHead>
              <TableHead>ステータス</TableHead>
              <TableHead>保有ポイント</TableHead>
              <TableHead>アクション</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.department}</TableCell>
                <TableCell>
                  <Badge variant={user.status === 'active' ? 'default' : 'secondary'}>
                    {user.status === 'active' ? '有効' : '無効'}
                  </Badge>
                </TableCell>
                <TableCell>{user.points}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">編集</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}