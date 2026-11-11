'use client';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'

export default function TestimonialSlider() {
  return(
    <section className="text-center pb-16">
      <h3 className="font-ubuntu font-bold text-center text-[2rem] md:text-[3rem] my-[1em]">Testimonials</h3>
        <Splide
          className="max-w-[1200px] mx-auto [&_.splide\_\_pagination\_\_page.is-active]:!bg-[#171717]"
          aria-label="Testimonials Slide"
          options={{
            type: 'loop',
            autoplay: true,
          }}
        >
          <SplideSlide className="testimonial">
              <q>
                This is long overdue review. I&apos;ve been coming here for over
                a year now as she is the most knowledgeable, compassionate,
                and caring acupuncturist in LA. Dr. has treated me for
                peripheral neuropathy, cervical/lumbar pain, and
                indigestion, and those symptoms were relieved after 1
                session. Highly recommend everyone to get treatments here!
                =)
                <br />
                Free parking in garage.</q>
                <br />
              <address>-Sal P.</address>
          </SplideSlide>
          <SplideSlide className="testimonial">
              <q>
                I was a little nervous since I hadn&apos;t gone to acupuncture
                in years, but Dr. Kim immediately puts you at ease. She
                treated my neck/back pain with a combination of needles &
                cupping. She is knowledgeable about overall body/wellness
                and warm & caring in how she takes care of her patients.
                Definitely give her a try, even if you are on the fence
                about acupuncture!</q>
                <br />
              <address>-Phyllis F.</address>
          </SplideSlide>
          <SplideSlide className="testimonial">
              <q>
                Dr. Kim is wonderful. She is incredibly warm, friendly,
                compassionate, and experienced. I have been struggling with
                chronic IBS for nearly a decade, and her treatments have
                drastically improved my overall condition, not to mention my
                well-being! Dr. Kim has treated me for total-body wellness,
                helped me understand how each piece of my health is woven
                together, and guided me towards simple lifestyle changes I
                can practice outside of acupuncture. She genuinely wants her
                patients to heal and live happier, fuller lives. I can&apos;t
                recommend her enough.</q>
                <br />
              <address>-Rebecca M.</address>
          </SplideSlide>
          <SplideSlide className="testimonial">
              <q>
                Sunny made me feel comfortable right away. I had a weight
                problem that was interfering with my life. Sunny had an
                amazing technique that produced results much quicker than I
                anticipated. I have been working with Sunny twice a week and
                now feel much better than ever. Thanks!</q>
                <br />
              <address>-Linda L.</address>
          </SplideSlide>
          <SplideSlide className="testimonial">
              <q>
                When I injured my shoulder from snow skiing, I had to get
                surgery for the broken bone. After the shoulder healed, the
                pain kept me up at nights even with the pain medications.
                Thanks to Sunny&apos;s amazing technique, I am now able to sleep
                and put my socks on my own. I am progressing much quicker
                than I expected.</q>
                <br />
              <address>-Charles W.</address>
          </SplideSlide>
          <SplideSlide className="testimonial">
              <q>
                I had low back pain for a long time due to scoliosis. I
                went chiropractors many times but the pain kept coming back
                again and again. One of my friend referred to Dr. Kim. My
                pain disappeared almost 80 % at first treatment. After 8
                times of treatment Dr. Kim recommended to take an x-ray to
                check the scoliosis status. My back set straight and pain
                did not come back again now for a year. I strongly recommend
                Dr. Kim if you have back pain.</q>
                <br />
              <address>-Michael P.</address>
          </SplideSlide>
        </Splide>
        <a href="testimonials.html" className="mx-auto">
          <button className="all-testimonials-btn">View All</button>
        </a>
    </section>
  );
}