"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { useLocale } from "next-intl";

import { cn } from "@/lib/utils";

import { carouselItems } from "./hero-carousel.data";
import HeroSlide from "./HeroSlide";
import HeroControls from "./HeroControls";
import HeroProgress from "./HeroProgress";

const AUTOPLAY_DURATION = 6000;

export default function HeroCarousel() {
  const locale = useLocale() as "fa" | "en";
  const isRTL = locale === "fa";

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

  const progressTween = useRef<gsap.core.Tween | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  /*
   * --------------------------------------------------
   * Embla state
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
   * Navigation
   * --------------------------------------------------
   */

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
   * GSAP entrance animation
   * --------------------------------------------------
   */

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const activeSlide = containerRef.current.querySelector(
        `[data-slide-id="${carouselItems[selectedIndex].id}"]`,
      );

      if (!activeSlide) return;

      const image = activeSlide.querySelector(".hero-slide-image");
      const overlay = activeSlide.querySelector(".hero-slide-overlay");
      const label = activeSlide.querySelector(".hero-slide-label");
      const title = activeSlide.querySelector(".hero-slide-title");
      const description = activeSlide.querySelector(
        ".hero-slide-description",
      );
      const cta = activeSlide.querySelector(".hero-slide-cta");

      const direction = isRTL ? 1 : -1;

      const elements = [label, title, description, cta].filter(Boolean);

      gsap.killTweensOf([image, overlay, ...elements]);

      const timeline = gsap.timeline();

      timeline.fromTo(
        image,
        {
          scale: 1.12,
          xPercent: direction * 2,
        },
        {
          scale: 1,
          xPercent: 0,
          duration: 1.6,
          ease: "power3.out",
        },
        0,
      );

      timeline.fromTo(
        overlay,
        {
          opacity: 0.65,
        },
        {
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        },
        0,
      );

      timeline.fromTo(
        label,
        {
          opacity: 0,
          x: direction * 30,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        0.35,
      );

      timeline.fromTo(
        title,
        {
          opacity: 0,
          y: 70,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power4.out",
        },
        0.45,
      );

      timeline.fromTo(
        description,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power3.out",
        },
        0.7,
      );

      if (cta) {
        timeline.fromTo(
          cta,
          {
            opacity: 0,
            y: 20,
            scale: 0.96,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.65,
            ease: "back.out(1.5)",
          },
          0.85,
        );
      }
    },
    {
      scope: containerRef,
      dependencies: [selectedIndex, isRTL],
    },
  );

  /*
   * --------------------------------------------------
   * Autoplay
   * --------------------------------------------------
   */

  const restartAutoplay = useCallback(() => {
    if (!emblaApi) return;

    progressTween.current?.kill();

    setAutoplayProgress(0);

    const progressObject = {
      value: 0,
    };

    progressTween.current = gsap.to(progressObject, {
      value: 100,
      duration: AUTOPLAY_DURATION / 1000,
      ease: "none",

      onUpdate: () => {
        setAutoplayProgress(progressObject.value);
      },

      onComplete: () => {
        emblaApi.scrollNext();
      },
    });
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    restartAutoplay();

    const handleSelect = () => {
      restartAutoplay();
    };

    emblaApi.on("select", handleSelect);

    return () => {
      emblaApi.off("select", handleSelect);

      progressTween.current?.kill();
    };
  }, [emblaApi, restartAutoplay]);

  /*
   * --------------------------------------------------
   * Pause on hover
   * --------------------------------------------------
   */

  const handleMouseEnter = () => {
    progressTween.current?.pause();
  };

  const handleMouseLeave = () => {
    progressTween.current?.resume();
  };

  return (
    <section
      ref={containerRef}
      dir={isRTL ? "rtl" : "ltr"}
      className="relative w-full overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Embla viewport */}
      <div ref={emblaRef} className="overflow-hidden">
        {/* Embla container */}
        <div className="flex">
          {carouselItems.map((item, index) => (
            <div
              key={item.id}
              data-slide-id={item.id}
              className="min-w-0 shrink-0 grow-0 basis-full"
            >
              <HeroSlide
                item={item}
                locale={locale}
                isActive={index === selectedIndex}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom controls */}
      <div className={cn("absolute inset-x-0 bottom-0 z-20", "pb-7")}>
        <div className="w90 mx-auto flex items-end justify-between">
          {/* Progress */}
          <HeroProgress
            current={selectedIndex + 1}
            total={carouselItems.length}
            progress={autoplayProgress}
            locale={locale}
          />

          {/* Navigation */}
          <HeroControls
            locale={locale}
            onPrev={scrollPrev}
            onNext={scrollNext}
            canScrollPrev={canScrollPrev}
            canScrollNext={canScrollNext}
          />
        </div>
      </div>

      {/* Top subtle border */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-px bg-white/10" />
    </section>
  );
}