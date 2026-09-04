"use client";

import { useRef } from "react";

import { useLocale, useTranslations } from "next-intl";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import PartnerItem from "./PartnerItem";
import { partners } from "./partners.data";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Partners() {
  const locale = useLocale();
  const t = useTranslations("Home.partners");

  const isRTL = locale === "fa";

  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const eyebrowLineRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);
  const partnersRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (
        !sectionRef.current ||
        !eyebrowRef.current ||
        !titleRef.current ||
        !introRef.current ||
        !partnersRef.current
      ) {
        return;
      }

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) return;

      const partnerItems =
        partnersRef.current.querySelectorAll<HTMLElement>(".partner-reveal");

      /*
       * Initial States
       */

      if (eyebrowLineRef.current) {
        gsap.set(eyebrowLineRef.current, {
          scaleX: 0,
          transformOrigin: isRTL ? "right center" : "left center",
        });
      }

      gsap.set(eyebrowRef.current, {
        opacity: 0,
        y: 12,
      });

      gsap.set(titleRef.current, {
        opacity: 0,
        y: 18,
      });

      gsap.set(introRef.current, {
        opacity: 0,
        y: 14,
      });

      gsap.set(partnerItems, {
        opacity: 0,
        y: 22,
      });

      /*
       * Timeline
       */

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 84%",
          once: true,
        },
        defaults: {
          ease: "power3.out",
        },
      });

      /* Eyebrow */
      timeline.to(eyebrowRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.4,
      });

      if (eyebrowLineRef.current) {
        timeline.to(
          eyebrowLineRef.current,
          {
            scaleX: 1,
            duration: 0.45,
            ease: "power4.out",
          },
          "-=0.32",
        );
      }

      /* Title */
      timeline.to(
        titleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power4.out",
        },
        "-=0.3",
      );

      /* Intro */
      timeline.to(
        introRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
        },
        "-=0.36",
      );

      /* Partners */
      timeline.to(
        partnerItems,
        {
          opacity: 1,
          y: 0,
          duration: 0.46,
          stagger: 0.055,
          ease: "power3.out",
        },
        "-=0.26",
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
      className="bg-background border-border relative border-b py-14 sm:py-16 md:py-20 lg:py-20 xl:py-[88px] 2xl:py-24"
    >
      <div className="w90">
        {/* Eyebrow */}
        <div
          ref={eyebrowRef}
          className="mb-10 flex items-center gap-3 sm:mb-12 sm:gap-4 md:mb-14"
        >
          <span
            ref={eyebrowLineRef}
            className="bg-custom-primary block h-px w-9 shrink-0 sm:w-10"
          />

          <span className="text-muted-foreground text-xs font-medium tracking-[0.08em] sm:text-[13px] xl:text-sm">
            {t("eyebrow")}
          </span>
        </div>

        {/* Main */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.48fr_1.52fr] xl:grid-cols-[0.44fr_1.56fr] 2xl:grid-cols-[0.42fr_1.58fr]">
          {/* Description */}
          <div className="border-border relative border-b pb-10 sm:pb-12 md:pb-14 lg:border-b-0 lg:pe-7 lg:pb-10 xl:pe-9 2xl:pe-12">
            {/* Desktop Divider */}
            <span
              aria-hidden="true"
              className="bg-border absolute inset-y-0 end-0 hidden w-px lg:block"
            />

            <div className="max-w-[680px] lg:max-w-[290px] xl:max-w-[320px] 2xl:max-w-none">
              <h2
                ref={titleRef}
                className="text-custom-primary xss:text-[39px] text-[36px] font-semibold sm:text-[44px] md:text-[48px] lg:text-[36px] xl:text-[42px] 2xl:text-[48px] ltr:leading-[1.05] ltr:tracking-[-0.035em] 2xl:ltr:leading-[1] 2xl:ltr:tracking-[-0.04em] rtl:leading-[1.2]"
              >
                {t("label")}
              </h2>

              <p
                ref={introRef}
                className="text-muted-foreground mt-6 max-w-[620px] text-justify text-sm leading-7 sm:mt-7 sm:text-[15px] sm:leading-7.5 lg:mt-8 lg:leading-7 xl:mt-9 xl:leading-7.5 2xl:mt-10 2xl:leading-8"
              >
                {t("intro")}
              </p>
            </div>
          </div>

          {/* Partners */}
          <div
            ref={partnersRef}
            className="xss:grid-cols-2 grid grid-cols-1 pt-8 sm:pt-10 md:grid-cols-3 md:pt-12 lg:grid-cols-3 lg:gap-x-3 lg:px-4 lg:pt-0 xl:grid-cols-4 xl:gap-x-4 xl:px-5 2xl:grid-cols-5 2xl:grid-rows-2 2xl:px-6"
          >
            {partners.map((partner) => (
              <div key={partner.id} className="partner-reveal min-w-0">
                <PartnerItem partner={partner} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
