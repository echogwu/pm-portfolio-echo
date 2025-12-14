import { createProjectOgImageResponse, fetchAsDataUrl, mimeFromPath } from "@/lib/og"

export const dynamic = "force-static"

export async function GET() {
  const heroPath = "/gainbridge.gif"
  const publicBase = new URL("../../../../public/", import.meta.url)
  const heroImageDataUrl = await fetchAsDataUrl(new URL(heroPath.replace(/^\//, ""), publicBase), mimeFromPath(heroPath))

  return createProjectOgImageResponse({
    title: "Gainbridge: Product Manager, Data and Measurement",
    subline: "Built the instrumentation layer that made performance trustworthy — before optimization.",
    heroImageDataUrl,
    heroAlt: "Gainbridge data architecture",
  })
}


