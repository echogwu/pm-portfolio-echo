import type { Metadata } from "next"
import { ClientRedirect } from "@/components/client-redirect"
import { buildMetadata } from "@/lib/seo"

// Legacy route: /journey/* was renamed to /work/*. Canonical points at the new URL.
export const metadata: Metadata = buildMetadata({
  title: "MBA: Designing Decision Systems",
  description: "The bridge from “I can build” to “I can decide what’s worth building and align people around it.”",
  pathname: "/work/mba-strategic-frameworks",
  type: "article",
})

export default function LegacyMbaPage() {
  return <ClientRedirect to="/work/mba-strategic-frameworks" />
}
