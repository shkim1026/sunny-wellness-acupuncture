'use client';

import Link from 'next/link';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const featuredTestimonials = [
  {
    name: 'Sal P.',
    quote:
      "This is a long overdue review. I've been coming here for over a year now as she is the most knowledgeable, compassionate, and caring acupuncturist in LA. Dr. Kim has treated me for peripheral neuropathy, cervical/lumbar pain, and indigestion, and those symptoms were relieved after 1 session. Highly recommend everyone to get treatments here! Free parking in garage.",
  },
  {
    name: 'Phyllis F.',
    quote:
      "I was a little nervous since I hadn't gone to acupuncture in years, but Dr. Kim immediately puts you at ease. She treated my neck/back pain with a combination of needles & cupping. She is knowledgeable about overall body/wellness and warm & caring in how she takes care of her patients. Definitely give her a try, even if you are on the fence about acupuncture!",
  },
  {
    name: 'Rebecca M.',
    quote:
      "Dr. Kim is wonderful. She is incredibly warm, friendly, compassionate, and experienced. I have been struggling with chronic IBS for nearly a decade, and her treatments have drastically improved my overall condition, not to mention my well-being! Dr. Kim has treated me for total-body wellness, helped me understand how each piece of my health is woven together, and guided me towards simple lifestyle changes I can practice outside of acupuncture.",
  },
  {
    name: 'Linda L.',
    quote:
      'Sunny made me feel comfortable right away. I had a weight problem that was interfering with my life. Sunny had an amazing technique that produced results much quicker than I anticipated. I have been working with Sunny twice a week and now feel much better than ever. Thanks!',
  },
  {
    name: 'Charles W.',
    quote:
      "When I injured my shoulder from snow skiing, I had to get surgery for the broken bone. After the shoulder healed, the pain kept me up at nights even with the pain medications. Thanks to Sunny's amazing technique, I am now able to sleep and put my socks on my own. I am progressing much quicker than I expected.",
  },
  {
    name: 'Michael P.',
    quote:
      'I had low back pain for a long time due to scoliosis. I went to chiropractors many times but the pain kept coming back again and again. One of my friends referred me to Dr. Kim. My pain disappeared almost 80% at the first treatment. After 8 treatments Dr. Kim recommended taking an X-ray to check the scoliosis status. My back set straight and pain did not come back again now for a year. I strongly recommend Dr. Kim if you have back pain.',
  },
];

export default function TestimonialSlider() {
  return (
    <section className="w-full bg-[#faf8f5] py-16 md:py-20 px-6 md:px-16 text-center text-[#303030]">
      <div className="max-w-[1000px] mx-auto">
        <p className="font-baloo uppercase tracking-[0.15rem] text-sm text-[#b54524] font-semibold mb-2">
          Patient Stories
        </p>
        <h2 className="font-ubuntu font-bold text-center text-[2rem] md:text-[2.75rem] mb-8">
          What Our Patients Say
        </h2>

        <Splide
          className="max-w-[900px] mx-auto pb-10 [&_.splide__pagination__page.is-active]:!bg-[#c44d2b]"
          aria-label="Patient Testimonials"
          options={{
            type: 'loop',
            autoplay: false,
            pauseOnHover: true,
            pauseOnFocus: true,
            reducedMotion: {
              speed: 0,
              rewindSpeed: 0,
              autoplay: false,
            },
          }}
        >
          {featuredTestimonials.map((item) => (
            <SplideSlide
              key={item.name}
              className="px-4 sm:px-14 md:px-20 flex items-center justify-center"
            >
              <figure className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-gray-100 max-w-[760px] mx-auto m-0">
                <blockquote className="font-baloo text-[1.125rem] md:text-[1.25rem] leading-[1.8rem] text-[#303030] text-left md:text-center italic">
                  <p>&ldquo;{item.quote}&rdquo;</p>
                </blockquote>
                <figcaption className="mt-5 font-ubuntu font-bold text-[#b54524] not-italic tracking-wide">
                  &mdash; {item.name}
                </figcaption>
              </figure>
            </SplideSlide>
          ))}
        </Splide>

        <div className="mt-6">
          <Link
            href="/testimonials"
            className="inline-block rounded-full py-3.5 px-8 border-2 border-[#303030] text-[#303030] uppercase font-baloo font-bold tracking-[0.08rem] no-underline transition duration-300 hover:bg-[#303030] hover:text-white"
          >
            Read All Testimonials
          </Link>
        </div>
      </div>
    </section>
  );
}
