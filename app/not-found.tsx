import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaHouse,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";
import { CLINIC_INFO, GOOGLE_MAPS_URL } from "@/src/lib/seo";

export const metadata: Metadata = {
  title: "Page Not Found (404)",
  description:
    "The page you are looking for could not be found. Explore Sun Wellness Acupuncture's services, learn about Dr. Sunny Kim, or contact our Koreatown, Los Angeles clinic.",
  robots: {
    index: false,
    follow: true,
  },
};

const quickLinks = [
  {
    href: "/services",
    title: "Our Holistic Services",
    description:
      "Explore acupuncture, cupping, cosmetic facial acupuncture, moxibustion, and custom Chinese herbal medicine.",
  },
  {
    href: "/about",
    title: "Meet Dr. Sunny Kim",
    description:
      "Learn about Dr. Sunny Sun-Eui Kim, Ph.D., L.Ac. and over 25 years of clinical experience in Los Angeles.",
  },
  {
    href: "/testimonials",
    title: "Patient Testimonials",
    description:
      "Read stories from patients who found lasting relief from pain, stress, digestive issues, and more.",
  },
  {
    href: "/contact",
    title: "Location & PPO Insurance",
    description:
      "Find our Koreatown clinic hours, free garage parking details, and how to verify your PPO benefits.",
  },
];

export default function NotFound() {
  return (
    <section className="w-full bg-[#faf8f5] border-b border-gray-200 px-6 md:px-16 py-16 md:py-24">
      <div className="max-w-[960px] mx-auto text-[#303030]">
        {/* Main 404 Hero Card */}
        <div className="bg-white rounded-2xl border border-gray-200/80 shadow-xs p-8 sm:p-12 md:p-14 text-center">
          <Image
            src="/images/healing.webp"
            alt=""
            aria-hidden="true"
            width={72}
            height={72}
            className="w-16 h-16 mx-auto mb-4 object-contain"
          />
          <p className="font-baloo uppercase tracking-[0.18rem] text-sm text-[#b54524] font-semibold mb-2">
            Error 404 • Page Not Found
          </p>
          <h1 className="font-ubuntu font-bold text-[2.25rem] md:text-[3.25rem] text-[#303030] leading-tight mb-4">
            Let&apos;s Guide You Back to Balance
          </h1>
          <p className="font-baloo text-[1.125rem] md:text-[1.25rem] leading-[1.8rem] text-[#454545] max-w-[640px] mx-auto mb-8">
            We couldn&apos;t find the page you were looking for—it may have been
            moved or the link may be mistyped. Use the options below to return
            home or reach our clinic directly.
          </p>

          {/* Primary Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-[#c44d2b] border-2 border-[#c44d2b] py-3.5 px-8 text-white uppercase font-baloo font-semibold tracking-[0.08rem] no-underline transition duration-300 hover:bg-white hover:text-[#b54524]"
            >
              <FaHouse aria-hidden="true" className="w-4 h-4" />
              <span>Return to Homepage</span>
            </Link>
            <a
              href={CLINIC_INFO.phoneHref}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-white border-2 border-[#303030] py-3.5 px-8 text-[#303030] uppercase font-baloo font-semibold tracking-[0.08rem] no-underline transition duration-300 hover:bg-[#303030] hover:text-white"
            >
              <FaPhone aria-hidden="true" className="w-4 h-4" />
              <span>Call {CLINIC_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>

        {/* Helpful Destination Cards */}
        <div className="mt-12">
          <h2 className="font-ubuntu font-bold text-[1.5rem] md:text-[1.75rem] text-center text-[#303030] mb-6">
            Where Would You Like to Go?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group bg-white rounded-xl p-6 border border-gray-200/80 shadow-xs no-underline transition duration-300 hover:border-[#c44d2b] hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-ubuntu font-bold text-[1.2rem] text-[#303030] group-hover:text-[#b54524] transition-colors mb-2 flex items-center justify-between gap-2">
                    <span>{link.title}</span>
                    <FaArrowRight
                      aria-hidden="true"
                      className="w-4 h-4 text-[#c44d2b] shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </h3>
                  <p className="font-baloo text-[1.05rem] leading-[1.65rem] text-[#454545] m-0">
                    {link.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Clinic Info Strip */}
        <div className="mt-10 bg-white rounded-xl p-6 border border-gray-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-3 font-baloo text-[1.05rem] text-[#404040]">
            <FaLocationDot
              aria-hidden="true"
              className="w-5 h-5 text-[#c44d2b] shrink-0"
            />
            <span>
              <strong className="text-[#303030]">Koreatown Clinic:</strong>{" "}
              {CLINIC_INFO.address.streetAddress},{" "}
              {CLINIC_INFO.address.addressLocality},{" "}
              {CLINIC_INFO.address.addressRegion}{" "}
              {CLINIC_INFO.address.postalCode} ({CLINIC_INFO.hoursDisplay})
            </span>
          </div>
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-baloo font-semibold text-[#b54524] hover:text-[#303030] underline underline-offset-4 transition-colors shrink-0"
          >
            Get Directions <span aria-hidden="true">&rarr;</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
