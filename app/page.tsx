import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">メモリーリレー</h1>
          <div>
            <Link href="/login" className="text-blue-600 hover:text-blue-800 mr-4">ログイン</Link>
            <Button asChild>
              <Link href="/register">新規登録</Link>
            </Button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">大切な思い出を、大切な人へ</h2>
        <p className="text-xl mb-8">メモリーリレーは、あなたの感謝の気持ちを特別なタイミングで届けるサービスです。</p>
        <Button asChild size="lg">
          <Link href="/register">今すぐ始める</Link>
        </Button>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">簡単メッセージ作成</h3>
            <p>日記形式で気軽に感謝の気持ちを記録できます。</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">タイミング設定</h3>
            <p>特別な日に合わせて自動でメッセージを送信します。</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">デジタルアルバム</h3>
            <p>送ったメッセージを大切な思い出として保存できます。</p>
          </div>
        </div>
      </main>

      <footer className="container mx-auto px-4 py-8 text-center text-gray-600">
        <p>&copy; 2023 メモリーリレー All rights reserved.</p>
      </footer>
    </div>
  )
}