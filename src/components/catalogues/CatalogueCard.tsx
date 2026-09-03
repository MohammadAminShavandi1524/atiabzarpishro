"use client";

import Image from "next/image";
import Link from "next/link";

import { Download, Eye } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import type { CatalogueItem } from "./catalogues.data";

interface CatalogueCardProps {
  catalogue: CatalogueItem;
}

export default function CatalogueCard({ catalogue }: CatalogueCardProps) {
  const locale = useLocale();
  const t = useTranslations("Catalogues");

  return (
    <article className="group min-w-0">
      {/* Cover */}
      <div className="border-border bg-card-secondary relative aspect-[210/297] w-full overflow-hidden border">
        <Image
          src={catalogue.image}
          alt={catalogue.title}
          fill
          sizes="25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />

        {/* Hover Actions */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/45 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {/* Preview */}
          <Link
            href={`/${locale}/catalogues/preview/${catalogue.id}`}
            className="flex size-24 flex-col items-center justify-center gap-2 rounded-full bg-white text-black transition-transform duration-300 hover:scale-105"
          >
            <Eye size={22} strokeWidth={1.6} />

            <span className="text-sm font-medium">{t("actions.preview")}</span>
          </Link>

          {/* Download */}
          <a
            href={catalogue.pdf}
            download
            className="bg-custom-primary flex size-24 flex-col items-center justify-center gap-2 rounded-full text-white transition-transform duration-300 hover:scale-105"
          >
            <Download size={22} strokeWidth={1.6} />

            <span className="text-sm font-medium">{t("actions.download")}</span>
          </a>
        </div>
      </div>

      {/* Information */}
      <div className="pt-5 text-center">
        <div className="text-muted-foreground flex items-center justify-center gap-2 text-[14px]">
          <span lang="en" dir="ltr">
            {catalogue.date}
          </span>

          {catalogue.lang && (
            <>
              <span className="bg-border size-1 rounded-full" />

              <span lang="en" dir="ltr">
                {catalogue.lang}
              </span>
            </>
          )}
        </div>

        <h2
          lang="en"
          dir="ltr"
          className="text-foreground group-hover:text-custom-primary mx-auto mt-3 max-w-[320px] text-[21px] leading-7 font-medium transition-colors duration-300"
        >
          {catalogue.title}
        </h2>
      </div>
    </article>
  );
}
