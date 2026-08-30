"use client";

import { useRef } from "react";
import { Download } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function AboutHero() {
  const locale = useLocale();
  const t = useTranslations("About.hero");

  const isRTL = locale === "fa";

  const sectionRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const eyebrowLineRef = useRef<HTMLSpanElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!introRef.current || !eyebrowLineRef.current || !metaRef.current) {
        return;
      }

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) {
        gsap.set(
          [introRef.current.children, eyebrowLineRef.current, metaRef.current],
          {
            clearProps: "all",
          },
        );

        return;
      }

      const introChildren = Array.from(introRef.current.children);

      gsap.set(eyebrowLineRef.current, {
        scaleX: 0,
        transformOrigin: isRTL ? "right center" : "left center",
      });

      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .to(eyebrowLineRef.current, {
          scaleX: 1,
          duration: 0.8,
          ease: "power4.out",
        })
        .fromTo(
          introChildren,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.11,
          },
          "-=0.5",
        )
        .fromTo(
          metaRef.current,
          {
            opacity: 0,
            x: isRTL ? -40 : 40,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.95,
            ease: "power4.out",
          },
          "-=0.65",
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
      className="border-border bg-secondary-bg border-b"
    >
      <div className="w90 py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:items-end lg:gap-12 xl:gap-20">
          <div ref={introRef} className="max-w-5xl">
            <div className="mb-4 flex items-center gap-3 sm:mb-5 sm:gap-4 xl:mb-6">
              <span
                ref={eyebrowLineRef}
                className="bg-custom-primary h-px w-9 shrink-0 sm:w-10 xl:w-12"
              />

              <span className="text-custom-primary text-xs font-medium tracking-[0.12em] sm:text-sm sm:tracking-[0.14em]">
                {t("eyebrow")}
              </span>
            </div>

            <h1 className="text-foreground max-w-4xl text-3xl leading-[1.2] font-semibold sm:text-4xl lg:text-[2.6rem] xl:text-5xl xl:leading-[1.15]">
              {t("title")}
            </h1>

            <p className="text-muted-foreground mt-5 max-w-4xl  text-[15px] leading-7 sm:mt-6 text-justify sm:text-base sm:leading-8 xl:mt-7 xl:text-[17px]">
              {t("description")}
            </p>

            <a
              href="/catalogues/ati-abzar-pishro-catalogue.pdf"
              download
              className="group/catalogue border-border hover:border-custom-primary hover:text-custom-primary mt-7 inline-flex items-center gap-3 border px-4 py-3 text-sm font-medium transition-colors duration-300 sm:mt-8 sm:px-5 sm:py-3.5 sm:text-base xl:mt-9 xl:gap-4 xl:px-6 xl:py-4"
            >
              <span>{t("downloadCatalogue")}</span>

              <Download
                size={19}
                className="transition-transform duration-300"
              />
            </a>
          </div>

          <div
            ref={metaRef}
            className="border-border border-t pt-8 lg:border-s lg:border-t-0 lg:ps-8 lg:pt-0 xl:ps-10"
          >
            <span className="text-muted-foreground text-xs tracking-[0.12em] sm:text-sm sm:tracking-[0.14em]">
              {t("established")}
            </span>

            <div className="text-custom-primary mt-3 text-5xl leading-none font-semibold xl:text-6xl">
              2012
            </div>

            <div className="border-border mt-7 border-t pt-5 xl:mt-9 xl:pt-6">
              <span className="text-foreground text-base font-semibold xl:text-lg">
                {t("companyName")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
