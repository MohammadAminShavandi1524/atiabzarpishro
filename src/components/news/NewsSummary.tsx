"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { cn } from "@/lib/utils";

interface NewsSummaryProps {
  id: number;
  indexNumber: number | string;
  slug: string;
  title: string;
  description: string;
  tags: string[];
  imageSrc: string;
  avgReadTime: number;
}

const NewsSummary = ({
  id,
  slug,
  indexNumber,
  title,
  tags,
  description,
  imageSrc,
}: NewsSummaryProps) => {
  const locale = useLocale();
  const t = useTranslations("News.LatestNews");

  const isRTL = locale === "fa";

  return (
    <article
      dir={isRTL ? "rtl" : "ltr"}
      className="group/news border-border bg-background relative overflow-hidden border"
    >
      {/* Image */}
      <div className="border-border relative aspect-[16/8.5] w-full overflow-hidden border-b">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 1280px) 50vw, 720px"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover/news:scale-[1.025]"
        />
      </div>

      {/* Content */}
      <div className="flex min-h-[300px] flex-col p-7">
        {/* Tags */}
        {tags.length > 0 && (
          <div className="mb-5 flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag, index) => (
              <span
                key={`${tag}-${index}`}
                className="border-border text-muted-foreground border px-2.5 py-1 text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h3
          className={cn(
            "text-foreground group-hover/news:text-custom-primary max-w-xl text-[20px] leading-8 font-semibold transition-colors duration-300",
            isRTL && "text-justify",
          )}
        >
          {title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground mt-4 line-clamp-3 max-w-2xl text-justify text-[15px] leading-7">
          {description}
        </p>

        {/* Footer */}
        <div className="border-border mt-auto flex items-center justify-end border-t pt-5">
          <Link
            href={`/${locale}/news/${id}/${slug}`}
            className="group/link text-foreground hover:text-custom-primary inline-flex items-center gap-3 text-sm font-medium transition-colors duration-300"
          >
            <span>{t("readMore")}</span>

            <ArrowRight
              className="size-4 transition-transform duration-300 rtl:rotate-180"
              strokeWidth={1.8}
            />
          </Link>

          
        </div>
      </div>

      {/* Hover Indicator */}
      <span className="bg-custom-primary origin-start absolute inset-x-0 top-0 z-10 h-0.5 scale-x-0 transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover/news:scale-x-100" />
    </article>
  );
};

export default NewsSummary;
