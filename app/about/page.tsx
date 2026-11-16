import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  FaGraduationCap,
  FaUserDoctor,
  FaCalendarCheck,
  FaCircleCheck,
  FaCreditCard,
} from "react-icons/fa6";
import ParallaxBanner from "@/src/components/ParallaxBanner";
import { SITE_URL } from "@/src/lib/seo";

export const metadata: Metadata = {
  title: "About Dr. Sunny Sun-Eui Kim, Ph.D., L.Ac.",
  description:
    "Meet Dr. Sunny Sun-Eui Kim, Ph.D., L.Ac., an honors graduate of Emperor's College practicing Traditional Oriental Medicine, acupuncture, and Chinese herbal medicine in Koreatown, Los Angeles since 1998.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title:
      "About Dr. Sunny Sun-Eui Kim, Ph.D., L.Ac. | Sun Wellness Acupuncture",
    description:
      "Practicing Oriental Medicine in Los Angeles since 1998. Honors graduate of Emperor's College specializing in pain relief, women's health, fertility, and holistic wellness.",
    url: `${SITE_URL}/about`,
  },
};

const credentials = [
  {
    icon: FaUserDoctor,
    title: "Ph.D. & Licensed Acupuncturist",
    detail: "Expert in Traditional Oriental & Chinese Herbal Medicine",
  },
  {
    icon: FaGraduationCap,
    title: "Graduated with Honors",
    detail: "Emperor's College of Traditional Oriental Medicine, Santa Monica",
  },
  {
    icon: FaCalendarCheck,
    title: "Practicing Since 1998",
    detail: "Over 25 years of dedicated clinical care in Los Angeles",
  },
];

const insuranceChecklist = [
  "Insurance ID number",
  "Insured Person's Full Name",
  "Insured Person's Date of Birth",
  "Copy of your Health Insurance card (front and back)",
];

