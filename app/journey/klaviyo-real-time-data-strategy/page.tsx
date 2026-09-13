import type { Metadata } from "next"
import { ClientRedirect } from "@/components/client-redirect"
import { buildMetadata } from "@/lib/seo"

// Legacy route: /journey/* was renamed to /work/*. Canonical points at the new URL.
export const metadata: Metadata = buildMetadata({
  title: "Klaviyo | Evolving the Event Data Platform",
  description:
    "Deciding what a high-volume event platform must guarantee — across serving, storage, APIs, SLOs, economics, and rollout.",
  pathname: "/work/klaviyo-real-time-data-strategy",
  type: "article",
})

export default function LegacyKlaviyoPage() {
  return <ClientRedirect to="/work/klaviyo-real-time-data-strategy" />
}
