import type { Metadata } from "next"
import { ClientRedirect } from "@/components/client-redirect"
import { buildMetadata } from "@/lib/seo"

// Legacy route: /journey was renamed to /work. Canonical points at the new URL.
export const metadata: Metadata = buildMetadata({
  title: "Work",
  description:
    "My work has evolved from engineering foundations, to developer platforms, to owning complex data products—while business training broadened how I think about markets, economics, and strategy.",
  pathname: "/work",
  type: "website",
})

export default function LegacyJourneyPage() {
  return <ClientRedirect to="/work" />
}
