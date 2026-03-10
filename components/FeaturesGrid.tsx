"use client";

import { Card, CardContent } from '@/components/ui/card';
import { ChefHat, Leaf, Fish, Beef, Soup, Wine, UtensilsCrossed, Users, MapPin } from 'lucide-react';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesGridProps {
  badge?: string;
  headline: string;
  subheadline?: string;
  features: Feature[];
}

const iconMap: Record<string, React.ElementType> = { Users, MapPin, 
  ChefHat,
  Leaf,
  Fish,
  Beef,
  Soup,
  Wine,
  UtensilsCrossed,
};

export default function FeaturesGrid({
  badge = 'Signature Menu',
  headline = 'Curated Dishes for Every Palate',
  subheadline = 'From garden-fresh starters to indulgent mains, every plate is prepared with seasonal intention.',
  features = [
    { icon: 'Leaf', title: 'Roasted Beet Carpaccio', description: 'Creamy goat cheese, toasted pistachio, and citrus vinaigrette.' },
    { icon: 'Fish', title: 'Pan-Seared Sea Bass', description: 'Lemon beurre blanc, charred asparagus, and saffron rice.' },
    { icon: 'Beef', title: 'Burgundy Braised Short Rib', description: 'Slow-cooked for 12 hours with truffle mash and glazed carrots.' },
  ],
}: Partial<FeaturesGridProps>) {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          {badge && <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">{badge}</span>}
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl" style={{ fontFamily: 'Playfair Display, serif' }}>{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map(function (feature, index) {
            const Icon = iconMap[feature.icon] || UtensilsCrossed;
            return (
              <Card key={index} className="border-0 bg-background shadow-md hover:shadow-lg transition-shadow rounded-xl">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
