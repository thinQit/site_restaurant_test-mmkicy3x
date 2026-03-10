'use client'

import Image from 'next/image'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import LightboxModal from '@/components/LightboxModal'

interface GalleryImage {
  src: string
  alt: string
  caption: string
}

interface GalleryGridProps {
  images?: GalleryImage[]
  masonry?: boolean
  className?: string
}

export default function GalleryGrid({
  images = [
    { src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg', alt: 'Pasta plating', caption: 'Handmade pappardelle with slow-cooked ragù' },
    { src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg', alt: 'Dining room', caption: 'Warm dining room with candlelit ambiance' },
    { src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg', alt: 'Chef preparation', caption: 'Chef preparing fresh seasonal ingredients' },
    { src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg', alt: 'Team portrait', caption: 'Our Bella Vista kitchen and service team' },
  ],
  masonry = false,
  className = '',
}: Partial<GalleryGridProps>) {
  const [index, setIndex] = useState(-1)

  return (
    <section id="gallery" className={cn('space-y-6', className)}>
      <div className={cn(masonry ? 'columns-1 gap-4 md:columns-2 lg:columns-3' : 'grid gap-4 md:grid-cols-2 lg:grid-cols-4')}>
        {images.map((img, i) => (
          <button
            type="button"
            key={img.src + i}
            className="group relative mb-4 w-full overflow-hidden rounded-xl"
            onClick={() => setIndex(i)}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={600}
              height={420}
              className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-3 text-left text-sm text-white">
              {img.caption}
            </div>
          </button>
        ))}
      </div>
      <LightboxModal images={images} startIndex={index} open={index >= 0} onClose={() => setIndex(-1)} />
    </section>
  )
}
