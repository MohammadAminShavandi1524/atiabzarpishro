"use client";

import { useRef } from "react";

import Image from "next/image";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { industries } from "./industries.data";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface IndustriesNetworkProps {
  t: (key: string) => string;
}

export default function IndustriesNetwork({ t }: IndustriesNetworkProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!rootRef.current) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) return;

      const isBelowLg = window.matchMedia("(max-width: 63.999rem)").matches;

      /*
       * ======================================================
       * Mobile / Tablet
       * ======================================================
       */

      if (isBelowLg) {
        const mobileCore = rootRef.current.querySelector<HTMLElement>(
          ".industries-mobile-core",
        );

        const mobileCards = rootRef.current.querySelectorAll<HTMLElement>(
          ".industries-mobile-card",
        );

        if (!mobileCore) return;

        gsap.set(mobileCore, {
          opacity: 0,
          y: 20,
          scale: 0.98,
        });

        gsap.set(mobileCards, {
          opacity: 0,
          y: 18,
        });

        const mobileTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 88%",
            once: true,
          },
          defaults: {
            ease: "power3.out",
          },
        });

        mobileTimeline.to(mobileCore, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          ease: "power4.out",
        });

        mobileTimeline.to(
          mobileCards,
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.055,
          },
          "-=0.26",
        );

        return;
      }

      /*
       * ======================================================
       * Desktop
       * ======================================================
       */

      const coreFrame = rootRef.current.querySelector<HTMLElement>(
        ".industries-core-frame",
      );

      const corePulse = rootRef.current.querySelector<HTMLElement>(
        ".industries-core-pulse",
      );

      const coreCorners = rootRef.current.querySelectorAll<HTMLElement>(
        ".industries-core-corner",
      );

      const links =
        rootRef.current.querySelectorAll<SVGLineElement>(".industry-link");

      const nodes = rootRef.current.querySelectorAll<HTMLElement>(
        ".industry-node-content",
      );

      if (!coreFrame) return;

      /*
       * Initial States
       */

      gsap.set(coreFrame, {
        opacity: 0,
        scale: 0.92,
      });

      if (corePulse) {
        gsap.set(corePulse, {
          opacity: 0,
          scale: 0.9,
        });
      }

      gsap.set(coreCorners, {
        opacity: 0,
        scale: 0,
      });

      gsap.set(links, {
        strokeDasharray: 1,
        strokeDashoffset: 1,
      });

      gsap.set(nodes, {
        opacity: 0,
        scale: 0.94,
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

      /* Core */
      timeline.to(coreFrame, {
        opacity: 1,
        scale: 1,
        duration: 0.48,
        ease: "power4.out",
      });

      /* Corners */
      timeline.to(
        coreCorners,
        {
          opacity: 1,
          scale: 1,
          duration: 0.28,
          stagger: 0.04,
          ease: "back.out(1.6)",
        },
        "-=0.28",
      );

      /* Pulse */
      if (corePulse) {
        timeline.to(
          corePulse,
          {
            opacity: 1,
            scale: 1,
            duration: 0.42,
            ease: "power3.out",
          },
          "-=0.3",
        );
      }

      /* Connections */
      timeline.to(
        links,
        {
          strokeDashoffset: 0,
          duration: 0.52,
          stagger: 0.025,
          ease: "power2.out",
        },
        "-=0.28",
      );

      /* Nodes */
      timeline.to(
        nodes,
        {
          opacity: 1,
          scale: 1,
          duration: 0.42,
          stagger: 0.05,
          ease: "power3.out",
        },
        "-=0.32",
      );
    },
    {
      scope: rootRef,
      revertOnUpdate: true,
    },
  );

  return (
    <div
      ref={rootRef}
      className="relative min-h-0 pt-10 sm:pt-12 md:pt-14 lg:ps-[3vw] lg:pt-0 xl:ps-[4vw] 2xl:ps-[5vw]"
    >
      {/* =====================================================
          Mobile / Tablet
      ===================================================== */}
      <div className="lg:hidden">
        {/* Core */}
        <div
          dir="ltr"
          className="industries-mobile-core border-border bg-card-secondary/20 relative mx-auto flex min-h-[150px] w-full max-w-[420px] items-center justify-center border px-6 py-7"
        >
          <span className="bg-custom-primary absolute top-[-1px] left-[-1px] size-2" />

          <span className="bg-custom-primary absolute right-[-1px] bottom-[-1px] size-2" />

          <div className="text-center">
            <span className="text-custom-primary block font-mono text-[11px] tracking-[0.14em] sm:text-xs sm:tracking-[0.16em]">
              ATI / CORE
            </span>

            <span className="text-foreground mt-2.5 block text-xl font-semibold sm:mt-3 sm:text-[22px]">
              {t("core.title")}
            </span>

            <span className="text-muted-foreground mt-1.5 block text-xs sm:mt-2 sm:text-[13px]">
              {t("core.subtitle")}
            </span>
          </div>
        </div>

        {/* Industries */}
        <div className="border-border bg-border xss:grid-cols-2 mt-8 grid grid-cols-1 gap-px border sm:mt-10">
          {industries.map((industry) => (
            <article
              key={industry.id}
              className="industries-mobile-card bg-background flex min-h-[92px] items-center gap-3 px-4 py-4 sm:min-h-[100px] sm:gap-4 sm:px-5"
            >
              {/* Logo */}
              <div className="relative size-10 shrink-0 sm:size-11">
                <Image
                  src={industry.image}
                  alt={industry.id}
                  fill
                  sizes="44px"
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <p className="text-foreground text-[14px] leading-6 font-medium sm:text-[15px]">
                {t(industry.translationKey)}
              </p>
            </article>
          ))}
        </div>
      </div>

      {/* =====================================================
          Desktop Network
      ===================================================== */}
      <div className="industries-network relative hidden h-full w-full lg:block">
        {/* Connections */}
        <svg
          aria-hidden="true"
          viewBox="0 0 1000 600"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
        >
          {industries.map((industry) => (
            <line
              key={industry.id}
              data-industry-link={industry.index}
              x1="500"
              y1="300"
              x2={industry.x * 10}
              y2={industry.y * 6}
              pathLength="1"
              stroke="currentColor"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
              className="industry-link text-border"
            />
          ))}
        </svg>

        {/* Core */}
        <div
          dir="ltr"
          className="industries-core absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
        >
          <div className="industries-core-frame border-border bg-background/75 relative flex size-[140px] items-center justify-center border backdrop-blur-[1px] xl:size-[160px] 2xl:size-[185px]">
            <span className="industries-core-corner bg-custom-primary absolute top-[-1px] left-[-1px] size-1.5 2xl:size-2" />

            <span className="industries-core-corner bg-custom-primary absolute right-[-1px] bottom-[-1px] size-1.5 2xl:size-2" />

            <div className="relative z-10 px-3 text-center">
              <span className="text-custom-primary block font-mono text-[10px] tracking-[0.12em] xl:text-xs xl:tracking-[0.14em] 2xl:text-[14px] 2xl:tracking-[0.16em]">
                ATI / CORE
              </span>

              <span className="text-foreground mt-2 block text-[18px] font-semibold xl:mt-2.5 xl:text-xl 2xl:mt-3 2xl:text-2xl">
                {t("core.title")}
              </span>

              <span className="text-muted-foreground mt-1.5 block text-[10px] leading-4 xl:mt-2 xl:text-xs 2xl:text-sm">
                {t("core.subtitle")}
              </span>
            </div>
          </div>

          <span className="industries-core-pulse border-custom-primary/20 absolute inset-[-7px] border xl:inset-[-8px] 2xl:inset-[-10px]" />
        </div>

        {/* Nodes */}
        {industries.map((industry) => (
          <article
            key={industry.id}
            data-industry-node={industry.index}
            className="industry-node absolute z-30"
            style={{
              left: `${industry.x}%`,
              top: `${industry.y}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="industry-node-content relative min-w-[150px] xl:min-w-[190px] 2xl:min-w-[270px]">
              <span className="industry-node-point bg-custom-primary absolute start-0 top-[4px] z-20 hidden size-2" />

              <div className="bg-background z-10 flex items-center justify-center gap-x-1.5 xl:gap-x-2">
                {/* Logo */}
                <div className="relative size-10 shrink-0 xl:size-11 2xl:size-13">
                  <Image
                    src={industry.image}
                    alt={industry.id}
                    fill
                    sizes="(max-width: 1279px) 40px, (max-width: 1535px) 44px, 52px"
                    className="object-contain"
                  />
                </div>

                {/* Title */}
                <p className="industry-node-title text-foreground max-w-[105px] text-[14px] leading-5 font-medium xl:max-w-[135px] xl:text-[17px] xl:leading-6 2xl:max-w-none 2xl:text-[22px]">
                  {t(industry.translationKey)}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
