"use client";

import { useRef } from "react";

import Link from "next/link";

import { ArrowLeft, ArrowRight, Download } from "lucide-react";

import { useLocale, useTranslations } from "next-intl";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import type { CatalogueItem } from "./catalogues.data";

gsap.registerPlugin(useGSAP);

interface CataloguePreviewProps {
  catalogue: CatalogueItem;
}

export default function CataloguePreview({ catalogue }: CataloguePreviewProps) {
  const locale = useLocale();
  const t = useTranslations("Catalogues");

  const isRTL = locale === "fa";
  const BackIcon = isRTL ? ArrowRight : ArrowLeft;

  const rootRef = useRef<HTMLElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!topRef.current || !previewRef.current) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) return;

      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      timeline.fromTo(
        topRef.current,
        {
          opacity: 0,
          y: 22,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
        },
      );

      timeline.fromTo(
        previewRef.current,
        {
          opacity: 0,
          y: 24,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
        },
        "-=0.4",
      );
    },
    {
      scope: rootRef,
      dependencies: [catalogue.id, isRTL],
      revertOnUpdate: true,
    },
  );

  return (
    <section
      ref={rootRef}
      dir={isRTL ? "rtl" : "ltr"}
      className="bg-background"
    >
      <div className="w90 py-7 sm:py-8 lg:py-9 xl:py-10">
        {/* Top */}
        <div
          ref={topRef}
          className="border-border mb-5 flex flex-col gap-5 border-b pb-5 sm:mb-6 md:flex-row md:items-center md:justify-between md:gap-8"
        >
          {/* Information */}
          <div className="min-w-0">
            <h1
              lang="en"
              dir="ltr"
              className="text-foreground text-[22px] leading-8 font-semibold sm:text-[24px] sm:leading-9 xl:text-[28px]"
            >
              {catalogue.title}
            </h1>

            <div className="text-muted-foreground mt-2 flex items-center gap-2 text-xs sm:text-sm">
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

          {/* Actions */}
          <div className="xss:gap-3 grid w-full grid-cols-2 gap-2.5 md:flex md:w-auto md:items-center">
            <Link
              href={`/${locale}/catalogues`}
              className="border-border text-foreground hover:border-custom-primary hover:text-custom-primary flex min-h-11 items-center justify-center gap-2 border px-3 text-xs transition-colors sm:px-4 sm:text-sm"
            >
              <BackIcon size={17} strokeWidth={1.7} />

              <span>{t("actions.back")}</span>
            </Link>

            <a
              href={catalogue.pdf}
              download
              className="bg-custom-primary flex min-h-11 items-center justify-center gap-2 px-3 text-xs font-medium text-white sm:px-4 sm:text-sm"
            >
              <Download size={17} strokeWidth={1.7} />

              <span>{t("actions.downloadPdf")}</span>
            </a>
          </div>
        </div>

        {/* PDF Preview */}
        <div
          ref={previewRef}
          className="border-border bg-secondary-bg h-[70dvh] min-h-[520px] overflow-hidden border sm:min-h-[600px] md:h-[75dvh] lg:h-[calc(100vh-240px)] lg:min-h-[750px] xl:min-h-[900px] 2xl:min-h-[1200px]"
        >
          <iframe
            src={catalogue.pdf}
            title={catalogue.title}
            className="h-full w-full border-0"
          />
        </div>
      </div>
    </section>
  );
}
