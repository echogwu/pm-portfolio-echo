"use client"

import { useEffect, useMemo, useState } from "react"

type TypingTaglineProps = {
  line1: string
  line2: string
  startDelayMs?: number
}

function prefersReducedMotion() {
  if (typeof window === "undefined") return false
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false
}

export function TypingTagline({ line1, line2, startDelayMs = 250 }: TypingTaglineProps) {
  const [reduceMotion, setReduceMotion] = useState(false)
  const [t1, setT1] = useState("")
  const [t2, setT2] = useState("")

  const full = useMemo(() => ({ line1, line2 }), [line1, line2])
  const speed = 0.2 // smaller = faster (0.5 => ~2x faster)

  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)")
    if (!mq) return

    const sync = () => setReduceMotion(mq.matches)
    sync()

    // Safari < 14 uses addListener/removeListener
    // eslint-disable-next-line deprecation/deprecation
    mq.addEventListener ? mq.addEventListener("change", sync) : mq.addListener(sync)
    return () => {
      // eslint-disable-next-line deprecation/deprecation
      mq.removeEventListener ? mq.removeEventListener("change", sync) : mq.removeListener(sync)
    }
  }, [])

  useEffect(() => {
    if (reduceMotion || prefersReducedMotion()) {
      setT1(full.line1)
      setT2(full.line2)
      return
    }

    let cancelled = false
    let timeout: number | undefined

    const type = (text: string, setter: (s: string) => void, done: () => void) => {
      let i = 0
      const tick = () => {
        if (cancelled) return
        i += 1
        const next = text.slice(0, i)
        setter(next)

        if (i >= text.length) {
          timeout = window.setTimeout(done, Math.round(350 * speed))
          return
        }

        const ch = text[i - 1]
        const base = 38
        const jitter = Math.round(Math.random() * 22) // mechanical-ish variance
        const pause = ch === "." || ch === "!" || ch === "?" ? 220 : 0
        timeout = window.setTimeout(tick, Math.round((base + jitter + pause) * speed))
      }

      tick()
    }

    // reset on re-run
    setT1("")
    setT2("")

    timeout = window.setTimeout(() => {
      type(full.line1, setT1, () => {
        type(full.line2, setT2, () => {})
      })
    }, Math.round(startDelayMs * speed))

    return () => {
      cancelled = true
      if (timeout) window.clearTimeout(timeout)
    }
  }, [full.line1, full.line2, reduceMotion, startDelayMs])

  const showCursor = !(reduceMotion || prefersReducedMotion()) && (t1.length < full.line1.length || t2.length < full.line2.length)

  return (
    <span aria-label={`${full.line1} ${full.line2}`}>
      <span className="block whitespace-pre">{t1}</span>
      <span className="block whitespace-pre">
        {t2}
        {showCursor ? (
          <span
            aria-hidden="true"
            className="inline-block w-[0.085em] h-[0.95em] bg-foreground align-[-0.08em] ml-1 animate-pulse"
          />
        ) : null}
      </span>
    </span>
  )
}


