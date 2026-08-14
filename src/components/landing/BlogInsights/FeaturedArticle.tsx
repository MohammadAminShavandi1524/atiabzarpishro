"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";


import type { BlogInsightItem } from "./blogInsights.data";
import Link from "next/link";

interface FeaturedArticleProps {
  article: BlogInsightItem;
  isRTL: boolean;
  t: (key: string) => string;
}

export default function FeaturedArticle({
  article,
  isRTL,
  t,
}: FeaturedArticleProps) {
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <article className="blog-featured group">
      <Link
        href={`/blogs/${article.slug}`}
        className="grid grid-cols-[1.2fr_0.8fr] overflow-hidden"
      >
        {/* Image */}
        <div className="blog-featured-image-wrap relative aspect-[8/5] overflow-hidden">
          <Image
            src={article.image}
            alt={t(article.titleKey)}
            fill
            sizes="65vw"
            className="blog-featured-image object-cover"
          />
        </div>

        {/* Content */}
        <div className="border-border relative flex flex-col justify-between border-s p-10">
          <div>
            <div
              lang="en"
              dir="ltr"
              className="blog-featured-meta text-muted-foreground flex items-center gap-3 text-[10px] tracking-[0.14em]"
            >
              <span>01</span>
              <span>/</span>
              <span>{article.tags[0]}</span>
            </div>

            <h3 className="blog-featured-title text-foreground mt-8 max-w-[520px] text-[clamp(2rem,3vw,3.7rem)] leading-[1.05] font-semibold tracking-[-0.035em]">
              {t(article.titleKey)}
            </h3>

            <p className="blog-featured-description text-muted-foreground mt-6 max-w-[500px] text-justify text-[15px] leading-8">
              {t(article.descriptionKey)}
            </p>
          </div>

          <div className="mt-10 flex items-center justify-between">
            <span
              lang="en"
              dir="ltr"
              className="text-muted-foreground text-[10px] tracking-[0.12em]"
            >
              {article.avgReadTime} MIN READ
            </span>

            <span className="border-border group-hover:border-custom-primary flex size-11 items-center justify-center border transition-colors duration-300">
              <Arrow
                size={17}
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
