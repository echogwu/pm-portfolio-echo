import type { Metadata } from "next"

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""

export const DEFAULT_DESCRIPTION = "AI ships features, I ship direction"
export const DEFAULT_TITLE = "Echo's Portfolio"

const OG_IMAGE_VERSION =
  process.env.NEXT_PUBLIC_OG_IMAGE_VERSION || process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 8) || "2025-12-14"

export function getSiteUrl() {
  // Used to produce absolute OG/Twitter URLs at build time.
  // Override in CI via NEXT_PUBLIC_SITE_URL.
  return process.env.NEXT_PUBLIC_SITE_URL || "https://echo-paulus.com"
}

export function getMetadataBase() {
  return new URL(getSiteUrl())
}

export function withBasePath(pathname: string) {
  if (!pathname.startsWith("/")) return `${basePath}/${pathname}`
  return `${basePath}${pathname}`
}

export function assetPath(pathname: string) {
  // Ensure spaces etc. are safe in meta tags (e.g. "/engineering foundation.gif").
  return encodeURI(withBasePath(pathname))
}

export function ogImagePath(pathname: string) {
  // Cache-bust social scrapers (WhatsApp, iMessage, etc.) that aggressively cache og:image by URL.
  // Bump via NEXT_PUBLIC_OG_IMAGE_VERSION (or rely on VERCEL_GIT_COMMIT_SHA when on Vercel).
  return `${encodeURI(withBasePath(pathname))}?v=${OG_IMAGE_VERSION}`
}

type BuildMetadataArgs = {
  title: string
  description: string
  pathname: string
  ogImagePath?: string
  ogImageAlt?: string
  type?: "website" | "article"
}

export function buildMetadata(args: BuildMetadataArgs): Metadata {
  const canonical = withBasePath(args.pathname)

  const images: NonNullable<NonNullable<Metadata["openGraph"]>["images"]> = [
    // Always include a crisp default fallback (good for pages without a hero).
    {
      url: ogImagePath("/opengraph-image.png"),
      width: 1200,
      height: 630,
      alt: DEFAULT_TITLE,
    },
  ]

  if (args.ogImagePath) {
    images.unshift({
      url: ogImagePath(args.ogImagePath),
      width: 1200,
      height: 630,
      alt: args.ogImageAlt || args.title,
    })
  }

  const twitterImages: string[] = []
  if (args.ogImagePath) twitterImages.push(ogImagePath(args.ogImagePath))
  twitterImages.push(ogImagePath("/twitter-image.png"))

  return {
    title: args.title,
    description: args.description,
    alternates: { canonical },
    openGraph: {
      type: args.type || "website",
      url: canonical,
      title: args.title,
      description: args.description,
      siteName: "Echo's Portfolio",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: args.title,
      description: args.description,
      images: twitterImages,
    },
  }
}


