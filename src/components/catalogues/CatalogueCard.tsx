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
          sizes="(max-width: 399px) 100vw, (max-width: 895px) 50vw, (max-width: 1279px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 lg:group-hover:scale-[1.02]"
        />

        {/* Mobile / Tablet Actions */}
        <div className="absolute inset-x-0 bottom-0 z-10 grid grid-cols-2 lg:hidden">
          <Link
            href={`/${locale}/catalogues/preview/${catalogue.id}`}
            className="xss:text-[13px] flex min-h-11 items-center justify-center gap-2 bg-white/95 px-2 text-xs font-medium text-black backdrop-blur-sm transition-colors duration-200 hover:bg-white sm:min-h-12 sm:text-sm"
          >
            <Eye className="size-4 shrink-0" strokeWidth={1.7} />

            <span>{t("actions.preview")}</span>
          </Link>

          <a
            href={catalogue.pdf}
            download
            className="bg-custom-primary xss:text-[13px] flex min-h-11 items-center justify-center gap-2 px-2 text-xs font-medium text-white transition-opacity duration-200 hover:opacity-90 sm:min-h-12 sm:text-sm"
          >
            <Download className="size-4 shrink-0" strokeWidth={1.7} />

            <span>{t("actions.download")}</span>
          </a>
        </div>

        {/* Desktop Hover Actions */}
        <div className="absolute inset-0 hidden items-center justify-center gap-3 bg-black/45 opacity-0 transition-opacity duration-300 lg:flex lg:group-hover:opacity-100">
          {/* Preview */}
          <Link
            href={`/${locale}/catalogues/preview/${catalogue.id}`}
            className="flex size-20 flex-col items-center justify-center gap-2 rounded-full bg-white text-black transition-transform duration-300 hover:scale-105 xl:size-22 2xl:size-24"
          >
            <Eye className="size-5 2xl:size-[22px]" strokeWidth={1.6} />

            <span className="text-xs font-medium xl:text-[13px] 2xl:text-sm">
              {t("actions.preview")}
            </span>
          </Link>

          {/* Download */}
          <a
            href={catalogue.pdf}
            download
            className="bg-custom-primary flex size-20 flex-col items-center justify-center gap-2 rounded-full text-white transition-transform duration-300 hover:scale-105 xl:size-22 2xl:size-24"
          >
            <Download className="size-5 2xl:size-[22px]" strokeWidth={1.6} />

            <span className="text-xs font-medium xl:text-[13px] 2xl:text-sm">
              {t("actions.download")}
            </span>
          </a>
        </div>
      </div>

      {/* Information */}
      <div className="pt-3.5 text-center sm:pt-4 xl:pt-5">
        <div className="text-muted-foreground flex items-center justify-center gap-2 text-xs sm:text-[13px] xl:text-[14px]">
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
          className="text-foreground lg:group-hover:text-custom-primary mx-auto mt-2 max-w-[320px] text-[16px] leading-6 font-medium transition-colors duration-300 sm:mt-2.5 sm:text-[17px] lg:text-[19px] lg:leading-7 2xl:mt-3 2xl:text-[21px]"
        >
          {catalogue.title}
        </h2>
      </div>
    </article>
  );
}
