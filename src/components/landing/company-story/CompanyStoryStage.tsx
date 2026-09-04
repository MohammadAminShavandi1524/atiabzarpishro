"use client";

import { useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { englishToPersianNumber } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface CompanyStoryStageProps {
  isRTL: boolean;
  t: (key: string) => string;
}

export default function CompanyStoryStage({
  isRTL,
  t,
}: CompanyStoryStageProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  const eyebrowRef = useRef<HTMLDivElement>(null);
  const eyebrowLineRef = useRef<HTMLSpanElement>(null);

  const experienceRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLDivElement>(null);
  const experienceTextRef = useRef<HTMLDivElement>(null);

  const storyRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (
        !rootRef.current ||
        !eyebrowRef.current ||
        !experienceRef.current ||
        !numberRef.current ||
        !experienceTextRef.current ||
        !storyRef.current ||
        !titleRef.current ||
        !descriptionsRef.current
      ) {
        return;
      }

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) return;

      const isBelowLg = window.matchMedia("(max-width: 63.999rem)").matches;

      const titleLines = Array.from(titleRef.current.children);

      const paragraphs = Array.from(descriptionsRef.current.children);

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

      gsap.set(experienceRef.current, {
        opacity: 0,
        x: isBelowLg ? 0 : isRTL ? 22 : -22,
        y: isBelowLg ? 18 : 0,
      });

      gsap.set(numberRef.current, {
        opacity: 0,
        y: 20,
      });

      gsap.set(experienceTextRef.current, {
        opacity: 0,
        y: 14,
      });

      gsap.set(storyRef.current, {
        opacity: 0,
        x: isBelowLg ? 0 : isRTL ? -24 : 24,
        y: isBelowLg ? 20 : 0,
      });

      gsap.set(titleLines, {
        opacity: 0,
        y: 20,
      });

      gsap.set(paragraphs, {
        opacity: 0,
        y: 15,
      });

      /*
       * Timeline
       */

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: isBelowLg ? "top 86%" : "top 80%",
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
        duration: 0.45,
      });

      if (eyebrowLineRef.current) {
        timeline.to(
          eyebrowLineRef.current,
          {
            scaleX: 1,
            duration: 0.5,
            ease: "power4.out",
          },
          "-=0.38",
        );
      }

      /* Main Columns */
      timeline.to(
        experienceRef.current,
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.55,
        },
        "-=0.35",
      );

      timeline.to(
        storyRef.current,
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.58,
        },
        "-=0.5",
      );

      /* Number */
      timeline.to(
        numberRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "power4.out",
        },
        "-=0.48",
      );

      /* Experience Text */
      timeline.to(
        experienceTextRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
        },
        "-=0.4",
      );

      /* Title */
      timeline.to(
        titleLines,
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.06,
          ease: "power4.out",
        },
        "-=0.5",
      );

      /* Descriptions */
      timeline.to(
        paragraphs,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.07,
        },
        "-=0.4",
      );
    },
    {
      scope: rootRef,
      dependencies: [isRTL],
      revertOnUpdate: true,
    },
  );

  return (
    <div ref={rootRef} className="w90">
      {/* Eyebrow */}
      <div
        ref={eyebrowRef}
        className="mb-10 flex items-center gap-3 sm:mb-12 sm:gap-4 md:mb-14 lg:mb-14 2xl:mb-16"
      >
        <span
          ref={eyebrowLineRef}
          className="bg-custom-primary block h-px w-9 shrink-0 sm:w-10 xl:w-11 2xl:w-12"
        />

        <span className="text-muted-foreground text-xs font-medium tracking-[0.08em] sm:text-[13px] xl:text-sm">
          {t("eyebrow")}
        </span>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr] lg:items-stretch">
        {/* Experience */}
        <div
          ref={experienceRef}
          className="border-border relative border-b pb-10 sm:pb-12 md:pb-14 lg:border-b-0 lg:pe-8 lg:pb-0 xl:pe-12 2xl:pe-16"
        >
          {/* Desktop Vertical Divider */}
          <span
            aria-hidden="true"
            className="bg-border absolute inset-y-0 end-0 hidden w-px lg:block"
          />

          <div className="w-full lg:pt-2">
            {/* Number */}
            <div ref={numberRef} className="flex items-start">
              <span className="text-foreground xss:text-[96px] text-[88px] font-semibold sm:text-[112px] md:text-[128px] lg:text-[clamp(9rem,15vw,15rem)] ltr:leading-[0.78] ltr:tracking-[-0.065em] lg:ltr:tracking-[-0.075em] rtl:leading-[0.9] rtl:tracking-[-0.055em] lg:rtl:tracking-[-0.07em]">
                {isRTL ? englishToPersianNumber("25") : "25"}
              </span>

              <span className="text-custom-primary xss:text-[38px] ms-2 mt-1 text-[34px] leading-none font-medium sm:ms-3 sm:mt-2 sm:text-[44px] md:text-[50px] lg:text-[clamp(3rem,5vw,5.2rem)]">
                +
              </span>
            </div>

            {/* Experience Text */}
            <div
              ref={experienceTextRef}
              className="mt-7 flex items-start gap-3 sm:mt-8 sm:gap-4 md:mt-9 lg:mt-10 xl:mt-11 2xl:mt-12 2xl:gap-5"
            >
              <span className="bg-custom-primary mt-2.5 block h-[3px] w-9 shrink-0 sm:w-11 2xl:mt-3 2xl:w-14" />

              <p className="text-foreground max-w-[320px] text-[15px] leading-7 font-medium sm:text-base sm:leading-7.5 2xl:text-lg 2xl:leading-8">
                {t("experience")}
              </p>
            </div>
          </div>
        </div>

        {/* Story */}
        <div
          ref={storyRef}
          className="pt-10 sm:pt-12 md:pt-14 lg:ps-[5vw] lg:pt-0 xl:ps-[6vw] 2xl:ps-[7vw]"
        >
          <div className="max-w-[920px]">
            {/* Title */}
            <h2
              ref={titleRef}
              className="text-foreground xss:text-[42px] text-[38px] font-semibold sm:text-[48px] md:text-[54px] lg:text-[clamp(3.5rem,5vw,6rem)] ltr:leading-[1.05] ltr:tracking-[-0.035em] lg:ltr:leading-[1.02] lg:ltr:tracking-[-0.045em] rtl:leading-[1.2] lg:rtl:leading-[1.18]"
            >
              <span className="block">{t("titleLine1")}</span>

              <span className="text-custom-primary block">
                {t("titleLine2")}
              </span>
            </h2>

            {/* Description */}
            <div
              ref={descriptionsRef}
              className="text-muted-foreground mt-7 max-w-[900px] space-y-5 text-sm leading-7 sm:mt-8 sm:space-y-5 sm:text-[15px] sm:leading-7.5 md:mt-9 md:space-y-6 lg:mt-10 xl:mt-11 2xl:mt-12 2xl:space-y-7 2xl:text-[17px] 2xl:leading-9"
            >
              <p className="text-justify">{t("description1")}</p>

              <p className="text-justify">{t("description2")}</p>

              <p className="text-justify">{t("description3")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
