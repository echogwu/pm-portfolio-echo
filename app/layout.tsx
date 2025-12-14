import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ScrollToTop } from "@/components/scroll-to-top"
import "./globals.css"

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "PM Portfolio | AI Ships Features, I Ship Direction",
  description:
    "Data & Platform Product Manager specializing in event-driven systems and analytics foundations. Owned event architecture, attribution, and activation platforms powering revenue-critical B2B and consumer workflows. Founder experience diagnosing data lineage failures at the ecosystem level.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: `${basePath}/icon-light-32x32.png`,
        media: "(prefers-color-scheme: light)",
      },
      {
        url: `${basePath}/icon-dark-32x32.png`,
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: `${basePath}/icon.svg`,
        type: "image/svg+xml",
      },
    ],
    apple: `${basePath}/apple-icon.png`,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <ScrollToTop />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
