/**
 * Homepage copy that a job variant can retune. Everything not listed here is
 * shared across all variants and lives in `components/home-content.tsx`.
 *
 * Nested objects (`featured`, `howIWork`, `background`, `contact`) are replaced
 * wholesale when a variant sets them, so a variant that touches one of them
 * must restate the whole section. That is also how a variant drops something:
 * omitting `howIWork.quote` renders no quote.
 */
export type FeaturedProject = {
  title: string
  description: string
  /** The result, when the card should land the decision without a click. */
  outcome?: string
  /** Canonical case study path; the variant prefix is applied at render time. */
  href: string
  imageSrc: string
  imageAlt: string
  tags: readonly string[]
}

/**
 * One card in the "How I work" progression. Step number, accent color, and
 * above/below placement are derived from position, so content stays declarative.
 */
export type WorkStep = {
  title: string
  /** A single sentence, shown in place of `bullets`. */
  copy?: string
  bullets?: readonly string[]
}

export type HomeData = {
  /** Overrides the `<title>` and meta description, which otherwise reuse the hero copy. */
  meta?: {
    title?: string
    description?: string
  }
  /** Small uppercase label above the headline. */
  eyebrow?: string
  headline: string
  subhead: string
  /** A second hero paragraph, for positioning the headline can't carry alone. */
  supporting?: string
  /** Secondary hero link, e.g. a resume. */
  secondaryCta?: {
    label: string
    href: string
  }
  /** Role line under the name on the profile card. */
  profileTagline: string
  featured: {
    heading: string
    intro?: string
  }
  featuredProjects: readonly FeaturedProject[]
  howIWork: {
    heading: string
    /** Trailing phrase of the heading, underlined in lime. */
    headingAccent?: string
    intro?: string
    steps: readonly WorkStep[]
    /** Pull quote on the diagram's bottom bar. */
    quote?: string
  }
  /** Career framing, between "How I work" and the footer. */
  background?: {
    heading: string
    body: string
    capabilities: readonly string[]
  }
  /** Closing section, rendered above the footer with the usual social links. */
  contact?: {
    heading: string
    copy: string
  }
}

export const DEFAULT_HOME: HomeData = {
  headline: "Product lead, real-time customer data infrastructure",
  subhead:
    "I build event and data platforms where product decisions shape how data is ingested, stored, served, and activated—balancing scale, cost, reliability, and customer trust.",
  profileTagline: "Product Manager, Data & Platform",
  featured: {
    heading: "Featured Projects",
  },
  featuredProjects: [
    {
      title: "Klaviyo: Evolving the Event Data Platform",
      description:
        "How high-volume behavioral data should be stored, served, and accessed—balancing customer value, latency, reliability, cost, and product economics.",
      href: "/work/klaviyo-real-time-data-strategy",
      imageSrc: "/klaviyo-logo.jpg",
      imageAlt: "Klaviyo",
      tags: ["Event Infrastructure", "Real-Time Data", "APIs & SLOs", "Platform Economics"],
    },
    {
      title: "Gainbridge: Product Manager, Data and Measurement",
      description: "Built the instrumentation layer that made performance trustworthy — before optimization.",
      href: "/work/gainbridge-data-architecture",
      imageSrc: "/gainbridge.gif",
      imageAlt: "Gainbridge project",
      tags: [
        "Data Architecture",
        "Measurement Strategy",
        "Event Taxonomy",
        "Identity Resolution",
        "Attribution Systems",
      ],
    },
    {
      title: "Lyft: Quality Engineer → Developer Experience PM",
      description: "When to stop optimizing for conventional metrics — and start optimizing what actually matters.",
      href: "/work/lyft-developer-experience-pm",
      imageSrc: "/lyft.gif",
      imageAlt: "Lyft project",
      tags: [
        "Developer Experience",
        "Internal Tools",
        "Simulation",
        "Systems Thinking",
        "Validation Strategy",
        "Platform Reliability",
      ],
    },
  ],
  howIWork: {
    heading: "How I work: turn complexity into",
    headingAccent: "product decisions",
    quote: "Clarity turns complex tradeoffs into confident product decisions.",
    steps: [
      {
        title: "Define the right to win",
        bullets: ["Competitive landscape", "Differentiated positioning", "Strategic wedge"],
      },
      {
        title: "Map the system",
        bullets: [
          "Follow the end-to-end data flow",
          "Map data → product capability",
          "Define contracts, SLOs, and dependencies",
        ],
      },
      {
        title: "Understand the customer job",
        bullets: [
          "Customer interviews",
          "Workflow and pain-point walkthroughs",
          "Quantify frequency, severity, and stakes",
        ],
      },
      {
        title: "Make the product call",
        bullets: [
          "Customer value",
          "Technical feasibility",
          "Economics and cost",
          "GTM and operational complexity",
        ],
      },
    ],
  },
}
