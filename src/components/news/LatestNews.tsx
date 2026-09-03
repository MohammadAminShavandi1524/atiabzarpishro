"use client";

import { useEffect, useRef, useState } from "react";

import { useLocale, useTranslations } from "next-intl";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import NewsSummary from "./NewsSummary";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface LatestNewsItem {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  lang: string;
  root_blog: number;
  slug: string;
}

const LatestNews = () => {
  const locale = useLocale();
  const t = useTranslations("News.LatestNews");

  const isRTL = locale === "fa";

  const [news, setNews] = useState<LatestNewsItem[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const headingLineRef = useRef<HTMLSpanElement>(null);
  const countRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const emptyRef = useRef<HTMLDivElement>(null);
  const moreRef = useRef<HTMLDivElement>(null);

  const hasAnimatedInitialCards = useRef(false);

  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);

      try {
        const res = await fetch(`/api/blogs/latest?lang=${locale}`, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch news");
        }

        const data = await res.json();

        setNews(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("FETCH LATEST NEWS ERROR =>", error);

        setNews([]);
      } finally {
        setIsLoading(false);
      }
    };

    setShowAll(false);
    hasAnimatedInitialCards.current = false;

    fetchNews();
  }, [locale]);

  const visibleNews = showAll ? news : news.slice(0, 4);

  useGSAP(
    () => {
      if (!headingRef.current || !countRef.current) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) return;

      const headingChildren = Array.from(headingRef.current.children);

      if (headingLineRef.current) {
        gsap.set(headingLineRef.current, {
          scaleX: 0,
          transformOrigin: isRTL ? "right center" : "left center",
        });
      }

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      if (headingLineRef.current) {
        timeline.to(headingLineRef.current, {
          scaleX: 1,
          duration: 0.7,
          ease: "power4.out",
        });
      }

      timeline.fromTo(
        headingChildren,
        {
          opacity: 0,
          y: 22,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.45",
      );

      timeline.fromTo(
        countRef.current,
        {
          opacity: 0,
          y: 18,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power3.out",
        },
        "-=0.55",
      );
    },
    {
      scope: sectionRef,
      dependencies: [isRTL],
      revertOnUpdate: true,
    },
  );

  useGSAP(
    () => {
      if (isLoading) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) return;

      if (news.length === 0) {
        if (!emptyRef.current) return;

        gsap.fromTo(
          emptyRef.current,
          {
            opacity: 0,
            y: 24,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: emptyRef.current,
              start: "top 88%",
              once: true,
            },
          },
        );

        return;
      }

      if (!gridRef.current) return;

      const cards = Array.from(
        gridRef.current.querySelectorAll<HTMLElement>(".news-card"),
      );

      if (!hasAnimatedInitialCards.current) {
        gsap.fromTo(
          cards,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 82%",
              once: true,
            },
          },
        );

        hasAnimatedInitialCards.current = true;

        return;
      }

      if (showAll && cards.length > 4) {
        const newCards = cards.slice(4);

        gsap.fromTo(
          newCards,
          {
            opacity: 0,
            y: 26,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: "power3.out",
          },
        );
      }
    },
    {
      scope: sectionRef,
      dependencies: [isLoading, news.length, showAll],
    },
  );

  useGSAP(
    () => {
      if (!moreRef.current || news.length <= 4 || isLoading) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) return;

      gsap.fromTo(
        moreRef.current,
        {
          opacity: 0,
          y: 18,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power3.out",
          scrollTrigger: {
            trigger: moreRef.current,
            start: "top 90%",
            once: true,
          },
        },
      );
    },
    {
      scope: sectionRef,
      dependencies: [isLoading, news.length],
    },
  );

  return (
    <section
      ref={sectionRef}
      dir={isRTL ? "rtl" : "ltr"}
      className="w90 py-14 sm:py-16 md:py-20 lg:py-20 xl:py-[88px] 2xl:py-24"
    >
      {/* Heading */}
      <div className="mb-8 flex items-end justify-between gap-5 sm:mb-10 sm:gap-8 lg:mb-11 lg:gap-12 2xl:mb-12 2xl:gap-16">
        <div ref={headingRef} className="min-w-0">
          <div className="mb-4 flex items-center gap-3 sm:mb-5 sm:gap-4">
            <span
              ref={headingLineRef}
              className="bg-custom-primary h-px w-8 shrink-0 sm:w-9 2xl:w-10"
            />

            <span className="text-custom-primary text-xs font-medium tracking-[0.12em] sm:text-[13px] xl:text-sm xl:tracking-[0.14em]">
              {t("eyebrow")}
            </span>
          </div>

          <h2 className="text-foreground xss:text-[29px] max-w-3xl text-[27px] leading-[1.22] font-semibold sm:text-[32px] md:text-[34px] lg:text-[36px] xl:text-[38px] 2xl:text-[2.5rem] 2xl:leading-[1.18]">
            {t("heading")}
          </h2>
        </div>

        {/* Count */}
        <div
          ref={countRef}
          className="flex shrink-0 items-end gap-1.5 sm:gap-2"
        >
          <span className="text-custom-primary text-xl font-semibold sm:text-[22px] 2xl:text-2xl">
            {isLoading ? "—" : news.length}
          </span>

          <span className="text-muted-foreground xss:block mb-0.5 hidden text-xs sm:mb-1 sm:text-sm">
            {t("badge")}
          </span>
        </div>
      </div>

      {/* Loading */}
      {isLoading && (
        <div className="border-border flex min-h-[220px] items-center justify-center border-y">
          <span className="text-muted-foreground text-sm">{t("loading")}</span>
        </div>
      )}

      {/* Empty */}
      {!isLoading && news.length === 0 && (
        <div
          ref={emptyRef}
          className="border-border flex min-h-[260px] flex-col items-center justify-center border-y px-4 py-12 text-center sm:min-h-[300px]"
        >
          <h3 className="text-foreground text-lg font-semibold sm:text-xl">
            {t("emptyTitle")}
          </h3>

          <p className="text-muted-foreground mt-3 max-w-lg text-sm leading-7 sm:text-[15px]">
            {t("emptyDescription")}
          </p>
        </div>
      )}

      {/* News */}
      {!isLoading && news.length > 0 && (
        <>
          <div
            ref={gridRef}
            className="mlg:grid-cols-2 mlg:gap-6 grid grid-cols-1 gap-5 sm:gap-6 xl:gap-7"
          >
            {visibleNews.map((item, index) => (
              <div key={item.id} className="news-card">
                <NewsSummary
                  id={item.id}
                  indexNumber={index + 1}
                  title={item.title}
                  tags={item.tags}
                  description={item.description}
                  slug={item.slug}
                  imageSrc={item.image}
                  avgReadTime={5}
                />
              </div>
            ))}
          </div>

          {/* More */}
          {news.length > 4 && (
            <div
              ref={moreRef}
              className="border-border mt-8 flex justify-start border-t pt-6 sm:mt-10 sm:pt-7 2xl:mt-12 2xl:pt-8"
            >
              <button
                type="button"
                onClick={() => setShowAll((prev) => !prev)}
                className="border-border text-foreground hover:border-custom-primary hover:text-custom-primary xss:w-auto w-full cursor-pointer border px-5 py-3 text-sm font-medium transition-colors duration-300 sm:px-6"
              >
                {showAll ? t("showLess") : t("viewMore")}
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default LatestNews;
