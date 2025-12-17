import type { Metadata } from "next"
import { ClientRedirect } from "@/components/client-redirect"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Amazon | AerServ | Oracle: Engineering Foundation",
  description: "The technical grounding that shaped how I evaluate data, risk, and leverage as a PM.",
  pathname: "/projects/engineering-foundation",
  ogImagePath: "/projects/engineering-foundation/opengraph-image.png",
  ogImageAlt: "Engineering foundation",
  type: "article",
})

export default function EngineeringFoundationPage() {
  return <ClientRedirect to="/journey/engineering-foundation" />
}
