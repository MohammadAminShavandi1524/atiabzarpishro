"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";


import type { BlogInsightItem } from "./blogInsights.data";
import Link from "next/link";

interface ArticleCardProps {
  article: BlogInsightItem;
  index: number;
  isRTL: boolean;
  t: (key: string) => string;
}

export default function ArticleCard({
  article,
  index,
  isRTL,
  t,
}: ArticleCardProps) {
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <article className="blog-card group border-border border-t pt-5">
      <Link href={`/blogs/${article.slug}`} className="block">
        {/* Image */}
        <div className="blog-card-image-wrap relative aspect-[8/5] overflow-hidden">
          <Image
            src={article.image}
            alt={t(article.titleKey)}
            fill
            sizes="40vw"
            className="blog-card-image object-cover"
          />
        </div>

        {/* Meta */}
        <div
          lang="en"
          dir="ltr"
          className="blog-card-meta text-muted-foreground mt-5 flex items-center gap-3 text-[10px] tracking-[0.13em]"
        >
          <span>{String(index).padStart(2, "0")}</span>
          <span>/</span>
          <span>{article.tags[0]}</span>
        </div>

        {/* Title */}
        <h3 className="blog-card-title text-foreground mt-4 max-w-[620px] text-[clamp(1.45rem,2vw,2.2rem)] leading-[1.2] font-semibold">
          {t(article.titleKey)}
        </h3>

        {/* Description */}
        <p className="blog-card-description text-muted-foreground mt-4 max-w-[620px] text-justify text-[14px] leading-7">
          {t(article.descriptionKey)}
        </p>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between">
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
      </Link>
    </article>
  );
}
