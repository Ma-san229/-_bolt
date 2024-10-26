import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function AuthErrorPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="max-w-md w-full space-y-8 p-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">認証エラー</h2>
          <p className="mt-2 text-sm text-gray-600">
            認証中にエラーが発生しました。もう一度お試しください。
          </p>
        </div>
        <div className="mt-8 space-y-4">
          <Button asChild className="w-full">
            <Link href="/login">
              ログインページに戻る
            </Link>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <Link href="/">
              トップページに戻る
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}