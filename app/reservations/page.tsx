export const dynamic = 'force-dynamic';

import HeroImage from "@/components/HeroImage"
import ReservationForm from "@/components/ReservationForm"
import FeaturesGrid from "@/components/FeaturesGrid"

export default function ReservationsPage() {
  return (
    <main>
      <HeroImage
        imageUrl="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg"
        headline="Reservations at Bella Vista"
        subheadline="Book your table for dinner, date night, or a special occasion."
        primaryCta={{ label: "Book Now", href: "#reservation-form" }}
        secondaryCta={{ label: "Call (415) 555-0138", href: "tel:+14155550138" }}
      />
      <section id="reservation-form" className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <ReservationForm />
        </div>
      </section>
      <section className="bg-[#F3EAD0] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <FeaturesGrid
            headline="Reservation details & policies"
            subheadline="A few helpful notes so your evening runs smoothly."
            features={[
              {
                icon: "Clock3",
                title: "Late arrivals",
                description: "We hold reservations for 15 minutes.",
              },
              {
                icon: "Salad",
                title: "Dietary needs",
                description: "We accommodate gluten-free and vegetarian requests.",
              },
              {
                icon: "Users",
                title: "Large parties",
                description: "For 8+ guests, we may recommend family-style service.",
              },
            ]}
          />
        </div>
      </section>
    </main>
  )
}
