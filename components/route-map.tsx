"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

interface JourneyNode {
  id: string
  title: string
  summary: string
  href: string
  position: { x: number; y: number }
  size: "small" | "medium" | "large"
  color: string
  year: string
  icon: string
  scale: number
  opacity: number
}

const nodes: JourneyNode[] = [
  {
    id: "engineering",
    title: "Engineering Foundation",
    summary: "Building technical depth at scale",
    href: "/projects/engineering-foundation",
    position: { x: 15, y: 65 },
    size: "small",
    color: "#7a8fb8",
    year: "2012-2016",
    icon: "/amazon-logo.png", // Updated to use PNG logo
    scale: 0.8,
    opacity: 1,
  },
  {
    id: "lyft",
    title: "Lyft",
    summary: "Improving reliability at scale",
    href: "/projects/lyft-developer-experience-pm",
    position: { x: 35, y: 42 },
    size: "large",
    color: "#e63ba8",
    year: "2019-2022",
    icon: "🚗",
    scale: 1.15,
    opacity: 1,
  },
  {
    id: "mba",
    title: "MBA",
    summary: "Financial modeling under uncertainty",
    href: "/projects/mba-strategic-frameworks",
    position: { x: 52, y: 55 },
    size: "medium",
    color: "#c9af68",
    year: "2017-2019",
    icon: "/cal-logo.png", // Updated to use Cal logo image
    scale: 0.95,
    opacity: 0.88,
  },
  {
    id: "gainbridge",
    title: "Gainbridge",
    summary: "Cross-team data foundation",
    href: "/projects/gainbridge-data-architecture",
    position: { x: 68, y: 35 },
    size: "medium",
    color: "#7378c4",
    year: "2023-2025",
    icon: "🏢",
    scale: 1.08,
    opacity: 0.98,
  },
  {
    id: "dishclosure",
    title: "Dishclosure",
    summary: "Zero-to-one allergen data layer",
    href: "/projects/dishclosure-founder-mode",
    position: { x: 82, y: 58 },
    size: "medium",
    color: "#5a9a7a",
    year: "2022-2023",
    icon: "🍽️",
    scale: 1.0,
    opacity: 0.92,
  },
]

const getSizeValue = (size: "small" | "medium" | "large", scale: number) => {
  const baseSize = size === "large" ? 140 : size === "medium" ? 100 : 80
  return baseSize * scale
}

