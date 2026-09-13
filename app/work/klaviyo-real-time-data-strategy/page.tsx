import type { Metadata } from "next"
import { PreserveScroll } from "@/components/preserve-scroll"
import { ProjectDetailLayout } from "@/components/project-detail-layout"
import { SiteNav } from "@/components/site-nav"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Klaviyo | Evolving the Event Data Platform",
  description:
    "Deciding what a high-volume event platform must guarantee — across serving, storage, APIs, SLOs, economics, and rollout.",
  pathname: "/work/klaviyo-real-time-data-strategy",
  ogImagePath: "/work/klaviyo-real-time-data-strategy/opengraph-image.png",
  ogImageAlt: "Klaviyo",
  type: "article",
})

export default function KlaviyoRealTimeDataStrategyPage() {
  return (
    <div className="min-h-screen bg-background">
      <PreserveScroll />

      {/* Navigation */}
      <SiteNav active="work" />

      <ProjectDetailLayout
        title="Klaviyo: Evolving the Event Data Platform"
        subline="Deciding what a high-volume event platform must guarantee — and what those guarantees are worth."
        tags={["Event Infrastructure", "Real-Time Data", "APIs & SLOs", "Platform Economics", "Rollout Strategy"]}
        artifacts={{ projectHref: "/work/klaviyo-real-time-data-strategy", projectLabel: "Klaviyo" }}
        heroImage={{
          src: "/klaviyo-events-ecosystem.jpg",
          alt: "The events ecosystem: upstream data sources feed the events platform, which serves downstream products",
          fit: "contain",
          background: "#0a1424",
        }}
        row1={{
          challenge: {
            heading: "Challenge",
            bullets: [
              "One event platform serves automation, APIs, profile history, segmentation, reporting, and exports",
              "Those workloads don't need the same history, latency, or serving model",
              "Rising event volume turned retention into a platform economics question, not a storage setting",
              "Guarantees—not implementation policy—determine what customers can actually rely on",
              "Access patterns shape pricing, packaging, and GTM differentiation around always-available data",
            ],
          },
          role: {
            heading: "Role",
            bullets: [
              "Translate customer jobs into platform guarantees: history, latency, freshness, completeness, throughput",
              "Partner with infrastructure and downstream product teams on hot, hybrid, and analytical serving paths",
              "Connect storage and serving choices to infrastructure economics and future packaging",
              "Define rollout guardrails so event-access changes don't break customer workflows",
            ],
          },
        }}
        row2={{
          throughline: "platform contract → workload SLOs → serving architecture → economics & packaging → staged rollout",
          left: [
            {
              title: "Defined the platform contract",
              description:
                "Replaced “how much data should we retain?” with “what does each product need the platform to guarantee?”",
              bullets: ["Separated customer-visible requirements from implementation policy"],
            },
            {
              title: "Matched architecture to customer value",
              description:
                "Mapped data flows and downstream workloads, then set the SLOs that actually mattered for each one.",
              bullets: [
                "History, latency, freshness, completeness, throughput",
                "Pay for performance where customers value it; serve the rest differently",
              ],
            },
          ],
          right: [
            {
              title: "Connected infrastructure to the business model",
              description:
                "Evaluated how platform guarantees shape infrastructure economics, future packaging, and enterprise expectations.",
              bullets: ["Avoid locking today's infrastructure into tomorrow's product model"],
            },
            {
              title: "Made rollout part of the product",
              description:
                "Pushed for canary → controlled cohorts → broader rollout, with evidence gates at every stage.",
              bullets: [
                "Explicit metrics, rollback conditions, and customer communication",
                "A reversible change isn't reversible if the customer experience isn't",
              ],
            },
          ],
        }}
        row3={{
          outcomes: {
            heading: "Outcomes so far",
            bullets: [
              "Reframed a retention problem into platform strategy across storage, serving, APIs, SLOs, pricing, and GTM",
              "Created a path to meaningful infrastructure savings by separating requirements from implementation assumptions",
              "Established a safer decision and rollout model with explicit guarantees, evidence gates, and reversible stages",
            ],
          },
          learnings: {
            heading: "How I make the tradeoff",
            bullets: [
              "Customer value: what job are we protecting?",
              "Product guarantee: what must remain true?",
              "Feasibility: what architectures satisfy it?",
              "Economics: what does the guarantee cost?",
              "Pricing & GTM: how does packaging shift?",
              "Reversibility: can we test before committing?",
            ],
          },
        }}
      />
    </div>
  )
}
