"use client";

import { useRef } from "react";

import { useLocale, useTranslations } from "next-intl";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function RepresentationsHero() {
  const t = useTranslations("Representations");
  const locale = useLocale();

  const isRTL = locale === "fa";

  const rootRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      if (!introRef.current || !metaRef.current) {
        return;
      }

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) {
        return;
      }

      const isBelowLg = window.matchMedia("(max-width: 63.999rem)").matches;

      const introChildren = Array.from(introRef.current.children);

      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      if (lineRef.current) {
        gsap.set(lineRef.current, {
          scaleX: 0,
          transformOrigin: isRTL ? "right center" : "left center",
        });

        timeline.to(lineRef.current, {
          scaleX: 1,
          duration: 0.8,
          ease: "power4.out",
        });
      }

      timeline.fromTo(
        introChildren,
        {
          opacity: 0,
          y: isBelowLg ? 24 : 32,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.12,
        },
        "-=0.55",
      );

      timeline.fromTo(
        metaRef.current,
        isBelowLg
          ? {
              opacity: 0,
              y: 24,
            }
          : {
              opacity: 0,
              x: isRTL ? -35 : 35,
            },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.9,
          ease: "power4.out",
        },
        "-=0.65",
      );
    },
    {
      scope: rootRef,
      dependencies: [isRTL],
      revertOnUpdate: true,
    },
  );

  return (
    <section
      ref={rootRef}
      dir={isRTL ? "rtl" : "ltr"}
      className="bg-secondary-bg border-border border-b"
    >
      <div className="w90 py-11 sm:py-14 md:py-16 lg:py-[72px] xl:py-[76px] 2xl:py-20">
        <div className="grid grid-cols-1 gap-9 md:gap-11 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-10 xl:grid-cols-[1.35fr_0.65fr] xl:gap-14 2xl:gap-20">
          {/* Intro */}
          <div ref={introRef} className="max-w-5xl min-w-0">
            <div className="mb-4 flex items-center gap-3 sm:mb-5 sm:gap-4 2xl:mb-6">
              <span
                ref={lineRef}
                className="bg-custom-primary h-px w-9 shrink-0 sm:w-10 xl:w-11 2xl:w-12"
              />

              <span className="text-custom-primary xss:text-xs text-[11px] font-medium tracking-[0.12em] sm:text-[13px] xl:text-sm xl:tracking-[0.14em]">
                {t("hero.eyebrow")}
              </span>
            </div>

            <h1 className="text-foreground xss:text-[32px] max-w-4xl text-[30px] leading-[1.2] font-semibold sm:text-[36px] sm:leading-[1.16] md:text-[40px] lg:text-[40px] xl:text-[44px] 2xl:text-[46px] 2xl:leading-[1.12]">
              {t("hero.title")}
            </h1>

            <p className="text-muted-foreground mt-5 max-w-3xl text-justify text-sm leading-7 sm:mt-6 sm:text-[15px] sm:leading-7.5 lg:text-[15px] xl:mt-7 xl:text-base xl:leading-8">
              {t("hero.description")}
            </p>
          </div>

          {/* Meta */}
          <div
            ref={metaRef}
            className="border-border border-t pt-6 lg:border-s lg:border-t-0 lg:ps-6 lg:pt-0 xl:ps-8 2xl:ps-9"
          >
            <div className="text-custom-primary text-xs font-medium tracking-[0.12em] sm:text-[13px] xl:text-sm xl:tracking-[0.14em]">
              {t("hero.companyName")}
            </div>

            <div className="text-foreground mt-3 text-lg font-semibold sm:text-xl lg:text-lg xl:mt-4 xl:text-xl">
              {t("hero.tagline")}
            </div>

            <div className="border-border mt-6 border-t pt-5 lg:mt-7 lg:pt-5 xl:mt-8 2xl:mt-9 2xl:pt-6">
              <span className="text-muted-foreground text-xs tracking-wider sm:text-[13px] xl:text-sm">
                {t("hero.meta")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
