"use client";

import { useEffect, useState } from "react";

import { useLocale, useTranslations } from "next-intl";

import NewsSummary from "./NewsSummary";

interface LatestNewsItem {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  lang: string;
  root_blog: number;
  slug: string;
}

const LatestNews = () => {
  const locale = useLocale();
  const t = useTranslations("News.LatestNews");

  const [news, setNews] = useState<LatestNewsItem[]>([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(`/api/blogs/latest?lang=${locale}`, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch news");
        }

        const data = await res.json();

        setNews(data);
      } catch (error) {
        console.error("FETCH LATEST NEWS ERROR =>", error);
      }
    };

    fetchNews();
  }, [locale]);

  const visibleNews = showAll ? news.slice(0, 8) : news.slice(0, 4);

  return (
    <section className="w90 py-24">
      {/* Heading */}
      <div className="mb-12 flex items-end justify-between gap-16">
        <div>
          <div className="mb-5 flex items-center gap-4">
            <span className="bg-custom-primary h-px w-10 shrink-0" />

            <span className="text-custom-primary text-sm font-medium tracking-[0.14em]">
              {t("eyebrow")}
            </span>
          </div>

          <h2 className="text-foreground max-w-3xl text-[2.5rem] leading-[1.18] font-semibold">
            {t("heading")}
          </h2>
        </div>

        <div className="flex items-end gap-2">
          <span className="text-custom-primary text-2xl font-semibold">
            {String(news.length).padStart(2, "0")}
          </span>

          <span className="text-muted-foreground mb-1 text-sm">
            {t("badge")}
          </span>
        </div>
      </div>

      {/* News */}
      <div className="grid grid-cols-2 gap-7">
        {visibleNews.map((item, index) => (
          <NewsSummary
            key={item.id}
            id={item.id}
            indexNumber={index + 1}
            title={item.title}
            tags={item.tags}
            description={item.description}
            slug={item.slug}
            imageSrc={item.image}
            avgReadTime={5}
          />
        ))}
      </div>

      {/* More */}
      {news.length > 4 && (
        <div className="border-border mt-12 flex justify-start border-t pt-8">
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="border-border text-foreground hover:border-custom-primary hover:text-custom-primary cursor-pointer border px-6 py-3 text-sm font-medium transition-colors duration-300"
          >
            {showAll ? t("showLess") : t("viewMore")}
          </button>
        </div>
      )}
    </section>
  );
};

export default LatestNews;
