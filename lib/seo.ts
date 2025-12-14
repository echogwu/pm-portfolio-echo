import type { Metadata } from "next"

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""

export const DEFAULT_TITLE = "PM Portfolio | AI Ships Features, I Ship Direction"
export const DEFAULT_DESCRIPTION =
  "Data & Platform Product Manager specializing in event-driven systems and analytics foundations. Owned event architecture, attribution, and activation platforms powering revenue-critical B2B and consumer workflows. Founder experience diagnosing data lineage failures at the ecosystem level."

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
      url: withBasePath("/opengraph-image.png"),
      width: 1200,
      height: 630,
      alt: DEFAULT_TITLE,
    },
  ]

  if (args.ogImagePath) {
    images.unshift({
      url: assetPath(args.ogImagePath),
      alt: args.ogImageAlt || args.title,
    })
  }

  const twitterImages: string[] = []
  if (args.ogImagePath) twitterImages.push(assetPath(args.ogImagePath))
  twitterImages.push(withBasePath("/twitter-image.png"))

  return {
    title: args.title,
    description: args.description,
    alternates: { canonical },
    openGraph: {
      type: args.type || "website",
      url: canonical,
      title: args.title,
      description: args.description,
      siteName: "PM Portfolio",
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


