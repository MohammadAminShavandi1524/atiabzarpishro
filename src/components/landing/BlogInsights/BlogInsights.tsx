"use client";

import { useRef } from "react";
import { useLocale, useTranslations } from "next-intl";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { englishToPersianNumber } from "@/lib/utils";

import { blogInsights } from "./blogInsights.data";
import FeaturedArticle from "./FeaturedArticle";
import ArticleCard from "./ArticleCard";
import { useBlogInsightsAnimation } from "./useBlogInsightsAnimation";
import Link from "next/link";

export default function BlogInsights() {
  const locale = useLocale();
  const t = useTranslations("Home.blogInsights");

  const isRTL = locale === "fa";

  const sectionRef = useRef<HTMLElement>(null);

  useBlogInsightsAnimation({
    sectionRef,
    isRTL,
  });

  const [featured, ...rest] = blogInsights;

  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section
      ref={sectionRef}
      dir={isRTL ? "rtl" : "ltr"}
      className="bg-background border-border relative overflow-hidden border-t"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <span className="blog-bg-line bg-border absolute inset-y-0 start-[5%] w-px" />

        <span className="blog-bg-line bg-border absolute inset-y-0 end-[5%] w-px" />
      </div>

      <div className="w90 relative z-10">
        {/* Header */}
        <div className="blog-header border-border grid min-h-[360px] grid-cols-[0.42fr_1.58fr] border-b">
          {/* Left */}
          <div className="relative flex flex-col justify-between py-11 pe-12 pt-16">
            <span
              aria-hidden="true"
              className="blog-main-divider bg-border absolute inset-y-0 end-0 w-px"
            />

            <div className="blog-eyebrow flex items-center gap-4">
              <span className="blog-eyebrow-line bg-custom-primary block h-px w-10" />

              <span className="text-muted-foreground text-sm font-medium tracking-[0.08em]">
                {t("eyebrow")}
              </span>
            </div>

            <div
              lang="en"
              className="blog-chapter text-muted-foreground flex items-center gap-3 text-[10px] tracking-[0.14em]"
            >
              <span>ATI</span>

              <span className="blog-chapter-line bg-border block h-px w-8" />

              <span>INSIGHTS / BLOG</span>
            </div>
          </div>

          {/* Title */}
          <div className="flex items-center ps-[7vw] pt-12 pb-12">
            <div className="max-w-[900px]">
              <div className="overflow-hidden">
                <h2 className="blog-title-line text-foreground text-[80px] rtl:text-[64px] font-semibold ltr:leading-[0.98] ltr:tracking-[-0.045em]  rtl:leading-[1.2]">
                  {t("titleLine1")}
                </h2>
              </div>

              <div className="mt-1 overflow-hidden">
                <h2 className="blog-title-line text-custom-primary text-[64px] rtl:text-[56px] font-semibold ltr:leading-[0.98] ltr:tracking-[-0.045em]  rtl:leading-[1.2]">
                  {t("titleLine2")}
                </h2>
              </div>

              <p className="blog-description text-muted-foreground mt-9 max-w-[680px] text-[15px] leading-8">
                {t("description")}
              </p>
            </div>
          </div>
        </div>

        {/* Featured */}
        <div className="blog-featured-section py-16">
          <FeaturedArticle article={featured} isRTL={isRTL} t={t} />
        </div>

        {/* Secondary */}
        <div className="blog-secondary border-border grid grid-cols-2 gap-10 border-t py-14">
          {rest.map((article, index) => (
            <ArticleCard
              key={article.id}
              article={article}
              index={index + 2}
              isRTL={isRTL}
              t={t}
            />
          ))}
        </div>

        {/* Bottom */}
        <div className="blog-bottom border-border flex min-h-[130px] items-center justify-between border-t">
          <span
            lang="en"
            className="text-muted-foreground text-[10px] tracking-[0.13em]"
          >
            LATEST ARTICLES
          </span>

          <Link
            href="/blogs"
            className="blog-view-all group text-foreground flex items-center gap-4 text-sm font-medium"
          >
            <span>{t("viewAll")}</span>

            <span className="border-border group-hover:border-custom-primary flex size-10 items-center justify-center border transition-colors duration-300">
              <Arrow
                size={16}
                strokeWidth={1.7}
                className="text-custom-primary"
              />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
