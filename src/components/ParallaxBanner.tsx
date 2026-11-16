'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

interface ParallaxBannerProps {
  title: string;
  imageSrc: string;
  subtitle?: string;
}

export default function ParallaxBanner({
  title,
  imageSrc,
  subtitle,
}: ParallaxBannerProps) {
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
      className="relative h-[36vh] min-h-[260px] w-full overflow-hidden isolate flex items-center justify-center px-6"
    >
      <div
        ref={bgRef}
        className="absolute bottom-0 left-0 w-full h-[140%] will-change-transform -z-10"
      >
        <Image
          src={imageSrc}
          alt=""
          aria-hidden="true"
          fill
          preload
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/55" />
      </div>

      <div className="relative z-10 text-center text-white max-w-[800px] mx-auto">
        <h1 className="font-ubuntu text-[2.5rem] md:text-[3.5rem] min-[913px]:text-[4.25rem] tracking-[0.12rem] font-bold m-0 drop-shadow-md">
          {title}
        </h1>
        {subtitle && (
          <p className="font-baloo text-base md:text-lg text-white/90 mt-2 tracking-wide drop-shadow">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
