"use client";

import { useTranslations } from "next-intl";

import TechNewsHero from "./TechNewsHero";
import TechNewsCard from "./TechNewsCard";

import { techNewsItems } from "./techNews.data";

export default function TechNewsPage() {
  const t = useTranslations("TechNews");

  return (
    <>
      <TechNewsHero />

      <section className="bg-background">
        <div className="w90 py-16">
          <div className="border-border mb-10 flex items-end justify-between border-b pb-6">
            <h2 className="text-foreground text-[32px] leading-tight font-semibold">
              {t("library.title")}
            </h2>

            <span className="text-muted-foreground text-sm">
              {techNewsItems.length} {t("library.count")}
            </span>
          </div>

          <div className="grid grid-cols-4 gap-x-16 gap-y-20">
            {techNewsItems.map((item) => (
              <TechNewsCard
                key={item.id}
                item={item}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}