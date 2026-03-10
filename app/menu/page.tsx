export const dynamic = 'force-dynamic';

import HeroImage from "@/components/HeroImage"
import MenuTabs from "@/components/MenuTabs"
import MenuCategory from "@/components/MenuCategory"
import CTABanner from "@/components/CTABanner"

export default function MenuPage() {
  return (
    <main>
      <HeroImage
        imageUrl="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg"
        headline="The Bella Vista Menu"
        subheadline="Seasonal Italian cooking with house-made pasta and wood-fired mains."
        primaryCta={{ label: "Reserve a Table", href: "/reservations" }}
        secondaryCta={{ label: "Call for Tonight", href: "tel:+14155550138" }}
      />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <MenuTabs />
          <div className="mt-10 space-y-8">
            <MenuCategory />
            <MenuCategory />
            <MenuCategory />
          </div>
        </div>
      </section>
      <section className="bg-[#F3EAD0] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <CTABanner
            headline="Planning a celebration?"
            description="Ask about family-style menus and wine pairings for birthdays and team dinners."
            ctaLabel="Inquire About Private Dining"
            ctaHref="/contact?topic=Private%20Dining"
            secondaryCtaLabel="Reserve"
            secondaryCtaHref="/reservations"
          />
        </div>
      </section>
    </main>
  )
}
