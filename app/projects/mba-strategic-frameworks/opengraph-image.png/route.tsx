import { createProjectOgImageResponse, fetchAsDataUrl, mimeFromPath } from "@/lib/og"

export const dynamic = "force-static"

export async function GET() {
  const heroPath = "/mba.gif"
  const publicBase = new URL("../../../../public/", import.meta.url)
  const heroImageDataUrl = await fetchAsDataUrl(new URL(heroPath.replace(/^\//, ""), publicBase), mimeFromPath(heroPath))

  return createProjectOgImageResponse({
    title: "MBA — Designing Decision Systems",
    subline: "The bridge from “I can build” to “I can decide what’s worth building and align people around it.”",
    heroImageDataUrl,
    heroAlt: "MBA: designing decision systems",
  })
}


