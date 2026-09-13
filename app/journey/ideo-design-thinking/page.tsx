import type { Metadata } from "next"
import { ClientRedirect } from "@/components/client-redirect"
import { buildMetadata } from "@/lib/seo"

// Legacy route: /journey/* was renamed to /work/*. Canonical points at the new URL.
export const metadata: Metadata = buildMetadata({
  title: "IDEO: Design Thinking Challenge",
  description: "Practiced divergent→convergent thinking, research synthesis, rapid prototyping, and iteration.",
  pathname: "/work/ideo-design-thinking",
  type: "article",
})

export default function LegacyIdeoPage() {
  return <ClientRedirect to="/work/ideo-design-thinking" />
}
