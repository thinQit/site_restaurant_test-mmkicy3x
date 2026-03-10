export const dynamic = 'force-dynamic';

import HeroImage from "@/components/HeroImage"
import FeaturesGrid from "@/components/FeaturesGrid"
import GalleryMasonry from "@/components/GalleryMasonry"
import CTABanner from "@/components/CTABanner"

export default function AboutPage() {
  return (
    <main>
      <HeroImage
        imageUrl="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg"
        headline="Italian hospitality, served warm"
        subheadline="Bella Vista is a modern Italian kitchen inspired by Emilia-Romagna traditions and California seasonality."
        primaryCta={{ label: "Reserve a Table", href: "/reservations" }}
        secondaryCta={{ label: "View Menu", href: "/menu" }}
      />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <FeaturesGrid
            headline="Our story"
            subheadline="From Bologna to North Beach—through flour, fire, and family recipes."
            features={[
              {
                icon: "ChefHat",
                title: "Craft",
                description: "Fresh dough, classic techniques, and seasonal ingredients.",
              },
              {
                icon: "HeartHandshake",
                title: "Hospitality",
                description: "Welcoming, elegant, and never rushed.",
              },
              {
                icon: "MapPin",
                title: "Community",
                description: "Proudly serving North Beach locals and visitors.",
              },
            ]}
          />
        </div>
      </section>
      <section className="bg-[#F3EAD0] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <GalleryMasonry
            headline="Meet the team"
            subheadline="A small crew with big heart—focused on craft and consistency."
            images={[
              {
                url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg",
                alt: "Lucia Bianchi portrait",
              },
              {
                url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg",
                alt: "Marco De Santis portrait",
              },
              {
                url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg",
                alt: "Elena Rossi portrait",
              },
            ]}
          />
        </div>
      </section>
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <CTABanner
            headline="Come hungry. Leave happy."
            description="Reserve your table and let us take care of the rest."
            ctaLabel="Reserve a Table"
            ctaHref="/reservations"
            secondaryCtaLabel="View Menu"
            secondaryCtaHref="/menu"
          />
        </div>
      </section>
    </main>
  )
}
