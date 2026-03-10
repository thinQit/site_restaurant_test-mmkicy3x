'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface NavItem {
  label: string;
  href: string;
}

interface NavbarStickyProps {
  logo: string;
  navItems: NavItem[];
  ctaLabel?: string;
  ctaHref?: string;
}

export default function NavbarSticky({
  logo = 'Saffron Table',
  navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Menu', href: '#menu' },
    { label: 'About', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ],
  ctaLabel = 'Book Now',
  ctaHref = '#reservation',
}: Partial<NavbarStickyProps>) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[color:var(--border)] bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold text-foreground" style={{ fontFamily: 'Playfair Display, serif' }}>
          {logo}
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map(function (item) {
            return (
              <Link key={item.href} href={item.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                {item.label}
              </Link>
            );
          })}
          {ctaLabel && ctaHref && (
            <Button asChild>
              <a href={ctaHref}>{ctaLabel}</a>
            </Button>
          )}
        </nav>
        <button className="md:hidden p-2 text-foreground" onClick={function () { setMobileOpen(!mobileOpen); }} aria-label="Toggle menu">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {mobileOpen && (
        <div className="border-t border-[color:var(--border)] bg-background md:hidden">
          <nav className="container mx-auto flex flex-col gap-4 px-4 py-4">
            {navItems.map(function (item) {
              return (
                <Link key={item.href} href={item.href} className="text-sm font-medium text-muted-foreground" onClick={function () { setMobileOpen(false); }}>
                  {item.label}
                </Link>
              );
            })}
            {ctaLabel && ctaHref && (
              <Button className="w-full" asChild>
                <a href={ctaHref}>{ctaLabel}</a>
              </Button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
