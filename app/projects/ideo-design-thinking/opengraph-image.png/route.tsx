import { createProjectOgImageResponse, fetchAsDataUrl, mimeFromPath } from "@/lib/og"

export const dynamic = "force-static"

export async function GET() {
  const heroPath = "/design-thinking.gif"
  const publicBase = new URL("../../../../public/", import.meta.url)
  const heroImageDataUrl = await fetchAsDataUrl(new URL(heroPath.replace(/^\//, ""), publicBase), mimeFromPath(heroPath))

  return createProjectOgImageResponse({
    title: "IDEO: Design Thinking Challenge",
    subline: "Understanding humans before designing systems",
    heroImageDataUrl,
    heroAlt: "IDEO design thinking prototype walkthrough",
  })
}


