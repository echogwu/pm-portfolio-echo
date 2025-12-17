import type { Metadata } from "next"
import { ClientRedirect } from "@/components/client-redirect"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Dishclosure | Founder and Product Lead",
  description:
    "An operator-first investigation that revealed the real constraint wasn’t UX or adoption, but broken upstream data lineage.",
  pathname: "/projects/dishclosure-founder-mode",
  ogImagePath: "/projects/dishclosure-founder-mode/opengraph-image.png",
  ogImageAlt: "Dishclosure allergen knowledge graph",
  type: "article",
})

export default function DishclosurePage() {
  return <ClientRedirect to="/journey/dishclosure-founder-mode" />
}
