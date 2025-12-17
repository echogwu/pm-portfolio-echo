// Centralized artifact catalog used by the /artifacts gallery and project pages.
// Kept server-safe (no "use client" / browser APIs) so it can be imported anywhere.

export type Artifact = {
  id: string
  headline: string
  subline: string
  projectHref: string
  projectLabel: string
  images: { src: string; alt: string }[]
  pdfSrc?: string
  artifactHref?: string
  artifactLabel?: string
  defaultPreviewTint?: boolean
}

export const ARTIFACTS: Artifact[] = [
  {
    id: "dishclosure-product-strategy",
    headline: "Product Strategy",
    subline: "Market research, competitive analysis, and ICP definition.",
    projectHref: "/journey/dishclosure-founder-mode",
    projectLabel: "Dishclosure",
    pdfSrc: "/dishclosure-product-strategy.pdf",
    artifactHref: "/dishclosure-product-strategy.pdf",
    artifactLabel: "Open PDF",
    images: [
      {
        src: "/dishclosure-product-strategy.png",
        alt: "Dishclosure product strategy preview (PDF thumbnail)",
      },
    ],
  },
  {
    id: "dishclosure-data-erd",
    headline: "Data Entity-Relationship Diagram(ERD)",
    subline: "Entity relationships and schema foundations for allergen lineage.",
    projectHref: "/journey/dishclosure-founder-mode",
    projectLabel: "Dishclosure",
    images: [
      {
        src: "/dishclosure-erd.png",
        alt: "Dishclosure ERD diagram",
      },
    ],
  },
  {
    id: "dishclosure-ux-prototype",
    headline: "UX Prototype",
    subline: "Operator-first workflow prototype for input and validation.",
    projectHref: "/journey/dishclosure-founder-mode",
    projectLabel: "Dishclosure",
    artifactHref:
      "https://www.figma.com/board/lk8ToFLRwePtXxSJ2EIKa6/Dishclosure-UX-Prototype?node-id=0-1&t=lBRBH58cwN5ljgeU-1",
    artifactLabel: "Open in Figma",
    images: [{ src: "/dishclosure-ux-1.png", alt: "Dishclosure UX prototype — Menu items with dietary tags" }],
  },
  {
    id: "dishclosure-legal-doc",
    headline: "Pilot Program Agreement",
    subline: "Drafting constraints, liability considerations, and policy framing.",
    projectHref: "/journey/dishclosure-founder-mode",
    projectLabel: "Dishclosure",
    pdfSrc: "/dishclosure-legal.pdf",
    artifactHref: "/dishclosure-legal.pdf",
    artifactLabel: "Open PDF",
    images: [
      {
        src: "/dishclosure-legal.png",
        alt: "Dishclosure legal document preview (PDF thumbnail)",
      },
    ],
  },
  {
    id: "dishclosure-technical-design",
    headline: "Technical Design Considerations",
    subline: "System constraints, integration assumptions, and reliability tradeoffs.",
    projectHref: "/journey/dishclosure-founder-mode",
    projectLabel: "Dishclosure",
    artifactHref: "https://github.com/echogwu/dishclosure-operator-and-diner-app",
    artifactLabel: "View GitHub repo",
    defaultPreviewTint: true,
    images: [
      {
        src: "/dishclosure-tech-consideration.png",
        alt: "Dishclosure technical design considerations preview",
      },
    ],
  },
  {
    id: "gainbridge-growth-strategy-one-pager",
    headline: "Growth Strategy (One-pager)",
    subline:
      "Built the decision infrastructure behind D2C growth by aligning acquisition, education, and attribution around behavioral signals",
    projectHref: "/journey/gainbridge-data-architecture",
    projectLabel: "Gainbridge",
    pdfSrc: "/gainbridge-growth-engine.pdf",
    artifactHref: "/gainbridge-growth-engine.pdf",
    artifactLabel: "Open PDF",
    defaultPreviewTint: true,
    images: [
      {
        src: "/gainbridge-growth-engine.png",
        alt: "Gainbridge growth engine preview (PDF thumbnail)",
      },
    ],
  },
  {
    id: "gainbridge-customer-journey-data-flow-architecture",
    headline: "Customer Journey × Data Flow Architecture",
    subline:
      "Connected customer journeys to data flows to surface identity fragmentation and delayed activation caused by partial attribution and unclear customer profiles.",
    projectHref: "/journey/gainbridge-data-architecture",
    projectLabel: "Gainbridge",
    defaultPreviewTint: true,
    images: [
      {
        src: "/gainbridge-data-flow.png",
        alt: "Gainbridge customer journey × data flow architecture diagram",
      },
    ],
  },
  {
    id: "gainbridge-attribution-starts-before-conversion",
    headline: "Attribution Starts Before Conversion",
    subline: "Reframed attribution as an identity and data-visibility problem, not a reporting problem.",
    projectHref: "/journey/gainbridge-data-architecture",
    projectLabel: "Gainbridge",
    pdfSrc: "/gainbridge-mta.pdf",
    artifactHref: "/gainbridge-mta.pdf",
    artifactLabel: "Open PDF",
    defaultPreviewTint: true,
    images: [
      {
        src: "/gainbridge-mta.png",
        alt: "Gainbridge multi-touch attribution diagram preview",
      },
    ],
  },
  {
    id: "ideo-synthesizing-qualitative-insight",
    headline: "IDEO — Turning Qualitative Chaos into Behavioral Insight",
    subline:
      "Clustered interviews into behavioral patterns and tensions, translating messy human input into clear insights.",
    projectHref: "/journey/ideo-design-thinking",
    projectLabel: "IDEO",
    artifactHref:
      "https://www.figma.com/board/o7BSFYxHFIv7s26FUvbzv0/Design-Interviews?node-id=0-1&t=Z9myuX0UxY0qVCO1-1",
    artifactLabel: "Open in Figma",
    defaultPreviewTint: true,
    images: [
      {
        src: "/ideo-synthesizing.png",
        alt: "IDEO synthesizing interviews into behavioral patterns preview",
      },
    ],
  },
  {
    id: "ideo-insight-to-structure",
    headline: "IDEO — Translating Human Insight into Product Structure",
    subline: "Converted behavioral insights into product constraints and flows",
    projectHref: "/journey/ideo-design-thinking",
    projectLabel: "IDEO",
    artifactHref: "https://docs.google.com/presentation/d/16BeaNorse-9Kj5e1Krc0tjEQov3lERfMNmKgfRx7tzc/edit?usp=sharing",
    artifactLabel: "Open slides",
    defaultPreviewTint: true,
    images: [
      {
        src: "/ideo-prototype.jpeg",
        alt: "IDEO prototype and flow structure preview",
      },
    ],
  },
  {
    id: "mba-product-profitability-under-uncertainty",
    headline: "Product Profitability Under Uncertainty",
    subline:
      "Built a multi-scenario financial model to decide whether a zero-cost hardware product with subscription revenue should launch, scale, or be killed.",
    projectHref: "/journey/mba-strategic-frameworks",
    projectLabel: "MBA",
    artifactHref:
      "https://docs.google.com/spreadsheets/d/1O3cR9yBl4f_Kjx_nUDBBTLYc-6a1-TjS/edit?usp=sharing&ouid=107147940664291051669&rtpof=true&sd=true",
    artifactLabel: "Open spreadsheet",
    defaultPreviewTint: true,
    images: [
      {
        src: "/mba-financial-model.png",
        alt: "MBA financial model preview",
      },
    ],
  },
  {
    id: "mba-defending-a-core-business-in-the-ai-era",
    headline: "Defending a Core Business in the AI Era - Google Assist",
    subline:
      "Proposed a bundled subscription and agentic product strategy to defend Google Search from AI disruption while creating a new recurring revenue stream.",
    projectHref: "/journey/mba-strategic-frameworks",
    projectLabel: "MBA",
    artifactHref: "https://docs.google.com/presentation/d/1kPFvllmRW0zAm5yl58_4BXYPbs5CyJWoQoPOFgd2zJM/edit?usp=sharing",
    artifactLabel: "Open slides",
    defaultPreviewTint: true,
    images: [
      {
        src: "/mba-defense-strategy.png",
        alt: "MBA defense strategy slides preview",
      },
    ],
  },
  {
    id: "mba-designing-a-sustainable-gtm-model",
    headline: "Designing a Sustainable Go-to-Market Model",
    subline:
      "Designed pricing, GTM sequencing, and unit economics for an early-stage resilience startup balancing impact, scale, and financial viability.",
    projectHref: "/journey/mba-strategic-frameworks",
    projectLabel: "MBA",
    artifactHref: "https://docs.google.com/presentation/d/1urlMSRZggiZCJye_UfFxvwoBJPp_m_6T/edit?usp=sharing&ouid=107147940664291051669&rtpof=true&sd=true",
    artifactLabel: "Open slides",
    defaultPreviewTint: true,
    images: [
      {
        src: "/mba-gtm.png",
        alt: "MBA go-to-market model preview",
      },
    ],
  },
  {
    id: "mba-five-year-strategic-planning-board-level",
    headline: "Five-Year Strategic Planning at the Board Level",
    subline:
      "Contributed to a charter school’s 5-year strategic plan spanning enrollment growth, talent pipelines, facilities expansion, and financial sustainability.",
    projectHref: "/journey/mba-strategic-frameworks",
    projectLabel: "MBA",
    pdfSrc: "/mba-strategic-planning-yuming.pdf",
    artifactHref: "/mba-strategic-planning-yuming.pdf",
    artifactLabel: "Open PDF",
    defaultPreviewTint: true,
    images: [
      {
        src: "/mba-strategic-planning-yuming.png",
        alt: "MBA five-year strategic planning one-pager preview",
      },
    ],
  },
]


