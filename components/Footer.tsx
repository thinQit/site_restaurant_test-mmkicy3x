'use client'

import Link from 'next/link'
import { Instagram, Facebook, MapPin, Clock, Phone } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface FooterProps {
  name?: string
  address?: string
  phone?: string
  hours?: string[]
  className?: string
}

export default function Footer({
  name = 'Bella Vista Italian Kitchen',
  address = '214 Via Roma, Downtown, San Diego, CA 92101',
  phone = '(619) 555-0142',
  hours = ['Mon–Thu: 4:00 PM – 10:00 PM', 'Fri–Sat: 12:00 PM – 11:00 PM', 'Sun: 12:00 PM – 9:00 PM'],
  className = '',
}: Partial<FooterProps>) {
  return (
    <footer className={cn('bg-[#722F37] text-[#FEFAE0]', className)} id="footer">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-4 md:px-6">
        <div>
          <h3 className="font-serif text-2xl font-semibold">{name}</h3>
          <p className="mt-4 text-sm/6 text-[#f5e8c9]">
            Rustic elegance, handmade pasta, and wood-fired classics inspired by the Italian coast.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-lg font-semibold">Visit Us</h4>
          <div className="mt-4 space-y-3 text-sm text-[#f5e8c9]">
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              {address}
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              {phone}
            </p>
            <div className="flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0" />
              <ul>
                {hours.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-lg font-semibold">Newsletter</h4>
          <p className="mt-4 text-sm text-[#f5e8c9]">Get seasonal menu updates, wine dinners, and chef events.</p>
          <form className="mt-4 flex gap-2">
            <Input
              type="email"
              placeholder="Your email"
              className="border-[#DDA15E]/40 bg-[#8a3f49] text-[#FEFAE0] placeholder:text-[#f5e8c9]"
            />
            <Button type="submit" className="bg-[#DDA15E] text-[#3d2b1f] hover:bg-[#c98d4f]">
              Join
            </Button>
          </form>
        </div>

        <div>
          <h4 className="font-serif text-lg font-semibold">Follow</h4>
          <div className="mt-4 flex items-center gap-3">
            <Link href="#" aria-label="Instagram" className="rounded-full bg-[#8a3f49] p-2 hover:bg-[#9a4b56]">
              <Instagram className="h-4 w-4" />
            </Link>
            <Link href="#" aria-label="Facebook" className="rounded-full bg-[#8a3f49] p-2 hover:bg-[#9a4b56]">
              <Facebook className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-6 space-y-2 text-sm text-[#f5e8c9]">
            <Link href="#" className="block hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="block hover:text-white">
              Terms of Service
            </Link>
            <Link href="#" className="block hover:text-white">
              Accessibility
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-[#DDA15E]/30 px-4 py-4 text-center text-xs text-[#f5e8c9] md:px-6">
        © {new Date().getFullYear()} Bella Vista Italian Kitchen. All rights reserved.
      </div>
    </footer>
  )
}
