import type { Metadata } from "next"
import { Suspense } from "react"
import { buildMetadata } from "@/lib/seo"
import { ArtifactsTabs } from "@/components/artifacts-tabs"
import { SiteFooter } from "@/components/site-footer"
import { SiteNav } from "@/components/site-nav"
import { SocialLinks } from "@/components/social-links"

export const metadata: Metadata = buildMetadata({
  title: "Artifacts",
  description:
    "Artifacts showing how I turn ambiguous product problems into decisions across value, feasibility, cost, and go-to-market.",
  pathname: "/artifacts",
  type: "website",
})

export default function ArtifactsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <SiteNav active="artifacts" />

      {/* Header */}
      <section className="page-container py-16 lg:py-24">
        <h1 className="sr-only">Artifacts</h1>
        <div className="border-b border-border py-8 lg:py-10">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 md:gap-10 items-start">
            <div className="min-w-0">
              <p className="text-[clamp(1rem,2.8vw,1.25rem)] leading-relaxed text-foreground/90 text-left hyphens-auto">
                These artifacts show how I turn ambiguous product problems into decisions:{" "}
                <span className="font-semibold underline decoration-lime-300 decoration-[5px] underline-offset-[6px]">
                  framing the business opportunity
                </span>
                ,{" "}
                <span className="font-semibold underline decoration-sky-300 decoration-[5px] underline-offset-[6px]">
                  mapping the underlying system
                </span>
                ,{" "}
                <span className="font-semibold underline decoration-emerald-300 decoration-[5px] underline-offset-[6px]">
                  understanding customer pain points
                </span>
                , and making{" "}
                <span className="font-semibold underline decoration-amber-300 decoration-[5px] underline-offset-[6px]">
                  explicit tradeoffs
                </span>{" "}
                across{" "}
                <span className="font-semibold text-foreground">value</span>,{" "}
                <span className="font-semibold text-foreground">feasibility</span>,{" "}
                <span className="font-semibold text-foreground">cost</span>, and{" "}
                <span className="font-semibold text-foreground">go-to-market</span>. Each artifact is tied to a{" "}
                <span className="font-semibold underline decoration-violet-300 decoration-[5px] underline-offset-[6px]">
                  real product decision
                </span>
                —not created for presentation.
              </p>
            </div>

            <div className="md:pl-8 md:border-l md:border-border">
              <SocialLinks orientation="vertical" variant="hero" className="hidden md:flex" />
              <SocialLinks orientation="horizontal" variant="hero" className="mt-4 md:hidden" />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="page-container pb-24">
        <Suspense
          fallback={
            <div className="rounded-2xl border border-border bg-card p-6 text-sm text-muted-foreground">
              Loading artifacts…
            </div>
          }
        >
          <ArtifactsTabs />
        </Suspense>
      </section>

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}


