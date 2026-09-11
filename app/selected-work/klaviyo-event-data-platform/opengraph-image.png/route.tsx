import { createProjectOgImageResponse, fetchAsDataUrl, mimeFromPath } from "@/lib/og"

export const dynamic = "force-static"
export const runtime = "nodejs"

export async function GET() {
  const heroPath = "/placeholder.jpg"
  const heroUrl = new URL("../../../../public/placeholder.jpg", import.meta.url)
  const heroImageDataUrl = await fetchAsDataUrl(heroUrl, mimeFromPath(heroPath))

  return createProjectOgImageResponse({
    title: "Klaviyo: Evolving the Event Data Platform",
    subline:
      "Defining what the event platform must guarantee as data volume, infrastructure cost, and downstream product requirements diverge.",
    heroImageDataUrl,
    heroAlt: "Klaviyo event data platform",
  })
}