export default function About() {
  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "About Dr. Sunny Kim",
            item: `${SITE_URL}/about`,
          },
        ],
      },
      {
        "@type": "AboutPage",
        "@id": `${SITE_URL}/about#webpage`,
        url: `${SITE_URL}/about`,
        name: "About Dr. Sunny Sun-Eui Kim, Ph.D., L.Ac. | Sun Wellness Acupuncture",
        mainEntity: {
          "@id": `${SITE_URL}/about#dr-sunny-kim`,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <ParallaxBanner
        title="About Us"
        subtitle="Dedicated to Natural Healing & Whole-Body Balance in Los Angeles Since 1998"
        imageSrc="/images/chinese-text.webp"
      />

      <section
        id="dr-sunny-kim"
        className="w-full bg-white py-14 md:py-24 px-6 md:px-16"
      >
        <div className="max-w-[1100px] mx-auto text-[#303030]">
          <div className="grid grid-cols-1 min-[913px]:grid-cols-[340px_1fr] gap-10 lg:gap-14 items-start">
            {/* Portrait Column */}
            <div className="w-full max-w-[380px] mx-auto">
              <div className="overflow-hidden rounded-2xl shadow-md border border-gray-100">
                <Image
                  src="/images/drkim.webp"
                  alt="Dr. Sunny Sun-Eui Kim, Ph.D., L.Ac., Founder and Lead Acupuncturist at Sun Wellness Acupuncture in Los Angeles"
                  width={500}
                  height={500}
                  sizes="(max-width: 912px) 380px, 340px"
                  className="w-full h-auto block"
                />
              </div>
            </div>

            {/* Bio Column */}
            <div>
              <p className="font-baloo uppercase tracking-[0.15rem] text-sm text-[#b54524] font-semibold mb-1 text-center min-[913px]:text-left">
                Founder &amp; Lead Practitioner
              </p>
              <h2 className="font-ubuntu font-bold text-[1.85rem] md:text-[2.5rem] text-center min-[913px]:text-left mb-6">
                Dr. Sunny Sun-Eui Kim, Ph.D. / L.Ac.
              </h2>

              <div className="font-baloo text-[1.125rem] leading-[1.85rem] text-[#404040] space-y-5">
                <p>
                  Sunny Sun-Eui Kim, Ph.D. / L.Ac., is an expert in Traditional
                  Oriental Medicine. With over 20 years of clinical experience,
                  Dr. Kim has effectively treated patients with women&apos;s
                  health concerns including infertility, recurrent miscarriage,
                  menstrual disorders and cramps, ovarian cysts, uterine
                  fibroids, PMS, and menopause symptoms, as well as healthy
                  weight management.
                </p>
                <p>
                  Dr. Kim is also a specialist in relieving acute and chronic
                  pain—including headaches and migraines, shoulder pain, carpal
                  tunnel syndrome, low back pain, sciatica, knee pain, and neck
                  pain. She works closely with every patient to restore,
                  revitalize, and maintain healthy balance throughout the body
                  and improve overall quality of life.
                </p>
                <p>
                  Dr. Kim graduated with honors from Emperor&apos;s College of
                  Traditional Oriental Medicine in Santa Monica, California, and
                  has been practicing Oriental Medicine in the Los Angeles area
                  since 1998.
                </p>
              </div>

              {/* Credential Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200">
                {credentials.map((cred) => {
                  const Icon = cred.icon;
                  return (
                    <div
                      key={cred.title}
                      className="bg-[#faf8f5] rounded-xl p-4 border border-gray-100"
                    >
                      <Icon
                        aria-hidden="true"
                        className="w-6 h-6 text-[#c44d2b] mb-2.5"
                      />
                      <h3 className="font-ubuntu font-bold text-[1rem] text-[#303030] mb-1">
                        {cred.title}
                      </h3>
                      <p className="font-baloo text-sm text-[#555555] leading-snug">
                        {cred.detail}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment & Insurance Section */}
      <section className="w-full bg-[#faf8f5] border-t border-gray-200 py-14 md:py-20 px-6 md:px-16">
        <div className="max-w-[900px] mx-auto text-[#303030]">
          <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-xs border border-gray-100">
            <div className="flex items-center gap-3 text-[#b54524] font-baloo font-semibold uppercase tracking-[0.12rem] text-sm mb-2">
              <FaCreditCard aria-hidden="true" className="w-4 h-4" />
              <span>Payment &amp; Insurance Coverage</span>
            </div>

            <h2 className="font-ubuntu font-bold text-[1.75rem] md:text-[2.25rem] mb-3">
              PPO Health Insurance Accepted
            </h2>

            <p className="font-baloo text-[1.125rem] leading-[1.75rem] text-[#404040] mb-4">
              We accept <strong>Cash, Checks, Visa, and Mastercard</strong> for
              patient visits and insurance co-pays. If you have PPO health
              insurance and are unsure of your acupuncture coverage, please
              contact us—we will gladly verify your benefits for you.
            </p>

            <div className="bg-[#faf8f5] rounded-xl p-5 sm:p-6 border border-gray-200/80 my-6">
              <h3 className="font-ubuntu font-bold text-[1.05rem] mb-3 text-[#303030]">
                To verify your benefits, please provide:
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-baloo text-[1.05rem] text-[#404040]">
                {insuranceChecklist.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <FaCircleCheck
                      aria-hidden="true"
                      className="w-4 h-4 text-[#c44d2b] shrink-0 mt-1"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="w-full sm:w-auto text-center bg-[#c44d2b] rounded-full py-3.5 px-8 border-2 border-[#c44d2b] text-white uppercase font-baloo font-semibold tracking-[0.08rem] no-underline transition duration-300 hover:bg-white hover:text-[#b54524]"
              >
                Contact Us
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto text-center bg-white rounded-full py-3.5 px-8 border-2 border-[#303030] text-[#303030] uppercase font-baloo font-semibold tracking-[0.08rem] no-underline transition duration-300 hover:bg-[#303030] hover:text-white"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
