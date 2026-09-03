"use client";

import { useRef } from "react";

import { useLocale, useTranslations } from "next-intl";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import CataloguesHero from "./CataloguesHero";
import CatalogueCard from "./CatalogueCard";

import { catalogues } from "./catalogues.data";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function CataloguesPage() {
  const t = useTranslations("Catalogues");
  const locale = useLocale();

  const isRTL = locale === "fa";

  const rootRef = useRef<HTMLDivElement>(null);
  const libraryRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!libraryRef.current || !headerRef.current || !gridRef.current) {
        return;
      }

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) return;

      /* Library Header */
      gsap.fromTo(
        Array.from(headerRef.current.children),
        {
          opacity: 0,
          y: 22,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: libraryRef.current,
            start: "top 84%",
            once: true,
          },
        },
      );

      /* Catalogue Cards */
      const cards =
        gridRef.current.querySelectorAll<HTMLElement>(".catalogue-card");

      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 32,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 84%",
            once: true,
          },
        },
      );
    },
    {
      scope: rootRef,
      dependencies: [isRTL],
      revertOnUpdate: true,
    },
  );

  return (
    <div ref={rootRef} dir={isRTL ? "rtl" : "ltr"} className="bg-background">
      <CataloguesHero />

      <section ref={libraryRef} className="bg-background">
        <div className="w90 py-10 sm:py-12 md:py-14 xl:py-16">
          {/* Header */}
          <div
            ref={headerRef}
            className="border-border mb-7 flex items-end justify-between gap-5 border-b pb-5 sm:mb-8 sm:pb-6 lg:mb-9 xl:mb-10"
          >
            <h2 className="text-foreground xss:text-[28px] text-[26px] leading-[1.2] font-semibold sm:text-[30px] xl:text-[32px]">
              {t("library.title")}
            </h2>

            <span className="text-muted-foreground shrink-0 text-xs sm:text-[13px] xl:text-sm">
              {catalogues.length} {t("library.count")}
            </span>
          </div>

          {/* Catalogues Grid */}
          <div
            ref={gridRef}
            className="xss:grid-cols-2 xss:gap-x-4 mlg:grid-cols-3 mlg:gap-x-8 mlg:gap-y-14 grid grid-cols-1 gap-x-5 gap-y-10 sm:gap-x-6 sm:gap-y-12 xl:grid-cols-4 xl:gap-x-10 xl:gap-y-16 2xl:gap-x-16 2xl:gap-y-20"
          >
            {catalogues.map((catalogue) => (
              <div key={catalogue.id} className="catalogue-card min-w-0">
                <CatalogueCard catalogue={catalogue} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
