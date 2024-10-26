'use client'

import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const templates = [
  {
    id: 'template1',
    name: 'シンプル',
    preview: '🌟 シンプルなデザイン',
  },
  {
    id: 'template2',
    name: '春のお祝い',
    preview: '🌸 桜をモチーフにした春らしいデザイン',
  },
  {
    id: 'template3',
    name: '感謝状',
    preview: '📜 フォーマルな感謝状デザイン',
  },
]

interface TemplateSelectorProps {
  selectedTemplate: string
  onSelect: (templateId: string) => void
}

export function MessageTemplateSelector({ selectedTemplate, onSelect }: TemplateSelectorProps) {
  return (
    <div className="space-y-2">
      <Label>テンプレート選択</Label>
      <RadioGroup
        value={selectedTemplate}
        onValueChange={onSelect}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {templates.map((template) => (
          <div key={template.id}>
            <RadioGroupItem
              value={template.id}
              id={template.id}
              className="peer sr-only"
            />
            <Label
              htmlFor={template.id}
              className="flex flex-col items-center justify-center rounded-lg border-2 border-muted p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <span className="text-2xl mb-2">{template.preview.split(' ')[0]}</span>
              <span className="font-semibold">{template.name}</span>
              <span className="text-sm text-muted-foreground">{template.preview.split(' ').slice(1).join(' ')}</span>
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  )
}