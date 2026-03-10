"use client";

import { Car, Clock3, ShieldCheck, Sparkles, Utensils, LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface InfoItem {
  icon: string
  title: string
  description: string
}

interface InfoListProps {
  items?: InfoItem[]
  className?: string
}

const iconMap: Record<string, LucideIcon> = {
  Car,
  Clock3,
  ShieldCheck,
  Sparkles,
  Utensils,
}

export default function InfoList({
  items = [
    { icon: 'Car', title: 'Parking', description: 'Valet available nightly and public garage across the street.' },
    { icon: 'Clock3', title: 'Dining Duration', description: 'Average table time is 90 minutes for a relaxed experience.' },
    { icon: 'ShieldCheck', title: 'Allergy Support', description: 'Please share restrictions; our team accommodates with care.' },
  ],
  className = '',
}: Partial<InfoListProps>) {
  return (
    <div className={cn('grid gap-5 md:grid-cols-3', className)}>
      {items.map((item) => {
        const Icon = iconMap[item.icon] || Sparkles
        return (
          <div key={item.title} className="rounded-xl border bg-card p-5 shadow-sm">
            <Icon className="h-5 w-5 text-[#606C38]" />
            <h4 className="mt-3 font-serif text-xl text-[#722F37]">{item.title}</h4>
            <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
          </div>
        )
      })}
    </div>
  )
}
