import { createProjectOgImageResponse, fetchAsDataUrl, mimeFromPath } from "@/lib/og"

export const dynamic = "force-static"
export const runtime = "nodejs"

export async function GET() {
  const heroPath = "/dishclosure.gif"
  const heroUrl = new URL("../../../../public/dishclosure.gif", import.meta.url)
  const heroImageDataUrl = await fetchAsDataUrl(heroUrl, mimeFromPath(heroPath))

  return createProjectOgImageResponse({
    title: "Dishclosure: Founder and Product Lead",
    subline:
      "An operator-first investigation that revealed the real constraint wasn’t UX or adoption, but broken upstream data lineage.",
    heroImageDataUrl,
    heroAlt: "Dishclosure allergen knowledge graph",
  })
}


