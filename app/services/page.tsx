import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaClock, FaShirt, FaUtensils, FaCircleCheck } from "react-icons/fa6";
import ParallaxBanner from "@/src/components/ParallaxBanner";
import { SITE_URL } from "@/src/lib/seo";

export const metadata: Metadata = {
  title: "Acupuncture, Cupping & Herbal Medicine Services",
  description:
    "Explore our holistic Oriental Medicine treatments in Koreatown, Los Angeles: Acupuncture, Cosmetic Facial Acupuncture, Cupping, Chinese Herbal Medicine, Acupressure, Gua Sha, Moxibustion, and Tui Na.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title:
      "Acupuncture, Cupping & Herbal Medicine Services | Sun Wellness Acupuncture",
    description:
      "Time-honored Oriental Medicine treatments in Los Angeles: Acupuncture, Cosmetic Facial Acupuncture, Cupping, Chinese Herbal Medicine, Acupressure, Gua Sha, Moxibustion, and Tui Na.",
    url: `${SITE_URL}/services`,
  },
};

interface ServiceItem {
  id: string;
  title: string;
  iconSrc: string;
  iconWidth?: number;
  paragraphs: string[];
  bullets?: string[];
}

const servicesList: ServiceItem[] = [
  {
    id: "acupuncture",
    title: "Acupuncture",
    iconSrc: "/images/icon-acupuncture.webp",
    paragraphs: [
      "Acupuncture is a safe, natural, drug-free, and effective form of treatment that helps relieve the symptoms of a wide variety of health conditions while addressing the underlying root cause.",
      "Thin, sterile needles are gently inserted into specific points on the body to direct the flow of Qi and stimulate the body's natural healing response. It is clinically used to reduce pain and inflammation, improve blood circulation, increase range of motion, ease medication-induced nausea, calm anxiety, and relax muscle spasms.",
      "We also offer auricular (ear) therapy using gentle ear seeds to support weight management, pain relief, and addiction recovery.",
    ],
  },
  {
    id: "cosmetic-acupuncture",
    title: "Cosmetic Acupuncture",
    iconSrc: "/images/icon-cosmetic-acupuncture.webp",
    paragraphs: [
      "Each facial acupuncture point is connected to a specific internal organ system. As Qi moves and circulates, it strengthens internal organ function while improving blood and energy circulation to the face.",
      "This natural, non-invasive procedure nourishes the skin with vital nutrients and stimulates collagen production to diminish the appearance of fine lines, wrinkles, sagging, and dullness—helping you look younger and feel more vibrant inside and out with no side effects.",
    ],
    bullets: [
      "Helps repair sun-damaged skin",
      "Minimizes fine lines and wrinkles",
      "Stimulates natural collagen and elastin production",
      "Brightens overall skin tone",
      "Helps diminish blemishes and puffiness",
    ],
  },
  {
    id: "cupping",
    title: "Cupping",
    iconSrc: "/images/icon-cupping.webp",
    paragraphs: [
      "Cupping therapy uses heated suction cups placed on targeted areas of the body to promote deep blood circulation and release muscular tension. The skin beneath the cup may temporarily turn a deeper color, indicating areas of stagnant Qi and congestion; this discoloration naturally fades within a few days.",
      "It is widely used to relieve back, neck, and shoulder pain, reduce inflammation, improve circulation, and provide deep-tissue relaxation.",
    ],
  },
  {
    id: "herbal-medicine",
    title: "Herbal Medicine",
    iconSrc: "/images/icon-herbal.webp",
    paragraphs: [
      "Traditional Chinese herbal medicine uses natural botanicals and minerals to support your body's internal healing process. Each prescription is custom-formulated for your constitution and prepared as a soothing tea or decoction to restore balance across specific organ systems.",
    ],
  },
  {
    id: "acupressure",
    title: "Acupressure",
    iconSrc: "/images/icon-acupressure.webp",
    paragraphs: [
      "Acupressure applies targeted manual pressure to specific meridian points on the body using the fingers and hands. It activates the same healing pathways as acupuncture without the use of needles.",
    ],
  },
  {
    id: "gua-sha",
    title: "Gua Sha",
    iconSrc: "/images/icon-gua-sha.webp",
    paragraphs: [
      "Gua Sha involves gentle, repeated pressured strokes across lubricated skin using a smooth-edged instrument—such as jade or horn—to release fascia restriction and boost microcirculation. Any temporary redness or petechiae typically fades within 2 to 4 days.",
    ],
  },
  {
    id: "moxibustion",
    title: "Moxibustion",
    iconSrc: "/images/icon-moxibustion.webp",
    iconWidth: 52,
    paragraphs: [
      "Moxibustion applies soothing, indirect warmth over specific acupuncture points or larger areas of the body by burning Artemisia vulgaris (mugwort). It expels cold, warms the meridians, and promotes healthy blood circulation—making it ideal for cold, stiff, or stagnant conditions.",
    ],
  },
  {
    id: "tui-na",
    title: "Tui Na (Meridian Massage)",
    iconSrc: "/images/icon-massage.webp",
    paragraphs: [
      "Tui Na is a therapeutic Chinese medical massage that uses rhythmic kneading, rolling, and traction along the body's meridians to stimulate the flow of blood and lymph, ease joint stiffness, and break up scar tissue or adhesions.",
    ],
  },
];

