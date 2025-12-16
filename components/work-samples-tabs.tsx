"use client"

import { useMemo, useState } from "react"
import { WORK_SAMPLES, WorkSamplesGrid } from "@/components/work-samples-grid"

type Tab = {
  key: string
  label: string
  count: number
}

function tabButtonClass(active: boolean) {
  return [
    "inline-flex flex-1 min-w-[9rem] items-center justify-center gap-2 rounded-lg px-3 py-2 text-[clamp(0.82rem,2.5vw,0.95rem)] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    active
      ? "bg-background text-foreground shadow-sm ring-1 ring-border"
      : "text-foreground/70 hover:text-foreground",
  ].join(" ")
}

export function WorkSamplesTabs() {
  const groups = useMemo(() => {
    const map = new Map<string, typeof WORK_SAMPLES>()
    for (const item of WORK_SAMPLES) {
      const k = item.projectLabel
      map.set(k, [...(map.get(k) ?? []), item])
    }

    const tabs: Tab[] = [...map.entries()]
      .map(([label, items]) => ({ key: label.toLowerCase(), label, count: items.length }))
      .sort((a, b) => a.label.localeCompare(b.label))

    const byLabel = map
    return { tabs, byLabel }
  }, [])

  const defaultTab = groups.tabs.find((t) => t.label === "Dishclosure")?.label ?? groups.tabs[0]?.label ?? "Work"
  const [activeLabel, setActiveLabel] = useState<string>(defaultTab)

  const activeItems = groups.byLabel.get(activeLabel) ?? []

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <div className="w-full">
          <div className="flex w-full rounded-xl border border-border/70 bg-gradient-to-r from-muted/60 via-muted/40 to-muted/60 dark:from-muted/30 dark:via-muted/20 dark:to-muted/30 shadow-sm p-1 overflow-x-auto">
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
                    onClick={() => setActiveLabel(t.label)}
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

      <WorkSamplesGrid items={activeItems} />
    </div>
  )
}


