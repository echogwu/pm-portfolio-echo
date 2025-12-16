"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"
import { withBasePath } from "@/lib/seo"

export type WorkSample = {
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

export const WORK_SAMPLES: WorkSample[] = [
  {
    id: "dishclosure-product-strategy",
    headline: "Product strategy",
    subline: "Market research, competitive analysis, and ICP definition.",
    projectHref: "/projects/dishclosure-founder-mode",
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
    projectHref: "/projects/dishclosure-founder-mode",
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
    headline: "UX prototype",
    subline: "Operator-first workflow prototype for input and validation.",
    projectHref: "/projects/dishclosure-founder-mode",
    projectLabel: "Dishclosure",
    artifactHref:
      "https://www.figma.com/board/lk8ToFLRwePtXxSJ2EIKa6/Dishclosure-UX-Prototype?node-id=0-1&t=lBRBH58cwN5ljgeU-1",
    artifactLabel: "Open in Figma",
    images: [{ src: "/dishclosure-ux-1.png", alt: "Dishclosure UX prototype — Menu items with dietary tags" }],
  },
  {
    id: "dishclosure-legal-doc",
    headline: "Legal doc",
    subline: "Drafting constraints, liability considerations, and policy framing.",
    projectHref: "/projects/dishclosure-founder-mode",
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
    headline: "Technical design considerations",
    subline: "System constraints, integration assumptions, and reliability tradeoffs.",
    projectHref: "/projects/dishclosure-founder-mode",
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
    id: "gainbridge-data-architecture-placeholder",
    headline: "Growth strategy (One-pager)",
    subline:
      "Built the decision infrastructure behind D2C growth by aligning acquisition, education, and attribution around behavioral signals",
    projectHref: "/projects/gainbridge-data-architecture",
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
    id: "gainbridge-metrics-dictionary-placeholder",
    headline: "Customer Journey × Data Flow Architecture",
    subline:
      "Connected customer journeys to data flows to surface identity fragmentation and delayed activation caused by partial attribution and unclear customer profiles.",
    projectHref: "/projects/gainbridge-data-architecture",
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
    id: "gainbridge-delivery-roadmap-placeholder",
    headline: "Attribution Starts Before Conversion",
    subline: "Reframed attribution as an identity and data-visibility problem, not a reporting problem.",
    projectHref: "/projects/gainbridge-data-architecture",
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
]

function SafeImg({
  src,
  alt,
  className,
}: {
  src: string
  alt: string
  className?: string
}) {
  return (
    <img
      src={withBasePath(src)}
      alt={alt}
      className={className}
      onError={(e) => {
        // Avoid broken images during asset iteration.
        const img = e.currentTarget
        const fallback = withBasePath("/placeholder.jpg")
        if (img.src !== fallback) img.src = fallback
      }}
    />
  )
}

function clamp01(n: number) {
  return Math.max(0, Math.min(1, n))
}

async function computeAverageLuminance(src: string): Promise<number> {
  const url = withBasePath(src)
  return await new Promise((resolve) => {
    const img = new Image()
    img.decoding = "async"
    img.onload = () => {
      try {
        const canvas = document.createElement("canvas")
        const ctx = canvas.getContext("2d", { willReadFrequently: true })
        if (!ctx) return resolve(0.5)

        const w = 24
        const h = 24
        canvas.width = w
        canvas.height = h
        ctx.drawImage(img, 0, 0, w, h)
        const data = ctx.getImageData(0, 0, w, h).data

        let sum = 0
        let count = 0
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i] / 255
          const g = data[i + 1] / 255
          const b = data[i + 2] / 255
          const a = data[i + 3] / 255
          if (a < 0.05) continue
          // relative luminance (sRGB-ish)
          const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b
          sum += lum
          count += 1
        }

        resolve(count > 0 ? clamp01(sum / count) : 0.5)
      } catch {
        resolve(0.5)
      }
    }
    img.onerror = () => resolve(0.5)
    img.src = url
  })
}

