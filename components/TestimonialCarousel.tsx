'use client'

import { useEffect, useState } from 'react'
import { Star } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface Testimonial {
  quote: string
  source: string
  rating: number
}

interface TestimonialCarouselProps {
  testimonials?: Testimonial[]
  intervalMs?: number
  className?: string
}

export default function TestimonialCarousel({
  testimonials = [
    {
      quote: 'The truffle pasta and wine pairing were exceptional. Elegant service and beautiful atmosphere.',
      source: 'Google Reviews',
      rating: 5,
    },
    {
      quote: 'A true neighborhood gem. Fresh ingredients, warm hospitality, and unforgettable tiramisu.',
      source: 'Yelp',
      rating: 5,
    },
    {
      quote: 'Perfect for date night. Cozy ambiance with refined Italian flavors done right.',
      source: 'OpenTable',
      rating: 5,
    },
  ],
  intervalMs = 4500,
  className = '',
}: Partial<TestimonialCarouselProps>) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, intervalMs)
    return () => clearInterval(timer)
  }, [intervalMs, testimonials.length])

  const item = testimonials[index]

  return (
    <Card className={cn('rounded-xl border bg-card p-8 shadow-md transition-all duration-500', className)}>
      <div className="mb-4 flex items-center gap-1 text-[#DDA15E]">
        {Array.from({ length: item.rating }).map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-current" />
        ))}
      </div>
      <blockquote className="font-serif text-2xl text-[#722F37]">“{item.quote}”</blockquote>
      <p className="mt-4 text-sm font-medium text-muted-foreground">— {item.source}</p>
      <div className="mt-6 flex gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={'Go to testimonial ' + (i + 1)}
            onClick={() => setIndex(i)}
            className={cn('h-2.5 w-2.5 rounded-full', i === index ? 'bg-[#722F37]' : 'bg-[#DDA15E]/50')}
          />
        ))}
      </div>
    </Card>
  )
}
