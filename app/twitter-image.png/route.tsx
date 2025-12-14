import { ImageResponse } from "next/og"
import { fetchAsDataUrl, mimeFromPath } from "@/lib/og"

export const dynamic = "force-static"
export const runtime = "nodejs"

async function getProfileAvatarDataUrl() {
  const heroPath = "/profile-avatar.png"
  return fetchAsDataUrl(new URL(`../../public${heroPath}`, import.meta.url), mimeFromPath(heroPath))
}

export async function GET() {
  const avatarSrc = await getProfileAvatarDataUrl()

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 84,
          background: "linear-gradient(180deg, #ffffff 0%, #fafafa 100%)",
          color: "#0b0f19",
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 26, flex: 1, paddingRight: 48 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 88,
              lineHeight: 1.03,
              fontWeight: 850,
              letterSpacing: -1.8,
            }}
          >
            <span>Echo's Portfolio</span>
          </div>
          <div
            style={{
              fontSize: 34,
              lineHeight: 1.35,
              color: "rgba(15, 23, 42, 0.62)",
              maxWidth: 650,
            }}
          >
            AI ships features, I ship direction
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 18, width: 420 }}>
          <div style={{ position: "relative", width: 340, height: 340, display: "flex" }}>
            <div
              style={{
                position: "absolute",
                inset: -14,
                borderRadius: 999,
                background: "linear-gradient(135deg, rgba(59,130,246,0.12), rgba(59,130,246,0.0))",
              }}
            />
            <img
              src={avatarSrc}
              alt="Profile"
              style={{
                width: 340,
                height: 340,
                borderRadius: 999,
                objectFit: "cover",
                border: "8px solid rgba(15, 23, 42, 0.08)",
                boxShadow: "0 28px 80px rgba(2, 6, 23, 0.18)",
              }}
            />
          </div>

          <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ fontSize: 26, color: "rgba(15, 23, 42, 0.5)", marginTop: 2 }}>echo-paulus.com</div>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}


