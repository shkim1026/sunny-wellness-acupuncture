import type { Metadata } from "next";
import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaSquareParking,
  FaCircleCheck,
  FaClock,
} from "react-icons/fa6";
import ParallaxBanner from "@/src/components/ParallaxBanner";
import { CLINIC_INFO, GOOGLE_MAPS_URL, SITE_URL } from "@/src/lib/seo";

export const metadata: Metadata = {
  title: "Contact Us, Hours & Koreatown Location",
  description:
    "Visit Sun Wellness Acupuncture at 3053 W. Olympic Blvd. Suite 309 in Koreatown, Los Angeles, CA 90006. Open Mon–Fri 10:00am–6:00pm. Call (323) 933-1212 to schedule an appointment or verify your PPO insurance.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title:
      "Contact Us, Hours & Koreatown Location | Sun Wellness Acupuncture",
    description:
      "3053 W. Olympic Blvd. Suite 309, Los Angeles, CA 90006. Open Monday–Friday 10:00 AM – 6:00 PM. Free garage parking & PPO insurance accepted.",
    url: `${SITE_URL}/contact`,
  },
};

const insuranceSteps = [
  "Insurance ID number",
  "Insured Person's Full Name",
  "Insured Person's Date of Birth",
  "Photos/copies of the front and back of your Health Insurance card",
];

