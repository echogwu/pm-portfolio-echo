import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ScrollToTop } from "@/components/scroll-to-top"
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE, getMetadataBase, withBasePath } from "@/lib/seo"
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
  metadataBase: getMetadataBase(),
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  generator: "v0.app",
  alternates: {
    canonical: withBasePath("/"),
  },
  openGraph: {
    type: "website",
    url: withBasePath("/"),
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    siteName: "PM Portfolio",
    images: [
      {
        url: withBasePath("/opengraph-image.png"),
        width: 1200,
        height: 630,
        alt: DEFAULT_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [withBasePath("/twitter-image.png")],
  },
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
