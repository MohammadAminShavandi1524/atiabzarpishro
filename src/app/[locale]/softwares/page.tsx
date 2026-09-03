"use client";

import { useRef } from "react";

import Link from "next/link";

import { Download } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const softwares = [
  {
    key: "kts",
    version: "V0.1",
    size: "3.4 MB",
    file: "/softwares/KTS.apk",
  },
  {
    key: "ktis",
    version: "Ver 1.00",
    size: "1.3 MB",
    file: "/softwares/KTIS.apk",
  },
] as const;

const Page = () => {
  const t = useTranslations("Softwares");
  const locale = useLocale();

  const isRTL = locale === "fa";

  const rootRef = useRef<HTMLDivElement>(null);

  const heroIntroRef = useRef<HTMLDivElement>(null);
  const heroMetaRef = useRef<HTMLDivElement>(null);
  const heroLineRef = useRef<HTMLSpanElement>(null);

  const softwareSectionRef = useRef<HTMLElement>(null);
  const sectionHeaderRef = useRef<HTMLDivElement>(null);
  const sectionLineRef = useRef<HTMLSpanElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (
        !heroIntroRef.current ||
        !heroMetaRef.current ||
        !sectionHeaderRef.current ||
        !cardsRef.current
      ) {
        return;
      }

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) {
        return;
      }

      const isBelowLg = window.matchMedia("(max-width: 63.999rem)").matches;

      /* Hero */
      const heroChildren = Array.from(heroIntroRef.current.children);

      const heroTimeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      if (heroLineRef.current) {
        gsap.set(heroLineRef.current, {
          scaleX: 0,
          transformOrigin: isRTL ? "right center" : "left center",
        });

        heroTimeline.to(heroLineRef.current, {
          scaleX: 1,
          duration: 0.8,
          ease: "power4.out",
        });
      }

      heroTimeline.fromTo(
        heroChildren,
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

      heroTimeline.fromTo(
        heroMetaRef.current,
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

      /* Software Section Header */
      const sectionHeaderChildren = Array.from(
        sectionHeaderRef.current.children,
      );

      const sectionTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: softwareSectionRef.current,
          start: "top 82%",
          once: true,
        },
      });

      if (sectionLineRef.current) {
        gsap.set(sectionLineRef.current, {
          scaleX: 0,
          transformOrigin: isRTL ? "right center" : "left center",
        });

        sectionTimeline.to(sectionLineRef.current, {
          scaleX: 1,
          duration: 0.7,
          ease: "power4.out",
        });
      }

      sectionTimeline.fromTo(
        sectionHeaderChildren,
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
        },
        "-=0.45",
      );

      /* Software Cards */
      const cards =
        cardsRef.current.querySelectorAll<HTMLElement>(".software-card");

      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
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
      {/* Hero */}
      <section className="bg-secondary-bg border-border border-b">
        <div className="w90 py-11 sm:py-14 md:py-16 lg:py-[72px] xl:py-[76px] 2xl:py-20">
          <div className="grid grid-cols-1 gap-9 md:gap-11 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-10 xl:grid-cols-[1.35fr_0.65fr] xl:gap-14 2xl:gap-20">
            {/* Intro */}
            <div ref={heroIntroRef} className="max-w-5xl min-w-0">
              <div className="mb-4 flex items-center gap-3 sm:mb-5 sm:gap-4 2xl:mb-6">
                <span
                  ref={heroLineRef}
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
              ref={heroMetaRef}
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

      {/* Softwares */}
      <section ref={softwareSectionRef} className="bg-background">
        <div className="w90 py-10 sm:py-12 md:py-14 xl:py-16">
          {/* Section Header */}
          <div ref={sectionHeaderRef} className="mb-7 sm:mb-8 lg:mb-9">
            <div className="mb-3 flex items-center gap-3">
              <span
                ref={sectionLineRef}
                className="bg-custom-primary h-px w-7 shrink-0 sm:w-8"
              />

              <span className="text-custom-primary xss:text-xs text-[11px] font-medium tracking-[0.12em] sm:tracking-[0.14em]">
                {t("section.eyebrow")}
              </span>
            </div>

            <h2 className="text-foreground xss:text-[28px] text-[26px] leading-[1.2] font-semibold sm:text-[30px] lg:text-[31px] xl:text-[32px]">
              {t("section.title")}
            </h2>
          </div>

          {/* Software Cards */}
          <div ref={cardsRef} className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {softwares.map((software) => (
              <article
                key={software.key}
                className="software-card border-border-secondary bg-custom-primary/[0.025] group flex min-h-[220px] min-w-0 flex-col border p-5 sm:min-h-[215px] sm:p-6 2xl:min-h-[210px]"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-foreground min-w-0 text-lg font-semibold sm:text-xl">
                    {t(`items.${software.key}.title`)}
                  </h3>

                  <span
                    dir="ltr"
                    lang="en"
                    className="border-custom-primary/25 bg-custom-primary/[0.06] text-custom-primary shrink-0 border px-2.5 py-1 text-[11px] font-medium"
                  >
                    {software.version}
                  </span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mt-4 text-justify text-sm leading-7 pb-5">
                  {t(`items.${software.key}.description`)}
                </p>

                {/* Footer */}
                <div className="border-border-secondary xss:flex-row xss:items-end xss:justify-between mt-auto flex flex-col gap-4 border-t pt-5">
                  <span
                    dir="ltr"
                    lang="en"
                    className="text-muted-foreground text-xs"
                  >
                    {software.size}
                  </span>

                  <Link
                    href={software.file}
                    download
                    className="border-custom-primary text-custom-primary hover:bg-custom-primary xss:w-auto flex w-full items-center justify-center gap-2 border px-5 py-2.5 text-sm font-medium transition-colors duration-200 hover:text-white"
                  >
                    <Download className="size-4" strokeWidth={1.7} />

                    {t("download")}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
