import type { Metadata } from "next"
import { ClientRedirect } from "@/components/client-redirect"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Redirecting…",
  description: "Moved to Selected Work.",
  pathname: "/journey/lyft-developer-experience-pm",
  type: "website",
})

export default function RedirectPage() {
  return <ClientRedirect to="/selected-work/lyft-developer-experience-pm" />
}
