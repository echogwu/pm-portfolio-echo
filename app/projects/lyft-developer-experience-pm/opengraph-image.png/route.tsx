import { createProjectOgImageResponse, fetchAsDataUrl, mimeFromPath } from "@/lib/og"

export const dynamic = "force-static"
export const runtime = "nodejs"

export async function GET() {
  const heroPath = "/lyft.gif"
  const heroUrl = new URL("../../../../public/lyft.gif", import.meta.url)
  const heroImageDataUrl = await fetchAsDataUrl(heroUrl, mimeFromPath(heroPath))

  return createProjectOgImageResponse({
    title: "Lyft: Quality Engineer → Developer Experience PM",
    subline: "When to stop optimizing for conventional metrics — and start optimizing what actually matters.",
    heroImageDataUrl,
    heroAlt: "Lyft developer experience",
  })
}


