import type { Metadata } from "next";
import { Baloo_Da_2, Berkshire_Swash, Ubuntu } from "next/font/google";
import "./globals.css";
import "../styles/style.css";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import {
  SITE_NAME,
  SITE_URL,
  getMedicalClinicJsonLd,
} from "@/src/lib/seo";

const balooDa2 = Baloo_Da_2({
  variable: "--font-baloo-da-2",
  subsets: ["latin"],
  display: "swap",
});

const berkshireSwash = Berkshire_Swash({
  weight: "400",
  variable: "--font-berkshire-swash",
  subsets: ["latin"],
  display: "swap",
});

const ubuntu = Ubuntu({
  weight: ["400", "700"],
  variable: "--font-ubuntu",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Sun Wellness Acupuncture | Chinese Acupuncture & Herbal Clinic in Los Angeles",
    template: "%s | Sun Wellness Acupuncture Los Angeles",
  },
  description:
    "Sun Wellness Acupuncture in Koreatown, Los Angeles. Dr. Sunny Sun-Eui Kim, Ph.D., L.Ac. offers over 25 years of experience in acupuncture, cupping, cosmetic facial acupuncture, Chinese herbal medicine, pain relief, and women's health. HMO insurance accepted.",
  keywords: [
    "Acupuncture Los Angeles",
    "Acupuncture Koreatown",
    "Sun Wellness Acupuncture",
    "Dr. Sunny Kim Acupuncturist",
    "Sunny Sun-Eui Kim L.Ac.",
    "Chinese Herbal Medicine Los Angeles",
    "Cosmetic Facial Acupuncture Los Angeles",
    "Cupping Therapy Koreatown",
    "Fertility Acupuncture Los Angeles",
    "Pain Relief Acupuncture LA",
    "HMO Insurance Acupuncture Los Angeles",
  ],
  authors: [{ name: "Dr. Sunny Sun-Eui Kim, Ph.D., L.Ac." }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title:
      "Sun Wellness Acupuncture | Chinese Acupuncture & Herbal Clinic in Los Angeles",
    description:
      "Natural, drug-free healing in Koreatown, Los Angeles with Dr. Sunny Sun-Eui Kim, Ph.D., L.Ac. Specializing in pain management, women's health, fertility, digestion, and cosmetic acupuncture. HMO insurance accepted.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Sun Wellness Acupuncture | Chinese Acupuncture & Herbal Clinic in Los Angeles",
    description:
      "Over 25 years of clinical experience in acupuncture, cupping, and Chinese herbal medicine in Koreatown, Los Angeles. HMO insurance accepted.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "health",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const clinicJsonLd = getMedicalClinicJsonLd();

  return (
    <html
      lang="en"
      className={`${balooDa2.variable} ${berkshireSwash.variable} ${ubuntu.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(clinicJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[10000] focus:rounded-full focus:bg-[#303030] focus:px-5 focus:py-2.5 focus:font-baloo focus:font-semibold focus:text-white focus:shadow-lg focus:outline-2 focus:outline-offset-2 focus:outline-[#c44d2b]"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
