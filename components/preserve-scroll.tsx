"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function PreserveScroll() {
  const pathname = usePathname()

  useEffect(() => {
    const handleLinkClick = () => {
      const currentScroll = window.scrollY
      sessionStorage.setItem(`scroll-${pathname}`, currentScroll.toString())
      // Set a flag to indicate we're navigating away
      sessionStorage.setItem("should-restore-scroll", pathname)
    }

    // Listen for clicks on all links
    const links = document.querySelectorAll("a")
    links.forEach((link) => {
      link.addEventListener("click", handleLinkClick)
    })

    const shouldRestore = sessionStorage.getItem("should-restore-scroll")
    if (shouldRestore === pathname) {
      const savedPosition = sessionStorage.getItem(`scroll-${pathname}`)
      if (savedPosition) {
        // Clear the flag
        sessionStorage.removeItem("should-restore-scroll")

        // Restore scroll position
        setTimeout(() => {
          const scrollY = Number.parseInt(savedPosition, 10)
          window.scrollTo(0, scrollY)
        }, 50)
      }
    }

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleLinkClick)
      })
    }
  }, [pathname])

  return null
}
