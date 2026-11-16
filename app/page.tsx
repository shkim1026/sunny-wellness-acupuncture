import Image from "next/image";
import Link from "next/link";
import {
  FaLocationDot,
  FaPhone,
  FaSquareParking,
  FaCircleCheck,
  FaClock,
} from "react-icons/fa6";
import HeroBanner from "@/src/components/HeroBanner";
import TestimonialSlider from "@/src/components/TestimonialSlider";
import {
  CLINIC_INFO,
  FAQ_ITEMS,
  GOOGLE_MAPS_URL,
  getFaqJsonLd,
} from "@/src/lib/seo";

const services = [
  {
    id: "s1",
    title: "Acupuncture",
    href: "/services#acupuncture",
    image: "/images/acupuncturist.webp",
    imageAlt:
      "Licensed acupuncturist performing acupuncture therapy in Koreatown, Los Angeles",
    desc: "Acupuncture is a medical practice that entails stimulating certain points on the body, most often with a needle penetrating the skin, to alleviate pain or to help treat various health conditions.",
  },
  {
    id: "s2",
    title: "Cupping",
    href: "/services#cupping",
    image: "/images/cupping.webp",
    imageAlt:
      "Patient receiving traditional fire cupping therapy for back pain relief",
    desc: "Cupping therapy is a form of bodywork in which a therapist puts special cups on your skin for a few minutes to create suction. People use it to help with inflammation, blood flow, relaxation and well-being, and as a type of deep-tissue massage.",
  },
  {
    id: "s3",
    title: "Chinese Herbal Medicine",
    href: "/services#herbal-medicine",
    image: "/images/chinese-herbal-medicine.webp",
    imageAlt:
      "Custom-formulated traditional Chinese herbal medicine botanicals",
    desc: "Chinese herbal medicines are mainly plant-based, though some preparations include minerals. Different herbs have distinct properties tailored to restore balance to particular systems of the body.",
  },
];

const conditions = [
  {
    category: "Pain Management",
    items:
      "Headaches, Back Pain, Neck Pain, Shoulder Pain, Knee Pain, Neuralgia, Injury, Fibromyalgia, Sciatica",
  },
  {
    category: "Women's Health",
    items:
      "Infertility, PMS, Cramps, Menopause, Morning Sickness, Menstrual Irregularities, Heavy Bleeding, Pregnancy/IVF Support",
  },
  {
    category: "Digestion",
    items:
      "IBS, IBD, Ulcerative Colitis, Crohn's Disease, Constipation, Diarrhea, Ulcers, GERD",
  },
  {
    category: "Hormones & Autoimmune",
    items: "Thyroid Disorders, Weight Changes, Lupus, Lyme Disease",
  },
  {
    category: "Respiratory",
    items: "Allergies, Colds, Flu, Asthma",
  },
  {
    category: "Mental Health & Wellness",
    items: "Depression, Anxiety, Stress Management",
  },
  {
    category: "Circulatory",
    items: "Hypertension, Hypotension",
  },
  {
    category: "Addiction Support",
    items: "Cigarette Smoking, Alcoholism, Drug Abuse",
  },
  {
    category: "Chemotherapy Side Effects",
    items: "Nausea, Vomiting, Fatigue",
  },
];

const insuranceChecklist = [
  "Insurance ID number",
  "Insured Person's Full Name",
  "Insured Person's Date of Birth",
  "Copy of your Health Insurance card (front and back)",
];

