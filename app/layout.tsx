import "./globals.css"
import { Playfair_Display, Lato } from "next/font/google"
import NavbarSticky from "@/components/NavbarSticky"
import FooterMultiColumn from "@/components/FooterMultiColumn"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-body",
})

export const metadata = {
  title: "Bella Vista Italian Kitchen | Handmade Pasta & Wood-Fired Mains in North Beach",
  description:
    "Bella Vista Italian Kitchen is a modern Italian restaurant in North Beach, San Francisco—handmade pasta, wood-fired mains, Italian wine, warm candlelit dining. View menu, reserve a table, and explore our gallery.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lato.variable} bg-[#FEFAE0] text-[#1F1A17]`}>
        <NavbarSticky
          logo="Bella Vista Italian Kitchen"
          navItems={[
            { label: "Home", href: "/" },
            { label: "Menu", href: "/menu" },
            { label: "Reservations", href: "/reservations" },
            { label: "Gallery", href: "/gallery" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ]}
          ctaLabel="Reserve"
          ctaHref="/reservations"
        />
        {children}
        <FooterMultiColumn
          brand="Bella Vista Italian Kitchen"
          description="Handmade pasta, wood-fired mains, and warm Italian hospitality in the heart of North Beach."
          columns={[
            {
              title: "Explore",
              links: [
                { label: "Home", href: "/" },
                { label: "Menu", href: "/menu" },
                { label: "Gallery", href: "/gallery" },
                { label: "About", href: "/about" },
              ],
            },
            {
              title: "Visit",
              links: [
                { label: "Reservations", href: "/reservations" },
                { label: "Contact", href: "/contact" },
                {
                  label: "Get Directions",
                  href: "https://maps.google.com/?q=728+Columbus+Ave,+San+Francisco,+CA+94133",
                },
              ],
            },
            {
              title: "Connect",
              links: [
                { label: "Instagram", href: "https://instagram.com/bellavistakitchen" },
                { label: "Facebook", href: "https://facebook.com/bellavistakitchen" },
                { label: "Email Us", href: "mailto:ciao@bellavistakitchen.com" },
              ],
            },
          ]}
          copyright="© 2026 Bella Vista Italian Kitchen. All rights reserved."
        />
      </body>
    </html>
  )
}
