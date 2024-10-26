import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

const plans = [
  {
    name: 'ベーシック',
    price: '500',
    features: ['月10件のメッセージ送信', '基本テンプレート', '1GBのストレージ'],
  },
  {
    name: 'スタンダード',
    price: '1,000',
    features: ['月50件のメッセージ送信', 'プレミアムテンプレート', '5GBのストレージ', '優先サポート'],
  },
  {
    name: 'プレミアム',
    price: '2,000',
    features: ['無制限のメッセージ送信', 'カスタムテンプレート作成', '20GBのストレージ', '24/7サポート', 'APIアクセス'],
  },
]

export default function SubscriptionPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">サブスクリプションプラン</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.name}>
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>¥{plan.price} / 月</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href={`/subscribe/${plan.name.toLowerCase()}`}>
                    選択する
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}