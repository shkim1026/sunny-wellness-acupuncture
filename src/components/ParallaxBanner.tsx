'use client';

import { useEffect, useRef } from 'react';

interface ParallaxBannerProps {
  title: string;
  imageSrc: string;
}

export default function ParallaxBanner({ title, imageSrc }: ParallaxBannerProps) {
  const containerRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
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
        const offset = -rect.top * speed;
        bgRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
      }
    };

    const handleScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(updateParallax);
    };

    updateParallax();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [imageSrc]);

  return (
    <section
      ref={containerRef}
      className="relative h-[40vh] w-full overflow-hidden isolate"
    >
      <div
        ref={bgRef}
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url('${imageSrc}')`,
        }}
        className="absolute bottom-0 left-0 w-full h-[140%] bg-no-repeat bg-bottom bg-cover will-change-transform -z-10"
      />
      <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white w-full z-10 font-ubuntu text-[3rem] md:text-[4rem] min-[913px]:text-[5rem] tracking-[0.15rem] font-bold m-0 [text-shadow:0_0_5px_black] pt-[8vh]">
        {title}
      </h2>
    </section>
  );
}
