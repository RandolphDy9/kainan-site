import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"


import { DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Kainan Restaurant Shediac | Authentic Filipino Food Near Me | New Brunswick",
  description:
    "Best Filipino restaurant in Shediac, New Brunswick! Authentic Filipino cuisine, traditional dishes, and warm hospitality. Open for breakfast, lunch & dinner. Food near me in NB.",
  keywords: [
    "Filipino restaurant Shediac",
    "Filipino food New Brunswick",
    "food near me Shediac",
    "restaurant Shediac NB",
    "authentic Filipino cuisine",
    "Kainan restaurant",
    "Filipino dishes New Brunswick",
    "best restaurant Shediac",
    "traditional Filipino food",
    "family restaurant Shediac"
  ],
  authors: [{ name: "Kainan Restaurant" }],
  creator: "Kainan Restaurant",
  publisher: "Kainan Restaurant",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://kainanrestaurant.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Kainan Restaurant Shediac | Authentic Filipino Food Near Me",
    description: "Best Filipino restaurant in Shediac, New Brunswick! Authentic Filipino cuisine, traditional dishes, and warm hospitality. Open for breakfast, lunch & dinner.",
    url: 'https://kainanrestaurant.com',
    siteName: 'Kainan Restaurant',
    images: [
      {
        url: '/images/hero3-bg.jpeg',
        width: 1200,
        height: 630,
        alt: 'Kainan Restaurant - Authentic Filipino Cuisine in Shediac, NB',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Kainan Restaurant Shediac | Authentic Filipino Food Near Me",
    description: "Best Filipino restaurant in Shediac, New Brunswick! Authentic Filipino cuisine, traditional dishes, and warm hospitality.",
    images: ['/images/hero3-bg.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/images/favicon.jpg",
    shortcut: "/images/favicon.jpg",
    apple: "/images/favicon.jpg",
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Kainan - A Place to Eat",
    "description": "Authentic Filipino restaurant in Shediac, New Brunswick serving traditional dishes with love and warmth.",
    "url": "https://kainanrestaurant.com",
    "telephone": "+1-506-351-0182",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "318-A Main St",
      "addressLocality": "Shediac",
      "addressRegion": "New Brunswick",
      "postalCode": "E4P 2E3",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "46.2194786",
      "longitude": "-64.5465999"
    },
    "openingHours": [
      "Mo 09:00-20:00",
      "Tu 09:00-20:00", 
      "We 09:00-20:00",
      "Th 09:00-20:00",
      "Fr 09:00-20:00",
      "Sa 09:00-20:00",
      "Su closed"
    ],
    "servesCuisine": "Filipino",
    "priceRange": "$$",
    "acceptsReservations": true,
    "hasMenu": "https://kainanrestaurant.com#menu",
    "image": "https://kainanrestaurant.com/images/hero3-bg.jpeg",
    "logo": "https://kainanrestaurant.com/images/logo.png",
    "sameAs": [
      "https://www.facebook.com/profile.php?id=100091358628559",
      "mailto:kainanrestaurantinc@gmail.com"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    }
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${dmSans.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
