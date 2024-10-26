'use client'

import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const stamps = [
  { id: 'stamp1', emoji: '👍', name: 'いいね！' },
  { id: 'stamp2', emoji: '🌟', name: 'すばらしい' },
  { id: 'stamp3', emoji: '🎉', name: 'おめでとう' },
  { id: 'stamp4', emoji: '🙏', name: 'ありがとう' },
  { id: 'stamp5', emoji: '💪', name: 'がんばって' },
  { id: 'stamp6', emoji: '💝', name: '感謝' },
]

interface StampSelectorProps {
  selectedStamp: string
  onSelect: (stampId: string) => void
}

export function StampSelector({ selectedStamp, onSelect }: StampSelectorProps) {
  return (
    <div className="space-y-2">
      <Label>スタンプ選択</Label>
      <RadioGroup
        value={selectedStamp}
        onValueChange={onSelect}
        className="grid grid-cols-3 md:grid-cols-6 gap-4"
      >
        {stamps.map((stamp) => (
          <div key={stamp.id}>
            <RadioGroupItem
              value={stamp.id}
              id={stamp.id}
              className="peer sr-only"
            />
            <Label
              htmlFor={stamp.id}
              className="flex flex-col items-center justify-center rounded-lg border-2 border-muted p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <span className="text-2xl mb-1">{stamp.emoji}</span>
              <span className="text-sm">{stamp.name}</span>
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  )
}