"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import type { EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

import { useLocale } from "next-intl";

import { cn } from "@/lib/utils";

import { carouselItems } from "./hero-carousel.data";

import HeroControls from "./HeroControls";
import HeroProgress from "./HeroProgress";
import HeroSlide from "./HeroSlide";

const AUTOPLAY_DURATION = 600000;
const PROGRESS_INTERVAL = 50;

export default function HeroCarousel() {
  const locale = useLocale() as "fa" | "en";
  const isRTL = locale === "fa";

  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    direction: isRTL ? "rtl" : "ltr",
    skipSnaps: false,
    duration: 16,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [autoplayProgress, setAutoplayProgress] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const autoplayTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const progressTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimeRef = useRef(Date.now());
  const elapsedBeforePauseRef = useRef(0);
  const isPausedRef = useRef(false);

  /*
   * --------------------------------------------------
   * Mobile Detection
   * --------------------------------------------------
   */

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 39.999rem)");

    const updateMobileState = () => {
      setIsMobile(mediaQuery.matches);
    };

    updateMobileState();

    mediaQuery.addEventListener("change", updateMobileState);

    return () => {
      mediaQuery.removeEventListener("change", updateMobileState);
    };
  }, []);

  /*
   * --------------------------------------------------
   * Embla State
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

  /*
   * --------------------------------------------------
   * Manual Navigation
   * --------------------------------------------------
   *
   * Mobile:
   * scrollNext(true)
   * => instant snap
   *
   * Tablet/Desktop:
   * scrollNext(false)
   * => Embla animated movement
   */

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;

    emblaApi.scrollPrev(isMobile === true);
  }, [emblaApi, isMobile]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;

    emblaApi.scrollNext(isMobile === true);
  }, [emblaApi, isMobile]);

  /*
   * --------------------------------------------------
   * Autoplay
   * --------------------------------------------------
   */

  const clearAutoplay = useCallback(() => {
    if (autoplayTimerRef.current) {
      clearTimeout(autoplayTimerRef.current);
      autoplayTimerRef.current = null;
    }

    if (progressTimerRef.current) {
      clearInterval(progressTimerRef.current);
      progressTimerRef.current = null;
    }
  }, []);

  const startAutoplay = useCallback(() => {
    if (!emblaApi || isMobile === null) return;

    clearAutoplay();

    /*
     * Mobile:
     * no autoplay
     * no progress timer
     */
    if (isMobile) {
      setAutoplayProgress(0);

      elapsedBeforePauseRef.current = 0;
      isPausedRef.current = false;

      return;
    }

    setAutoplayProgress(0);

    elapsedBeforePauseRef.current = 0;
    startTimeRef.current = Date.now();
    isPausedRef.current = false;

    progressTimerRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;

      const progress = Math.min((elapsed / AUTOPLAY_DURATION) * 100, 100);

      setAutoplayProgress(progress);
    }, PROGRESS_INTERVAL);

    autoplayTimerRef.current = setTimeout(() => {
      emblaApi.scrollNext();
    }, AUTOPLAY_DURATION);
  }, [emblaApi, clearAutoplay, isMobile]);

  useEffect(() => {
    if (!emblaApi || isMobile === null) return;

    startAutoplay();

    const handleSelect = () => {
      startAutoplay();
    };

    emblaApi.on("select", handleSelect);

    return () => {
      emblaApi.off("select", handleSelect);

      clearAutoplay();
    };
  }, [emblaApi, isMobile, startAutoplay, clearAutoplay]);

  /*
   * --------------------------------------------------
   * Desktop Hover Pause
   * --------------------------------------------------
   */

  const handleMouseEnter = () => {
    if (isMobile !== false) return;

    if (isPausedRef.current) return;

    isPausedRef.current = true;

    elapsedBeforePauseRef.current = Date.now() - startTimeRef.current;

    clearAutoplay();
  };

  const handleMouseLeave = () => {
    if (isMobile !== false) return;

    if (!emblaApi || !isPausedRef.current) {
      return;
    }

    isPausedRef.current = false;

    const remaining = Math.max(
      AUTOPLAY_DURATION - elapsedBeforePauseRef.current,
      0,
    );

    startTimeRef.current = Date.now() - elapsedBeforePauseRef.current;

    progressTimerRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;

      const progress = Math.min((elapsed / AUTOPLAY_DURATION) * 100, 100);

      setAutoplayProgress(progress);
    }, PROGRESS_INTERVAL);

    autoplayTimerRef.current = setTimeout(() => {
      emblaApi.scrollNext();
    }, remaining);
  };

  return (
    <section
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