export default function Contact() {
  const contactJsonLd = {
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
            name: "Contact Us",
            item: `${SITE_URL}/contact`,
          },
        ],
      },
      {
        "@type": "ContactPage",
        "@id": `${SITE_URL}/contact#webpage`,
        url: `${SITE_URL}/contact`,
        name: "Contact Sun Wellness Acupuncture in Koreatown, Los Angeles",
        mainEntity: {
          "@id": `${SITE_URL}/#clinic`,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <ParallaxBanner
        title="Contact Us"
        subtitle="Conveniently Located in Koreatown in the Heart of Los Angeles"
        imageSrc="/images/medicine-label.webp"
      />

      <section className="w-full bg-white py-14 md:py-24 px-6 md:px-16">
        <div className="max-w-[1150px] mx-auto text-[#303030]">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 items-start">
            {/* Left Column: Contact Details & Insurance Verification */}
            <div>
              <p className="font-baloo uppercase tracking-[0.15rem] text-sm text-[#b54524] font-semibold mb-1">
                Get in Touch
              </p>
              <h2 className="font-ubuntu font-bold text-[1.85rem] md:text-[2.4rem] mb-4">
                We Look Forward to Caring for You
              </h2>
              <p className="font-baloo text-[1.125rem] leading-[1.75rem] text-[#454545] mb-8">
                Call or email us to schedule an appointment, ask questions about
                acupuncture or herbal medicine, or verify your PPO health
                insurance benefits.
              </p>

              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-[#faf8f5] rounded-xl p-5 border border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#c44d2b] mb-2">
                    <FaPhone aria-hidden="true" className="w-4 h-4" />
                    <h3 className="font-ubuntu font-bold text-[1rem] text-[#303030]">
                      Phone
                    </h3>
                  </div>
                  <a
                    href={CLINIC_INFO.phoneHref}
                    className="font-baloo text-[1.15rem] font-semibold text-[#303030] hover:text-[#b54524] underline underline-offset-4 transition-colors"
                  >
                    {CLINIC_INFO.phoneDisplay}
                  </a>
                </div>

                <div className="bg-[#faf8f5] rounded-xl p-5 border border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#c44d2b] mb-2">
                    <FaEnvelope aria-hidden="true" className="w-4 h-4" />
                    <h3 className="font-ubuntu font-bold text-[1rem] text-[#303030]">
                      E-Mail
                    </h3>
                  </div>
                  <a
                    href={`mailto:${CLINIC_INFO.email}`}
                    className="font-baloo text-[1.1rem] font-semibold text-[#303030] hover:text-[#b54524] underline underline-offset-4 transition-colors break-all"
                  >
                    {CLINIC_INFO.email}
                  </a>
                </div>

                <div className="bg-[#faf8f5] rounded-xl p-5 border border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#c44d2b] mb-2">
                    <FaLocationDot aria-hidden="true" className="w-4 h-4" />
                    <h3 className="font-ubuntu font-bold text-[1rem] text-[#303030]">
                      Clinic Address
                    </h3>
                  </div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={GOOGLE_MAPS_URL}
                    className="font-baloo text-[1.05rem] text-[#303030] hover:text-[#b54524] underline underline-offset-4 transition-colors leading-relaxed block"
                  >
                    3053 W. Olympic Blvd. Suite 309
                    <br />
                    Los Angeles, CA 90006
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </div>

                <div className="bg-[#faf8f5] rounded-xl p-5 border border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#c44d2b] mb-2">
                    <FaClock aria-hidden="true" className="w-4 h-4" />
                    <h3 className="font-ubuntu font-bold text-[1rem] text-[#303030]">
                      Clinic Hours
                    </h3>
                  </div>
                  <p className="font-baloo text-[1.05rem] text-[#303030] font-semibold leading-relaxed">
                    Monday – Friday
                  </p>
                  <p className="font-baloo text-[1.05rem] text-[#454545] leading-relaxed">
                    10:00 AM – 6:00 PM
                  </p>
                </div>

                <div className="bg-[#faf8f5] rounded-xl p-5 border border-gray-100 sm:col-span-2">
                  <div className="flex items-center gap-2.5 text-[#c44d2b] mb-2">
                    <FaSquareParking aria-hidden="true" className="w-4 h-4" />
                    <h3 className="font-ubuntu font-bold text-[1rem] text-[#303030]">
                      Parking
                    </h3>
                  </div>
                  <p className="font-baloo text-[1.05rem] text-[#454545] leading-relaxed">
                    Free patient parking is available in the building garage.
                  </p>
                </div>
              </div>

              {/* Insurance Verification Box */}
              <div className="bg-[#faf8f5] rounded-2xl p-6 border border-[#e08942]/30">
                <h3 className="font-ubuntu font-bold text-[1.2rem] text-[#303030] mb-2">
                  Verifying Your PPO Health Insurance?
                </h3>
                <p className="font-baloo text-[1.05rem] text-[#454545] mb-4">
                  Email us at{" "}
                  <a
                    href="mailto:sun.acubeauty@gmail.com?subject=Insurance%20Benefit%20Verification"
                    className="font-semibold text-[#b54524] underline underline-offset-2"
                  >
                    sun.acubeauty@gmail.com
                  </a>{" "}
                  with the following details and we will verify your coverage:
                </p>
                <ul className="space-y-2 font-baloo text-[1rem] text-[#404040] mb-6">
                  {insuranceSteps.map((step) => (
                    <li key={step} className="flex items-start gap-2.5">
                      <FaCircleCheck
                        aria-hidden="true"
                        className="w-4 h-4 text-[#c44d2b] shrink-0 mt-1"
                      />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={CLINIC_INFO.phoneHref}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c44d2b] border-2 border-[#c44d2b] py-3 px-6 text-white uppercase font-baloo font-semibold tracking-[0.06rem] no-underline transition duration-300 hover:bg-white hover:text-[#b54524]"
                  >
                    <FaPhone aria-hidden="true" className="w-3.5 h-3.5" />
                    <span>Call {CLINIC_INFO.phoneDisplay}</span>
                  </a>
                  <a
                    href="mailto:sun.acubeauty@gmail.com?subject=Appointment%20%2F%20Insurance%20Inquiry"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white border-2 border-[#303030] py-3 px-6 text-[#303030] uppercase font-baloo font-semibold tracking-[0.06rem] no-underline transition duration-300 hover:bg-[#303030] hover:text-white"
                  >
                    <FaEnvelope aria-hidden="true" className="w-3.5 h-3.5" />
                    <span>Send an Email</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Google Map */}
            <div className="w-full">
              <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200 bg-[#faf8f5]">
                <iframe
                  title="Google Map of Sun Wellness Acupuncture at 3053 W. Olympic Blvd, Los Angeles"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.649052993397!2d-118.30392378396171!3d34.05287242514279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b88d28a220f9%3A0x7daa8d2f7b528932!2zU3VuIFdlbGxuZXNzIEFjdXB1bmN0dXJlICjshKAg7ZWc67CpLu2BtOumrOuLiSk!5e0!3m2!1sen!2sus!4v1651624877883!5m2!1sen!2sus"
                  width={600}
                  height={520}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-[380px] md:h-[520px] border-0 block"
                />
              </div>
              <div className="mt-4 text-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={GOOGLE_MAPS_URL}
                  className="font-baloo font-semibold text-[#b54524] hover:text-[#303030] underline underline-offset-4 transition-colors"
                >
                  Open in Google Maps for Directions{" "}
                  <span aria-hidden="true">&rarr;</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
