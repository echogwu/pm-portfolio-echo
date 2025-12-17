import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { ScrollToTop } from "@/components/scroll-to-top"
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE, getMetadataBase, ogImagePath, withBasePath } from "@/lib/seo"
import "./globals.css"

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""
const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "GTM-PWQGF8W5"

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
    siteName: "Echo's Portfolio",
    images: [
      {
        url: ogImagePath("/opengraph-image.png"),
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
    images: [ogImagePath("/twitter-image.png")],
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
      <head>
        {/* Marker so you can verify via View Source */}
        <meta name="gtm-container" content={gtmId} />

        {/* Google Tag Manager */}
        {gtmId ? (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`,
            }}
          />
        ) : null}
        {/* End Google Tag Manager */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        {/* Google Tag Manager (noscript) */}
        {gtmId ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
              title="gtm"
            />
          </noscript>
        ) : null}

        <ScrollToTop />
        {children}
      </body>
    </html>
  )
}
