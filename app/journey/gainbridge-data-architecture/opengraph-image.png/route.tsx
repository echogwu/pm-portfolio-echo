import { createProjectOgImageResponse, fetchAsDataUrl, mimeFromPath } from "@/lib/og"

export const dynamic = "force-static"
export const runtime = "nodejs"

export async function GET() {
  const heroPath = "/gainbridge.gif"
  const heroUrl = new URL("../../../../public/gainbridge.gif", import.meta.url)
  const heroImageDataUrl = await fetchAsDataUrl(heroUrl, mimeFromPath(heroPath))

  return createProjectOgImageResponse({
    title: "Gainbridge: Product Manager, Data and Measurement",
    subline: "Built the instrumentation layer that made performance trustworthy — before optimization.",
    heroImageDataUrl,
    heroAlt: "Gainbridge data architecture",
  })
}


