import type { Metadata } from "next"
import { ClientRedirect } from "@/components/client-redirect"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Selected Work",
  description: "Redirecting to Selected Work.",
  pathname: "/journey",
  type: "website",
})

export default function JourneyRedirectPage() {
  return <ClientRedirect to="/selected-work" />
}
