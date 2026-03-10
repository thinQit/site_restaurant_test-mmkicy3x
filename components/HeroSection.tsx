"use client";

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface HeroSectionProps {
  title?: string
  subtitle?: string
  imageSrc?: string
  className?: string
}

export default function HeroSection({
  title = 'Authentic Italian Dining, Crafted with Heart',
  subtitle = 'At Bella Vista Italian Kitchen, we serve handmade pasta, wood-fired specialties, and curated wines in a warm, elegant setting.',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg',
  className = '',
}: Partial<HeroSectionProps>) {
  return (
    <section id="home" className={cn('relative min-h-[78vh] overflow-hidden', className)}>
      <Image src={imageSrc} alt="Bella Vista hero" fill priority className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/45 to-black/35" />
      <div className="relative mx-auto flex min-h-[78vh] max-w-7xl items-center px-4 py-20 md:px-6">
        <div className="max-w-2xl text-[#FEFAE0]">
          <Badge className="mb-5 bg-[#DDA15E] text-[#3d2b1f]">Modern Italian • Downtown</Badge>
          <h1 className="font-serif text-4xl font-semibold leading-tight md:text-6xl">{title}</h1>
          <p className="mt-5 text-base text-[#f5e8c9] md:text-lg">{subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="rounded-lg bg-[#722F37] px-6 text-white hover:bg-[#5f272e]">
              <Link href="#reservations">Reserve a Table</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-lg border-[#DDA15E] bg-transparent text-[#FEFAE0] hover:bg-[#DDA15E]/20"
            >
              <Link href="#menu">View Menu</Link>
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full bg-white/10 px-4 py-2">Wood-fired oven</span>
            <span className="rounded-full bg-white/10 px-4 py-2">Fresh handmade pasta</span>
            <span className="rounded-full bg-white/10 px-4 py-2">Seasonal local produce</span>
          </div>
        </div>
      </div>
    </section>
  )
}
