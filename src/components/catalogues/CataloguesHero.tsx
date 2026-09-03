"use client";

import { useRef } from "react";

import { useLocale, useTranslations } from "next-intl";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const CataloguesHero = () => {
  const t = useTranslations("Catalogues");
  const locale = useLocale();

  const isRTL = locale === "fa";

  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!contentRef.current) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) return;

      const children = Array.from(contentRef.current.children);

      gsap.fromTo(
        children,
        {
          opacity: 0,
          y: 28,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.12,
          ease: "power3.out",
        },
      );
    },
    {
      scope: sectionRef,
      dependencies: [isRTL],
      revertOnUpdate: true,
    },
  );

  return (
    <section
      ref={sectionRef}
      dir={isRTL ? "rtl" : "ltr"}
      className="border-border border-b"
    >
      <div ref={contentRef} className="w90 py-10 sm:py-12 md:py-14 xl:py-14">
        <span className="text-custom-primary xss:text-xs text-[11px] font-medium tracking-[0.12em] sm:tracking-[0.14em]">
          {t("hero.eyebrow")}
        </span>

        <h1 className="text-foreground xss:text-[32px] mt-3 max-w-4xl text-[30px] leading-[1.2] font-semibold sm:mt-4 sm:text-[36px] sm:leading-[1.16] md:text-[38px] xl:text-[42px] xl:leading-tight">
          {t("hero.title")}
        </h1>

        <p className="text-muted-foreground mt-4 max-w-3xl text-justify text-sm leading-7 sm:mt-5 sm:text-[15px] sm:leading-7.5 xl:text-base xl:leading-8">
          {t("hero.description")}
        </p>
      </div>
    </section>
  );
};

export default CataloguesHero;
