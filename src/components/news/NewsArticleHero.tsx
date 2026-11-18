"use client";

import Image from "next/image";

import { useLocale, useTranslations } from "next-intl";

import type { NewsParent } from "./news-article.types";

interface NewsArticleHeroProps {
  news: NewsParent;
}

export default function NewsArticleHero({ news }: NewsArticleHeroProps) {
  const locale = useLocale();
  const t = useTranslations("News.Article");

  return (
    <section className="border-border border-b">
      <div className="w90 py-12 sm:py-14 md:py-16 lg:py-18 xl:py-20">
        <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-10 xl:gap-12 2xl:gap-16">
          {/* Content */}
          <div className="min-w-0 lg:pe-5 xl:pe-6 2xl:pe-8">
            {/* Category */}
            {news.category?.name && (
              <div className="mb-5 flex items-center gap-3 sm:mb-6 sm:gap-4">
                <span className="bg-custom-primary h-px w-9 shrink-0 sm:w-10" />

                <span className="text-custom-primary text-xs font-medium tracking-[0.12em] sm:text-[13px] sm:tracking-[0.14em] xl:text-sm">
                  {news.category.name}
                </span>
              </div>
            )}

            {/* Title */}
            <h1 className="text-foreground xss:text-[33px] max-w-3xl text-[30px] leading-[1.3] font-semibold sm:text-[36px] sm:leading-[1.25] md:text-[38px] lg:text-[36px] xl:text-[40px] xl:leading-[1.2]">
              {news.title}
            </h1>

            {/* Description */}
            <p className="text-muted-foreground mt-5 max-w-3xl text-justify text-sm leading-7 sm:mt-6 sm:text-[15px] sm:leading-7.5 xl:mt-7 xl:text-base xl:leading-8">
              {news.description}
            </p>

            {/* Meta */}
            <div className="border-border mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 border-t pt-5 sm:mt-8 sm:gap-x-4 sm:pt-6 xl:mt-9">
              <div className="text-muted-foreground text-xs sm:text-sm">
                {t("writtenBy")}

                <span className="text-foreground ms-2 font-medium">
                  {t("author")}
                </span>
              </div>

              <span className="bg-border size-1 shrink-0 rounded-full" />

              <span className="text-muted-foreground text-xs sm:text-sm">
                {locale === "fa" ? "۷" : "7"} {t("readTime")}
              </span>
            </div>
          </div>

          {/* Image */}
          {news.image && (
            <div className="border-border relative aspect-[16/9] w-full overflow-hidden border">
              <Image
                alt={news.title}
                src={news.image}
                fill
                sizes="(max-width: 1023px) 100vw, 52vw"
                className="object-cover"
                priority
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
