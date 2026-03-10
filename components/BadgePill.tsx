"use client";

import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface BadgePillProps {
  text?: string
  className?: string
}

export default function BadgePill({ text = 'Wood-fired', className = '' }: Partial<BadgePillProps>) {
  return <Badge className={cn('rounded-full bg-[#FEFAE0] px-3 py-1 text-xs font-medium text-[#606C38]', className)}>{text}</Badge>
}
