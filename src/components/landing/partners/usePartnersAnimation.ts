"use client";

import type { RefObject } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface UsePartnersAnimationProps {
  sectionRef: RefObject<HTMLElement | null>;
  stageRef: RefObject<HTMLDivElement | null>;
  isRTL: boolean;
}

export function usePartnersAnimation({
  sectionRef,
  stageRef,
  isRTL,
}: UsePartnersAnimationProps) {
  useGSAP(
    () => {
      const section = sectionRef.current;
      const stage = stageRef.current;

      if (!section || !stage) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) return;

      // Elements
      const horizontalLines = stage.querySelectorAll(
        ".partners-horizontal-line",
      );

      const verticalStart = stage.querySelector(".partners-vertical-start");

      const verticalEnd = stage.querySelector(".partners-vertical-end");

      const backgroundIndex = stage.querySelector(".partners-background-index");

      const eyebrow = stage.querySelector(".partners-eyebrow");

      const eyebrowLine = stage.querySelector(".partners-eyebrow-line");

      const chapter = stage.querySelector(".partners-chapter");

      const chapterLine = stage.querySelector(".partners-chapter-line");

      const mainDivider = stage.querySelector(".partners-main-divider");

      const rail = stage.querySelector(".partners-rail");

      const railItems = gsap.utils.toArray<HTMLElement>(
        stage.querySelectorAll(".partner-rail-item"),
      );

      const items = gsap.utils.toArray<HTMLElement>(
        stage.querySelectorAll(".partner-item"),
      );

      const counter = stage.querySelector(".partners-counter");

      const currentIndex = stage.querySelector(".partners-current-index");

      const bottomVertical = stage.querySelector(".partners-bottom-vertical");

      const bottomReadout = stage.querySelector(".partners-bottom-readout");

      const progress = stage.querySelector(".partners-progress");

      const sideLabel = stage.querySelector(".partners-side-label");

      // Initial
      gsap.set(horizontalLines, {
        scaleX: 0,
        transformOrigin: isRTL ? "right center" : "left center",
      });

      gsap.set(verticalStart, {
        scaleY: 0,
        transformOrigin: "top center",
      });

      gsap.set(verticalEnd, {
        scaleY: 0,
        transformOrigin: "bottom center",
      });

      gsap.set(backgroundIndex, {
        opacity: 0,
        scale: 0.94,
      });

      gsap.set(eyebrow, {
        opacity: 0,
        x: isRTL ? 24 : -24,
      });

      gsap.set(eyebrowLine, {
        scaleX: 0,
        transformOrigin: isRTL ? "right center" : "left center",
      });

      gsap.set(chapter, {
        opacity: 0,
        x: isRTL ? -20 : 20,
      });

      gsap.set(chapterLine, {
        scaleX: 0,
      });

      gsap.set(mainDivider, {
        scaleY: 0,
        transformOrigin: "top center",
      });

      gsap.set(rail, {
        opacity: 0,
        y: 20,
      });

      gsap.set(counter, {
        opacity: 0,
        y: 12,
      });

      gsap.set(bottomVertical, {
        scaleY: 0,
        transformOrigin: "top center",
      });

      gsap.set(bottomReadout, {
        opacity: 0,
        y: 12,
      });

      gsap.set(progress, {
        width: 0,
      });

      gsap.set(sideLabel, {
        opacity: 0,
      });

      railItems.forEach((item) => {
        const indicator = item.querySelector(".partner-rail-indicator");

        gsap.set(item, {
          opacity: 0.38,
        });

        gsap.set(indicator, {
          height: 0,
        });
      });

      items.forEach((item) => {
        const logoPlate = item.querySelector(".partner-logo-plate");

        const logo = item.querySelector(".partner-logo");

        const corners = item.querySelectorAll(".partner-logo-corner");

        const code = item.querySelector(".partner-code");

        const name = item.querySelector(".partner-name");

        const description = item.querySelector(".partner-description");

        gsap.set(item, {
          autoAlpha: 0,
        });

        gsap.set(logoPlate, {
          opacity: 0,
          scale: 0.96,
        });

        gsap.set(logo, {
          opacity: 0,
          scale: 0.9,
        });

        gsap.set(corners, {
          scale: 0,
        });

        gsap.set(code, {
          opacity: 0,
          y: 10,
        });

        gsap.set(name, {
          yPercent: 115,
        });

        gsap.set(description, {
          opacity: 0,
          y: 20,
        });
      });

      // Intro
      const introTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 92%",
          end: "top top",
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      });

      introTimeline.to(
        horizontalLines,
        {
          scaleX: 1,
          duration: 1,
          stagger: 0.08,
          ease: "power2.inOut",
        },
        0,
      );

      introTimeline.to(
        verticalStart,
        {
          scaleY: 1,
          duration: 1,
          ease: "power2.inOut",
        },
        0.05,
      );

      introTimeline.to(
        verticalEnd,
        {
          scaleY: 1,
          duration: 1,
          ease: "power2.inOut",
        },
        0.1,
      );

      introTimeline.to(
        backgroundIndex,
        {
          opacity: 1,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
        },
        0.1,
      );

      introTimeline.to(
        eyebrowLine,
        {
          scaleX: 1,
          duration: 0.55,
        },
        0.18,
      );

      introTimeline.to(
        eyebrow,
        {
          opacity: 1,
          x: 0,
          duration: 0.65,
          ease: "power3.out",
        },
        0.22,
      );

      introTimeline.to(
        chapter,
        {
          opacity: 1,
          x: 0,
          duration: 0.65,
          ease: "power3.out",
        },
        0.25,
      );

      introTimeline.to(
        chapterLine,
        {
          scaleX: 1,
          duration: 0.5,
        },
        0.29,
      );

      introTimeline.to(
        mainDivider,
        {
          scaleY: 1,
          duration: 0.75,
          ease: "power2.inOut",
        },
        0.3,
      );

      introTimeline.to(
        bottomVertical,
        {
          scaleY: 1,
          duration: 0.75,
          ease: "power2.inOut",
        },
        0.34,
      );

      introTimeline.to(
        rail,
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power3.out",
        },
        0.38,
      );

      introTimeline.to(
        counter,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
        },
        0.5,
      );

      introTimeline.to(
        bottomReadout,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
        },
        0.54,
      );

      introTimeline.to(
        sideLabel,
        {
          opacity: 1,
          duration: 0.5,
        },
        0.58,
      );

      // Scroll timeline
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.1,
          pin: stage,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,

          onUpdate: (self) => {
            const normalized = gsap.utils.clamp(
              0,
              1,
              gsap.utils.mapRange(0.05, 0.94, 0, 1, self.progress),
            );

            const activeIndex = Math.min(
              items.length - 1,
              Math.round(normalized * (items.length - 1)),
            );

            if (currentIndex) {
              currentIndex.textContent = String(activeIndex + 1).padStart(
                2,
                "0",
              );
            }

            railItems.forEach((railItem, index) => {
              const indicator = railItem.querySelector<HTMLElement>(
                ".partner-rail-indicator",
              );

              const name =
                railItem.querySelector<HTMLElement>(".partner-rail-name");

              gsap.set(railItem, {
                opacity: index === activeIndex ? 1 : 0.38,
              });

              if (indicator) {
                gsap.set(indicator, {
                  height: index === activeIndex ? "100%" : "0%",
                });
              }

              if (name) {
                gsap.set(name, {
                  color: index === activeIndex ? "var(--foreground)" : "",
                });
              }
            });

            if (progress) {
              gsap.set(progress, {
                width: `${normalized * 90}px`,
              });
            }
          },
        },
      });

      // Partners
      const start = 0.25;
      const gap = 1.02;
      const hold = 0.7;

      items.forEach((item, index) => {
        const logoPlate = item.querySelector(".partner-logo-plate");

        const logo = item.querySelector(".partner-logo");

        const corners = item.querySelectorAll(".partner-logo-corner");

        const code = item.querySelector(".partner-code");

        const name = item.querySelector(".partner-name");

        const description = item.querySelector(".partner-description");

        const position = start + index * gap;

        timeline.set(
          item,
          {
            autoAlpha: 1,
          },
          position,
        );

        timeline.to(
          logoPlate,
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: "power3.out",
          },
          position,
        );

        timeline.to(
          logo,
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: "power4.out",
          },
          position + 0.06,
        );

        timeline.to(
          corners,
          {
            scale: 1,
            duration: 0.25,
            stagger: 0.05,
            ease: "back.out(1.7)",
          },
          position + 0.1,
        );

        timeline.to(
          code,
          {
            opacity: 1,
            y: 0,
            duration: 0.35,
          },
          position + 0.14,
        );

        timeline.to(
          name,
          {
            yPercent: 0,
            duration: 0.5,
            ease: "power4.out",
          },
          position + 0.18,
        );

        timeline.to(
          description,
          {
            opacity: 1,
            y: 0,
            duration: 0.42,
            ease: "power3.out",
          },
          position + 0.25,
        );

        if (index < items.length - 1) {
          const exit = position + hold;

          timeline.to(
            logo,
            {
              opacity: 0,
              scale: 0.94,
              duration: 0.3,
              ease: "power2.in",
            },
            exit,
          );

          timeline.to(
            logoPlate,
            {
              opacity: 0,
              scale: 0.98,
              duration: 0.3,
            },
            exit,
          );

          timeline.to(
            [code, description],
            {
              opacity: 0,
              y: -12,
              duration: 0.28,
              ease: "power2.in",
            },
            exit,
          );

          timeline.to(
            name,
            {
              yPercent: -115,
              duration: 0.36,
              ease: "power3.in",
            },
            exit,
          );

          timeline.set(
            item,
            {
              autoAlpha: 0,
            },
            exit + 0.38,
          );
        }
      });

      timeline.to({}, { duration: 0.75 });

      return () => {
        introTimeline.kill();
        timeline.kill();
      };
    },
    {
      scope: sectionRef,
      dependencies: [isRTL],
    },
  );
}
