'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface LightboxImage {
  src: string
  alt: string
  caption: string
}

interface LightboxModalProps {
  images?: LightboxImage[]
  startIndex?: number
  open?: boolean
  onClose?: () => void
  className?: string
}

export default function LightboxModal({
  images = [],
  startIndex = 0,
  open = false,
  onClose = () => undefined,
  className = '',
}: Partial<LightboxModalProps>) {
  const [current, setCurrent] = useState(startIndex)

  useEffect(() => {
    setCurrent(startIndex)
  }, [startIndex])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (!open) return
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') setCurrent((prev) => (prev + 1) % images.length)
      if (e.key === 'ArrowLeft') setCurrent((prev) => (prev - 1 + images.length) % images.length)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, images.length, onClose])

  if (!open || images.length === 0) return null
  const image = images[current]

  return (
    <div className={cn('fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4', className)} role="dialog" aria-modal="true">
      <button type="button" className="absolute right-4 top-4 rounded-full bg-white/15 p-2 text-white" onClick={onClose}>
        <X className="h-5 w-5" />
      </button>
      <button
        type="button"
        className="absolute left-4 rounded-full bg-white/15 p-2 text-white"
        onClick={() => setCurrent((prev) => (prev - 1 + images.length) % images.length)}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <div className="max-w-4xl">
        <Image src={image.src} alt={image.alt} width={1200} height={800} className="max-h-[75vh] w-auto rounded-lg object-contain" />
        <p className="mt-3 text-center text-sm text-white/90">{image.caption}</p>
      </div>
      <button
        type="button"
        className="absolute right-4 rounded-full bg-white/15 p-2 text-white"
        onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  )
}
