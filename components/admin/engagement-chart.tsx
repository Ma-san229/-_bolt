'use client'

import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { date: '2024-01', messages: 420, points: 2100, engagement: 78 },
  { date: '2024-02', messages: 480, points: 2400, engagement: 82 },
  { date: '2024-03', messages: 520, points: 2600, engagement: 85 },
]

export function EngagementChart() {
  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="messages"
            stroke="hsl(var(--chart-1))"
            name="メッセージ数"
          />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="points"
            stroke="hsl(var(--chart-2))"
            name="ポイント"
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="engagement"
            stroke="hsl(var(--chart-3))"
            name="エンゲージメント率"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}