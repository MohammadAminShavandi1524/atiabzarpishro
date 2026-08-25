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
    <article className="group h-full">
      <Link
        href={`/${locale}/blogs/${article.slug}`}
        className="flex h-full flex-col"
      >
        {/* Image */}
        <div className="relative aspect-[8/5] overflow-hidden">
          <Image
            src={article.image}
            alt={t(article.titleKey)}
            fill
            sizes="33vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]"
          />
        </div>

        {/* Content */}
        <div className="border-border flex flex-1 flex-col border-x border-b px-6 py-6">
          {/* Tag */}
          <span
            lang="en"
            dir="ltr"
            className="text-custom-primary text-[10px] font-medium tracking-[0.13em]"
          >
            {article.tags[0]}
          </span>

          {/* Title */}
          <h3 className="text-foreground mt-4 min-h-[82px] text-[24px] leading-[1.25] font-semibold">
            {t(article.titleKey)}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground mt-5 line-clamp-3 text-[14px] leading-7">
            {t(article.descriptionKey)}
          </p>

          {/* Footer */}
          <div className="border-border mt-auto flex items-center justify-between border-t pt-5">
            <span
              lang="en"
              dir="ltr"
              className="text-muted-foreground text-[10px] tracking-[0.12em]"
            >
              {article.avgReadTime} MIN READ
            </span>

            <span className="border-border group-hover:border-custom-primary flex size-9 items-center justify-center border transition-colors duration-300">
              <Arrow
                size={15}
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
