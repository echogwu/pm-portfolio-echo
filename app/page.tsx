import HomeContent from "@/components/home-content"
import { PreserveScroll } from "@/components/preserve-scroll"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Echo's Portfolio",
  description:
    "Product lead, real-time customer data infrastructure. I build event and data platforms where product decisions shape how data is ingested, stored, served, and activated—balancing scale, cost, reliability, and customer trust.",
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
