'use client'

import { useEffect } from 'react'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function LogoutPage() {
  const router = useRouter()

  useEffect(() => {
    const handleLogout = async () => {
      await signOut({ redirect: false })
      router.push('/')
    }

    handleLogout()
  }, [router])

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mb-4">ログアウトしています...</h1>
      <p>ログアウト処理中です。しばらくお待ちください。</p>
    </div>
  )
}