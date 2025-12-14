import { ImageResponse } from "next/og"

export const dynamic = "force-static"

function arrayBufferToBase64(data: ArrayBuffer) {
  const bytes = new Uint8Array(data)
  const chunkSize = 0x8000
  let binary = ""
  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunkSize))
  }
  return btoa(binary)
}

async function getProfileAvatarDataUrl() {
  const avatar = await fetch(new URL("../../public/profile-avatar.png", import.meta.url)).then((res) => res.arrayBuffer())
  return `data:image/png;base64,${arrayBufferToBase64(avatar)}`
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
              fontSize: 90,
              lineHeight: 1.03,
              fontWeight: 850,
              letterSpacing: -1.8,
            }}
          >
            <span>AI Ships Features.</span>
            <span>I Ship Direction.</span>
          </div>
          <div
            style={{
              fontSize: 30,
              lineHeight: 1.35,
              color: "rgba(15, 23, 42, 0.62)",
              maxWidth: 650,
            }}
          >
            Data & Platform Product Manager who builds the systems that make business performance legible. Owned data
            architecture, attribution, and activation platforms behind mission-critical growth engines and consumer
            workflows. Founder experience diagnosing ecosystem-level data lineage failures.
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 18, width: 420 }}>
          <div style={{ position: "relative", width: 340, height: 340 }}>
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

          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 46, fontWeight: 850, letterSpacing: -0.8 }}>Echo Paulus</div>
            <div style={{ fontSize: 28, fontWeight: 600, color: "rgba(15, 23, 42, 0.55)", marginTop: 6 }}>
              Data Product Manager
            </div>
            <div style={{ fontSize: 24, color: "rgba(15, 23, 42, 0.5)", marginTop: 8 }}>
              San Francisco Bay Area, CA
            </div>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}


