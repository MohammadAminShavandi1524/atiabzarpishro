"use client";

import { useEffect, useRef, useState } from "react";

import Link from "next/link";

import { ArrowLeft, ArrowRight } from "lucide-react";

import { useLocale, useTranslations } from "next-intl";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import TechNewsCard from "@/components/techNews/TechNewsCard";
import { getTechNews } from "@/components/techNews/techNews.api";

import type { TechNewsItem } from "@/components/techNews/techNews.data";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function BlogInsights() {
  const locale = useLocale();
  const t = useTranslations("Home.blogInsights");

  const isRTL = locale === "fa";

  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const eyebrowLineRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const viewAllRef = useRef<HTMLAnchorElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const [techNewsItems, setTechNewsItems] = useState<TechNewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  /*
   * --------------------------------------------------
   * Fetch Tech News
   * --------------------------------------------------
   */

  useEffect(() => {
    const fetchTechNews = async () => {
      try {
        const data = await getTechNews();

        const latestItems = [...data]
          .sort(
            (a, b) =>
              new Date(b.created).getTime() - new Date(a.created).getTime(),
          )
          .slice(0, 4);

        setTechNewsItems(latestItems);
      } catch (error) {
        console.error("Failed to fetch home tech news:", error);

        setTechNewsItems([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTechNews();
  }, []);

  /*
   * --------------------------------------------------
   * Animation
   * --------------------------------------------------
   */

  useGSAP(
    () => {
      if (
        isLoading ||
        !techNewsItems.length ||
        !sectionRef.current ||
        !eyebrowRef.current ||
        !titleRef.current ||
        !descriptionRef.current ||
        !viewAllRef.current ||
        !cardsRef.current
      ) {
        return;
      }

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) return;

      const titleLines = Array.from(titleRef.current.children);

      const cards = cardsRef.current.querySelectorAll<HTMLElement>(
        ".home-tech-news-card",
      );

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
        y: 28,
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
      if (cards.length) {
        timeline.to(
          cards,
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.22",
        );
      }
    },
    {
      scope: sectionRef,
      dependencies: [isRTL, isLoading, techNewsItems.length],
      revertOnUpdate: true,
    },
  );

  /*
   * --------------------------------------------------
   * Loading
   * --------------------------------------------------
   */

  if (isLoading) {
    return (
      <section
        dir={isRTL ? "rtl" : "ltr"}
        className="bg-background border-border border-b pt-14 pb-12 sm:pt-16 sm:pb-14 md:pt-20 md:pb-16 lg:pt-20 xl:pt-[88px] xl:pb-20 2xl:pt-24 2xl:pb-24"
      >
        <div className="w90">
          {/* Header Skeleton */}
          <div className="flex flex-col gap-7 sm:gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12 xl:gap-16 2xl:gap-20">
            <div className="w-full max-w-[900px]">
              {/* Eyebrow */}
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="bg-border-secondary h-px w-9 animate-pulse sm:w-10 xl:w-11 2xl:w-12" />

                <span className="bg-card-secondary h-3 w-24 animate-pulse" />
              </div>

              {/* Title */}
              <div className="mt-6 space-y-3 sm:mt-7">
                <div className="bg-card-secondary h-10 w-[72%] max-w-[560px] animate-pulse sm:h-12 lg:h-14" />

                <div className="bg-card-secondary h-10 w-[55%] max-w-[420px] animate-pulse sm:h-12 lg:h-14" />
              </div>

              {/* Description */}
              <div className="mt-5 max-w-[760px] space-y-2.5 sm:mt-6 xl:mt-8">
                <div className="bg-card-secondary h-3.5 w-full animate-pulse" />

                <div className="bg-card-secondary h-3.5 w-[82%] animate-pulse" />
              </div>
            </div>

            {/* View All Skeleton */}
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="bg-card-secondary h-4 w-24 animate-pulse" />

              <div className="border-border bg-card-secondary size-9 animate-pulse border sm:size-10" />
            </div>
          </div>

          {/* Cards Skeleton */}
          <div className="xss:grid-cols-2 xss:gap-x-4 mlg:grid-cols-3 mlg:gap-x-8 mt-10 grid grid-cols-1 gap-x-5 gap-y-10 sm:mt-12 sm:gap-x-6 sm:gap-y-12 lg:mt-14 xl:grid-cols-4 xl:gap-x-10 2xl:mt-16 2xl:gap-x-16">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="min-w-0">
                {/* Cover */}
                <div className="border-border bg-card-secondary relative aspect-[210/297] w-full animate-pulse border" />

                {/* Info */}
                <div className="pt-3.5 text-center sm:pt-4 xl:pt-5">
                  <div className="bg-card-secondary mx-auto h-3 w-16 animate-pulse" />

                  <div className="bg-card-secondary mx-auto mt-3 h-5 w-[75%] animate-pulse sm:h-6" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  /*
   * --------------------------------------------------
   * No Tech News
   * --------------------------------------------------
   */

  if (!techNewsItems.length) {
    return null;
  }

  /*
   * --------------------------------------------------
   * Content
   * --------------------------------------------------
   */

  return (
    <section
      ref={sectionRef}
      dir={isRTL ? "rtl" : "ltr"}
      className="bg-background border-border border-b pt-14 pb-12 sm:pt-16 sm:pb-14 md:pt-20 md:pb-16 lg:pt-20 xl:pt-[88px] xl:pb-20 2xl:pt-24 2xl:pb-24"
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
            href={`/${locale}/tech-news`}
            className="group text-foreground flex w-fit shrink-0 items-center gap-3 text-xs font-medium sm:gap-4 sm:text-sm lg:mb-1"
          >
            <span>{t("viewAll")}</span>

            <span className="border-border group-hover:border-custom-primary flex size-9 items-center justify-center border transition-colors duration-300 sm:size-10">
              <Arrow
                size={16}
                strokeWidth={1.7}
                className="text-custom-primary"
              />
            </span>
          </Link>
        </div>

        {/* Tech News Grid */}
        <div
          ref={cardsRef}
          className="xss:grid-cols-2 xss:gap-x-4 mlg:grid-cols-3 mlg:gap-x-8 mlg:gap-y-14 mt-10 grid grid-cols-1 gap-x-5 gap-y-10 sm:mt-12 sm:gap-x-6 sm:gap-y-12 lg:mt-14 xl:grid-cols-4 xl:gap-x-10 xl:gap-y-16 2xl:mt-16 2xl:gap-x-16 2xl:gap-y-20"
        >
          {techNewsItems.map((item) => (
            <div key={item.id} className="home-tech-news-card min-w-0">
              <TechNewsCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
