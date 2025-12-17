"use client"

import { useEffect } from "react"

export function ClientRedirect({ to }: { to: string }) {
  useEffect(() => {
    if (typeof window === "undefined") return
    const qs = window.location.search || ""
    window.location.replace(`${to}${qs}`)
  }, [to])

  return null
}


