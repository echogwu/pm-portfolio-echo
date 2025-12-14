import { createProjectOgImageResponse, fetchAsDataUrl, mimeFromPath } from "@/lib/og"

export const dynamic = "force-static"

export async function GET() {
  const heroPath = "/lyft.gif"
  const publicBase = new URL("../../../../public/", import.meta.url)
  const heroImageDataUrl = await fetchAsDataUrl(new URL(heroPath.replace(/^\//, ""), publicBase), mimeFromPath(heroPath))

  return createProjectOgImageResponse({
    title: "Lyft: Quality Engineer → Developer Experience PM",
    subline: "When to stop optimizing for conventional metrics — and start optimizing what actually matters.",
    heroImageDataUrl,
    heroAlt: "Lyft developer experience",
  })
}


