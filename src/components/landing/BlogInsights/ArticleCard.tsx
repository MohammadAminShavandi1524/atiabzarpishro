"use client";

import Image from "next/image";
import Link from "next/link";

import { ArrowLeft, ArrowRight } from "lucide-react";

import type { BlogInsightItem } from "./blogInsights.data";

interface ArticleCardProps {
  article: BlogInsightItem;
  isRTL: boolean;
  locale: string;
  t: (key: string) => string;
}

export default function ArticleCard({
  article,
  isRTL,
  locale,
  t,
}: ArticleCardProps) {
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <article className="group h-full min-w-0">
      <Link
        href={`/${locale}/blogs/${article.slug}`}
        className="flex h-full flex-col"
      >
        {/* Image */}
        <div className="relative aspect-[8/5] w-full overflow-hidden">
          <Image
            src={article.image}
            alt={t(article.titleKey)}
            fill
            sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 ease-out lg:group-hover:scale-[1.025]"
          />
        </div>

        {/* Content */}
        <div className="border-border flex flex-1 flex-col border-x border-b px-4 py-5 sm:px-5 sm:py-5 lg:px-5 xl:px-6 xl:py-6">
          {/* Tag */}
          <span
            lang="en"
            dir="ltr"
            className="text-custom-primary text-[9px] font-medium tracking-[0.12em] sm:text-[10px] sm:tracking-[0.13em]"
          >
            {article.tags[0]}
          </span>

          {/* Title */}
          <h3 className="text-foreground mt-3 min-h-0 text-[18px] leading-[1.35] font-semibold sm:mt-4 sm:min-h-[72px] sm:text-[20px] lg:text-[21px] xl:min-h-[82px] xl:text-[23px] 2xl:text-[24px] 2xl:leading-[1.25]">
            {t(article.titleKey)}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground mt-4 line-clamp-3 text-justify text-[13px] leading-6 sm:mt-5 xl:text-[14px] xl:leading-7">
            {t(article.descriptionKey)}
          </p>

          {/* Footer */}
          <div className="border-border mt-5 flex items-center justify-between border-t pt-4 sm:mt-auto sm:pt-5">
            <span
              lang="en"
              dir="ltr"
              className="text-muted-foreground text-[9px] tracking-[0.1em] sm:text-[10px] sm:tracking-[0.12em]"
            >
              {article.avgReadTime} MIN READ
            </span>

            <span className="border-border lg:group-hover:border-custom-primary flex size-8 items-center justify-center border transition-colors duration-300 sm:size-9">
              <Arrow
                size={14}
                strokeWidth={1.6}
                className="text-custom-primary"
              />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
