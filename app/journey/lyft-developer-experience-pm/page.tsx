import type { Metadata } from "next"
import { ClientRedirect } from "@/components/client-redirect"
import { buildMetadata } from "@/lib/seo"

// Legacy route: /journey/* was renamed to /work/*. Canonical points at the new URL.
export const metadata: Metadata = buildMetadata({
  title: "Lyft: Quality Engineer → Developer Experience PM",
  description: "Learned when to stop optimizing tools and start optimizing where teams focus.",
  pathname: "/work/lyft-developer-experience-pm",
  type: "article",
})

export default function LegacyLyftPage() {
  return <ClientRedirect to="/work/lyft-developer-experience-pm" />
}
