import type { Metadata } from "next"
import { PreserveScroll } from "@/components/preserve-scroll"
import { ProjectDetailLayout } from "@/components/project-detail-layout"
import { SiteNav } from "@/components/site-nav"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Klaviyo | Evolving the Event Data Platform",
  description:
    "Evolving a high-volume event platform to materially reduce infrastructure cost while preserving the data guarantees customers depend on.",
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
        subline="Evolving a high-volume event platform to materially reduce infrastructure cost while preserving the data guarantees customers depend on."
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
              "Those workloads don't need the same history, latency, freshness, throughput, or serving model",
              "Rising event volume turned retention into a platform economics question, not a storage setting",
              "The core decision became which workloads require low-latency operational access, which can use alternative serving paths, and what the platform must guarantee across both",
              "Those choices also shape future pricing, packaging, and GTM differentiation around always-available data",
            ],
          },
          role: {
            heading: "Role",
            bullets: [
              "Own the product strategy connecting customer data-access needs, platform guarantees, serving architecture, and infrastructure economics",
              "Translate customer jobs into explicit guarantees for history, latency, freshness, completeness, and throughput",
              "Partner with infrastructure and downstream product teams on hot, hybrid, and analytical serving paths",
              "Use customer research, usage analysis, competitive context, and cost-to-value analysis to determine where differentiated access makes sense",
              "Decompose a multi-quarter platform change into reversible releases and define rollout guardrails that protect customer workflows",
            ],
          },
        }}
        row2={{
          throughline:
            "customer jobs → platform contract → workload SLOs → serving architecture → economics & packaging → reversible rollout",
          left: [
            {
              title: "Defined the platform contract",
              description:
                "Replaced “how much data should we retain?” with “what does each product need the platform to guarantee?”",
              bullets: ["Separated customer-visible requirements from implementation policy"],
            },
            {
              title: "Validated what customers actually need",
              description:
                "Combined customer interviews across segments, competitive research, product and API usage patterns, and infrastructure economics to distinguish customer promises from historical implementation choices.",
              bullets: [
                "Different workflows require very different combinations of lookback window, latency, freshness, completeness, and throughput",
              ],
            },
            {
              title: "Matched architecture to customer value",
              description:
                "Mapped upstream and downstream data flows, then evaluated which workloads require low-latency operational access versus alternative serving paths.",
              bullets: ["Pay for performance where customers value it; serve the rest differently"],
            },
          ],
          right: [
            {
              title: "Connected infrastructure cost to customer value",
              description:
                "Analyzed both absolute infrastructure burden and economic efficiency rather than treating high-volume customers as inherently problematic. This created a quantitative basis for identifying workloads where storage consumption was high relative to monetization—and where differentiated serving or future packaging could make sense.",
              bullets: ["Avoid locking today's infrastructure economics into tomorrow's product model"],
            },
            {
              title: "Decomposed the strategy into reversible releases",
              description:
                "Rather than treating retention as one platform-wide policy change, separated the problem by event class, customer impact, and access pattern. This created a path to capture meaningful savings earlier while continuing discovery and architecture work on higher-risk workloads.",
              bullets: [
                "Start with a lower-impact event class",
                "Preserve optionality for broader retention decisions",
                "Use rollout evidence to inform subsequent platform changes",
              ],
            },
            {
              title: "Made rollout part of the product",
              description:
                "Designed a staged rollout from lower- to higher-exposure customer segments, with evidence gates at every stage.",
              bullets: [
                "Explicit metrics and rollback conditions",
                "Customer communication as part of the product experience",
                "Tailored handling for strategically important accounts",
                "A reversible technical change isn't reversible if the customer experience isn't",
              ],
            },
          ],
        }}
        row3={{
          outcomes: {
            heading: "Outcomes so far",
            bullets: [
              {
                label: "High-six-figure annual savings path",
                description:
                  "Decomposed a multi-quarter platform strategy and initiated the first lower-risk change, targeting high-six-figure annual infrastructure savings.",
              },
              {
                label: "Platform contract before architecture",
                description:
                  "Shifted the decision from blanket retention policy toward explicit guarantees for history, latency, freshness, completeness, and throughput.",
              },
              {
                label: "Safer execution model",
                description:
                  "Designed staged rollout from lower- to higher-exposure customer segments, with evidence gates, rollback criteria, customer communication, and tailored handling for strategic accounts.",
              },
              {
                label: "Foundation for future monetization",
                description:
                  "Connected event access patterns and infrastructure economics to future pricing, packaging, and GTM decisions.",
              },
            ],
          },
          learnings: {
            heading: "How I make the tradeoff",
            bullets: [
              "Customer value: what job are we protecting?",
              "Product guarantee: what must remain true?",
              "Feasibility: what architectures satisfy it?",
              "Economics: what does the guarantee cost?",
              "Pricing & GTM: how should packaging evolve?",
              "Reversibility: can we learn before committing?",
            ],
          },
        }}
      />
    </div>
  )
}
