import HomeContent from "@/components/home-content"
import { PreserveScroll } from "@/components/preserve-scroll"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Echo's Portfolio",
  description: "AI ships features, I ship direction",
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
