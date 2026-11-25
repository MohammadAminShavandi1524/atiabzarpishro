"use client";

import Image from "next/image";
import Link from "next/link";

import { Download, Eye, BookOpen } from "lucide-react";
import { useLocale } from "next-intl";

import type { NewsTechNews } from "./news-article.types";

interface NewsTechNewsSectionProps {
  techNews: NewsTechNews | null | undefined;
}

export default function NewsTechNewsSection({
  techNews,
}: NewsTechNewsSectionProps) {
  const locale = useLocale();
  const isRTL = locale === "fa";

  if (!techNews) return null;

  const title = isRTL
    ? techNews.name_fa || techNews.name_en
    : techNews.name_en || techNews.name_fa;

  return (
    <section className="border-border mt-12 border-t pt-8 sm:mt-14 sm:pt-10 md:mt-16">
      {/* Heading */}
      <div className="mb-6 flex items-center gap-3 sm:mb-7">
        <BookOpen className="text-custom-primary size-5" strokeWidth={1.6} />

        <h2 className="text-foreground text-lg font-semibold sm:text-xl">
          {isRTL ? "خبر فنی مرتبط با این خبر" : "Related Tech News"}
        </h2>
      </div>

      {/* Related Tech News */}
      <div className="border-border flex flex-col gap-5 border p-4 sm:flex-row sm:items-center sm:gap-6 sm:p-5 xl:p-6">
        {/* Cover */}
        {techNews.image && (
          <div className="bg-card-secondary relative aspect-[210/297] w-full shrink-0 overflow-hidden sm:w-28 md:w-32">
            <Image
              src={techNews.image}
              alt={title}
              fill
              sizes="(max-width: 639px) 100vw, 128px"
              className="object-cover"
            />
          </div>
        )}

        {/* Details */}
        <div className="flex min-w-0 flex-1 flex-col items-start">
          <h3 className="text-foreground mt-2 text-base leading-7 font-semibold sm:text-lg">
            {title}
          </h3>

          <p className="text-muted-foreground mt-2 text-sm leading-7">
            {isRTL
              ? "برای مشاهده اطلاعات فنی بیشتر، خبر فنی مرتبط را مشاهده کنید یا منبع آن را باز کنید."
              : "Explore the related technical publication or open its source for more information."}
          </p>

          {/* Actions */}
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href={`/${locale}/tech-news/preview/${techNews.id}`}
              className="border-border text-foreground hover:border-custom-primary hover:text-custom-primary inline-flex min-h-11 items-center justify-center gap-2 border px-4 text-sm font-medium transition-colors duration-300"
            >
              <Eye className="size-4" strokeWidth={1.7} />

              <span>{isRTL ? "پیش‌نمایش" : "Preview"}</span>
            </Link>

            {techNews.url && (
              <a
                href={techNews.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-custom-primary inline-flex min-h-11 items-center justify-center gap-2 px-4 text-sm font-medium text-white transition-opacity duration-300 hover:opacity-90"
              >
                <Download className="size-4" strokeWidth={1.7} />

                <span>{isRTL ? "مشاهده منبع" : "Open Source"}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
