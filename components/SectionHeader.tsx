"use client";

import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  headline?: string
  subheadline?: string
  align?: 'left' | 'center'
  action?: React.ReactNode
  className?: string
}

export default function SectionHeader({
  headline = 'Section Title',
  subheadline = '',
  align = 'left',
  action = null,
  className = '',
}: Partial<SectionHeaderProps>) {
  return (
    <div className={cn('mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between', className)}>
      <div className={cn(align === 'center' ? 'text-center md:text-center' : 'text-left')}>
        <h2 className="font-serif text-3xl font-semibold text-[#722F37] md:text-4xl">{headline}</h2>
        {subheadline ? <p className="mt-3 max-w-2xl text-muted-foreground">{subheadline}</p> : null}
      </div>
      {action ? <div>{action}</div> : null}
    </div>
  )
}
