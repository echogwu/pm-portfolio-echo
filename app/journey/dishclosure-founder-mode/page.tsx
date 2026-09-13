import type { Metadata } from "next"
import { ClientRedirect } from "@/components/client-redirect"
import { buildMetadata } from "@/lib/seo"

// Legacy route: /journey/* was renamed to /work/*. Canonical points at the new URL.
export const metadata: Metadata = buildMetadata({
  title: "Dishclosure | Founder and Product Lead",
  description:
    "An operator-first investigation that revealed the real constraint wasn’t UX or adoption, but broken upstream data lineage.",
  pathname: "/work/dishclosure-founder-mode",
  type: "article",
})

export default function LegacyDishclosurePage() {
  return <ClientRedirect to="/work/dishclosure-founder-mode" />
}
