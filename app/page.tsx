import HomeContent from "@/components/home-content"
import { PreserveScroll } from "@/components/preserve-scroll"

export const metadata = {
  title: "Product Manager Portfolio | AI Ships Features, I Ship Direction",
  description:
    "Data & Platform Product Manager specializing in event-driven systems and analytics foundations. Owned event architecture, attribution, and activation platforms powering revenue-critical B2B and consumer workfl ows.. Founder experience diagnosing data lineage failures at the ecosystem level.",
}

export default function Home() {
  return (
    <>
      <PreserveScroll />
      <HomeContent />
    </>
  )
}
