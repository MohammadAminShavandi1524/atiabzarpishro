"use client";

import { useTranslations } from "next-intl";

const CataloguesHero = () => {
  const t = useTranslations("Catalogues");

  return (
    <section className="border-border border-b">
      <div className="w90 py-14">
        <span className="text-custom-primary text-xs font-medium tracking-[0.14em]">
          {t("hero.eyebrow")}
        </span>

        <h1 className="text-foreground mt-4 max-w-4xl text-[42px] leading-tight font-semibold">
          {t("hero.title")}
        </h1>

        <p className="text-muted-foreground mt-5 max-w-3xl text-justify text-base leading-8">
          {t("hero.description")}
        </p>
      </div>
    </section>
  );
};

export default CataloguesHero;
