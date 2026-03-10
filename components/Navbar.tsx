'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface NavLink {
  label: string
  href: string
}

interface NavbarProps {
  logoText?: string
  links?: NavLink[]
  reserveHref?: string
  className?: string
}

export default function Navbar({
  logoText = 'Bella Vista Italian Kitchen',
  links = [
    { label: 'Home', href: '#home' },
    { label: 'Menu', href: '#menu' },
    { label: 'About', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reservations', href: '#reservations' },
    { label: 'Contact', href: '#contact' },
  ],
  reserveHref = '#reservations',
  className = '',
}: Partial<NavbarProps>) {
  const [open, setOpen] = useState(false)

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b border-[color:var(--border)] bg-[color:var(--background)]/90 backdrop-blur',
        className
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="#home" className="font-serif text-xl font-semibold text-[#722F37] md:text-2xl">
          {logoText}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground transition-colors hover:text-[#722F37]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild className="rounded-lg bg-[#722F37] px-6 py-3 text-white hover:bg-[#5f272e]">
            <Link href={reserveHref}>Reserve</Link>
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle mobile menu"
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[color:var(--border)] bg-[color:var(--background)] md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-[#FEFAE0] hover:text-[#722F37]"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-3 w-full rounded-lg bg-[#722F37] text-white hover:bg-[#5f272e]">
              <Link href={reserveHref} onClick={() => setOpen(false)}>
                Reserve
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
