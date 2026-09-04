"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import Link from "next/link";

import { ArrowLeft, ArrowRight } from "lucide-react";

import { useLocale, useTranslations } from "next-intl";

import useEmblaCarousel from "embla-carousel-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import ArticleCard from "./ArticleCard";

import { blogInsights } from "./blogInsights.data";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function BlogInsights() {
  const locale = useLocale();
  const t = useTranslations("Home.blogInsights");

  const isRTL = locale === "fa";

  const PrevIcon = isRTL ? ArrowRight : ArrowLeft;
  const NextIcon = isRTL ? ArrowLeft : ArrowRight;

  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const eyebrowLineRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const viewAllRef = useRef<HTMLAnchorElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<HTMLDivElement>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    direction: isRTL ? "rtl" : "ltr",
    slidesToScroll: 1,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;

    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  useGSAP(
    () => {
      if (
        !sectionRef.current ||
        !eyebrowRef.current ||
        !titleRef.current ||
        !descriptionRef.current ||
        !viewAllRef.current ||
        !cardsRef.current ||
        !controlsRef.current
      ) {
        return;
      }

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) return;

      const titleLines = Array.from(titleRef.current.children);

      const cards =
        cardsRef.current.querySelectorAll<HTMLElement>(".blog-insight-card");

      /*
       * Initial States
       */

      if (eyebrowLineRef.current) {
        gsap.set(eyebrowLineRef.current, {
          scaleX: 0,
          transformOrigin: isRTL ? "right center" : "left center",
        });
      }

      gsap.set(eyebrowRef.current, {
        opacity: 0,
        y: 12,
      });

      gsap.set(titleLines, {
        opacity: 0,
        y: 20,
      });

      gsap.set(descriptionRef.current, {
        opacity: 0,
        y: 14,
      });

      gsap.set(viewAllRef.current, {
        opacity: 0,
        y: 12,
      });

      gsap.set(cards, {
        opacity: 0,
        y: 24,
      });

      gsap.set(controlsRef.current, {
        opacity: 0,
        y: 12,
      });

      /*
       * Timeline
       */

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 84%",
          once: true,
        },
        defaults: {
          ease: "power3.out",
        },
      });

      /* Eyebrow */
      timeline.to(eyebrowRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.35,
      });

      if (eyebrowLineRef.current) {
        timeline.to(
          eyebrowLineRef.current,
          {
            scaleX: 1,
            duration: 0.4,
            ease: "power4.out",
          },
          "-=0.29",
        );
      }

      /* Title */
      timeline.to(
        titleLines,
        {
          opacity: 1,
          y: 0,
          duration: 0.48,
          stagger: 0.055,
          ease: "power4.out",
        },
        "-=0.27",
      );

      /* Description */
      timeline.to(
        descriptionRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
        },
        "-=0.34",
      );

      /* View All */
      timeline.to(
        viewAllRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
        },
        "-=0.35",
      );

      /* Cards */
      timeline.to(
        cards,
        {
          opacity: 1,
          y: 0,
          duration: 0.48,
          stagger: 0.055,
          ease: "power3.out",
        },
        "-=0.22",
      );

      /* Controls */
      timeline.to(
        controlsRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.38,
        },
        "-=0.25",
      );
    },
    {
      scope: sectionRef,
      dependencies: [isRTL],
      revertOnUpdate: true,
    },
  );

  return (
    <section
      ref={sectionRef}
      dir={isRTL ? "rtl" : "ltr"}
      className="bg-background border-border border-b pt-14 pb-8 sm:pt-16 sm:pb-9 md:pt-20 md:pb-10 lg:pt-20 xl:pt-[88px] 2xl:pt-24 2xl:pb-12"
    >
      <div className="w90">
        {/* Header */}
        <div className="flex flex-col gap-7 sm:gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12 xl:gap-16 2xl:gap-20">
          {/* Content */}
          <div className="max-w-[900px] min-w-0">
            {/* Eyebrow */}
            <div ref={eyebrowRef} className="flex items-center gap-3 sm:gap-4">
              <span
                ref={eyebrowLineRef}
                className="bg-custom-primary block h-px w-9 shrink-0 sm:w-10 xl:w-11 2xl:w-12"
              />

              <span className="text-muted-foreground text-xs font-medium tracking-[0.08em] sm:text-[13px] xl:text-sm">
                {t("eyebrow")}
              </span>
            </div>

            {/* Title */}
            <h2
              ref={titleRef}
              className="text-foreground xss:text-[39px] mt-6 text-[36px] font-semibold sm:mt-7 sm:text-[44px] md:text-[48px] lg:text-[54px] xl:text-[60px] 2xl:mt-8 2xl:text-[clamp(3rem,4vw,5rem)] ltr:leading-[1.06] ltr:tracking-[-0.035em] 2xl:ltr:leading-[1.03] 2xl:ltr:tracking-[-0.045em] rtl:leading-[1.2]"
            >
              <span className="block">{t("titleLine1")}</span>

              <span className="text-custom-primary block">
                {t("titleLine2")}
              </span>
            </h2>

            {/* Description */}
            <p
              ref={descriptionRef}
              className="text-muted-foreground mt-5 max-w-[760px] text-justify text-sm leading-7 sm:mt-6 sm:text-[15px] sm:leading-7.5 xl:mt-8 xl:text-[16px] xl:leading-8 2xl:mt-10 2xl:text-[17px]"
            >
              {t("description")}
            </p>
          </div>

          {/* View All */}
          <Link
            ref={viewAllRef}
            href={`/${locale}/blogs`}
            className="group text-foreground flex w-fit shrink-0 items-center gap-3 text-xs font-medium sm:gap-4 sm:text-sm lg:mb-1"
          >
            <span>{t("viewAll")}</span>

            <span className="border-border group-hover:border-custom-primary flex size-9 items-center justify-center border transition-colors duration-300 sm:size-10">
              <NextIcon
                size={16}
                strokeWidth={1.7}
                className="text-custom-primary"
              />
            </span>
          </Link>
        </div>

        {/* Carousel */}
        <div ref={cardsRef} className="mt-8 overflow-hidden sm:mt-10 lg:mt-8">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="-ms-3 flex sm:-ms-4 2xl:-ms-5">
              {blogInsights.map((article) => (
                <div
                  key={article.id}
                  className="min-w-0 flex-[0_0_100%] ps-3 sm:flex-[0_0_50%] sm:ps-4 xl:flex-[0_0_33.333333%] 2xl:ps-5"
                >
                  <div className="blog-insight-card h-full min-w-0">
                    <ArticleCard
                      article={article}
                      isRTL={isRTL}
                      locale={locale}
                      t={t}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div
          ref={controlsRef}
          className="border-border mt-5 flex items-center justify-between border-t pt-4 sm:mt-6"
        >
          {/* Counter */}
          <div dir="ltr" className="flex items-center gap-2.5 sm:gap-3">
            <span className="text-custom-primary text-xs font-medium sm:text-sm">
              {String(selectedIndex + 1).padStart(2, "0")}
            </span>

            <span className="text-border">/</span>

            <span className="text-muted-foreground text-xs sm:text-sm">
              {String(blogInsights.length).padStart(2, "0")}
            </span>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Previous article"
              className="border-border text-foreground hover:border-custom-primary hover:text-custom-primary flex size-10 cursor-pointer items-center justify-center border transition-colors duration-300 sm:size-11"
            >
              <PrevIcon size={17} strokeWidth={1.7} />
            </button>

            <button
              type="button"
              onClick={scrollNext}
              aria-label="Next article"
              className="border-border text-foreground hover:border-custom-primary hover:text-custom-primary flex size-10 cursor-pointer items-center justify-center border transition-colors duration-300 sm:size-11"
            >
              <NextIcon size={17} strokeWidth={1.7} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
