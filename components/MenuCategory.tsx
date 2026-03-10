"use client";

import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface MenuItem {
  name: string
  description: string
  price: string
  dietary: string[]
}

interface MenuCategoryProps {
  id?: string
  title?: string
  description?: string
  items?: MenuItem[]
  className?: string
}

export default function MenuCategory({
  id = 'pasta',
  title = 'Pasta Fresca',
  description = 'Our handmade pasta is prepared daily with imported Italian flour and farm eggs.',
  items = [
    {
      name: 'Tagliatelle al Ragù',
      description: 'Slow-braised beef and pork ragù, parmigiano-reggiano.',
      price: '$26',
      dietary: [],
    },
    {
      name: 'Lobster Ravioli',
      description: 'House ravioli, saffron cream, lemon zest, chives.',
      price: '$34',
      dietary: ['Chef Special'],
    },
    {
      name: 'Cacio e Pepe',
      description: 'Tonnarelli pasta, pecorino romano, cracked black pepper.',
      price: '$22',
      dietary: ['Vegetarian'],
    },
  ],
  className = '',
}: Partial<MenuCategoryProps>) {
  return (
    <section id={id} className={cn('rounded-xl bg-[color:var(--card)] p-6 shadow-sm md:p-8', className)}>
      <h3 className="font-serif text-2xl font-semibold text-[#722F37] md:text-3xl">{title}</h3>
      <p className="mt-3 max-w-3xl text-sm text-muted-foreground md:text-base">{description}</p>
      <Separator className="my-6" />
      <div className="space-y-6">
        {items.map((item) => (
          <div key={item.name} className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
            <div className="max-w-2xl">
              <h4 className="font-medium text-foreground">{item.name}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {item.dietary.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-[#FEFAE0] text-[#606C38]">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            <p className="font-semibold text-[#606C38]">{item.price}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
        <span className="font-medium">Legend:</span>
        <Badge variant="secondary" className="bg-[#FEFAE0] text-[#606C38]">
          Vegetarian
        </Badge>
        <Badge variant="secondary" className="bg-[#FEFAE0] text-[#606C38]">
          Gluten-Free Option
        </Badge>
        <Badge variant="secondary" className="bg-[#FEFAE0] text-[#606C38]">
          Chef Special
        </Badge>
      </div>
    </section>
  )
}
