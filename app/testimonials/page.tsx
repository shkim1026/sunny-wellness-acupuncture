import type { Metadata } from "next";
import Link from "next/link";
import ParallaxBanner from "@/src/components/ParallaxBanner";
import { FaYelp } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { SITE_URL, YELP_URL } from "@/src/lib/seo";

export const metadata: Metadata = {
  title: "Patient Testimonials & Reviews",
  description:
    "Read real patient reviews and success stories from Sun Wellness Acupuncture in Koreatown, Los Angeles. See how Dr. Sunny Kim helps patients with back pain, sciatica, migraines, IBS, fertility, and more.",
  alternates: {
    canonical: "/testimonials",
  },
  openGraph: {
    title: "Patient Testimonials & Reviews | Sun Wellness Acupuncture",
    description:
      "Real stories of healing and relief from patients treated by Dr. Sunny Sun-Eui Kim, Ph.D., L.Ac. in Los Angeles.",
    url: `${SITE_URL}/testimonials`,
  },
};

interface TestimonialItem {
  name: string;
  tag: string;
  paragraphs: string[];
}

const quotes: TestimonialItem[] = [
  {
    name: "Sal P.",
    tag: "Neuropathy, Back Pain & Digestion",
    paragraphs: [
      "This is a long overdue review. I've been coming here for over a year now as she is the most knowledgeable, compassionate, and caring acupuncturist in LA. Dr. Kim has treated me for peripheral neuropathy, cervical/lumbar pain, and indigestion, and those symptoms were relieved after 1 session. Highly recommend everyone to get treatments here!",
      "Free parking in garage.",
    ],
  },
  {
    name: "Rebecca M.",
    tag: "Chronic IBS & Total-Body Wellness",
    paragraphs: [
      "Dr. Kim is wonderful. She is incredibly warm, friendly, compassionate, and experienced. I have been struggling with chronic IBS for nearly a decade, and her treatments have drastically improved my overall condition, not to mention my well-being!",
      "Dr. Kim has treated me for total-body wellness, helped me understand how each piece of my health is woven together, and guided me towards simple lifestyle changes I can practice outside of acupuncture. She genuinely wants her patients to heal and live happier, fuller lives. I can't recommend her enough.",
    ],
  },
  {
    name: "Michael P.",
    tag: "Low Back Pain & Scoliosis",
    paragraphs: [
      "I had low back pain for a long time due to scoliosis. I went to chiropractors many times but the pain kept coming back again and again. One of my friends referred me to Dr. Kim.",
      "My pain disappeared almost 80% at the first treatment. After 8 treatments Dr. Kim recommended taking an X-ray to check the scoliosis status. My back set straight and pain did not come back again now for a year. I strongly recommend Dr. Kim if you have back pain.",
    ],
  },
  {
    name: "Phyllis F.",
    tag: "Neck & Back Pain (Acupuncture + Cupping)",
    paragraphs: [
      "I was a little nervous since I hadn't gone to acupuncture in years, but Dr. Kim immediately puts you at ease. She treated my neck/back pain with a combination of needles & cupping. She is knowledgeable about overall body/wellness and warm & caring in how she takes care of her patients. Definitely give her a try, even if you are on the fence about acupuncture!",
    ],
  },
  {
    name: "Charles W.",
    tag: "Post-Surgery Shoulder Recovery",
    paragraphs: [
      "When I injured my shoulder from snow skiing, I had to get surgery for the broken bone. After the shoulder healed, the pain kept me up at nights even with the pain medications. Thanks to Sunny's amazing technique, I am now able to sleep and put my socks on my own. I am progressing much quicker than I expected.",
    ],
  },
  {
    name: "Olga F.",
    tag: "Acute Neck Pain & Fertility Support",
    paragraphs: [
      "I couldn't move my neck when I got up, so I visited Dr. Sunny Kim. After acupuncture treatment I can move my neck front and back, also right and left almost normal—it is amazing!!",
      "It is not my first experience with her; 5 years ago I had the same problem. At that time Dr. Kim said my body was cold and imbalanced. I got treated with herbal medicine, and in a month I conceived my baby—he is 4 years old now. Thank you again Dr. Kim, your hands are a miracle.",
    ],
  },
  {
    name: "Linda L.",
    tag: "Weight Management & Energy",
    paragraphs: [
      "Sunny made me feel comfortable right away. I had a weight problem that was interfering with my life. Sunny had an amazing technique that produced results much quicker than I anticipated. I have been working with Sunny twice a week and now feel much better than ever. Thanks!",
    ],
  },
  {
    name: "Sandra S.",
    tag: "Chronic Neck Pain & Sleep",
    paragraphs: [
      "I had chronic neck pain for over six months. The pain was so bad that I could not sleep at night. I had one session with Sunny and it relieved the pain completely. Thank you.",
    ],
  },
  {
    name: "Jennifer H.",
    tag: "Acupuncture, Cupping & Chinese Medicine",
    paragraphs: [
      "I have been receiving acupuncture, cupping, and Chinese medicine treatment for over ten years and I wholeheartedly believe in its healing properties. I encourage anyone to try it. You will experience great relief in many instances immediately and your level of relaxation and centeredness will be markedly noticeable.",
      "Dr. Sunny Kim is a gifted practitioner and I enthusiastically recommend her. She is highly adept at her skill and she does so with a gentle touch. What I appreciate most about her is that she listens attentively and integrates her intuitive approach by reading my body and pulses along with what I share. With Dr. Kim, we have the opportunity to treat various parts in one session and I am so grateful for this. There is plenty of parking and I appreciate the nice open space of her office and treatment rooms.",
    ],
  },
  {
    name: "Michelle N.",
    tag: "Severe Headaches & Immune Support",
    paragraphs: [
      "All I can say is she is amazing. I get headaches, the kind that are so painful they're almost impossible to bear. When I go and see Sunny, she always makes time for me and always takes the pain away. I have tried many things for headaches—yoga, meditation, chiropractors, physical therapy, and even other acupuncturists—they all help, but none have relieved the pain as consistently as Sunny.",
      "Just yesterday I went in with the flu and a headache; I was tired, cold, and achy, and I came out feeling clear-headed, with no aches and pains, feeling warm and relaxed. Woke up this morning and felt great. She has a gift and gets results like no other health provider I have ever been to, without any medication. She is brilliant, exceptional, and very kind-hearted too.",
    ],
  },
];

