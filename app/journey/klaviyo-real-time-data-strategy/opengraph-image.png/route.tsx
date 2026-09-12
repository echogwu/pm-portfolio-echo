import { createProjectOgImageResponse, fetchAsDataUrl, mimeFromPath } from "@/lib/og"

export const dynamic = "force-static"
export const runtime = "nodejs"

export async function GET() {
  const heroPath = "/placeholder.jpg"
  const heroUrl = new URL("../../../../public/placeholder.jpg", import.meta.url)
  const heroImageDataUrl = await fetchAsDataUrl(heroUrl, mimeFromPath(heroPath))

  return createProjectOgImageResponse({
    title: "Klaviyo: Evolving the Event Data Platform",
    subline: "Product strategy across serving, storage, APIs, SLOs, customer impact, and rollout guardrails.",
    heroImageDataUrl,
    heroAlt: "Klaviyo event data platform",
  })
}
