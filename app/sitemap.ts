import type { MetadataRoute } from "next";
import { SITE_URL } from "@/src/lib/seo";

export const dynamic = "force-static";

const LAST_MODIFIED = "2026-11-16";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 1.0,
      images: [
        `${SITE_URL}/images/acupuncture.webp`,
        `${SITE_URL}/images/drkim.webp`,
        `${SITE_URL}/images/acupuncturist.webp`,
        `${SITE_URL}/images/cupping.webp`,
        `${SITE_URL}/images/chinese-herbal-medicine.webp`,
      ],
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.9,
      images: [
        `${SITE_URL}/images/candle.webp`,
        `${SITE_URL}/images/icon-acupuncture.webp`,
        `${SITE_URL}/images/icon-cosmetic-acupuncture.webp`,
        `${SITE_URL}/images/icon-cupping.webp`,
        `${SITE_URL}/images/icon-herbal.webp`,
      ],
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.85,
      images: [`${SITE_URL}/images/drkim.webp`],
    },
    {
      url: `${SITE_URL}/testimonials`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.9,
    },
  ];
}