export default function Testimonials() {
  const testimonialsJsonLd = {
    "@context": "https://schema.org",
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
        name: "Testimonials",
        item: `${SITE_URL}/testimonials`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(testimonialsJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <ParallaxBanner
        title="Testimonials"
        subtitle="Real Stories of Healing & Relief from Our Los Angeles Patients"
        imageSrc="/images/medicine-love.webp"
      />

      <section className="w-full bg-[#faf8f5] py-14 md:py-20 px-6 md:px-16">
        <div className="max-w-[1200px] mx-auto text-[#303030]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {quotes.map((item) => (
              <article
                key={item.name}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-xs border border-gray-100 flex flex-col justify-between"
              >
                <figure className="m-0 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <span className="inline-block bg-[#faf8f5] text-[#b54524] border border-[#e08942]/30 rounded-full px-3.5 py-1 text-xs font-baloo font-semibold tracking-wide uppercase">
                        {item.tag}
                      </span>
                      <div
                        role="img"
                        className="flex items-center gap-1 text-[#e08942]"
                        aria-label="5 out of 5 stars"
                      >
                        {[...Array(5)].map((_, idx) => (
                          <FaStar
                            key={idx}
                            aria-hidden="true"
                            className="w-3.5 h-3.5"
                          />
                        ))}
                      </div>
                    </div>

                    <blockquote className="font-baloo text-[1.075rem] leading-[1.75rem] text-[#3a3a3a] space-y-3">
                      {item.paragraphs.map((p, i) => (
                        <p key={i}>
                          {i === 0 && "\u201C"}
                          {p}
                          {i === item.paragraphs.length - 1 && "\u201D"}
                        </p>
                      ))}
                    </blockquote>
                  </div>

                  <figcaption className="mt-6 pt-4 border-t border-gray-100 font-ubuntu font-bold text-[#303030]">
                    &mdash; {item.name}
                  </figcaption>
                </figure>
              </article>
            ))}
          </div>

          {/* Yelp & Contact Actions */}
          <div className="mt-14 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={YELP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full py-4 px-8 text-[1.1rem] text-[#303030] border-2 border-[#303030] font-ubuntu font-bold bg-white no-underline transition duration-300 group hover:text-white hover:bg-[#d32323] hover:border-[#d32323]"
            >
              <span>Read More Reviews on Yelp</span>
              <span className="sr-only"> (opens in a new tab)</span>
              <FaYelp
                aria-hidden="true"
                className="text-[#d32323] transition duration-300 group-hover:text-white"
              />
            </a>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full py-4 px-9 text-[1.1rem] bg-[#c44d2b] border-2 border-[#c44d2b] text-white font-ubuntu font-bold no-underline transition duration-300 hover:bg-white hover:text-[#b54524]"
            >
              Book Your Appointment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}