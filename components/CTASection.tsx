"use client";

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface CTASectionProps {
  title?: string
  description?: string
  imageSrc?: string
  primaryText?: string
  primaryHref?: string
  secondaryText?: string
  secondaryHref?: string
  className?: string
}

export default function CTASection({
  title = 'Plan Your Evening at Bella Vista',
  description = 'Reserve your table for handcrafted Italian cuisine, curated wines, and heartfelt hospitality.',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg',
  primaryText = 'Reserve Now',
  primaryHref = '#reservations',
  secondaryText = 'Call Us',
  secondaryHref = 'tel:+16195550142',
  className = '',
}: Partial<CTASectionProps>) {
  return (
    <section className={cn('relative overflow-hidden rounded-2xl', className)}>
      <Image src={imageSrc} alt="Bella Vista CTA" fill className="object-cover" />
      <div className="absolute inset-0 bg-[#722F37]/70" />
      <div className="relative mx-auto max-w-4xl px-6 py-16 text-center text-[#FEFAE0] md:py-20">
        <h3 className="font-serif text-3xl font-semibold md:text-4xl">{title}</h3>
        <p className="mx-auto mt-4 max-w-2xl text-[#f5e8c9]">{description}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild className="bg-[#DDA15E] text-[#3d2b1f] hover:bg-[#c98d4f]">
            <Link href={primaryHref}>{primaryText}</Link>
          </Button>
          <Button asChild variant="outline" className="border-[#FEFAE0] bg-transparent text-[#FEFAE0] hover:bg-white/10">
            <Link href={secondaryHref}>{secondaryText}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
