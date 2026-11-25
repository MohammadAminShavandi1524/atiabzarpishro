"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import { useParams } from "next/navigation";

import { ArrowLeft, FileQuestion } from "lucide-react";
import { useLocale } from "next-intl";

import ArticleFooter from "@/components/news/ArticleFooter";
import NewsArticleHero from "@/components/news/NewsArticleHero";
import NewsArticleContent from "@/components/news/NewsArticleContent";
import NewsTechNewsSection from "@/components/news/NewsTechNewsSection";
import NewsRelatedArticles from "@/components/news/NewsRelatedArticles";

import type {
  NewsLanguage,
  NewsParent,
  NewsResponse,
} from "@/components/news/news-article.types";

export default function Page() {
  const locale = useLocale();
  const params = useParams();

  const id = params.id as string;

  const language: NewsLanguage = locale === "fa" ? "fa" : "en";
  const isRTL = language === "fa";

  const [newsData, setNewsData] = useState<NewsResponse | null>(null);
  const [relatedNews, setRelatedNews] = useState<NewsParent[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Fetch article and its children.
  useEffect(() => {
    let cancelled = false;

    const fetchNews = async () => {
      setIsLoading(true);
      setHasError(false);
      setNewsData(null);

      try {
        const res = await fetch(`/api/blogs/children/${id}`, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch news");
        }

        const data: NewsResponse = await res.json();

        if (!cancelled) {
          setNewsData(data);
        }
      } catch (error) {
        console.error("FETCH NEWS ERROR =>", error);

        if (!cancelled) {
          setHasError(true);
          setNewsData(null);
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    };

    fetchNews();

    return () => {
      cancelled = true;
    };
  }, [id]);

  // The API may return only one language.
  const languageData = newsData?.[language];

  const news =
    languageData?.parent?.published === true ? languageData.parent : null;

  const children = Array.isArray(languageData?.child) ? languageData.child : [];

  const hasChildren = children.length > 0;

  const relatedId = news?.id;

  // Fetch related news only when this language is available.
  useEffect(() => {
    let cancelled = false;

    setRelatedNews([]);

    if (!relatedId) return;

    const fetchRelatedNews = async () => {
      try {
        const res = await fetch(`/api/blogs/related/${relatedId}`, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch related news");
        }

        const data: NewsParent[] = await res.json();

        if (!cancelled) {
          const validArticles = Array.isArray(data)
            ? data.filter(
                (article) =>
                  article.id !== relatedId &&
                  article.published !== false &&
                  (!article.lang || article.lang === language),
              )
            : [];

          setRelatedNews(validArticles);
        }
      } catch (error) {
        console.error("FETCH RELATED NEWS ERROR =>", error);

        if (!cancelled) {
          setRelatedNews([]);
        }
      }
    };

    fetchRelatedNews();

    return () => {
      cancelled = true;
    };
  }, [relatedId, language]);

  // Loading state.
  if (isLoading) {
    return (
      <div
        dir={isRTL ? "rtl" : "ltr"}
        className="bg-background flex min-h-[60vh] items-center justify-center px-5 py-20"
      >
        <p role="status" className="text-muted-foreground text-sm">
          {isRTL ? "در حال دریافت خبر..." : "Loading article..."}
        </p>
      </div>
    );
  }

  // Request error or unavailable language.
  if (hasError || !news) {
    const title = hasError
      ? isRTL
        ? "خطا در دریافت خبر"
        : "Unable to load article"
      : isRTL
        ? "این خبر به زبان فارسی در دسترس نیست"
        : "This article is not available in English";

    const description = hasError
      ? isRTL
        ? "در دریافت اطلاعات خبر مشکلی پیش آمده است. لطفاً دوباره تلاش کنید."
        : "Something went wrong while loading this article. Please try again."
      : isRTL
        ? "نسخه فارسی این خبر هنوز ایجاد یا منتشر نشده است."
        : "The English version of this article has not been created or published yet.";

    return (
      <section dir={isRTL ? "rtl" : "ltr"} className="bg-background">
        <div className="w90 flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
          <FileQuestion
            className="text-custom-primary size-10 sm:size-12"
            strokeWidth={1.3}
          />

          <h1 className="text-foreground mt-6 text-xl leading-8 font-semibold sm:text-2xl">
            {title}
          </h1>

          <p className="text-muted-foreground mt-4 max-w-md text-sm leading-7 sm:text-[15px]">
            {description}
          </p>

          <Link
            href={`/${locale}/news`}
            className="border-border text-foreground hover:border-custom-primary hover:text-custom-primary mt-8 inline-flex min-h-11 items-center gap-2 border px-5 text-sm font-medium transition-colors duration-300"
          >
            <ArrowLeft className="size-4 rtl:rotate-180" />

            <span>{isRTL ? "بازگشت به اخبار" : "Back to news"}</span>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <div dir={isRTL ? "rtl" : "ltr"} className="bg-background">
      {/* Hero is displayed only when the article has children. */}
      {hasChildren && <NewsArticleHero news={news} />}

      {/* Article Content */}
      <section className="w90 py-14 sm:py-16 md:py-20 lg:py-20 xl:py-24">
        <div className="grid grid-cols-1 items-start gap-14 md:gap-16 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-8 xl:grid-cols-[minmax(0,1fr)_340px] xl:gap-12 2xl:grid-cols-[minmax(0,1fr)_360px] 2xl:gap-16">
          {/* Main Content */}
          <main className="border-border min-w-0 lg:border-e lg:pe-8 xl:pe-10 2xl:pe-14">
            <NewsArticleContent news={news} children={children} />

            {/* Related Tech News */}
            <NewsTechNewsSection techNews={news.tech_news} />
          </main>

          {/* Related News */}
          <NewsRelatedArticles articles={relatedNews} />
        </div>

        {/* Footer */}
        <ArticleFooter tags={news.tags ?? []} />
      </section>
    </div>
  );
}
