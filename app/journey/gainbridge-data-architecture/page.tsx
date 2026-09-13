import type { Metadata } from "next"
import { ClientRedirect } from "@/components/client-redirect"
import { buildMetadata } from "@/lib/seo"

// Legacy route: /journey/* was renamed to /work/*. Canonical points at the new URL.
export const metadata: Metadata = buildMetadata({
  title: "Gainbridge | Product Manager, Data and Measurement",
  description: "Built the instrumentation layer that made performance trustworthy — before optimization.",
  pathname: "/work/gainbridge-data-architecture",
  type: "article",
})

export default function LegacyGainbridgePage() {
  return <ClientRedirect to="/work/gainbridge-data-architecture" />
}
