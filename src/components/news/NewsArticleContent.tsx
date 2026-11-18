"use client";

import { NewsSection } from "./NewsSection";

import type { NewsChild, NewsParent } from "./news-article.types";

interface NewsArticleContentProps {
  news: NewsParent;
  children: NewsChild[];
}

export default function NewsArticleContent({
  news,
  children,
}: NewsArticleContentProps) {
  if (children.length > 0) {
    return (
      <>
        {children.map((child) => (
          <NewsSection
            key={child.id}
            title={child.title}
            paragraphs={[child.description]}
            image={child.image}
          />
        ))}
      </>
    );
  }

  const paragraphs = news.description
    ? news.description
        .split(/\n\s*\n/)
        .map((paragraph) => paragraph.trim())
        .filter(Boolean)
    : [];

  return (
    <>
      {/* Parent Category */}
      {news.category?.name && (
        <div className="mb-6 flex items-center gap-3 sm:mb-7 sm:gap-4">
          <span className="bg-custom-primary h-px w-9 shrink-0 sm:w-10" />

          <span className="text-custom-primary text-xs font-medium tracking-[0.12em] sm:text-[13px] sm:tracking-[0.14em] xl:text-sm">
            {news.category.name}
          </span>
        </div>
      )}

      {/* Parent Content */}
      <NewsSection
        title={news.title}
        paragraphs={paragraphs}
        image={news.image}
      />
    </>
  );
}
