"use client";

import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface FeaturedItemCardProps {
  name?: string
  description?: string
  price?: string
  imageSrc?: string
  dietaryTags?: string[]
  className?: string
}

export default function FeaturedItemCard({
  name = 'Truffle Mushroom Risotto',
  description = 'Arborio rice, porcini mushrooms, truffle butter, aged parmesan, and herbs.',
  price = '$28',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg',
  dietaryTags = ['Vegetarian', 'Gluten-Free Option'],
  className = '',
}: Partial<FeaturedItemCardProps>) {
  return (
    <Card className={cn('overflow-hidden rounded-xl border bg-card shadow-md transition-shadow hover:shadow-lg', className)}>
      <div className="relative h-56 w-full">
        <Image src={imageSrc} alt={name} fill className="object-cover" />
      </div>
      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-serif text-xl font-semibold text-[#722F37]">{name}</h3>
          <span className="text-base font-semibold text-[#606C38]">{price}</span>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2">
          {dietaryTags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-[#FEFAE0] text-[#606C38]">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  )
}
