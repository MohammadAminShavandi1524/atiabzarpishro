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
  title: string;
  description: string;
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
        <div className="w90 py-20">
          <div className="grid grid-cols-[1fr_1.05fr] items-center gap-16">
            {/* Content */}
            <div className="pe-8">
              <div className="mb-6 flex items-center gap-4">
                <span className="bg-custom-primary h-px w-10 shrink-0" />

                <span className="text-custom-primary text-sm font-medium tracking-[0.14em]">
                  {news.category.name}
                </span>
              </div>

              <h1 className="text-foreground max-w-3xl text-[40px] leading-[1.2] font-semibold">
                {news.title}
              </h1>

              <p className="text-muted-foreground mt-7 max-w-3xl text-justify text-base leading-8">
                {news.description}
              </p>

              {/* Meta */}
              <div className="border-border mt-9 flex flex-wrap items-center gap-4 border-t pt-6">
                <div className="text-muted-foreground text-sm">
                  {t("writtenBy")}

                  <span className="text-foreground ms-2 font-medium">
                    {t("author")}
                  </span>
                </div>

                <span className="bg-border size-1 rounded-full" />

                <span className="text-muted-foreground text-sm">
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
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="w90 py-24">
        <div className="grid grid-cols-[1fr_360px] items-start gap-16">
          {/* Main Content */}
          <div className="border-border border-e pe-14">
            {children.map((child) => (
              <NewsSection
                key={child.id}
                title={child.title}
                paragraphs={[child.description]}
              />
            ))}
          </div>

          {/* Related News */}
          <aside className="sticky top-16">
            <div className="border-border border">
              {/* Heading */}
              <div className="border-border flex items-center justify-between border-b px-6 py-5">
                <span className="text-foreground text-base font-semibold">
                  {t("moreArticles")}
                </span>

                <Link
                  href={`/${locale}/news`}
                  className="text-muted-foreground hover:text-custom-primary flex items-center gap-2 text-sm transition-colors duration-300"
                >
                  <span>{t("viewAll")}</span>

                  <ArrowLeft className="size-4 ltr:rotate-180" />
                </Link>
              </div>

              {/* Related Items */}
              <div className="px-6">
                {relatedNews.length === 0 ? (
                  <div className="text-muted-foreground flex min-h-40 items-center justify-center text-center text-sm leading-7">
                    {t("noRelatedNews")}
                  </div>
                ) : (
                  relatedNews.slice(0, 4).map((article) => (
                    <Link
                      key={article.id}
                      href={`/${locale}/news/${article.id}/${article.slug}`}
                      className="group/news border-border flex gap-4 border-b py-5 last:border-b-0"
                    >
                      {/* Related Image */}
                      <div className="border-border relative aspect-[16/9] w-28 shrink-0 overflow-hidden border">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          sizes="112px"
                          className="object-cover"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex min-w-0 flex-col justify-center">
                        <span className="text-custom-primary text-xs font-medium">
                          {article.category.name}
                        </span>

                        <h3 className="text-foreground group-hover/news:text-custom-primary mt-2 line-clamp-2 text-sm leading-6 font-medium transition-colors duration-300">
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
