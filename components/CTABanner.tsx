"use client";

import { Button } from '@/components/ui/button';

interface CTABannerProps {
  headline: string;
  description?: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export default function CTABanner({
  headline = 'Reserve Your Table Tonight',
  description = 'Join us for an intimate dining experience with seasonal chef specials and curated wines.',
  ctaLabel = 'Book Reservation',
  ctaHref = '#reservation',
  secondaryCtaLabel = 'Call Us',
  secondaryCtaHref = 'tel:+11234567890',
}: Partial<CTABannerProps>) {
  return (
    <section className="bg-primary py-16 md:py-20">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl" style={{ fontFamily: 'Playfair Display, serif' }}>{headline}</h2>
        {description && <p className="mt-4 text-lg text-primary-foreground/80">{description}</p>}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" variant="secondary" className="px-8" asChild>
            <a href={ctaHref}>{ctaLabel}</a>
          </Button>
          {secondaryCtaLabel && secondaryCtaHref && (
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 px-8" asChild>
              <a href={secondaryCtaHref}>{secondaryCtaLabel}</a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
