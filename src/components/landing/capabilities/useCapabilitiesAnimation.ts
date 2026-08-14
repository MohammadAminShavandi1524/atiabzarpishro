"use client";

import type { RefObject } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface UseCapabilitiesAnimationProps {
  sectionRef: RefObject<HTMLElement | null>;
  stageRef: RefObject<HTMLDivElement | null>;
  isRTL: boolean;
}

export function useCapabilitiesAnimation({
  sectionRef,
  stageRef,
  isRTL,
}: UseCapabilitiesAnimationProps) {
  useGSAP(
    () => {
      const section = sectionRef.current;
      const stage = stageRef.current;

      if (!section || !stage) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) return;

      // =========================================================
      // Elements
      // =========================================================

      const horizontalLines = stage.querySelectorAll(".cap-horizontal-line");

      const verticalStart = stage.querySelector(".cap-vertical-start");

      const verticalEnd = stage.querySelector(".cap-vertical-end");

      const backgroundIndex = stage.querySelector(".cap-background-index");

      const eyebrow = stage.querySelector(".cap-eyebrow");

      const eyebrowLine = stage.querySelector(".cap-eyebrow-line");

      const chapter = stage.querySelector(".cap-chapter");

      const chapterLine = stage.querySelector(".cap-chapter-line");

      const mainDivider = stage.querySelector(".cap-main-divider");

      const leftMeta = stage.querySelector(".cap-left-meta");

      const rail = stage.querySelector(".cap-rail");

      const currentIndex = stage.querySelector(".cap-current-index");

      const progress = stage.querySelector(".cap-progress");

      const bottomDivider = stage.querySelector(".cap-bottom-divider");

      const bottomVertical = stage.querySelector(".cap-bottom-vertical");

      const scrollHint = stage.querySelector(".cap-scroll-hint");

      const stepsContainer = stage.querySelector(".cap-steps");

      const steps = gsap.utils.toArray<HTMLElement>(
        stage.querySelectorAll(".cap-step"),
      );

      const sideLabel = stage.querySelector(".cap-side-label");

      const items = gsap.utils.toArray<HTMLElement>(
        stage.querySelectorAll(".cap-item"),
      );

      // =========================================================
      // Initial States
      // =========================================================

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
        x: isRTL ? 26 : -26,
      });

      gsap.set(eyebrowLine, {
        scaleX: 0,
        transformOrigin: isRTL ? "right center" : "left center",
      });

      gsap.set(chapter, {
        opacity: 0,
        x: isRTL ? -24 : 24,
      });

      gsap.set(chapterLine, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      gsap.set(mainDivider, {
        scaleY: 0,
        transformOrigin: "top center",
      });

      gsap.set(leftMeta, {
        opacity: 0,
        y: 24,
      });

      gsap.set(rail, {
        opacity: 0,
        y: 18,
      });

      gsap.set(progress, {
        scaleX: 0,
        transformOrigin: isRTL ? "right center" : "left center",
      });

      gsap.set(bottomDivider, {
        scaleX: 0,
        transformOrigin: isRTL ? "right center" : "left center",
      });

      gsap.set(bottomVertical, {
        scaleY: 0,
        transformOrigin: "top center",
      });

      gsap.set(scrollHint, {
        opacity: 0,
        y: 14,
      });

      gsap.set(stepsContainer, {
        opacity: 0,
        y: 14,
      });

      gsap.set(steps, {
        opacity: 0.3,
      });

      gsap.set(sideLabel, {
        opacity: 0,
      });

      items.forEach((item) => {
        const titleLines = item.querySelectorAll(".cap-title-line");

        const description = item.querySelector(".cap-description");

        const code = item.querySelector(".cap-code");

        const codeLine = item.querySelector(".cap-code-line");

        const number = item.querySelector(".cap-item-number");

        gsap.set(item, {
          opacity: 0,
          visibility: "hidden",
        });

        gsap.set(titleLines, {
          yPercent: 115,
        });

        gsap.set(description, {
          opacity: 0,
          y: 28,
        });

        gsap.set(code, {
          opacity: 0,
          x: isRTL ? 22 : -22,
        });

        gsap.set(codeLine, {
          scaleX: 0,
          transformOrigin: "left center",
        });

        gsap.set(number, {
          opacity: 0,
          scale: 0.92,
        });
      });

      // =========================================================
      // Intro Timeline
      // =========================================================

      const introTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 92%",
          end: "top top",
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      });

      // Horizontal construction
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

      // Vertical start
      introTimeline.to(
        verticalStart,
        {
          scaleY: 1,
          duration: 1.1,
          ease: "power2.inOut",
        },
        0.04,
      );

      // Vertical end
      introTimeline.to(
        verticalEnd,
        {
          scaleY: 1,
          duration: 1.1,
          ease: "power2.inOut",
        },
        0.1,
      );

      // Background 02
      introTimeline.to(
        backgroundIndex,
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
        },
        0.08,
      );

      // Eyebrow line
      introTimeline.to(
        eyebrowLine,
        {
          scaleX: 1,
          duration: 0.65,
          ease: "power3.inOut",
        },
        0.16,
      );

      // Eyebrow
      introTimeline.to(
        eyebrow,
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        0.2,
      );

      // Chapter
      introTimeline.to(
        chapter,
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        0.24,
      );

      // Chapter line
      introTimeline.to(
        chapterLine,
        {
          scaleX: 1,
          duration: 0.6,
          ease: "power3.inOut",
        },
        0.28,
      );

      // Main divider
      introTimeline.to(
        mainDivider,
        {
          scaleY: 1,
          duration: 0.9,
          ease: "power2.inOut",
        },
        0.3,
      );

      // Bottom divider
      introTimeline.to(
        bottomDivider,
        {
          scaleX: 1,
          duration: 0.9,
          ease: "power2.inOut",
        },
        0.34,
      );

      // Bottom vertical
      introTimeline.to(
        bottomVertical,
        {
          scaleY: 1,
          duration: 0.8,
          ease: "power2.inOut",
        },
        0.4,
      );

      // Left meta
      introTimeline.to(
        leftMeta,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        0.42,
      );

      // Rail
      introTimeline.to(
        rail,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        0.5,
      );

      // Bottom hint
      introTimeline.to(
        scrollHint,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        0.56,
      );

      // Steps
      introTimeline.to(
        stepsContainer,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        0.6,
      );

      // Side label
      introTimeline.to(
        sideLabel,
        {
          opacity: 1,
          duration: 0.6,
        },
        0.62,
      );

      // =========================================================
      // Main Pinned Timeline
      // =========================================================

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.1,
          pin: stage,
          anticipatePin: 1,
          invalidateOnRefresh: true,

          onUpdate: (self) => {
            if (!currentIndex) return;

            const count = items.length;

            const normalized = gsap.utils.clamp(
              0,
              1,
              gsap.utils.mapRange(0.08, 0.92, 0, 1, self.progress),
            );

            const index = Math.min(
              count - 1,
              Math.round(normalized * (count - 1)),
            );

            currentIndex.textContent = String(index + 1).padStart(2, "0");
          },
        },
      });

      // =========================================================
      // Reveal First Capability
      // =========================================================

      const firstItem = items[0];

      if (firstItem) {
        const firstCode = firstItem.querySelector(".cap-code");

        const firstCodeLine = firstItem.querySelector(".cap-code-line");

        const firstTitle = firstItem.querySelectorAll(".cap-title-line");

        const firstDescription = firstItem.querySelector(".cap-description");

        const firstNumber = firstItem.querySelector(".cap-item-number");

        timeline.set(
          firstItem,
          {
            visibility: "visible",
          },
          0.08,
        );

        timeline.to(
          firstItem,
          {
            opacity: 1,
            duration: 0.2,
          },
          0.08,
        );

        timeline.to(
          firstCodeLine,
          {
            scaleX: 1,
            duration: 0.55,
            ease: "power3.inOut",
          },
          0.12,
        );

        timeline.to(
          firstCode,
          {
            opacity: 1,
            x: 0,
            duration: 0.55,
            ease: "power3.out",
          },
          0.16,
        );

        timeline.to(
          firstTitle,
          {
            yPercent: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: "power4.out",
          },
          0.2,
        );

        timeline.to(
          firstDescription,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          0.34,
        );

        timeline.to(
          firstNumber,
          {
            opacity: 1,
            scale: 1,
            duration: 0.75,
            ease: "power3.out",
          },
          0.22,
        );

        if (steps[0]) {
          timeline.to(
            steps[0],
            {
              opacity: 1,
              duration: 0.3,
            },
            0.22,
          );
        }
      }

      // =========================================================
      // Transitions Between Capabilities
      // =========================================================

      const transitionStart = 1.05;
      const transitionGap = 1.2;

      items.forEach((item, index) => {
        if (index === 0) return;

        const previous = items[index - 1];

        const previousTitle = previous.querySelectorAll(".cap-title-line");

        const previousDescription = previous.querySelector(".cap-description");

        const previousCode = previous.querySelector(".cap-code");

        const previousNumber = previous.querySelector(".cap-item-number");

        const currentTitle = item.querySelectorAll(".cap-title-line");

        const currentDescription = item.querySelector(".cap-description");

        const currentCode = item.querySelector(".cap-code");

        const currentCodeLine = item.querySelector(".cap-code-line");

        const currentNumber = item.querySelector(".cap-item-number");

        const position = transitionStart + (index - 1) * transitionGap;

        // Previous item out
        timeline.to(
          previousTitle,
          {
            yPercent: -115,
            duration: 0.42,
            stagger: 0.035,
            ease: "power3.in",
          },
          position,
        );

        timeline.to(
          previousDescription,
          {
            opacity: 0,
            y: -18,
            duration: 0.3,
            ease: "power2.in",
          },
          position,
        );

        timeline.to(
          previousCode,
          {
            opacity: 0,
            x: isRTL ? -18 : 18,
            duration: 0.3,
            ease: "power2.in",
          },
          position,
        );

        timeline.to(
          previousNumber,
          {
            opacity: 0,
            scale: 1.05,
            duration: 0.35,
          },
          position,
        );

        timeline.to(
          previous,
          {
            opacity: 0,
            duration: 0.2,
          },
          position + 0.28,
        );

        timeline.set(
          previous,
          {
            visibility: "hidden",
          },
          position + 0.34,
        );

        // Current item in
        timeline.set(
          item,
          {
            visibility: "visible",
          },
          position + 0.35,
        );

        timeline.to(
          item,
          {
            opacity: 1,
            duration: 0.2,
          },
          position + 0.35,
        );

        timeline.to(
          currentCodeLine,
          {
            scaleX: 1,
            duration: 0.5,
            ease: "power3.inOut",
          },
          position + 0.38,
        );

        timeline.to(
          currentCode,
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: "power3.out",
          },
          position + 0.4,
        );

        timeline.to(
          currentTitle,
          {
            yPercent: 0,
            duration: 0.7,
            stagger: 0.07,
            ease: "power4.out",
          },
          position + 0.42,
        );

        timeline.to(
          currentDescription,
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: "power3.out",
          },
          position + 0.56,
        );

        timeline.to(
          currentNumber,
          {
            opacity: 1,
            scale: 1,
            duration: 0.65,
            ease: "power3.out",
          },
          position + 0.42,
        );

        // Steps
        if (steps[index - 1]) {
          timeline.to(
            steps[index - 1],
            {
              opacity: 0.3,
              duration: 0.2,
            },
            position + 0.35,
          );
        }

        if (steps[index]) {
          timeline.to(
            steps[index],
            {
              opacity: 1,
              duration: 0.25,
            },
            position + 0.4,
          );
        }
      });

      // =========================================================
      // Progress Rail
      // =========================================================

      timeline.to(
        progress,
        {
          scaleX: 1,
          duration: 5.8,
          ease: "none",
        },
        0.18,
      );

      // =========================================================
      // Subtle Late Motion
      // =========================================================

      timeline.to(
        backgroundIndex,
        {
          xPercent: isRTL ? -3 : 3,
          scale: 1.025,
          duration: 1.2,
          ease: "none",
        },
        4.7,
      );

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