function LightboxModal({
  open,
  images,
  activeIndex,
  title,
  pdfSrc,
  artifactHref,
  artifactLabel,
  onPrev,
  onNext,
  onClose,
}: {
  open: boolean
  images: { src: string; alt: string }[]
  activeIndex: number
  title: string
  pdfSrc?: string
  artifactHref?: string
  artifactLabel?: string
  onPrev: () => void
  onNext: () => void
  onClose: () => void
}) {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    if (!open) return
    closeButtonRef.current?.focus()
  }, [open])

  useEffect(() => {
    if (!open) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      // Only enable gallery navigation for multi-image (non-PDF) previews.
      if (!pdfSrc && images.length > 1) {
        if (e.key === "ArrowLeft") onPrev()
        if (e.key === "ArrowRight") onNext()
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [open, onClose, onNext, onPrev, pdfSrc, images.length])

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  if (!open) return null

  const isPdf = !!pdfSrc
  const total = images.length
  const idx = Math.max(0, Math.min(activeIndex, Math.max(0, total - 1)))
  const current = images[idx] ?? { src: "/placeholder.jpg", alt: "Placeholder image" }
  const canNavigate = !isPdf && total > 1

  const openFullSizeHref = isPdf ? withBasePath(pdfSrc!) : withBasePath(current.src)

  return (
    <div className="fixed inset-0 z-[100]">
      <button
        type="button"
        className="absolute inset-0 bg-black/60"
        aria-label="Close preview"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="absolute inset-0 flex items-center justify-center p-4"
      >
        <div className="w-full max-w-5xl overflow-hidden rounded-2xl border border-border bg-background shadow-xl">
          <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-4">
            <div className="min-w-0">
              <div className="text-sm text-muted-foreground">Preview</div>
              <div className="truncate text-base font-semibold text-foreground">{title}</div>
            </div>
            <div className="flex items-center gap-2">
              {artifactHref ? (
                <a
                  href={artifactHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {artifactLabel ?? "View full artifact"} ↗
                </a>
              ) : null}
              <button
                ref={closeButtonRef}
                type="button"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-3 py-1.5 text-sm font-medium text-foreground hover:bg-muted transition-colors"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>

          <div className="p-4 sm:p-6">
            {isPdf ? (
              <div className="overflow-hidden rounded-xl border border-border bg-background shadow-sm">
                <iframe
                  title={title}
                  src={withBasePath(pdfSrc!)}
                  className="h-[70vh] w-full"
                />
              </div>
            ) : (
              <div className="flex items-center justify-center rounded-xl bg-muted p-2 ring-1 ring-inset ring-black/10 dark:ring-white/10">
                <SafeImg
                  src={current.src}
                  alt={current.alt}
                  className="max-h-[70vh] max-w-full h-auto w-auto object-contain"
                />
              </div>
            )}
            {canNavigate ? (
              <div className="mt-4 flex items-center justify-between gap-3">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors"
                  onClick={onPrev}
                  aria-label="Previous image"
                >
                  ← Prev
                </button>
                <div className="text-xs text-muted-foreground">
                  {idx + 1} / {total}
                </div>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors"
                  onClick={onNext}
                  aria-label="Next image"
                >
                  Next →
                </button>
              </div>
            ) : null}
            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
              <div>
                {isPdf
                  ? "Tip: scroll to read. Press Esc to close."
                  : "Tip: use your keyboard arrows (← / →). Press Esc to close."}
              </div>
              <a
                href={openFullSizeHref}
                target="_blank"
                rel="noreferrer"
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Open full size
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function WorkSampleCard({
  item,
  onOpen,
}: {
  item: WorkSample
  onOpen: () => void
}) {
  const thumb = item.images[0] ?? { src: "/placeholder.jpg", alt: "Placeholder image" }

  // Default to a subtle always-on tint so light/white previews don't feel washed out.
  // Allow opting out per-card via `defaultPreviewTint: false`.
  const overlayBase = item.defaultPreviewTint === false ? "opacity-0" : "opacity-15"

  const [pillVariant, setPillVariant] = useState<"light" | "dark">("dark")

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      const lum = await computeAverageLuminance(thumb.src)
      if (cancelled) return
      // Bright images (off-white) need a dark pill; darker images need a light pill.
      setPillVariant(lum > 0.58 ? "dark" : "light")
    })()
    return () => {
      cancelled = true
    }
  }, [thumb.src])

  const pillClass =
    pillVariant === "dark"
      ? "bg-black/75 text-white border border-white/10 shadow-sm"
      : "bg-white/85 text-foreground border border-black/10 shadow-sm"

  return (
    <article className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
      <button type="button" className="group block w-full text-left" onClick={onOpen}>
        <div className="relative bg-muted aspect-[16/10] overflow-hidden ring-1 ring-inset ring-black/10 dark:ring-white/10">
          <SafeImg
            src={thumb.src}
            alt={thumb.alt}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-200 group-hover:scale-[1.02]"
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0 ${overlayBase} group-hover:opacity-100 transition-opacity`}
          />
          <div className="absolute bottom-3 left-3 right-3">
            <div
              className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-sm transition-transform duration-200 group-hover:-translate-y-0.5 ${pillClass}`}
            >
              {item.images.length > 1 ? "Click to preview (gallery)" : "Click to preview"}
            </div>
          </div>
        </div>
      </button>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-foreground">{item.headline}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.subline}</p>
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
          <div className="flex w-full items-center justify-between gap-3">
            <Link
              href={item.projectHref}
              className="min-w-0 truncate text-[clamp(0.8rem,2.6vw,0.95rem)] font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back to {item.projectLabel}
            </Link>
            {item.artifactHref ? (
              <a
                href={item.artifactHref}
                target="_blank"
                rel="noreferrer"
                className="shrink-0 whitespace-nowrap inline-flex items-center justify-center rounded-lg bg-primary px-2.5 py-1 text-[clamp(0.8rem,2.6vw,0.95rem)] font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:px-3 sm:py-1.5"
              >
                {item.artifactLabel ?? "View full artifact"} ↗
              </a>
            ) : (
              <span className="shrink-0" />
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

export function WorkSamplesGrid({ items = WORK_SAMPLES }: { items?: WorkSample[] }) {
  const stableItems = useMemo(() => items, [items])

  const [active, setActive] = useState<WorkSample | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const activeImages = active?.images ?? []
  const canNavigate = activeImages.length > 1

  const goPrev = () => {
    if (!active) return
    const total = active.images.length
    if (total <= 1) return
    setActiveIndex((i) => (i - 1 + total) % total)
  }

  const goNext = () => {
    if (!active) return
    const total = active.images.length
    if (total <= 1) return
    setActiveIndex((i) => (i + 1) % total)
  }

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {stableItems.map((item) => (
          <WorkSampleCard
            key={item.id}
            item={item}
            onOpen={() => {
              setActive(item)
              setActiveIndex(0)
            }}
          />
        ))}
      </div>

      <LightboxModal
        open={!!active}
        images={
          activeImages.length > 0
            ? activeImages
            : [{ src: "/placeholder.jpg", alt: "Placeholder image" }]
        }
        activeIndex={activeIndex}
        title={active?.headline ?? "Preview"}
        pdfSrc={active?.pdfSrc}
        artifactHref={active?.artifactHref}
        artifactLabel={active?.artifactLabel}
        onPrev={canNavigate ? goPrev : () => {}}
        onNext={canNavigate ? goNext : () => {}}
        onClose={() => setActive(null)}
      />
    </>
  )
}


