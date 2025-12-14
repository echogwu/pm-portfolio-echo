"use client"

import Link from "next/link"

interface JourneyNode {
  id: string
  href: string
  position: { x: number; y: number }
  timeframe: string
  role: string
  stageTitle: string
  stageSubtitle: string
  accent: "pink" | "blue" | "orange" | "green"
  roleSide: "left" | "right"
  stageSide: "left" | "right"
  stageBox?: boolean
}

const nodes: JourneyNode[] = [
  {
    id: "lyft",
    href: "/projects/lyft-developer-experience-pm",
    position: { x: 64, y: 12 },
    timeframe: "2020-2023",
    role: "Lyft: Developer Experience PM",
    stageTitle: "Learning what good looks like",
    stageSubtitle: "Stage: Benefiting from mature data infrastructure",
    accent: "pink",
    roleSide: "right",
    stageSide: "left",
    stageBox: true,
  },
  {
    id: "mba",
    href: "/projects/mba-strategic-frameworks",
    position: { x: 46, y: 35 },
    timeframe: "2023-",
    role: "MBA: Student",
    stageTitle: "Understanding incentives & tradeoffs",
    stageSubtitle: "Stage: Why organizations underinvest in data foundations",
    accent: "blue",
    roleSide: "left",
    stageSide: "right",
  },
  {
    id: "gainbridge",
    href: "/projects/gainbridge-data-architecture",
    position: { x: 58, y: 62 },
    timeframe: "2023-2025",
    role: "Gainbridge: Data Product Manager",
    stageTitle: "Owning data systems",
    stageSubtitle: "Stage: Turning fragmented signals into reliable, revenue-critical truth",
    accent: "orange",
    roleSide: "right",
    stageSide: "left",
  },
  {
    id: "dishclosure",
    href: "/projects/dishclosure-founder-mode",
    position: { x: 47, y: 82 },
    timeframe: "2025",
    role: "Dishclosure: Founder, Product Lead",
    stageTitle: "Discovering system limits",
    stageSubtitle: "Stage: Where data integrity fundamentally breaks",
    accent: "green",
    roleSide: "left",
    stageSide: "right",
  },
]

function accentStyles(accent: JourneyNode["accent"]) {
  switch (accent) {
    case "pink":
      return { text: "text-pink-600", bg: "bg-pink-300", dot: "#f3a6b6" }
    case "blue":
      return { text: "text-blue-600", bg: "bg-blue-300", dot: "#73a3e6" }
    case "orange":
      return { text: "text-orange-500", bg: "bg-orange-300", dot: "#f2a15a" }
    case "green":
    default:
      return { text: "text-green-600", bg: "bg-green-300", dot: "#4fb36c" }
  }
}

export function RouteMap() {
  const generateSmoothPath = () => {
    const points = nodes.map((n) => ({ x: n.position.x, y: n.position.y }))
    if (points.length < 2) return ""
    let pathData = `M ${points[0].x} ${points[0].y}`
    for (let i = 0; i < points.length - 1; i++) {
      const current = points[i]
      const next = points[i + 1]
      const controlX = (current.x + next.x) / 2
      const controlY = i % 2 === 0 ? Math.min(current.y, next.y) - 8 : Math.max(current.y, next.y) + 8
      pathData += ` Q ${controlX} ${controlY}, ${next.x} ${next.y}`
    }
    return pathData
  }

  return (
    <section className="max-w-6xl mx-auto px-6 lg:px-8 pb-24">
      <div className="flex flex-col gap-2 mb-10">
        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-balance">Career Journey</h2>
        <p className="text-muted-foreground max-w-2xl">
          A visual map of roles and the “stage” each one taught me about building reliable data systems.
        </p>
      </div>

      <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden border border-border bg-[#f8f7f4]">
        {/* Grid background (matches screenshot vibe) */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(15,23,42,0.06) 0, rgba(15,23,42,0.06) 1px, transparent 1px, transparent 52px), repeating-linear-gradient(90deg, rgba(15,23,42,0.06) 0, rgba(15,23,42,0.06) 1px, transparent 1px, transparent 52px)",
            opacity: 0.35,
          }}
        />

        {/* Curve */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            d={generateSmoothPath()}
            stroke="rgba(2,6,23,0.85)"
            strokeWidth="0.55"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Nodes + labels */}
        {nodes.map((node) => {
          const a = accentStyles(node.accent)
          const roleIsRight = node.roleSide === "right"
          const stageIsRight = node.stageSide === "right"

          return (
            <div
              key={node.id}
              className="absolute"
              style={{
                left: `${node.position.x}%`,
                top: `${node.position.y}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              {/* Dot */}
              <div
                className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                  backgroundColor: a.dot,
                  border: "2px solid rgba(2,6,23,0.9)",
                }}
                aria-hidden="true"
              />

              {/* Role label (year pill + role) */}
              <Link
                href={node.href}
                className="absolute top-1/2 -translate-y-1/2 group"
                style={roleIsRight ? { left: 26 } : { right: 26 }}
              >
                <div className={`flex items-center gap-4 ${roleIsRight ? "" : "flex-row-reverse"}`}>
                  <span
                    className={`inline-flex items-center justify-center px-4 py-1.5 rounded-lg border-2 border-black/80 text-sm font-semibold ${a.bg}`}
                    style={{ color: "rgba(2,6,23,0.9)" }}
                  >
                    {node.timeframe}
                  </span>
                  <span className="text-lg font-semibold text-black/85 group-hover:underline underline-offset-4">
                    {node.role}
                  </span>
                </div>
              </Link>

              {/* Stage callout */}
              <div
                className={`absolute top-1/2 -translate-y-1/2 ${a.text}`}
                style={stageIsRight ? { left: 26 } : { right: 26 }}
              >
                <div
                  className={node.stageBox ? "rounded-md bg-white/80 px-4 py-3 backdrop-blur-sm" : undefined}
                  style={node.stageBox ? { boxShadow: "0 1px 0 rgba(2,6,23,0.06)" } : undefined}
                >
                  <div className="text-xl font-semibold leading-tight text-balance">{node.stageTitle}</div>
                  <div className="text-lg leading-snug opacity-85 text-pretty">{node.stageSubtitle}</div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
