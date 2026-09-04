"use client";

import { useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface CapabilitiesStageProps {
  isRTL: boolean;
  t: (key: string) => string;
}

const capabilities = [
  {
    index: "1",
    titleLine1: "items.process.titleLine1",
    titleLine2: "items.process.titleLine2",
    description: "items.process.description",
  },
  {
    index: "2",
    titleLine1: "items.consulting.titleLine1",
    titleLine2: "items.consulting.titleLine2",
    description: "items.consulting.description",
  },
  {
    index: "3",
    titleLine1: "items.tools.titleLine1",
    titleLine2: "items.tools.titleLine2",
    description: "items.tools.description",
  },
  {
    index: "4",
    titleLine1: "items.oem.titleLine1",
    titleLine2: "items.oem.titleLine2",
    description: "items.oem.description",
  },
  {
    index: "5",
    titleLine1: "items.training.titleLine1",
    titleLine2: "items.training.titleLine2",
    description: "items.training.description",
  },
];

export default function CapabilitiesStage({
  isRTL,
  t,
}: CapabilitiesStageProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  const eyebrowRef = useRef<HTMLDivElement>(null);
  const eyebrowLineRef = useRef<HTMLSpanElement>(null);

  const titleRef = useRef<HTMLHeadingElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);

  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (
        !rootRef.current ||
        !eyebrowRef.current ||
        !titleRef.current ||
        !introRef.current ||
        !gridRef.current
      ) {
        return;
      }

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) return;

      const cards =
        gridRef.current.querySelectorAll<HTMLElement>(".capability-card");

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
        y: 20,
      });

      gsap.set(introRef.current, {
        opacity: 0,
        y: 16,
      });

      gsap.set(cards, {
        opacity: 0,
        y: 24,
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
        "-=0.34",
      );

      /* Cards */
      timeline.to(
        cards,
        {
          opacity: 1,
          y: 0,
          duration: 0.52,
          stagger: 0.065,
          ease: "power3.out",
        },
        "-=0.28",
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
      {/* Header */}
      <div className="max-w-[900px]">
        {/* Eyebrow */}
        <div ref={eyebrowRef} className="flex items-center gap-3 sm:gap-4">
          <span
            ref={eyebrowLineRef}
            className="bg-custom-primary block h-px w-9 shrink-0 sm:w-10 xl:w-11 2xl:w-12"
          />

          <span className="text-muted-foreground text-xs font-medium tracking-[0.08em] sm:text-[13px] xl:text-sm">
            {t("eyebrow")}
          </span>
        </div>

        {/* Title */}
        <h2
          ref={titleRef}
          className="text-foreground mt-6 max-w-[720px] text-[36px] font-semibold sm:mt-7 sm:text-[42px] md:text-[48px] lg:text-[54px] xl:text-[60px] 2xl:mt-8 2xl:text-[clamp(3rem,4vw,5rem)] ltr:leading-[1.06] ltr:tracking-[-0.035em] 2xl:ltr:leading-[1.03] 2xl:ltr:tracking-[-0.045em] rtl:leading-[1.2]"
        >
          {t("label")}
        </h2>

        {/* Intro */}
        <p
          ref={introRef}
          className="text-muted-foreground mt-5 max-w-[760px] text-justify text-sm leading-7 sm:text-[15px] sm:leading-7.5 md:mt-6 xl:text-[16px] xl:leading-8 2xl:text-[17px]"
        >
          {t("intro")}
        </p>
      </div>

      {/* Capabilities */}
      <div
        ref={gridRef}
        className="mt-10 grid grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:mt-14 lg:grid-cols-3 2xl:grid-cols-5"
      >
        {capabilities.map((item) => (
          <article
            key={item.index}
            className="capability-card group/capability border-border bg-background hover:border-custom-primary/45 hover:bg-card-secondary/20 relative min-h-0 border p-5 transition-[border-color,background-color] duration-300 sm:min-h-[240px] sm:p-6 lg:min-h-[250px] 2xl:min-h-[260px] 2xl:p-7"
          >
            {/* Hover Accent */}
            <span className="bg-custom-primary origin-start absolute inset-x-0 top-0 h-[2px] scale-x-0 transition-transform duration-300 group-hover/capability:scale-x-100" />

            {/* Title */}
            <div className="flex items-start">
              <h3 className="text-foreground min-h-0 text-[22px] leading-[1.22] font-semibold sm:min-h-[78px] sm:text-[23px] lg:min-h-[84px] lg:text-[24px] 2xl:min-h-[92px] 2xl:text-[26px] 2xl:leading-[1.2]">
                <span className="block">{t(item.titleLine1)}</span>

                <span className="text-custom-primary block">
                  {t(item.titleLine2)}
                </span>
              </h3>
            </div>

            {/* Description */}
            <p className="text-muted-foreground mt-4 text-justify text-[13px] leading-6 sm:mt-5 sm:leading-6.5 2xl:text-[14px] 2xl:leading-7">
              {t(item.description)}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
