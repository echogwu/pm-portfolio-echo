import { createProjectOgImageResponse, fetchAsDataUrl, mimeFromPath } from "@/lib/og"

export const dynamic = "force-static"
export const runtime = "nodejs"

export async function GET() {
  const heroPath = "/mba.gif"
  const heroUrl = new URL("../../../../public/mba.gif", import.meta.url)
  const heroImageDataUrl = await fetchAsDataUrl(heroUrl, mimeFromPath(heroPath))

  return createProjectOgImageResponse({
    title: "MBA: Designing Decision Systems",
    subline: "The bridge from “I can build” to “I can decide what’s worth building and align people around it.”",
    heroImageDataUrl,
    heroAlt: "MBA: designing decision systems",
  })
}


