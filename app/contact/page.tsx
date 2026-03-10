export const dynamic = 'force-dynamic';

import HeroImage from "@/components/HeroImage"
import ContactForm from "@/components/ContactForm"
import FeaturesGrid from "@/components/FeaturesGrid"
import CTABanner from "@/components/CTABanner"

export default function ContactPage() {
  return (
    <main>
      <HeroImage
        imageUrl="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg"
        headline="Contact Bella Vista"
        subheadline="Questions, private dining, catering, or press—send a note and we’ll get back to you shortly."
        primaryCta={{ label: "Send a Message", href: "#contact-form" }}
        secondaryCta={{ label: "Call (415) 555-0138", href: "tel:+14155550138" }}
      />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <FeaturesGrid
            headline="Hours & location"
            subheadline="We’re located on Columbus Ave—easy walk from Washington Square."
            features={[
              {
                icon: "MapPin",
                title: "Address",
                description: "728 Columbus Ave, San Francisco, CA 94133",
              },
              {
                icon: "Clock3",
                title: "Hours",
                description: "Tue–Sun evenings. Closed Mondays.",
              },
              {
                icon: "Car",
                title: "Parking",
                description: "Street parking + nearby garages on Vallejo St.",
              },
            ]}
          />
        </div>
      </section>
      <section id="contact-form" className="bg-[#F3EAD0] py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <ContactForm
            headline="Send us a message"
            subheadline="For private dining, include your preferred date, guest count, and budget range."
            contactInfo={[
              { icon: "Phone", label: "Phone", value: "(415) 555-0138" },
              { icon: "Mail", label: "Email", value: "ciao@bellavistakitchen.com" },
              { icon: "MapPin", label: "Address", value: "728 Columbus Ave, San Francisco, CA 94133" },
            ]}
          />
        </div>
      </section>
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <CTABanner
            headline="Ready for dinner?"
            description="Reserve your table and enjoy a warm, elegant Italian night out."
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
