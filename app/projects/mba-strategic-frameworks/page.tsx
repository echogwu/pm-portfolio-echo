import type { Metadata } from "next"
import { ClientRedirect } from "@/components/client-redirect"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "MBA: Designing Decision Systems",
  description: "The bridge from “I can build” to “I can decide what’s worth building and align people around it.”",
  pathname: "/projects/mba-strategic-frameworks",
  ogImagePath: "/projects/mba-strategic-frameworks/opengraph-image.png",
  ogImageAlt: "MBA: designing decision systems",
  type: "article",
})

export default function MBAWorkPage() {
  return <ClientRedirect to="/journey/mba-strategic-frameworks" />
}
