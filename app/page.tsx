import HomeContent from "@/components/home-content"
import { PreserveScroll } from "@/components/preserve-scroll"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Echo's Portfolio",
  description:
    "Product leader for real-time customer data infrastructure. Event and data platforms where product decisions shape scale, cost, reliability, and customer trust.",
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
