"use client";

import Link from "next/link";

import { ArrowLeft, ArrowRight, Download } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import type { CatalogueItem } from "./catalogues.data";

interface CataloguePreviewProps {
  catalogue: CatalogueItem;
}

export default function CataloguePreview({
  catalogue,
}: CataloguePreviewProps) {
  const locale = useLocale();
  const t = useTranslations("Catalogues");

  const isRTL = locale === "fa";
  const BackIcon = isRTL ? ArrowRight : ArrowLeft;

  return (
    <section className="bg-background">
      <div className="w90 py-10">
        {/* Top */}
        <div className="border-border mb-6 flex items-center justify-between border-b pb-5">
          <div>
            <h1
              lang="en"
              dir="ltr"
              className="text-foreground text-[28px] font-semibold"
            >
              {catalogue.title}
            </h1>

            <div className="text-muted-foreground mt-2 flex items-center gap-2 text-sm">
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
          </div>

          <div className="flex items-center gap-3">
            {/* Back */}
            <Link
              href={`/${locale}/catalogues`}
              className="border-border text-foreground hover:border-custom-primary flex h-11 items-center gap-2 border px-4 text-sm transition-colors"
            >
              <BackIcon size={17} strokeWidth={1.7} />

              {t("actions.back")}
            </Link>

            {/* Download */}
            <a
              href={catalogue.pdf}
              download
              className="bg-custom-primary flex h-11 items-center gap-2 px-4 text-sm font-medium text-white"
            >
              <Download size={17} strokeWidth={1.7} />

              {t("actions.downloadPdf")}
            </a>
          </div>
        </div>

        {/* PDF Preview */}
        <div className="border-border bg-secondary-bg h-[calc(100vh-240px)] min-h-[1200px] border">
          <iframe
            src={catalogue.pdf}
            title={catalogue.title}
            className="h-full w-full"
          />
        </div>
      </div>
    </section>
  );
}