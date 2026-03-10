export const dynamic = 'force-dynamic';

import HeroImage from "@/components/HeroImage"
import GalleryGrid from "@/components/GalleryGrid"
import CTASection from "@/components/CTASection"

export default function GalleryPage() {
  return (
    <main>
      <HeroImage
        imageUrl="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg"
        headline="A look inside Bella Vista"
        subheadline="From flour-dusted pasta boards to candlelit tables—here’s the atmosphere you’ll step into."
        primaryCta={{ label: "Reserve a Table", href: "/reservations" }}
        secondaryCta={{ label: "View Menu", href: "/menu" }}
      />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <GalleryGrid />
        </div>
      </section>
      <section className="bg-[#F3EAD0] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <CTASection />
        </div>
      </section>
    </main>
  )
}
