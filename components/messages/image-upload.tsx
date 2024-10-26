'use client'

import { useState } from 'react'
import { Upload } from 'lucide-react'
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export function ImageUpload() {
  const [preview, setPreview] = useState<string | null>(null)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="space-y-2">
      <Label>画像添付</Label>
      <div className="flex items-center space-x-4">
        <Button
          type="button"
          variant="outline"
          onClick={() => document.getElementById('image-upload')?.click()}
          className="flex items-center space-x-2"
        >
          <Upload size={16} />
          <span>画像をアップロード</span>
        </Button>
        <input
          type="file"
          id="image-upload"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </div>
      {preview && (
        <div className="mt-4">
          <img
            src={preview}
            alt="Preview"
            className="max-w-xs rounded-lg shadow-md"
          />
        </div>
      )}
    </div>
  )
}