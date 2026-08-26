"use client";

import {
  useCallback,
  useEffect,
  useState,
} from "react";

import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import {
  useLocale,
  useTranslations,
} from "next-intl";

import useEmblaCarousel from "embla-carousel-react";

import ArticleCard from "./ArticleCard";

import { blogInsights } from "./blogInsights.data";

export default function BlogInsights() {
  const locale = useLocale();

  const t = useTranslations(
    "Home.blogInsights",
  );

  const isRTL =
    locale === "fa";

  const PrevIcon =
    isRTL
      ? ArrowRight
      : ArrowLeft;

  const NextIcon =
    isRTL
      ? ArrowLeft
      : ArrowRight;

  const [
    emblaRef,
    emblaApi,
  ] = useEmblaCarousel({
    align: "start",

    loop: true,

    direction: isRTL
      ? "rtl"
      : "ltr",

    slidesToScroll: 1,
  });

  const [
    selectedIndex,
    setSelectedIndex,
  ] = useState(0);

  const onSelect =
    useCallback(() => {
      if (!emblaApi) {
        return;
      }

      setSelectedIndex(
        emblaApi.selectedScrollSnap(),
      );
    }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    onSelect();

    emblaApi.on(
      "select",
      onSelect,
    );

    emblaApi.on(
      "reInit",
      onSelect,
    );

    return () => {
      emblaApi.off(
        "select",
        onSelect,
      );

      emblaApi.off(
        "reInit",
        onSelect,
      );
    };
  }, [
    emblaApi,
    onSelect,
  ]);

  const scrollPrev =
    useCallback(() => {
      emblaApi?.scrollPrev();
    }, [emblaApi]);

  const scrollNext =
    useCallback(() => {
      emblaApi?.scrollNext();
    }, [emblaApi]);

  return (
    <section
      dir={
        isRTL
          ? "rtl"
          : "ltr"
      }
      className="bg-background pb-12"
    >
      <div className="w90">
        {/* Header */}
        <div className="flex items-end justify-between gap-20">
          {/* Content */}
          <div className="max-w-[900px]">
            {/* Eyebrow */}
            <div className="flex items-center gap-4">
              <span className="bg-custom-primary block h-px w-12 shrink-0" />

              <span className="text-muted-foreground text-sm font-medium tracking-[0.08em]">
                {t("eyebrow")}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-foreground mt-8 text-[clamp(3rem,4vw,5rem)] font-semibold ltr:leading-[1.03] ltr:tracking-[-0.045em] rtl:leading-[1.2]">
              <span className="block">
                {t(
                  "titleLine1",
                )}
              </span>

              <span className="text-custom-primary block">
                {t(
                  "titleLine2",
                )}
              </span>
            </h2>

            {/* Description */}
            <p className="text-muted-foreground mt-10 max-w-[760px] text-[17px] leading-8">
              {t(
                "description",
              )}
            </p>
          </div>

          {/* View All */}
          <Link
            href={`/${locale}/blogs`}
            className="group text-foreground mb-1 flex shrink-0 items-center gap-4 text-sm font-medium"
          >
            <span>
              {t("viewAll")}
            </span>

            <span className="border-border group-hover:border-custom-primary flex size-10 items-center justify-center border transition-colors duration-300">
              <NextIcon
                size={16}
                strokeWidth={1.7}
                className="text-custom-primary"
              />
            </span>
          </Link>
        </div>

        {/* Carousel */}
        <div className="mt-8 overflow-hidden">
          <div
            ref={emblaRef}
            className="overflow-hidden"
          >
            <div className="-ms-5 flex">
              {blogInsights.map(
                (article) => (
                  <div
                    key={
                      article.id
                    }
                    className="min-w-0 flex-[0_0_33.333333%] ps-5"
                  >
                    <ArticleCard
                      article={
                        article
                      }
                      isRTL={
                        isRTL
                      }
                      locale={
                        locale
                      }
                      t={t}
                    />
                  </div>
                ),
              )}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="border-border mt-6 flex items-center justify-between border-t pt-4">
          {/* Counter */}
          <div
            dir="ltr"
            className="flex items-center gap-3"
          >
            <span className="text-custom-primary text-sm font-medium">
              {String(
                selectedIndex +
                  1,
              ).padStart(
                2,
                "0",
              )}
            </span>

            <span className="text-border">
              /
            </span>

            <span className="text-muted-foreground text-sm">
              {String(
                blogInsights.length,
              ).padStart(
                2,
                "0",
              )}
            </span>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={
                scrollPrev
              }
              aria-label="Previous article"
              className="border-border text-foreground hover:border-custom-primary hover:text-custom-primary flex size-11 cursor-pointer items-center justify-center border transition-colors duration-300"
            >
              <PrevIcon
                size={18}
                strokeWidth={1.7}
              />
            </button>

            <button
              type="button"
              onClick={
                scrollNext
              }
              aria-label="Next article"
              className="border-border text-foreground hover:border-custom-primary hover:text-custom-primary flex size-11 cursor-pointer items-center justify-center border transition-colors duration-300"
            >
              <NextIcon
                size={18}
                strokeWidth={1.7}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}