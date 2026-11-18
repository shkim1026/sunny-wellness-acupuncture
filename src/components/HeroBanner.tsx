'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaPhone } from 'react-icons/fa6';

export default function HeroBanner() {
  const containerRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    let animationFrameId: number;
    const speed = 0.35;

    const updateParallax = () => {
      if (!containerRef.current || !bgRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const isVisible = rect.bottom > 0 && rect.top < viewportHeight;

      if (isVisible) {
        const bannerCenter = rect.top + rect.height / 2;
        const viewportCenter = viewportHeight / 2;
        const distanceFromCenter = bannerCenter - viewportCenter;
        const offset = distanceFromCenter * -speed;
        bgRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
      }
    };

    const handleScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(updateParallax);
    };

    updateParallax();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative h-[85vh] min-h-[560px] w-full overflow-hidden isolate flex items-center justify-center px-6"
    >
      <div 
        ref={bgRef}
        className="absolute -top-[20%] left-0 w-full h-[140%] will-change-transform -z-10"
      >
        <Image
          src="/images/acupuncture.webp"
          alt="Traditional acupuncture therapy at Sun Wellness Acupuncture in Los Angeles"
          fill
          preload
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/55" />
      </div>

      <div className="relative z-10 max-w-[900px] mx-auto text-center text-white">
        <p className="font-baloo uppercase tracking-[0.2rem] text-sm md:text-base text-white/90 mb-3 drop-shadow">
          Welcome to
        </p>
        <h1 className="my-2 mb-6">
          <span className="block font-berkshire font-normal tracking-[0.2rem] text-[clamp(2.75rem,10vw,5.25rem)] leading-tight drop-shadow-md">
            Sun Wellness
          </span>
          <span className="block font-baloo font-normal tracking-[0.12rem] text-[clamp(1.25rem,4.5vw,2rem)] text-white/95 mt-2 drop-shadow">
            Chinese Acupuncture &amp; Herbal Clinic
          </span>
        </h1>
        <p className="font-baloo text-base md:text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed drop-shadow">
          Natural, drug-free healing in the heart of Los Angeles with over 25 years of clinical experience. HMO insurance accepted.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-[#c44d2b] border-2 border-[#c44d2b] py-3.5 px-8 text-white uppercase font-baloo font-semibold tracking-[0.08rem] no-underline transition duration-300 hover:bg-white hover:text-[#b54524] shadow-md"
          >
            Schedule a Visit
          </Link>
          <a
            href="tel:+13239331212"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-black/35 backdrop-blur-sm border-2 border-white/85 py-3.5 px-8 text-white uppercase font-baloo font-semibold tracking-[0.08rem] no-underline transition duration-300 hover:bg-white hover:text-[#303030]"
          >
            <FaPhone aria-hidden="true" className="w-4 h-4" />
            <span>(323) 933-1212</span>
          </a>
        </div>
      </div>
    </section>
  );
}
