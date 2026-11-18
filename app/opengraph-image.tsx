import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt =
  "Sun Wellness Acupuncture — Chinese Acupuncture & Herbal Clinic in Koreatown, Los Angeles";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#24211f",
          backgroundImage:
            "radial-gradient(circle at 85% 20%, rgba(224, 137, 66, 0.28), transparent 50%), radial-gradient(circle at 15% 85%, rgba(196, 77, 43, 0.32), transparent 55%)",
          color: "#ffffff",
          padding: "64px 72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "rgba(196, 77, 43, 0.25)",
              border: "1px solid rgba(224, 137, 66, 0.55)",
              borderRadius: "999px",
              padding: "10px 22px",
              fontSize: 20,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#f5c59b",
              fontWeight: 700,
            }}
          >
            Koreatown • Los Angeles, CA
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: "#e8e2dc",
              fontWeight: 600,
            }}
          >
            HMO Insurance Accepted
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "12px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 70,
              fontWeight: 800,
              lineHeight: 1.08,
              color: "#ffffff",
              marginBottom: "14px",
            }}
          >
            Sun Wellness Acupuncture
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 34,
              fontWeight: 600,
              color: "#e08942",
              marginBottom: "22px",
            }}
          >
            Chinese Acupuncture &amp; Herbal Clinic
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 25,
              lineHeight: 1.45,
              color: "#dcd5ce",
              maxWidth: "920px",
            }}
          >
            Dr. Sunny Sun-Eui Kim, Ph.D., L.Ac. • Over 25 years of natural,
            drug-free healing for pain relief, women&apos;s health, fertility,
            digestion &amp; holistic wellness.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255, 255, 255, 0.16)",
            paddingTop: "24px",
            width: "100%",
            fontSize: 22,
            color: "#f3ede7",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            3053 W. Olympic Blvd. Suite 309, Los Angeles, CA 90006
          </div>
          <div
            style={{
              display: "flex",
              fontWeight: 700,
              color: "#e08942",
            }}
          >
            (323) 933-1212 • Mon–Fri 8am–5pm
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
