"use client";

import { useTranslations } from "next-intl";

export default function TechNewsHero() {
  const t = useTranslations("TechNews");

  return (
    <section className="border-border border-b">
      <div className="w90 py-14">
        <h1 className="text-foreground max-w-4xl text-[42px] leading-tight font-semibold">
          {t("hero.title")}
        </h1>

        <p className="text-muted-foreground mt-5 max-w-3xl text-base leading-8">
          {t("hero.description")}
        </p>
      </div>
    </section>
  );
}