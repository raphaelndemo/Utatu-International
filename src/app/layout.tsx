import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://www.utatuinternational.com'),
  title: {
    template: "%s | Utatu International School",
    default: "Best Homeschool in Kenya | Affordable Cambridge Curriculum | Utatu International School",
  },
  description: "Kenya's best affordable, flexible Cambridge homeschool for KG–Year 13. Hybrid in-person & online, Special Needs support, Christian values, family-friendly. Karen, Nairobi.",
  keywords: [
    // Core identity
    "best homeschool in Kenya",
    "best homeschool Kenya",
    "best Cambridge school in Kenya",
    // Affordability
    "most affordable homeschool Kenya",
    "most affordable Cambridge curriculum Kenya",
    "best affordable Cambridge curriculum",
    // Flexibility & hybrid
    "best flexible homeschooling curriculum",
    "best flexible homeschooling curriculum in Kenya",
    "best hybrid homeschooling Kenya",
    "online and in-person homeschool Kenya",
    // Special needs
    "best special needs education Kenya",
    "best special needs Cambridge curriculum",
    "inclusive homeschool Kenya",
    // Values & community
    "best family school Kenya",
    "best friendly school Kenya",
    "best children friendly school Kenya",
    "best Christian school Kenya",
    "Christian homeschool Kenya",
    // Existing
    "Cambridge Curriculum Kenya",
    "Homeschooling Kenya",
    "Online International School",
    "IGCSE Online Kenya",
    "A Level Online Kenya",
    "homeschool Nairobi",
    "Cambridge homeschool Nairobi",
  ],
  alternates: {
    canonical: '/',
  },
  manifest: "/manifest.json",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: {
      "msvalidate.01": [process.env.NEXT_PUBLIC_BING_VERIFICATION || ""],
    },
  },
  openGraph: {
    title: "Utatu International School | Best Affordable Cambridge Homeschool in Kenya",
    description: "Kenya's most flexible, affordable Cambridge homeschool. Hybrid online & in-person, Special Needs support, Christian & family-friendly. KG to Year 13 in Karen, Nairobi.",
    url: "https://www.utatuinternational.com",
    siteName: "Utatu International School",
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Affordable Cambridge Homeschool in Kenya | Utatu International",
    description: "Flexible, affordable Cambridge education KG–Year 13. Hybrid, Special Needs support, Christian values. Karen, Nairobi.",
  },
};

export const viewport: Viewport = {
  themeColor: "#001A00",
};

const schoolStructuredData = {
  "@context": "https://schema.org",
  "@type": "School",
  "name": "Utatu International School",
  "url": "https://www.utatuinternational.com",
  "logo": "https://www.utatuinternational.com/web-app-manifest-512x512.png",
  "description": "Utatu International School is Kenya's best affordable, flexible Cambridge homeschool offering hybrid in-person and online education from Kindergarten to Year 13. We provide Special Needs support, Christian values, and a family-friendly environment in Karen, Nairobi.",
  "telephone": "+254758758784",
  "email": "info@utatuinternational.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Karen Road",
    "addressLocality": "Karen",
    "addressRegion": "Nairobi",
    "postalCode": "00502",
    "addressCountry": "KE"
  },
  "sameAs": [
    "https://www.facebook.com/utatuinternationalschool",
    "https://www.instagram.com/utatuinternational",
    "https://www.tiktok.com/@utatuinternational",
    "https://www.linkedin.com/company/utatu-international-school"
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+254758758784",
      "contactType": "customer service",
      "areaServed": "KE",
      "availableLanguage": ["English"]
    }
  ],
  "foundingDate": "2022",
  "curriculum": "Cambridge International",
  "isAccessibleForFree": false,
  "hasMap": "https://maps.google.com/?q=Karen+Road+Nairobi+Kenya",
  "keywords": [
    "best homeschool Kenya",
    "best Cambridge school Kenya",
    "affordable Cambridge curriculum Kenya",
    "flexible homeschooling Kenya",
    "hybrid homeschool Kenya",
    "special needs education Kenya",
    "Christian school Kenya",
    "family school Kenya",
    "Cambridge homeschool Nairobi",
    "IGCSE Online Kenya",
    "A Level Online Kenya",
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased font-sans flex min-h-screen flex-col`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schoolStructuredData),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}