import type { Metadata } from "next";
import { Barlow, Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCallButton } from "@/components/FloatingCallButton";
import { business } from "@/lib/site";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-display",
  weight: ["600", "700"],
  subsets: ["latin"],
});

const barlow = Barlow({
  variable: "--font-head",
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: `${business.name} | Concrete & Paver Sealing in ${business.regionShort}`,
    template: `%s | ${business.name}`,
  },
  description: `${business.name} delivers professional concrete, paver, brushed and exposed aggregate sealing across ${business.regionFull}. Free written estimates, ${business.warrantyYears.toLowerCase()} warranty. Call ${business.phoneDisplay}.`,
  keywords: [
    "concrete sealing Brentwood TN",
    "driveway sealing Franklin TN",
    "paver sealing Cool Springs",
    "concrete sealing Nolensville",
    "exposed aggregate sealing Williamson County",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: business.name,
    title: `${business.name} | Concrete & Paver Sealing in ${business.regionShort}`,
    description: `Professional concrete, paver and exposed aggregate sealing across ${business.regionFull}. Free written estimates, ${business.warrantyYears.toLowerCase()} warranty.`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${barlow.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: business.name,
              telephone: business.phoneTel,
              email: business.email,
              areaServed: [
                "Brentwood, TN",
                "Franklin, TN",
                "Cool Springs, TN",
                "Nolensville, TN",
                "Forest Hills, TN",
              ],
              description: `Concrete, paver, brushed concrete and exposed aggregate sealing serving ${business.regionFull}.`,
              priceRange: "$$",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: business.rating,
                reviewCount: business.reviewCount,
              },
            }),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCallButton />
      </body>
    </html>
  );
}
