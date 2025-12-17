"use client"

import { useEffect, useMemo, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { ArtifactsGrid } from "@/components/work-samples-grid"
import { ARTIFACTS } from "@/lib/artifacts"

type Tab = {
  key: string
  label: string
  count: number
}

function tabButtonClass(active: boolean) {
  return [
    "inline-flex flex-1 min-w-[9rem] items-center justify-center gap-2 rounded-lg px-3 py-2 text-[clamp(0.82rem,2.5vw,0.95rem)] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    active
      ? "bg-background/95 text-foreground shadow-sm ring-1 ring-sky-200/70 dark:ring-sky-800/45"
      : "text-foreground/70 hover:text-foreground hover:bg-background/40 hover:ring-1 hover:ring-border/60",
  ].join(" ")
}

export function ArtifactsTabs() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const groups = useMemo(() => {
    const map = new Map<string, typeof ARTIFACTS>()
    for (const item of ARTIFACTS) {
      const k = item.projectLabel
      map.set(k, [...(map.get(k) ?? []), item])
    }

    const tabs: Tab[] = [...map.entries()]
      .map(([label, items]) => ({ key: label.toLowerCase(), label, count: items.length }))
      .sort((a, b) => a.label.localeCompare(b.label))

    const byLabel = map
    return { tabs, byLabel }
  }, [])

  const requestedProject = searchParams.get("project")
  const requestedArtifact = searchParams.get("artifact")

  const resolveLabel = (raw: string | null | undefined) => {
    if (!raw) return null
    const normalized = raw.trim().toLowerCase()
    return groups.tabs.find((t) => t.label.toLowerCase() === normalized)?.label ?? null
  }

  const defaultTab = groups.tabs.find((t) => t.label === "Dishclosure")?.label ?? groups.tabs[0]?.label ?? "Work"
  const [activeLabel, setActiveLabel] = useState<string>(() => resolveLabel(requestedProject) ?? defaultTab)

  useEffect(() => {
    const resolved = resolveLabel(requestedProject)
    if (!resolved) return
    setActiveLabel(resolved)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requestedProject])

  const activeItems = groups.byLabel.get(activeLabel) ?? []

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <div className="w-full">
          <div className="flex w-full rounded-xl border border-border/70 bg-gradient-to-r from-sky-100/70 via-muted/35 to-lime-100/60 dark:from-sky-950/35 dark:via-muted/20 dark:to-lime-950/25 shadow-sm p-1 overflow-x-auto [box-shadow:inset_0_1px_0_rgba(255,255,255,0.65),0_1px_2px_rgba(15,23,42,0.06)] dark:[box-shadow:inset_0_1px_0_rgba(255,255,255,0.08),0_1px_2px_rgba(0,0,0,0.35)]">
            <div className="flex w-full gap-1">
              {groups.tabs.map((t) => {
                const isActive = t.label === activeLabel
                return (
                  <button
                    key={t.key}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={tabButtonClass(isActive)}
                    onClick={() => {
                      setActiveLabel(t.label)
                      const params = new URLSearchParams(searchParams.toString())
                      params.set("project", t.label)
                      params.delete("artifact")
                      const qs = params.toString()
                      router.replace(qs ? `?${qs}` : "?project=" + encodeURIComponent(t.label))
                    }}
                  >
                    <span className="truncate">{t.label}</span>
                    <span className={isActive ? "opacity-80" : "opacity-60"}>({t.count})</span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <ArtifactsGrid items={activeItems} autoOpenId={requestedArtifact ?? undefined} />
    </div>
  )
}


