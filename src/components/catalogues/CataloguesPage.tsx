"use client";

import { useTranslations } from "next-intl";

import CataloguesHero from "./CataloguesHero";
import CatalogueCard from "./CatalogueCard";

import { catalogues } from "./catalogues.data";

export default function CataloguesPage() {
  const t = useTranslations("Catalogues");

  return (
    <>
      <CataloguesHero />

      <section className="bg-background">
        <div className="w90 py-16">
          {/* Header */}
          <div className="border-border mb-10 flex items-end justify-between border-b pb-6">
            <h2 className="text-foreground text-[32px] leading-tight font-semibold">
              {t("library.title")}
            </h2>

            <span className="text-muted-foreground text-sm">
              {catalogues.length} {t("library.count")}
            </span>
          </div>

          {/* Catalogues Grid */}
          <div className="grid grid-cols-4 gap-x-16 gap-y-20">
            {catalogues.map((catalogue) => (
              <CatalogueCard key={catalogue.id} catalogue={catalogue} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
