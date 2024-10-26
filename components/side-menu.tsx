'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const menuItems = [
  { href: '/dashboard', label: 'ダッシュボード' },
  { href: '/messages', label: 'メッセージ' },
  { href: '/albums', label: 'アルバム' },
  { href: '/settings', label: '設定' },
  { href: '/subscription', label: 'サブスクリプション' },
]

export function SideMenu() {
  const pathname = usePathname()

  return (
    <nav className="space-y-1">
      {menuItems.map((item) => (
        <Button
          key={item.href}
          asChild
          variant="ghost"
          className={cn(
            'w-full justify-start',
            pathname === item.href ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
          )}
        >
          <Link href={item.href}>
            {item.label}
          </Link>
        </Button>
      ))}
      <Button asChild variant="ghost" className="w-full justify-start text-gray-600 hover:bg-gray-50 hover:text-gray-900">
        <Link href="/logout">ログアウト</Link>
      </Button>
    </nav>
  )
}