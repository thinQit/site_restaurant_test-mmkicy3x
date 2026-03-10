'use client'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

interface MenuTabsProps {
  categories?: { id: string; label: string }[]
  className?: string
}

export default function MenuTabs({
  categories = [
    { id: 'antipasti', label: 'Antipasti' },
    { id: 'pasta', label: 'Pasta' },
    { id: 'secondi', label: 'Secondi' },
    { id: 'dolci', label: 'Dolci' },
    { id: 'vino', label: 'Wine' },
  ],
  className = '',
}: Partial<MenuTabsProps>) {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className={cn('flex flex-wrap gap-3', className)}>
      {categories.map((category) => (
        <Button
          key={category.id}
          variant="outline"
          className="rounded-full border-[#DDA15E] bg-white text-[#722F37] hover:bg-[#FEFAE0]"
          onClick={() => scrollToSection(category.id)}
        >
          {category.label}
        </Button>
      ))}
    </div>
  )
}
