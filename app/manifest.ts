import type { MetadataRoute } from "next";
import { SITE_NAME } from "@/src/lib/seo";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} | Chinese Acupuncture & Herbal Clinic`,
    short_name: "Sun Wellness",
    description:
      "Sun Wellness Acupuncture in Koreatown, Los Angeles. Dr. Sunny Sun-Eui Kim, Ph.D., L.Ac. offers acupuncture, cupping, cosmetic facial acupuncture, and Chinese herbal medicine.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf8f5",
    theme_color: "#c44d2b",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
