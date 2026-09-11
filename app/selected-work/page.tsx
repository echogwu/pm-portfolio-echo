import type { Metadata } from "next"
import { PreserveScroll } from "@/components/preserve-scroll"
import { SelectedWorkContent } from "@/components/selected-work-content"
import { SiteFooter } from "@/components/site-footer"
import { SiteNav } from "@/components/site-nav"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Selected Work",
  description:
    "Product work across data infrastructure, platforms, and strategy—case studies in event platforms, data architecture, and end-to-end ownership.",
  pathname: "/selected-work",
  type: "website",
})

export default function SelectedWorkPage() {
  return (
    <div className="min-h-screen bg-[#f7f6f1]">
      <PreserveScroll />
      <SiteNav active="selected-work" />
      <SelectedWorkContent />
      <SiteFooter />
    </div>
  )
}
