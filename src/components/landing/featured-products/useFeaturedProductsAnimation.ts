"use client";

import type { RefObject } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface UseFeaturedProductsAnimationProps {
  sectionRef: RefObject<HTMLElement | null>;
  stageRef: RefObject<HTMLDivElement | null>;
  isRTL: boolean;
}

export function useFeaturedProductsAnimation({
  sectionRef,
  stageRef,
  isRTL,
}: UseFeaturedProductsAnimationProps) {
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
        ".featured-horizontal-line",
      );

      const verticalStart = stage.querySelector(
        ".featured-vertical-start",
      );

      const verticalEnd = stage.querySelector(
        ".featured-vertical-end",
      );

      const backgroundIndex = stage.querySelector(
        ".featured-background-index",
      );

      const eyebrow = stage.querySelector(
        ".featured-eyebrow",
      );

      const eyebrowLine = stage.querySelector(
        ".featured-eyebrow-line",
      );

      const chapter = stage.querySelector(
        ".featured-chapter",
      );

      const chapterLine = stage.querySelector(
        ".featured-chapter-line",
      );

      const mainDivider = stage.querySelector(
        ".featured-main-divider",
      );

      const counter = stage.querySelector(
        ".featured-counter",
      );

      const currentIndex = stage.querySelector(
        ".featured-current-index",
      );

      const steps = gsap.utils.toArray<HTMLElement>(
        stage.querySelectorAll(".featured-step"),
      );

      const viewAll = stage.querySelector(
        ".featured-view-all",
      );

      const sideLabel = stage.querySelector(
        ".featured-side-label",
      );

      const items = gsap.utils.toArray<HTMLElement>(
        stage.querySelectorAll(".featured-product-item"),
      );

      // Initial states
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

      gsap.set(counter, {
        opacity: 0,
        y: 14,
      });

      gsap.set(steps, {
        opacity: 0.3,
      });

      gsap.set(viewAll, {
        opacity: 0,
        y: 12,
      });

      gsap.set(sideLabel, {
        opacity: 0,
      });

      items.forEach((item) => {
        const code = item.querySelector(".featured-product-code");
        const codeLine = item.querySelector(
          ".featured-product-code-line",
        );
        const brand = item.querySelector(
          ".featured-product-brand",
        );
        const title = item.querySelector(
          ".featured-product-title",
        );
        const description = item.querySelector(
          ".featured-product-description",
        );
        const image = item.querySelector(
          ".featured-product-image",
        );

        gsap.set(item, {
          autoAlpha: 0,
        });

        gsap.set(code, {
          opacity: 0,
          y: 12,
        });

        gsap.set(codeLine, {
          scaleX: 0,
          transformOrigin: "left center",
        });

        gsap.set(brand, {
          opacity: 0,
          y: 14,
        });

        gsap.set(title, {
          yPercent: 115,
        });

        gsap.set(description, {
          opacity: 0,
          y: 22,
        });

        gsap.set(image, {
          opacity: 0,
          scale: 0.88,
          rotate: isRTL ? 3 : -3,
          xPercent: isRTL ? -5 : 5,
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
        0.26,
      );

      introTimeline.to(
        chapterLine,
        {
          scaleX: 1,
          duration: 0.5,
        },
        0.3,
      );

      introTimeline.to(
        mainDivider,
        {
          scaleY: 1,
          duration: 0.75,
          ease: "power2.inOut",
        },
        0.32,
      );

      introTimeline.to(
        counter,
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "power3.out",
        },
        0.5,
      );

      introTimeline.to(
        viewAll,
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "power3.out",
        },
        0.58,
      );

      introTimeline.to(
        sideLabel,
        {
          opacity: 1,
          duration: 0.5,
        },
        0.62,
      );

      // Main timeline
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
            if (!currentIndex) return;

            const normalized = gsap.utils.clamp(
              0,
              1,
              gsap.utils.mapRange(
                0.08,
                0.92,
                0,
                1,
                self.progress,
              ),
            );

            const index = Math.min(
              items.length - 1,
              Math.round(normalized * (items.length - 1)),
            );

            currentIndex.textContent = String(index + 1).padStart(
              2,
              "0",
            );

            steps.forEach((step, stepIndex) => {
              gsap.set(step, {
                opacity: stepIndex === index ? 1 : 0.3,
              });
            });
          },
        },
      });

      // Products
      const start = 0.25;
      const gap = 1.65;
      const hold = 1.15;

      items.forEach((item, index) => {
        const code = item.querySelector(".featured-product-code");
        const codeLine = item.querySelector(
          ".featured-product-code-line",
        );
        const brand = item.querySelector(
          ".featured-product-brand",
        );
        const title = item.querySelector(
          ".featured-product-title",
        );
        const description = item.querySelector(
          ".featured-product-description",
        );
        const image = item.querySelector(
          ".featured-product-image",
        );

        const position = start + index * gap;

        timeline.set(
          item,
          {
            autoAlpha: 1,
          },
          position,
        );

        timeline.to(
          image,
          {
            opacity: 1,
            scale: 1,
            rotate: 0,
            xPercent: 0,
            duration: 0.8,
            ease: "power4.out",
          },
          position,
        );

        timeline.to(
          codeLine,
          {
            scaleX: 1,
            duration: 0.45,
          },
          position + 0.1,
        );

        timeline.to(
          code,
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
          },
          position + 0.12,
        );

        timeline.to(
          brand,
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
          },
          position + 0.18,
        );

        timeline.to(
          title,
          {
            yPercent: 0,
            duration: 0.65,
            ease: "power4.out",
          },
          position + 0.22,
        );

        timeline.to(
          description,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
          },
          position + 0.3,
        );

        if (index < items.length - 1) {
          const exit = position + hold;

          timeline.to(
            image,
            {
              opacity: 0,
              scale: 1.06,
              rotate: isRTL ? -2 : 2,
              xPercent: isRTL ? 4 : -4,
              duration: 0.55,
              ease: "power3.in",
            },
            exit,
          );

          timeline.to(
            [code, brand, description],
            {
              opacity: 0,
              y: -14,
              duration: 0.35,
              ease: "power2.in",
            },
            exit,
          );

          timeline.to(
            title,
            {
              yPercent: -115,
              duration: 0.45,
              ease: "power3.in",
            },
            exit,
          );

          timeline.set(
            item,
            {
              autoAlpha: 0,
            },
            exit + 0.5,
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