import type { Metadata } from "next"
import { ClientRedirect } from "@/components/client-redirect"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Lyft: Quality Engineer → Developer Experience PM",
  description: "Learned when to stop optimizing tools and start optimizing where teams focus.",
  pathname: "/projects/lyft-developer-experience-pm",
  ogImagePath: "/projects/lyft-developer-experience-pm/opengraph-image.png",
  ogImageAlt: "Lyft developer experience",
  type: "article",
})

export default function LyftPage() {
  return <ClientRedirect to="/journey/lyft-developer-experience-pm" />
}
