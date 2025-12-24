import type React from "react"
import Link from "next/link"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Bilkes Perveen - Entrepreneur | Image Coach | Model | Emcee | Influencer | Speaker",
  description:
    "Professional portfolio of Bilkes Perveen - Multifaceted entrepreneur, image coach, model, emcee, influencer, and speaker. Founder & CEO of P&C, Calendar Cover Model 2021.",
  openGraph: {
    title: "Bilkes Perveen - Entrepreneur | Image Coach | Model | Emcee | Influencer | Speaker",
    description: "Professional portfolio of Bilkes Perveen - Multifaceted entrepreneur, image coach, model, emcee, influencer, and speaker. Founder & CEO of P&C, Calendar Cover Model 2021.",
    url: "https://bilkesperveen.in/",
    siteName: "Bilkes Perveen Portfolio",
    images: [
      {
        url: "/cover.jpg",
        width: 1200,
        height: 630,
        alt: "Bilkes Perveen Portfolio Cover"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Bilkes Perveen - Entrepreneur | Image Coach | Model | Emcee | Influencer | Speaker",
    description: "Professional portfolio of Bilkes Perveen - Multifaceted entrepreneur, image coach, model, emcee, influencer, and speaker.",
    images: ["/cover.jpg"]
  },
  metadataBase: new URL("https://bilkesperveen.in"),
  alternates: {
    canonical: "/"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}> 
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://bilkesperveen.in/" />
      </head>
      <body className="font-inter antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
        {/* Enhanced Floating Contact Button */}
        <Link
          href="/contact"
          className="fixed bottom-8 right-8 z-50 px-7 py-3 bg-gradient-to-br from-violet-700 via-fuchsia-500 to-pink-400 hover:from-violet-800 hover:to-pink-500 text-white font-bold rounded-full shadow-2xl shadow-fuchsia-300/40 border-2 border-white/80 backdrop-blur-md transition-all duration-200 ease-in-out flex items-center gap-3 group ring-0 hover:ring-4 hover:ring-fuchsia-300/40 focus:outline-none focus:ring-4 focus:ring-fuchsia-400/60"
          aria-label="Contact"
        >
          <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 01-2.18 2A19.72 19.72 0 013 5.18 2 2 0 015 3h3a2 2 0 012 1.72c.13 1.05.37 2.07.72 3.06a2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.99.35 2.01.59 3.06.72A2 2 0 0122 16.92z"></path></svg>
          <span className="tracking-wide text-base">Contact</span>
        </Link>
      </body>
    </html>
  )
}
