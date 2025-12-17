import type { Metadata } from "next"
import { ClientRedirect } from "@/components/client-redirect"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "IDEO: Design Thinking Challenge",
  description: "Practiced divergent→convergent thinking, research synthesis, rapid prototyping, and iteration.",
  pathname: "/projects/ideo-design-thinking",
  ogImagePath: "/projects/ideo-design-thinking/opengraph-image.png",
  ogImageAlt: "IDEO design thinking prototype walkthrough",
  type: "article",
})

export default function IDEOPage() {
  return <ClientRedirect to="/journey/ideo-design-thinking" />
}
