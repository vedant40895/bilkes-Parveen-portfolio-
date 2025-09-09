import type React from "react"
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
      </body>
    </html>
  )
}
