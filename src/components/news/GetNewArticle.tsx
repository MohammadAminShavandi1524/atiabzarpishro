"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

const GetNewArticle = () => {
  const t = useTranslations("News.GetNewArticle");
  const locale = useLocale();

  const isRTL = locale === "fa";

  return (
    <section dir={isRTL ? "rtl" : "ltr"} className="border-border border-t">
      <div className="w90 py-24">
        <div className="grid grid-cols-[1fr_0.65fr] items-end gap-20">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="bg-custom-primary h-px w-10 shrink-0" />

              <span className="text-custom-primary text-sm font-medium tracking-[0.14em]">
                {t("eyebrow")}
              </span>
            </div>

            <h2 className="text-foreground max-w-3xl text-[2.5rem] leading-[1.18] font-semibold">
              {t("title")}
            </h2>

            <p className="text-muted-foreground mt-6 max-w-2xl text-justify text-base leading-8">
              {t("description")}
            </p>
          </div>

          <div className="border-border border-s ps-10">
            <span className="text-muted-foreground block text-sm font-medium tracking-wider">
              {t("emailLabel")}
            </span>

            <Link
              href="mailto:info@Atiabzarpishro.com"
              dir="ltr"
              className="text-foreground hover:text-custom-primary mt-4 inline-block text-lg font-medium transition-colors duration-300"
            >
              info@Atiabzarpishro.com
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetNewArticle;
