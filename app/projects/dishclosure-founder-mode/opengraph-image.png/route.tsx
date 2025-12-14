import { createProjectOgImageResponse, fetchAsDataUrl, mimeFromPath } from "@/lib/og"

export const dynamic = "force-static"

export async function GET() {
  const heroPath = "/dishclosure.gif"
  const publicBase = new URL("../../../../public/", import.meta.url)
  const heroImageDataUrl = await fetchAsDataUrl(new URL(heroPath.replace(/^\//, ""), publicBase), mimeFromPath(heroPath))

  return createProjectOgImageResponse({
    title: "Dishclosure: Founder and Product Lead",
    subline:
      "An operator-first investigation that revealed the real constraint wasn’t UX or adoption, but broken upstream data lineage.",
    heroImageDataUrl,
    heroAlt: "Dishclosure allergen knowledge graph",
  })
}


