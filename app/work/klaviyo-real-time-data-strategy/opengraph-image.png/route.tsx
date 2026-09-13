import { createProjectOgImageResponse, fetchAsDataUrl, mimeFromPath } from "@/lib/og"

export const dynamic = "force-static"
export const runtime = "nodejs"

export async function GET() {
  const heroPath = "/klaviyo-logo.jpg"
  const heroUrl = new URL("../../../../public/klaviyo-logo.jpg", import.meta.url)
  const heroImageDataUrl = await fetchAsDataUrl(heroUrl, mimeFromPath(heroPath))

  return createProjectOgImageResponse({
    title: "Klaviyo: Evolving the Event Data Platform",
    subline: "How high-volume behavioral data should be stored, served, and accessed across products.",
    heroImageDataUrl,
    heroAlt: "Klaviyo",
  })
}