export default function Services() {
  const servicesJsonLd = {
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
            name: "Services",
            item: `${SITE_URL}/services`,
          },
        ],
      },
      {
        "@type": "ItemList",
        name: "Oriental Medicine & Acupuncture Services at Sun Wellness Acupuncture",
        itemListElement: servicesList.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "MedicalProcedure",
            name: service.title,
            url: `${SITE_URL}/services#${service.id}`,
            description: service.paragraphs[0],
            procedureType: "https://schema.org/NoninvasiveProcedure",
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <ParallaxBanner
        title="Our Services"
        subtitle="Time-Honored Oriental Medicine & Acupuncture in Los Angeles"
        imageSrc="/images/candle.webp"
      />

      <section className="w-full bg-white py-12 md:py-20 px-6 md:px-16">
        <div className="max-w-[1100px] mx-auto text-[#303030]">
          {/* First Visit Preparation Callout */}
          <div className="bg-[#faf8f5] border border-[#e08942]/30 rounded-2xl p-6 sm:p-8 mb-14 shadow-xs">
            <h2 className="font-ubuntu font-bold text-[1.4rem] md:text-[1.6rem] text-[#303030] mb-4 text-center md:text-left">
              Preparing for Your Visit
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-baloo text-[1.05rem] text-[#404040]">
              <div className="flex items-start gap-3.5">
                <FaShirt
                  aria-hidden="true"
                  className="w-5 h-5 text-[#c44d2b] shrink-0 mt-1"
                />
                <div>
                  <strong className="block font-ubuntu text-[#303030] mb-0.5">
                    Comfortable Attire
                  </strong>
                  Please wear loose, comfortable clothing for easy access to
                  acupuncture points.
                </div>
              </div>
              <div className="flex items-start gap-3.5">
                <FaUtensils
                  aria-hidden="true"
                  className="w-5 h-5 text-[#c44d2b] shrink-0 mt-1"
                />
                <div>
                  <strong className="block font-ubuntu text-[#303030] mb-0.5">
                    Light Meal Beforehand
                  </strong>
                  Have a light snack or meal a few hours prior, and avoid eating
                  a heavy meal right before your session.
                </div>
              </div>
              <div className="flex items-start gap-3.5">
                <FaClock
                  aria-hidden="true"
                  className="w-5 h-5 text-[#c44d2b] shrink-0 mt-1"
                />
                <div>
                  <strong className="block font-ubuntu text-[#303030] mb-0.5">
                    Session Duration
                  </strong>
                  Follow-up sessions last 45–60 minutes. Please allow 1.5 to 2
                  hours for your initial consultation and treatment.
                </div>
              </div>
            </div>
          </div>

          {/* Services List */}
          <div className="divide-y divide-gray-200">
            {servicesList.map((service) => {
              const imgSize = service.iconWidth ?? 88;
              return (
                <article
                  id={service.id}
                  key={service.title}
                  className="scroll-mt-28 py-10 first:pt-0 last:pb-0 grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6 md:gap-10 items-start"
                >
                  <div className="flex flex-col items-center text-center bg-[#faf8f5] rounded-2xl p-6 border border-gray-100 w-full">
                    <div className="h-24 flex items-center justify-center mb-3">
                      <Image
                        src={service.iconSrc}
                        alt=""
                        aria-hidden="true"
                        width={imgSize}
                        height={96}
                        className="h-auto object-contain"
                        style={{ width: `${imgSize}px` }}
                      />
                    </div>
                    <h2 className="font-ubuntu font-bold text-[1.35rem] text-[#303030]">
                      {service.title}
                    </h2>
                  </div>

                  <div className="font-baloo text-[1.125rem] leading-[1.8rem] text-[#404040] space-y-4">
                    {service.paragraphs.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}

                    {service.bullets && (
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                        {service.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-start gap-2.5 text-[1.05rem]"
                          >
                            <FaCircleCheck
                              aria-hidden="true"
                              className="w-4 h-4 text-[#c44d2b] shrink-0 mt-1.5"
                            />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="w-full bg-[#faf8f5] border-t border-gray-200 py-16 px-6 md:px-16 text-center text-[#303030]">
        <div className="max-w-[750px] mx-auto">
          <h2 className="font-ubuntu font-bold text-[1.85rem] md:text-[2.25rem] mb-4">
            Not Sure Which Treatment Is Right for You?
          </h2>
          <p className="font-baloo text-[1.15rem] leading-[1.75rem] text-[#454545] mb-8">
            Dr. Kim evaluates your unique health history and symptoms during
            your first visit to create a personalized treatment plan—often
            combining acupuncture, cupping, and herbal medicine for the best
            results.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-block bg-[#c44d2b] rounded-full py-4 px-9 border-2 border-[#c44d2b] text-white uppercase font-baloo font-semibold tracking-[0.08rem] no-underline transition duration-300 hover:bg-white hover:text-[#b54524]"
            >
              Contact Us to Schedule
            </Link>
            <a
              href="tel:+13239331212"
              className="w-full sm:w-auto inline-block bg-white rounded-full py-4 px-9 border-2 border-[#303030] text-[#303030] uppercase font-baloo font-semibold tracking-[0.08rem] no-underline transition duration-300 hover:bg-[#303030] hover:text-white"
            >
              Call (323) 933-1212
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

