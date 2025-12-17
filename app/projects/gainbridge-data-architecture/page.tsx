import type { Metadata } from "next"
import { ClientRedirect } from "@/components/client-redirect"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Gainbridge | Product Manager, Data and Measurement",
  description: "Built the instrumentation layer that made performance trustworthy — before optimization.",
  pathname: "/projects/gainbridge-data-architecture",
  ogImagePath: "/projects/gainbridge-data-architecture/opengraph-image.png",
  ogImageAlt: "Gainbridge data architecture",
  type: "article",
})

export default function GainbridgePage() {
  return <ClientRedirect to="/journey/gainbridge-data-architecture" />
}