export default function Home() {
  const faqJsonLd = getFaqJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <HeroBanner />

      {/* Why Acupuncture & Meet Dr. Kim */}
      <section className="w-full bg-white px-6 md:px-16 py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto text-[#303030]">
          <div className="max-w-[850px] mx-auto text-center">
            <p className="font-baloo uppercase tracking-[0.15rem] text-sm text-[#b54524] font-semibold mb-2">
              Natural • Safe • Effective • Drug-Free
            </p>
            <h2 className="font-ubuntu font-bold text-[2rem] md:text-[3rem] mb-6">
              Why Acupuncture?
            </h2>
            <p className="font-baloo text-[1.15rem] md:text-[1.25rem] leading-[1.85rem] text-left md:text-center text-[#404040]">
              Acupuncture is a form of treatment therapy that activates the
              body&apos;s own healing ability to rebalance and restore itself
              naturally. Dr. Kim has over 25 years of experience and uses a
              time-honored, safe, medically substantiated method to help
              patients become pain-free, achieve a healthy weight, and heal and
              rejuvenate their system. Acupuncture has been known to
              successfully treat many acute and chronic illnesses that Western
              medicine has trouble treating effectively.
            </p>
          </div>

          {/* Meet Dr. Sunny Kim Spotlight */}
          <div className="mt-14 bg-[#faf8f5] border border-gray-200/80 rounded-2xl p-6 sm:p-10 grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 items-center">
            <div className="w-48 md:w-60 mx-auto rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/images/drkim.webp"
                alt="Dr. Sunny Sun-Eui Kim, Ph.D., L.Ac., Licensed Acupuncturist at Sun Wellness Acupuncture in Los Angeles"
                width={500}
                height={500}
                sizes="(max-width: 768px) 192px, 240px"
                className="w-full h-auto block"
              />
            </div>
            <div className="text-center md:text-left">
              <p className="font-baloo uppercase tracking-[0.12rem] text-xs text-[#b54524] font-semibold mb-1">
                Meet Your Practitioner
              </p>
              <h3 className="font-ubuntu font-bold text-[1.5rem] md:text-[1.75rem] text-[#303030] mb-3">
                Dr. Sunny Sun-Eui Kim, Ph.D. / L.Ac.
              </h3>
              <p className="font-baloo text-[1.1rem] leading-[1.75rem] text-[#404040] mb-5">
                Practicing Oriental Medicine in Los Angeles since 1998, Dr. Kim
                graduated with honors from Emperor&apos;s College of Traditional
                Oriental Medicine. She specializes in pain relief, women&apos;s
                health and fertility, digestive wellness, and holistic body
                rejuvenation.
              </p>
              <Link
                href="/about"
                className="inline-block font-baloo font-semibold text-[#b54524] hover:text-[#303030] underline underline-offset-4 transition-colors"
              >
                Learn more about Dr. Kim <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions Treated */}
      <section className="w-full bg-[#faf8f5] border-y border-gray-200 px-6 md:px-16 py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto text-[#303030]">
          <div className="text-center max-w-[700px] mx-auto mb-12">
            <Image
              src="/images/healing.webp"
              alt=""
              aria-hidden="true"
              width={80}
              height={80}
              className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 object-contain"
            />
            <h2 className="font-ubuntu font-bold text-[2rem] md:text-[2.75rem]">
              Acupuncture Can Help With
            </h2>
            <p className="font-baloo text-[1.125rem] text-[#555555] mt-2">
              Comprehensive, whole-body care tailored to your specific symptoms
              and root causes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map((item) => (
              <div
                key={item.category}
                className="bg-white rounded-xl p-6 shadow-xs border border-gray-100 flex flex-col"
              >
                <h3 className="font-ubuntu font-bold text-[1.2rem] text-[#303030] mb-2 pb-2 border-b border-[#e08942]/30">
                  {item.category}
                </h3>
                <p className="font-baloo text-[1.05rem] leading-[1.65rem] text-[#454545]">
                  {item.items}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full bg-white px-6 md:px-16 py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto text-[#303030] text-center">
          <p className="font-baloo uppercase tracking-[0.15rem] text-sm text-[#b54524] font-semibold mb-2">
            Holistic Treatments
          </p>
          <h2 className="font-ubuntu font-bold text-[2rem] md:text-[3rem] mb-12">
            Our Core Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {services.map((service) => (
              <div
                key={service.id}
                className="flex flex-col bg-[#faf8f5] rounded-2xl overflow-hidden border border-gray-100 shadow-xs text-left"
              >
                <div className="relative w-full aspect-4/3 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 380px"
                    className="object-cover object-left transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-ubuntu font-bold text-[1.4rem] text-[#303030] mb-3">
                      <Link
                        href={service.href}
                        className="text-[#303030] hover:text-[#b54524] no-underline transition-colors"
                      >
                        {service.title}
                      </Link>
                    </h3>
                    <p className="font-baloo leading-[1.65rem] text-[1.075rem] text-[#454545] mb-4">
                      {service.desc}
                    </p>
                  </div>
                  <Link
                    href={service.href}
                    className="inline-block font-baloo font-semibold text-sm text-[#b54524] hover:text-[#303030] underline underline-offset-4 transition-colors"
                  >
                    Learn more about {service.title}{" "}
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/services"
              className="inline-block bg-[#c44d2b] rounded-full py-4 px-9 border-2 border-[#c44d2b] text-white uppercase font-baloo font-semibold tracking-[0.08rem] no-underline transition duration-300 hover:bg-white hover:text-[#b54524]"
            >
              View All 8 Services
            </Link>
          </div>
        </div>
      </section>

      <TestimonialSlider />

      {/* Insurance & Clinic Location Info */}
      <section className="w-full bg-white border-t border-gray-200 px-6 md:px-16 py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto text-[#303030]">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-14 items-start">
            {/* Left: Insurance Verification */}
            <div>
              <p className="font-baloo uppercase tracking-[0.15rem] text-sm text-[#b54524] font-semibold mb-2">
                Coverage &amp; Benefits
              </p>
              <h2 className="font-ubuntu font-bold text-[2rem] md:text-[2.5rem] mb-4">
                PPO Health Insurance Accepted
              </h2>
              <p className="font-baloo text-[1.15rem] leading-[1.75rem] text-[#404040] mb-6">
                Please contact us if you are not sure of your coverage. We will
                be happy to verify your benefits for you before your first
                visit.
              </p>

              <div className="bg-[#faf8f5] rounded-xl p-6 border border-gray-200/80 mb-8">
                <h3 className="font-ubuntu font-bold text-[1.1rem] mb-3 text-[#303030]">
                  To verify your insurance, please provide:
                </h3>
                <ul className="space-y-2.5 font-baloo text-[1.05rem] text-[#404040]">
                  {insuranceChecklist.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <FaCircleCheck
                        aria-hidden="true"
                        className="w-5 h-5 text-[#c44d2b] shrink-0 mt-0.5"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact"
                className="inline-block bg-[#c44d2b] rounded-full py-4 px-9 border-2 border-[#c44d2b] text-white uppercase font-baloo font-semibold tracking-[0.08rem] no-underline transition duration-300 hover:bg-white hover:text-[#b54524]"
              >
                Contact Us to Verify Benefits
              </Link>
            </div>

            {/* Right: Visit Us / Clinic Perks */}
            <div className="bg-[#303030] text-white rounded-2xl p-8 sm:p-10">
              <h3 className="font-ubuntu font-bold text-[1.6rem] mb-6">
                Visit Our Los Angeles Clinic
              </h3>
              <div className="space-y-6 font-baloo text-[1.1rem]">
                <div className="flex items-start gap-4">
                  <FaLocationDot
                    aria-hidden="true"
                    className="w-5 h-5 text-[#e08942] shrink-0 mt-1"
                  />
                  <div>
                    <p className="font-ubuntu font-bold text-white mb-1">
                      Koreatown Location
                    </p>
                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/85 hover:text-[#e08942] transition-colors no-underline"
                    >
                      3053 W. Olympic Blvd. Suite 309
                      <br />
                      Los Angeles, CA 90006
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <FaClock
                    aria-hidden="true"
                    className="w-5 h-5 text-[#e08942] shrink-0 mt-1"
                  />
                  <div>
                    <p className="font-ubuntu font-bold text-white mb-1">
                      Clinic Hours
                    </p>
                    <p className="text-white/85">{CLINIC_INFO.hoursDisplay}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <FaSquareParking
                    aria-hidden="true"
                    className="w-5 h-5 text-[#e08942] shrink-0 mt-1"
                  />
                  <div>
                    <p className="font-ubuntu font-bold text-white mb-1">
                      Convenient Parking
                    </p>
                    <p className="text-white/85">
                      Free patient parking available in the building garage.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <FaPhone
                    aria-hidden="true"
                    className="w-5 h-5 text-[#e08942] shrink-0 mt-1"
                  />
                  <div>
                    <p className="font-ubuntu font-bold text-white mb-1">
                      Call Us Directly
                    </p>
                    <a
                      href={CLINIC_INFO.phoneHref}
                      className="text-white/85 hover:text-[#e08942] transition-colors no-underline"
                    >
                      {CLINIC_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="w-full bg-[#faf8f5] border-t border-gray-200 px-6 md:px-16 py-16 md:py-24">
        <div className="max-w-[950px] mx-auto text-[#303030]">
          <div className="text-center mb-12">
            <p className="font-baloo uppercase tracking-[0.15rem] text-sm text-[#b54524] font-semibold mb-2">
              Common Questions
            </p>
            <h2 className="font-ubuntu font-bold text-[2rem] md:text-[2.75rem]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((faq) => (
              <div
                key={faq.question}
                className="bg-white rounded-2xl p-6 sm:p-7 shadow-xs border border-gray-100"
              >
                <h3 className="font-ubuntu font-bold text-[1.15rem] md:text-[1.25rem] text-[#303030] mb-2">
                  {faq.question}
                </h3>
                <p className="font-baloo text-[1.075rem] leading-[1.75rem] text-[#454545]">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
