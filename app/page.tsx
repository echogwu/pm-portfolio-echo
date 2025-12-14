import HomeContent from "@/components/home-content"
import { PreserveScroll } from "@/components/preserve-scroll"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Echo Paulus | PM Portfolio | AI Ships Features, I Ship Direction",
  description:
    "Data & Platform Product Manager specializing in event-driven systems and analytics foundations. Owned event architecture, attribution, and activation platforms powering revenue-critical B2B and consumer workflows. Founder experience diagnosing data lineage failures at the ecosystem level.",
  pathname: "/",
  type: "website",
})

export default function Home() {
  return (
    <>
      <PreserveScroll />
      <HomeContent />
    </>
  )
}
