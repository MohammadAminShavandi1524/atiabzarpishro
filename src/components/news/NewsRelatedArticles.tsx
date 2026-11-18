"use client";

import Image from "next/image";
import Link from "next/link";

import { ArrowLeft } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import type { NewsParent } from "./news-article.types";

interface NewsRelatedArticlesProps {
  articles: NewsParent[];
}

export default function NewsRelatedArticles({
  articles,
}: NewsRelatedArticlesProps) {
  const locale = useLocale();
  const t = useTranslations("News.Article");

  return (
    <aside className="lg:sticky lg:top-16">
      <div className="border-border border">
        {/* Heading */}
        <div className="border-border flex flex-wrap items-center justify-between gap-3 border-b px-4 py-4 sm:px-5 sm:py-5 xl:px-6">
          <span className="text-foreground text-sm font-semibold sm:text-base">
            {t("moreArticles")}
          </span>

          <Link
            href={`/${locale}/news`}
            className="text-muted-foreground hover:text-custom-primary flex items-center gap-2 text-xs transition-colors duration-300 sm:text-sm"
          >
            <span>{t("viewAll")}</span>

            <ArrowLeft className="size-4 ltr:rotate-180" />
          </Link>
        </div>

        {/* Related Items */}
        <div className="px-4 sm:px-5 xl:px-6">
          {articles.length === 0 ? (
            <div className="text-muted-foreground flex min-h-40 items-center justify-center text-center text-sm leading-7">
              {t("noRelatedNews")}
            </div>
          ) : (
            articles.slice(0, 4).map((article) => (
              <Link
                key={article.id}
                href={`/${locale}/news/${article.id}/${article.slug}`}
                className="group/news border-border flex items-center gap-3 border-b py-4 last:border-b-0 sm:gap-4 sm:py-5"
              >
                {/* Related Image */}
                {article.image && (
                  <div className="border-border xss:w-28 relative aspect-[16/9] w-24 shrink-0 overflow-hidden border lg:w-24 xl:w-28">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="112px"
                      className="object-cover"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="flex min-w-0 flex-1 flex-col justify-center">
                  <span className="text-custom-primary text-[11px] font-medium sm:text-xs">
                    {article.category?.name}
                  </span>

                  <h3 className="text-foreground group-hover/news:text-custom-primary mt-1.5 line-clamp-2 text-[13px] leading-5 font-medium transition-colors duration-300 sm:mt-2 sm:text-sm sm:leading-6">
                    {article.title}
                  </h3>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </aside>
  );
}
