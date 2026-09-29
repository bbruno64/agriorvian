import { ImageResponse } from "next/og";

export const alt =
  "AgriOrvian — East Africa's Gateway to High-Grade Commodities";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function buildOgImage({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#103B2B",
          position: "relative",
          padding: "64px 72px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 420,
            height: 420,
            borderRadius: 9999,
            background: "rgba(245, 158, 11, 0.18)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -120,
            left: -120,
            width: 460,
            height: 460,
            borderRadius: 9999,
            background: "rgba(45, 212, 191, 0.14)",
            display: "flex",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              width: 72,
              height: 72,
              borderRadius: 18,
              background: "linear-gradient(135deg, #D97706, #F59E0B)",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 40,
              fontWeight: 800,
            }}
          >
            A
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ color: "white", fontSize: 38, fontWeight: 800, lineHeight: 1.1 }}>
              AgriOrvian
            </div>
            <div
              style={{
                color: "#FDE68A",
                fontSize: 18,
                fontWeight: 600,
                letterSpacing: 2,
                textTransform: "uppercase",
              }}
            >
              From Our Farmers to Your Markets
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "flex-end",
            marginTop: 40,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 900 }}>
            <div style={{ color: "#FDE68A", fontSize: 20, fontWeight: 700, letterSpacing: 1 }}>
              TANZANIA AGRICULTURAL EXPORT DIVISION OF ORVIAN COMPANY LIMITED
            </div>
            <div
              style={{
                color: "white",
                fontSize: 58,
                fontWeight: 800,
                lineHeight: 1.12,
              }}
            >
              {title}
            </div>
            <div style={{ color: "#D1FAE5", fontSize: 26, lineHeight: 1.4 }}>
              {subtitle}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 44,
            paddingTop: 28,
            borderTop: "1px solid rgba(255,255,255,0.25)",
            color: "#A7F3D0",
            fontSize: 20,
          }}
        >
          <span>Avocados · Cashew · Sesame · Nile Perch · Coffee · Zanzibar Spices</span>
          <span style={{ fontWeight: 700 }}>agriorvian.com</span>
        </div>
      </div>
    ),
    size
  );
}