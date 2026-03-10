"use client";

import Link from 'next/link'
import { ExternalLink, MapPin } from 'lucide-react'
import { cn } from '@/lib/utils'

interface MapEmbedProps {
  address?: string
  mapSrc?: string
  directionsUrl?: string
  className?: string
}

export default function MapEmbed({
  address = '214 Via Roma, Downtown, San Diego, CA 92101',
  mapSrc = 'https://www.google.com/maps?q=San%20Diego%20CA&output=embed',
  directionsUrl = 'https://www.google.com/maps/search/?api=1&query=214+Via+Roma+San+Diego+CA+92101',
  className = '',
}: Partial<MapEmbedProps>) {
  return (
    <div className={cn('overflow-hidden rounded-xl border bg-card shadow-md', className)} id="contact">
      <iframe title="Bella Vista map" src={mapSrc} className="h-80 w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      <div className="flex flex-col gap-3 p-5 md:flex-row md:items-center md:justify-between">
        <p className="flex items-start gap-2 text-sm text-muted-foreground">
          <MapPin className="mt-0.5 h-4 w-4 text-[#606C38]" />
          {address}
        </p>
        <Link href={directionsUrl} className="inline-flex items-center gap-2 text-sm font-medium text-[#722F37] hover:underline">
          Get Directions <ExternalLink className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
