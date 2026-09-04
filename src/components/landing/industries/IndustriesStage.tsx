"use client";

import { useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import IndustriesNetwork from "./IndustriesNetwork";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface IndustriesStageProps {
  isRTL: boolean;
  t: (key: string) => string;
}

export default function IndustriesStage({ isRTL, t }: IndustriesStageProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  const eyebrowRef = useRef<HTMLDivElement>(null);
  const eyebrowLineRef = useRef<HTMLSpanElement>(null);

  const storyRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      if (
        !rootRef.current ||
        !eyebrowRef.current ||
        !storyRef.current ||
        !titleRef.current ||
        !descriptionRef.current
      ) {
        return;
      }

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) return;

      const isBelowLg = window.matchMedia("(max-width: 63.999rem)").matches;

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

      gsap.set(storyRef.current, {
        opacity: 0,
        x: isBelowLg ? 0 : isRTL ? 22 : -22,
        y: isBelowLg ? 18 : 0,
      });

      gsap.set(titleRef.current, {
        opacity: 0,
        y: 18,
      });

      gsap.set(descriptionRef.current, {
        opacity: 0,
        y: 14,
      });

      /*
       * Timeline
       */

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
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

      /* Story */
      timeline.to(
        storyRef.current,
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.5,
        },
        "-=0.3",
      );

      /* Title */
      timeline.to(
        titleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power4.out",
        },
        "-=0.42",
      );

      /* Description */
      timeline.to(
        descriptionRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
        },
        "-=0.34",
      );
    },
    {
      scope: rootRef,
      dependencies: [isRTL],
      revertOnUpdate: true,
    },
  );

  return (
    <div ref={rootRef} className="relative w-full overflow-hidden">
      <div className="w90 relative z-10">
        {/* Eyebrow */}
        <div
          ref={eyebrowRef}
          className="mb-10 flex items-center gap-3 sm:mb-12 sm:gap-4 md:mb-14 lg:-mb-6 xl:-mb-7 2xl:-mb-8"
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
        <div className="grid grid-cols-1 lg:min-h-[560px] lg:grid-cols-[0.48fr_1.52fr] xl:min-h-[590px] xl:grid-cols-[0.44fr_1.56fr] 2xl:min-h-[620px] 2xl:grid-cols-[0.42fr_1.58fr]">
          {/* Story */}
          <div
            ref={storyRef}
            className="border-border relative border-b pb-10 sm:pb-12 md:pb-14 lg:flex lg:flex-col lg:justify-center lg:border-b-0 lg:pe-7 lg:pb-0 xl:pe-9 2xl:pe-12"
          >
            {/* Desktop Divider */}
            <span
              aria-hidden="true"
              className="bg-border absolute inset-y-0 end-0 hidden w-px lg:block"
            />

            <div className="max-w-[680px] lg:max-w-[280px] xl:max-w-[310px] 2xl:max-w-[340px]">
              {/* Title */}
              <h2
                ref={titleRef}
                className="text-foreground xss:text-[39px] text-[36px] font-semibold sm:text-[44px] md:text-[48px] lg:text-[36px] xl:text-[42px] 2xl:text-[48px] ltr:leading-[1.05] ltr:tracking-[-0.035em] 2xl:ltr:leading-[1] 2xl:ltr:tracking-[-0.04em] rtl:leading-[1.2]"
              >
                <span className="block">{t("titleLine1")}</span>

                <span className="text-custom-primary block rtl:pt-1">
                  {t("titleLine2")}
                </span>
              </h2>

              {/* Description */}
              <p
                ref={descriptionRef}
                className="text-muted-foreground mt-6 max-w-[620px] text-justify text-sm leading-7 sm:mt-7 sm:text-[15px] sm:leading-7.5 lg:mt-8 lg:leading-7 xl:mt-9 xl:leading-7.5 2xl:mt-10 2xl:leading-8"
              >
                {t("description")}
              </p>
            </div>
          </div>

          {/* Network */}
          <IndustriesNetwork t={t} />
        </div>
      </div>
    </div>
  );
}
