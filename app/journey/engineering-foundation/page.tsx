import type { Metadata } from "next"
import { ClientRedirect } from "@/components/client-redirect"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Redirecting…",
  description: "Moved to Selected Work.",
  pathname: "/journey/engineering-foundation",
  type: "website",
})

export default function RedirectPage() {
  return <ClientRedirect to="/selected-work/engineering-foundation" />
}
