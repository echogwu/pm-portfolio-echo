import type { Metadata } from "next"
import { ClientRedirect } from "@/components/client-redirect"
import { buildMetadata } from "@/lib/seo"

// Legacy route: /journey/* was renamed to /work/*. Canonical points at the new URL.
export const metadata: Metadata = buildMetadata({
  title: "Amazon | AerServ | Oracle: Engineering Foundation",
  description: "The technical grounding that shaped how I evaluate data, risk, and leverage as a PM.",
  pathname: "/work/engineering-foundation",
  type: "article",
})

export default function LegacyEngineeringFoundationPage() {
  return <ClientRedirect to="/work/engineering-foundation" />
}
