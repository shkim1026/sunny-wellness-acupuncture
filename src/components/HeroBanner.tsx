'use client';
import { useEffect, useRef } from 'react';

export default function ParallaxHero() {
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
      className="relative h-screen w-full overflow-hidden isolate"
    >
      <div 
        ref={bgRef}
        className="absolute -top-[20%] left-0 w-full h-[140%] bg-no-repeat bg-center bg-cover will-change-transform -z-10 bg-[linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.1)),url('/images/acupuncture.webp')]"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white w-full z-10 [&_p]:[text-shadow:0_0_5px_black]">
        <p className="font-baloo tracking-[0.12rem] text-[1.25rem] md:text-[2rem] my-[1em]">
          Welcome
        </p>
        <p className="font-berkshire tracking-[0.3rem] text-[14vw] my-[3vh] md:text-[5rem] md:my-[5vh]">
          Sun Wellness
        </p>
        <p className="font-baloo tracking-[0.12rem] text-[7vw] md:text-[2rem] my-[1em]">
          Chinese Acupuncture and Herbal Clinic
        </p>
      </div>
    </section>
  );
}
