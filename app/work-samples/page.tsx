import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import { ClientRedirect } from "@/components/client-redirect"

export const metadata: Metadata = buildMetadata({
  title: "Artifacts",
  description: "Work samples showing how I diagnose systems, make tradeoffs explicit, and design foundations.",
  pathname: "/work-samples",
  type: "website",
})

export default function WorkSamplesPage() {
  // Preserve deep links (?project=...&artifact=...) when redirecting.
  // Static export friendly: use a client-side redirect.
  return <ClientRedirect to="/artifacts" />
}
