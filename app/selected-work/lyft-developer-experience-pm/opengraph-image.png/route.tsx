import { createProjectOgImageResponse, fetchAsDataUrl, mimeFromPath } from "@/lib/og"

export const dynamic = "force-static"
export const runtime = "nodejs"

export async function GET() {
  const heroPath = "/lyft.gif"
  const heroUrl = new URL("../../../../public/lyft.gif", import.meta.url)
  const heroImageDataUrl = await fetchAsDataUrl(heroUrl, mimeFromPath(heroPath))

  return createProjectOgImageResponse({
    title: "Lyft: Quality Engineer → Developer Experience PM",
    subline: "Learned when to stop optimizing tools and start optimizing where teams focus.",
    heroImageDataUrl,
    heroAlt: "Lyft developer experience",
  })
}


