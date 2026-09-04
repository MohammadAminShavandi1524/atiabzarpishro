"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";

import { useLocale } from "next-intl";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { cn } from "@/lib/utils";

import { carouselItems } from "./hero-carousel.data";

import HeroSlide from "./HeroSlide";
import HeroControls from "./HeroControls";
import HeroProgress from "./HeroProgress";

gsap.registerPlugin(useGSAP);

const AUTOPLAY_DURATION = 6000;
const PROGRESS_INTERVAL = 50;

export default function HeroCarousel() {
  const locale = useLocale() as "fa" | "en";

  const isRTL = locale === "fa";

  const sectionRef = useRef<HTMLElement>(null);
  const bottomControlsRef = useRef<HTMLDivElement>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    direction: isRTL ? "rtl" : "ltr",
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const [autoplayProgress, setAutoplayProgress] = useState(0);

  const [canScrollPrev, setCanScrollPrev] = useState(false);

  const [canScrollNext, setCanScrollNext] = useState(false);

  const autoplayTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const progressTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimeRef = useRef(Date.now());

  const elapsedBeforePauseRef = useRef(0);

  const isPausedRef = useRef(false);

  /*
   * --------------------------------------------------
   * Initial Controls Animation
   * --------------------------------------------------
   */

  useGSAP(
    () => {
      if (!bottomControlsRef.current) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) return;

      gsap.fromTo(
        bottomControlsRef.current,
        {
          opacity: 0,
          y: 14,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0.18,
          ease: "power3.out",
        },
      );
    },
    {
      scope: sectionRef,
    },
  );

  /*
   * --------------------------------------------------
   * Embla
   * --------------------------------------------------
   */

  const updateSelectedIndex = useCallback((api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  const updateButtons = useCallback((api: EmblaCarouselType) => {
    setCanScrollPrev(api.canScrollPrev());

    setCanScrollNext(api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    updateSelectedIndex(emblaApi);
    updateButtons(emblaApi);

    emblaApi.on("select", updateSelectedIndex);

    emblaApi.on("select", updateButtons);

    emblaApi.on("reInit", updateSelectedIndex);

    emblaApi.on("reInit", updateButtons);

    return () => {
      emblaApi.off("select", updateSelectedIndex);

      emblaApi.off("select", updateButtons);

      emblaApi.off("reInit", updateSelectedIndex);

      emblaApi.off("reInit", updateButtons);
    };
  }, [emblaApi, updateSelectedIndex, updateButtons]);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;

    emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;

    emblaApi.scrollNext();
  }, [emblaApi]);

  /*
   * --------------------------------------------------
   * Autoplay
   * --------------------------------------------------
   */

  const clearAutoplay = useCallback(() => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);

      autoplayTimerRef.current = null;
    }

    if (progressTimerRef.current) {
      clearInterval(progressTimerRef.current);

      progressTimerRef.current = null;
    }
  }, []);

  const startAutoplay = useCallback(() => {
    if (!emblaApi) return;

    clearAutoplay();

    setAutoplayProgress(0);

    elapsedBeforePauseRef.current = 0;

    startTimeRef.current = Date.now();

    isPausedRef.current = false;

    progressTimerRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;

      const progress = Math.min((elapsed / AUTOPLAY_DURATION) * 100, 100);

      setAutoplayProgress(progress);
    }, PROGRESS_INTERVAL);

    autoplayTimerRef.current = setInterval(() => {
      emblaApi.scrollNext();
    }, AUTOPLAY_DURATION);
  }, [emblaApi, clearAutoplay]);

  useEffect(() => {
    if (!emblaApi) return;

    startAutoplay();

    const handleSelect = () => {
      startAutoplay();
    };

    emblaApi.on("select", handleSelect);

    return () => {
      emblaApi.off("select", handleSelect);

      clearAutoplay();
    };
  }, [emblaApi, startAutoplay, clearAutoplay]);

  const handleMouseEnter = () => {
    if (isPausedRef.current) return;

    isPausedRef.current = true;

    elapsedBeforePauseRef.current = Date.now() - startTimeRef.current;

    clearAutoplay();
  };

  const handleMouseLeave = () => {
    if (!emblaApi || !isPausedRef.current) {
      return;
    }

    isPausedRef.current = false;

    const remaining = AUTOPLAY_DURATION - elapsedBeforePauseRef.current;

    startTimeRef.current = Date.now() - elapsedBeforePauseRef.current;

    progressTimerRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;

      const progress = Math.min((elapsed / AUTOPLAY_DURATION) * 100, 100);

      setAutoplayProgress(progress);
    }, PROGRESS_INTERVAL);

    autoplayTimerRef.current = setInterval(() => {
      emblaApi.scrollNext();
    }, remaining);
  };

  return (
    <section
      ref={sectionRef}
      dir={isRTL ? "rtl" : "ltr"}
      className="relative w-full overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Embla Viewport */}
      <div ref={emblaRef} className="overflow-hidden">
        {/* Embla Container */}
        <div className="flex">
          {carouselItems.map((item, index) => (
            <div key={item.id} className="min-w-0 shrink-0 grow-0 basis-full">
              <HeroSlide
                item={item}
                locale={locale}
                isActive={index === selectedIndex}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Controls */}
      <div
        ref={bottomControlsRef}
        className={cn(
          "absolute inset-x-0 bottom-0 z-20",
          "pb-4 sm:pb-5 lg:pb-6 2xl:pb-7",
        )}
      >
        <div className="w90 mx-auto flex items-end justify-between gap-4">
          <HeroProgress
            current={selectedIndex + 1}
            total={carouselItems.length}
            progress={autoplayProgress}
            locale={locale}
          />

          <HeroControls
            locale={locale}
            onPrev={scrollPrev}
            onNext={scrollNext}
            canScrollPrev={canScrollPrev}
            canScrollNext={canScrollNext}
          />
        </div>
      </div>

      {/* Top Border */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-px bg-white/10" />
    </section>
  );
}
