"use client";

import { useLocale, useTranslations } from "next-intl";

export default function RepresentationsHero() {
  const t = useTranslations("Representations");
  const locale = useLocale();

  const isRTL = locale === "fa";

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="bg-secondary-bg border-border border-b"
    >
      <div className="w90 py-20">
        <div className="grid grid-cols-[1.35fr_0.65fr] items-end gap-20">
          {/* Intro */}
          <div className="max-w-5xl">
            <div className="mb-6 flex items-center gap-4">
              <span className="bg-custom-primary h-px w-12 shrink-0" />

              <span className="text-custom-primary text-sm font-medium tracking-[0.14em]">
                {t("hero.eyebrow")}
              </span>
            </div>

            <h1 className="text-foreground max-w-4xl text-[46px] leading-[1.12] font-semibold">
              {t("hero.title")}
            </h1>

            <p className="text-muted-foreground mt-7 max-w-3xl text-justify text-base leading-8">
              {t("hero.description")}
            </p>
          </div>

          {/* Meta */}
          <div className="border-border border-s ps-9">
            <div className="text-custom-primary text-sm font-medium tracking-[0.14em]">
              {t("hero.companyName")}
            </div>

            <div className="text-foreground mt-4 text-xl font-semibold">
              {t("hero.tagline")}
            </div>

            <div className="border-border mt-9 border-t pt-6">
              <span className="text-muted-foreground text-sm tracking-wider">
                {t("hero.meta")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
