import { SocialLinks } from "@/components/social-links"

export function SiteFooter() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="page-container py-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-muted-foreground">© 2025 Product Portfolio. Crafted with care.</div>
          <SocialLinks variant="hero" className="sm:justify-end" />
        </div>
      </div>
    </footer>
  )
}


