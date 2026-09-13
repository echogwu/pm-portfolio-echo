import { createProjectOgImageResponse, fetchAsDataUrl, mimeFromPath } from "@/lib/og"

export const dynamic = "force-static"
export const runtime = "nodejs"

export async function GET() {
  const heroPath = "/design-thinking.gif"
  const heroUrl = new URL("../../../../public/design-thinking.gif", import.meta.url)
  const heroImageDataUrl = await fetchAsDataUrl(heroUrl, mimeFromPath(heroPath))

  return createProjectOgImageResponse({
    title: "IDEO: Design Thinking Challenge",
    subline: "Practiced divergent→convergent thinking, research synthesis, rapid prototyping, and iteration.",
    heroImageDataUrl,
    heroAlt: "IDEO design thinking prototype walkthrough",
  })
}


