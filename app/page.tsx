export const dynamic = 'force-dynamic';

import HeroImage from "@/components/HeroImage"
import SectionHeader from "@/components/SectionHeader"
import FeaturedItemCard from "@/components/FeaturedItemCard"
import CTABanner from "@/components/CTABanner"
import FeaturesGrid from "@/components/FeaturesGrid"
import GalleryMasonry from "@/components/GalleryMasonry"
import TestimonialsGrid from "@/components/TestimonialsGrid"
import ContactForm from "@/components/ContactForm"
import MapEmbed from "@/components/MapEmbed"

export default function HomePage() {
  return (
    <main>
      <HeroImage
        imageUrl="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg"
        headline="Modern Italian comfort—handmade daily in the heart of North Beach"
        subheadline="Bella Vista Italian Kitchen serves seasonal antipasti, house-made pasta, and wood-fired mains with a warm, candlelit vibe."
        primaryCta={{ label: "Reserve a Table", href: "/reservations" }}
        secondaryCta={{ label: "View Menu", href: "/menu" }}
        overlayOpacity="opacity-45"
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeader />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <FeaturedItemCard />
            <FeaturedItemCard />
            <FeaturedItemCard />
            <FeaturedItemCard />
          </div>
        </div>
      </section>

      <section className="bg-[#F3EAD0] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <CTABanner
            headline="Reserve your table in under a minute"
            description="Celebrating something special? Add a note and we’ll take care of the details."
            ctaLabel="Book a Reservation"
            ctaHref="/reservations"
            secondaryCtaLabel="Call (415) 555-0138"
            secondaryCtaHref="tel:+14155550138"
          />
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <FeaturesGrid
            badge="Our Values"
            headline="A North Beach kitchen with roots in Emilia-Romagna"
            subheadline="Chef Lucia Bianchi brings the pasta traditions of Bologna to San Francisco."
            features={[
              {
                icon: "UtensilsCrossed",
                title: "Handmade daily",
                description: "Fresh pasta and sauces prepared in-house, every service.",
              },
              {
                icon: "Leaf",
                title: "Seasonal sourcing",
                description: "Local farms, peak produce, and rotating specials.",
              },
              {
                icon: "Wine",
                title: "Italian wine focus",
                description: "Curated list with by-the-glass favorites and cellar bottles.",
              },
            ]}
          />
        </div>
      </section>

      <section className="bg-[#F3EAD0] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <GalleryMasonry
            headline="Food photography that tastes like the real thing"
            subheadline="A peek at our dining room, pasta station, and wood-fired plates."
            images={[
              {
                url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg",
                alt: "Pasta being rolled on a wooden board with flour dust",
              },
              {
                url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg",
                alt: "Antipasti spread with olives, prosciutto, and focaccia",
              },
              {
                url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg",
                alt: "Dining room with warm lighting and candles",
              },
              {
                url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg",
                alt: "Wood-fired oven with flames and pizza peel",
              },
              {
                url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg",
                alt: "Cocktail and aperitivo snacks on a marble bar",
              },
              {
                url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg",
                alt: "Dessert plate with tiramisu and espresso",
              },
            ]}
          />
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <TestimonialsGrid
            headline="Loved by locals (and visitors who become regulars)"
            subheadline="A few notes from guests who came for pasta and stayed for the vibe."
            testimonials={[
              {
                quote:
                  "The tagliatelle al ragù is the best I’ve had outside of Italy. Cozy room, attentive service, and a wine list that’s actually fun to explore.",
                name: "Maya R.",
                title: "Google Review",
                rating: 5,
              },
              {
                quote:
                  "Perfect date-night spot. We started with burrata, split the branzino, and ended with tiramisu—every bite felt thoughtful and balanced.",
                name: "Daniel K.",
                title: "Yelp Review",
                rating: 5,
              },
              {
                quote:
                  "Warm, elegant, and unpretentious. They accommodated a gluten-free request and still made the meal feel special.",
                name: "Sofia L.",
                title: "OpenTable Review",
                rating: 5,
              },
            ]}
          />
        </div>
      </section>

      <section className="bg-[#F3EAD0] py-20 md:py-28">
        <div className="mx-auto max-w-7xl space-y-10 px-4 md:px-6">
          <MapEmbed />
          <ContactForm
            headline="Find us in North Beach"
            subheadline="Walk-ins welcome when available. Reservations recommended on weekends."
            contactInfo={[
              { icon: "MapPin", label: "Address", value: "728 Columbus Ave, San Francisco, CA 94133" },
              { icon: "Phone", label: "Phone", value: "(415) 555-0138" },
              { icon: "Mail", label: "Email", value: "ciao@bellavistakitchen.com" },
            ]}
          />
        </div>
      </section>
    </main>
  )
}
