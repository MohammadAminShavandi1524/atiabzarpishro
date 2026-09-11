"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

import { ArrowLeft } from "lucide-react";

import { useLocale, useTranslations } from "next-intl";

import { NewsSection } from "@/components/news/NewsSection";
import ArticleFooter from "@/components/news/ArticleFooter";

interface NewsChild {
  id: number;
  blog: number;
  title: string | null;
  description: string | null;
  image: string | null;
}

interface NewsParent {
  id: number;
  title: string;
  description: string;
  image: string;

  category: {
    id: number;
    name: string;
  };

  root_blog: number;
  tags: string[];
  lang: string;
  published: boolean;
  slug: string;
}

interface NewsResponse {
  fa: {
    parent: NewsParent;
    child: NewsChild[];
  };

  en: {
    parent: NewsParent;
    child: NewsChild[];
  };
}

const Page = () => {
  const locale = useLocale();
  const t = useTranslations("News.Article");

  const params = useParams();
  const id = params.id as string;

  const [newsData, setNewsData] = useState<NewsResponse | null>(null);
  const [relatedNews, setRelatedNews] = useState<NewsParent[]>([]);

  const relatedId =
    locale === "fa" ? newsData?.fa.parent.id : newsData?.en.parent.id;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(`/api/blogs/children/${id}`, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch news");
        }

        const data = await res.json();

        setNewsData(data);
      } catch (error) {
        console.error("FETCH NEWS ERROR =>", error);
      }
    };

    fetchNews();
  }, [id]);

  useEffect(() => {
    if (!relatedId) return;

    const fetchRelatedNews = async () => {
      try {
        const res = await fetch(`/api/blogs/related/${relatedId}`, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch related news");
        }

        const data = await res.json();

        setRelatedNews(data);
      } catch (error) {
        console.error("FETCH RELATED NEWS ERROR =>", error);
      }
    };

    fetchRelatedNews();
  }, [relatedId]);

  if (!newsData) return null;

  const news = locale === "fa" ? newsData.fa.parent : newsData.en.parent;

  const children = locale === "fa" ? newsData.fa.child : newsData.en.child;

  return (
    <div dir={locale === "fa" ? "rtl" : "ltr"} className="bg-background">
      {/* News Hero */}
      <section className="border-border border-b">
        <div className="w90 py-12 sm:py-14 md:py-16 lg:py-18 xl:py-20">
          <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-10 xl:gap-12 2xl:gap-16">
            {/* Content */}
            <div className="min-w-0 lg:pe-5 xl:pe-6 2xl:pe-8">
              {/* Category */}
              <div className="mb-5 flex items-center gap-3 sm:mb-6 sm:gap-4">
                <span className="bg-custom-primary h-px w-9 shrink-0 sm:w-10" />

                <span className="text-custom-primary text-xs font-medium tracking-[0.12em] sm:text-[13px] sm:tracking-[0.14em] xl:text-sm">
                  {news.category.name}
                </span>
              </div>

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
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="w90 py-14 sm:py-16 md:py-20 lg:py-20 xl:py-24">
        <div className="grid grid-cols-1 items-start gap-14 md:gap-16 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-8 xl:grid-cols-[minmax(0,1fr)_340px] xl:gap-12 2xl:grid-cols-[minmax(0,1fr)_360px] 2xl:gap-16">
          {/* Main Content */}
          <div className="border-border min-w-0 lg:border-e lg:pe-8 xl:pe-10 2xl:pe-14">
            {children.map((child) => (
              <NewsSection
                key={child.id}
                title={child.title}
                paragraphs={[child.description]}
                image={child.image}
              />
            ))}
          </div>

          {/* Related News */}
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
                {relatedNews.length === 0 ? (
                  <div className="text-muted-foreground flex min-h-40 items-center justify-center text-center text-sm leading-7">
                    {t("noRelatedNews")}
                  </div>
                ) : (
                  relatedNews.slice(0, 4).map((article) => (
                    <Link
                      key={article.id}
                      href={`/${locale}/news/${article.id}/${article.slug}`}
                      className="group/news border-border flex items-center gap-3 border-b py-4 last:border-b-0 sm:gap-4 sm:py-5"
                    >
                      {/* Related Image */}
                      <div className="border-border xss:w-28 relative aspect-[16/9] w-24 shrink-0 overflow-hidden border lg:w-24 xl:w-28">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          sizes="112px"
                          className="object-cover"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex min-w-0 flex-1 flex-col justify-center">
                        <span className="text-custom-primary text-[11px] font-medium sm:text-xs">
                          {article.category.name}
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
        </div>

        <ArticleFooter tags={news.tags} />
      </section>
    </div>
  );
};

export default Page;
