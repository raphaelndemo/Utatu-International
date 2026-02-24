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
    default: "Utatu International School | Cambridge Education in Kenya",
  },
  description: "Utatu International offers a world-class Cambridge Curriculum through a flexible hybrid and online homeschooling model from Kindergarten to Year 13.",
  keywords: ["Cambridge Curriculum Kenya", "Homeschooling Kenya", "Online International School", "IGCSE Online", "A Level Online"],
  manifest: "/manifest.json",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION, // e.g. "your-google-verification-code"
    other: {
      "msvalidate.01": [process.env.NEXT_PUBLIC_BING_VERIFICATION || ""], // Bing Webmaster Tools
    },
  },
  openGraph: {
    title: "Utatu International School",
    description: "World-class Cambridge education in Kenya",
    url: "https://www.utatuinternational.com",
    siteName: "Utatu International School",
    locale: "en_KE",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#001A00",
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