export function RouteMap() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)
  const [skaterProgress, setSkaterProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSkaterProgress((prev) => (prev + 0.5) % 100)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  const getSkaterPosition = (progress: number) => {
    const t = progress / 100
    const points = nodes.map((n) => n.position)

    if (t === 0) return points[0]
    if (t === 1) return points[points.length - 1]

    const segmentCount = points.length - 1
    const segmentIndex = Math.floor(t * segmentCount)
    const segmentT = t * segmentCount - segmentIndex

    const p0 = points[Math.max(0, segmentIndex - 1)]
    const p1 = points[segmentIndex]
    const p2 = points[Math.min(points.length - 1, segmentIndex + 1)]
    const p3 = points[Math.min(points.length - 1, segmentIndex + 2)]

    // Catmull-Rom spline for smooth organic curves
    const x =
      0.5 *
      (2 * p1.x +
        (-p0.x + p2.x) * segmentT +
        (2 * p0.x - 5 * p1.x + 4 * p2.x - p3.x) * segmentT * segmentT +
        (-p0.x + 3 * p1.x - 3 * p2.x + p3.x) * segmentT * segmentT * segmentT)

    const y =
      0.5 *
      (2 * p1.y +
        (-p0.y + p2.y) * segmentT +
        (2 * p0.y - 5 * p1.y + 4 * p2.y - p3.y) * segmentT * segmentT +
        (-p0.y + 3 * p1.y - 3 * p2.y + p3.y) * segmentT * segmentT * segmentT)

    return { x, y }
  }

  const skaterPos = getSkaterPosition(skaterProgress)

  const generateSmoothPath = () => {
    const points = nodes.map((n) => ({ x: n.position.x, y: n.position.y }))
    let pathData = `M ${points[0].x} ${points[0].y}`

    for (let i = 0; i < points.length - 1; i++) {
      const current = points[i]
      const next = points[i + 1]
      const controlX = (current.x + next.x) / 2
      const controlY = i % 2 === 0 ? Math.min(current.y, next.y) - 5 : Math.max(current.y, next.y) + 5

      pathData += ` Q ${controlX} ${controlY}, ${next.x} ${next.y}`
    }

    return pathData
  }

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 text-balance">
          Roadmap to <span className="text-[#e63ba8]">Product Leadership</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
          A visual journey through my career evolution - shaped by the experiences that defined my path, with Lyft at
          the heart of my transformation
        </p>
      </div>

      <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden border border-slate-300/40 dark:border-slate-700/40 bg-[#f8f7f4] dark:bg-slate-900">
        {/* Radial vignette for focus */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 70% 60% at 50% 45%, transparent 0%, rgba(0,0,0,0.02) 100%)",
            zIndex: 0,
          }}
        />

        {/* Subtle noise/grain texture */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            opacity: 0.03,
            zIndex: 0,
          }}
        />

        {/* Faint dotted grid/contour pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, #6b7280 0.5px, transparent 0.5px)",
            backgroundSize: "24px 24px",
            opacity: 0.025,
            zIndex: 0,
          }}
        />

        <svg
          className="absolute inset-0 w-full h-full"
          style={{ zIndex: 1 }}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            {/* 2-tone subtle gradient for the path */}
            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#d4508f" stopOpacity="0.4" />
              <stop offset="30%" stopColor="#d4508f" stopOpacity="0.65" />
              <stop offset="50%" stopColor="#d4508f" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#d4508f" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#d4508f" stopOpacity="0.5" />
            </linearGradient>

            {/* Soft shadow for path */}
            <filter id="softPathShadow">
              <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" />
              <feOffset dx="0" dy="1" result="offsetblur" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.12" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Main path with variable stroke width effect */}
          <path
            d={generateSmoothPath()}
            stroke="url(#pathGradient)"
            strokeWidth="1.2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#softPathShadow)"
            opacity="0.9"
          />

          {/* Thinner overlay path for transitions */}
          <path
            d={generateSmoothPath()}
            stroke="#d4508f"
            strokeWidth="0.3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.15"
          />

          {/* Tiny wayfinding markers along the path */}
          {nodes.slice(0, -1).map((node, i) => {
            const nextNode = nodes[i + 1]
            const midX = (node.position.x + nextNode.position.x) / 2
            const midY = (node.position.y + nextNode.position.y) / 2
            return <circle key={`marker-${i}`} cx={midX} cy={midY} r="0.4" fill="#d4508f" opacity="0.3" />
          })}
        </svg>

        {/* Rollerskate animation */}
        <div
          className="absolute transition-all duration-100 ease-linear"
          style={{
            left: `${skaterPos.x}%`,
            top: `${skaterPos.y}%`,
            transform: "translate(-50%, -50%)",
            zIndex: 5,
          }}
        >
          <div className="text-6xl drop-shadow-lg animate-bounce" style={{ animationDuration: "1s" }}>
            🛼
          </div>
        </div>

        {nodes.map((node) => {
          const size = getSizeValue(node.size, node.scale)
          const isHovered = hoveredNode === node.id

          // Desaturate colors slightly for editorial feel
          const desaturatedColor = node.color.replace(/#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})/i, (match, r, g, b) => {
            const red = Number.parseInt(r, 16)
            const green = Number.parseInt(g, 16)
            const blue = Number.parseInt(b, 16)
            const gray = (red + green + blue) / 3
            const newR = Math.round(red * 0.85 + gray * 0.15)
              .toString(16)
              .padStart(2, "0")
            const newG = Math.round(green * 0.85 + gray * 0.15)
              .toString(16)
              .padStart(2, "0")
            const newB = Math.round(blue * 0.85 + gray * 0.15)
              .toString(16)
              .padStart(2, "0")
            return `#${newR}${newG}${newB}`
          })

          return (
            <div
              key={node.id}
              className="absolute transition-all duration-300"
              style={{
                left: `${node.position.x}%`,
                top: `${node.position.y}%`,
                transform: "translate(-50%, -50%)",
                zIndex: isHovered ? 20 : Math.round(node.scale * 10),
                opacity: node.opacity,
              }}
            >
              <Link href={node.href}>
                <button
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  className="relative group"
                  style={{
                    width: size,
                    height: size,
                  }}
                >
                  {/* Stronger but soft shadows with thin border */}
                  <div
                    className="absolute inset-0 rounded-full transition-all duration-300 border-[3px] flex items-center justify-center"
                    style={{
                      backgroundColor: desaturatedColor,
                      borderColor: "rgba(255, 255, 255, 0.6)",
                      transform: isHovered ? `scale(1.08)` : "scale(1)",
                      boxShadow: isHovered
                        ? `0 16px 36px rgba(0,0,0,0.14), 0 8px 18px rgba(0,0,0,0.1), 0 3px 8px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.2)`
                        : `0 10px 24px rgba(0,0,0,0.11), 0 5px 12px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.15)`,
                    }}
                  >
                    {node.icon.startsWith("/") ? (
                      <img
                        src={node.icon || "/placeholder.svg"}
                        alt={node.title}
                        className="w-[70%] h-[70%] object-contain rounded-full"
                      />
                    ) : (
                      <div className="text-4xl" style={{ fontSize: `${node.scale * 2.5}rem` }}>
                        {node.icon}
                      </div>
                    )}
                  </div>

                  {/* Label with refined styling */}
                  <div
                    className="absolute w-max text-center"
                    style={{
                      top: node.position.y < 50 ? size + 8 : -32,
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  >
                    <div
                      className="font-semibold text-sm px-3 py-1.5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm rounded-lg border border-slate-300/50 dark:border-slate-700/50"
                      style={{
                        boxShadow: "0 3px 10px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.05)",
                        fontSize: `${0.85 + node.scale * 0.1}rem`,
                      }}
                    >
                      <span style={{ color: desaturatedColor }}>{node.title}</span>
                    </div>
                  </div>

                  {/* Hover card with accent color highlight */}
                  {isHovered && (
                    <div
                      className="absolute bg-white dark:bg-slate-900 rounded-xl p-4 border-2 animate-in fade-in zoom-in-95 duration-200 w-64"
                      style={{
                        top: node.position.y < 50 ? size + 45 : -140,
                        left: "50%",
                        transform: "translateX(-50%)",
                        borderColor: "#d4508f",
                        zIndex: 30,
                        boxShadow:
                          "0 20px 48px rgba(0,0,0,0.14), 0 10px 24px rgba(0,0,0,0.1), 0 4px 10px rgba(0,0,0,0.08)",
                      }}
                    >
                      <div
                        className="absolute w-3 h-3 rotate-45 border"
                        style={{
                          [node.position.y < 50 ? "top" : "bottom"]: -7,
                          left: "50%",
                          transform: "translateX(-50%)",
                          backgroundColor: "white",
                          borderColor: "#d4508f",
                          borderWidth: node.position.y < 50 ? "2px 0 0 2px" : "0 2px 2px 0",
                        }}
                      />

                      <h3 className="font-bold mb-2" style={{ color: desaturatedColor }}>
                        {node.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">{node.summary}</p>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground font-medium">{node.year}</span>
                        <span className="font-semibold flex items-center gap-1" style={{ color: "#d4508f" }}>
                          Explore
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  )}
                </button>
              </Link>
            </div>
          )
        })}
      </div>
    </section>
  )
}
