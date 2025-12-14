import { createProjectOgImageResponse, fetchAsDataUrl, mimeFromPath } from "@/lib/og"

export const dynamic = "force-static"

export async function GET() {
  const heroPath = "/engineering foundation.gif"
  const publicBase = new URL("../../../../public/", import.meta.url)
  const heroImageDataUrl = await fetchAsDataUrl(new URL(heroPath.replace(/^\//, ""), publicBase), mimeFromPath(heroPath))

  return createProjectOgImageResponse({
    title: "Amazon | AerServ | Oracle: Engineering Foundation",
    subline: "The technical grounding that shaped how I evaluate data, risk, and leverage as a PM.",
    heroImageDataUrl,
    heroAlt: "Engineering foundation",
  })
}


