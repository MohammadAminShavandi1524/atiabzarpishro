"use client";

import type { RefObject } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface UseIndustriesAnimationProps {
  sectionRef: RefObject<HTMLElement | null>;
  stageRef: RefObject<HTMLDivElement | null>;
  isRTL: boolean;
}

export function useIndustriesAnimation({
  sectionRef,
  stageRef,
  isRTL,
}: UseIndustriesAnimationProps) {
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

      const horizontalLines = stage.querySelectorAll(
        ".industries-horizontal-line",
      );

      const verticalStart = stage.querySelector(".industries-vertical-start");

      const verticalEnd = stage.querySelector(".industries-vertical-end");

      const backgroundIndex = stage.querySelector(
        ".industries-background-index",
      );

      const eyebrow = stage.querySelector(".industries-eyebrow");

      const eyebrowLine = stage.querySelector(".industries-eyebrow-line");

      const chapter = stage.querySelector(".industries-chapter");

      const chapterLine = stage.querySelector(".industries-chapter-line");

      const mainDivider = stage.querySelector(".industries-main-divider");

      const copy = stage.querySelector(".industries-copy");

      const titleLines = stage.querySelectorAll(".industries-title-line");

      const description = stage.querySelector(".industries-description");

      const counter = stage.querySelector(".industries-counter");

      const currentIndex = stage.querySelector(".industries-current-index");

      const core = stage.querySelector(".industries-core");

      const coreFrame = stage.querySelector(".industries-core-frame");

      const corePulse = stage.querySelector(".industries-core-pulse");

      const coreCorners = stage.querySelectorAll(".industries-core-corner");

      const links = gsap.utils.toArray<SVGLineElement>(
        stage.querySelectorAll(".industry-link"),
      );

      const nodes = gsap.utils.toArray<HTMLElement>(
        stage.querySelectorAll(".industry-node"),
      );

      const bottomVertical = stage.querySelector(".industries-bottom-vertical");

      const scrollHint = stage.querySelector(".industries-scroll-hint");

      const readout = stage.querySelector(".industries-readout");

      const readoutProgress = stage.querySelector(
        ".industries-readout-progress",
      );

      const sideLabel = stage.querySelector(".industries-side-label");

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
        transformOrigin: "left center",
      });

      gsap.set(mainDivider, {
        scaleY: 0,
        transformOrigin: "top center",
      });

      gsap.set(copy, {
        opacity: 0,
      });

      gsap.set(titleLines, {
        yPercent: 115,
      });

      gsap.set(description, {
        opacity: 0,
        y: 24,
      });

      gsap.set(counter, {
        opacity: 0,
        y: 14,
      });

      gsap.set(core, {
        opacity: 0,
        scale: 0.88,
      });

      gsap.set(coreFrame, {
        scale: 0.96,
      });

      gsap.set(corePulse, {
        opacity: 0,
        scale: 0.86,
      });

      gsap.set(coreCorners, {
        scale: 0,
      });

      // Partial lines visible before build
      gsap.set(links, {
        strokeDasharray: "0.12 0.88",
        strokeDashoffset: 0.42,
        opacity: 0.8,
      });

      nodes.forEach((node) => {
        const point = node.querySelector(".industry-node-point");

        const code = node.querySelector(".industry-node-code");

        const title = node.querySelector(".industry-node-title");

        gsap.set(node, {
          opacity: 0,
        });

        gsap.set(point, {
          scale: 0,
        });

        gsap.set(code, {
          opacity: 0,
          y: 8,
        });

        gsap.set(title, {
          opacity: 0,
          y: 12,
        });
      });

      gsap.set(bottomVertical, {
        scaleY: 0,
        transformOrigin: "top center",
      });

      gsap.set(scrollHint, {
        opacity: 0,
        y: 12,
      });

      gsap.set(readout, {
        opacity: 0,
        y: 12,
      });

      gsap.set(readoutProgress, {
        width: 0,
      });

      gsap.set(sideLabel, {
        opacity: 0,
      });

      // =========================================================
      // Intro
      // =========================================================

      const introTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 92%",
          end: "top top",
          scrub: 0.7,
          invalidateOnRefresh: true,
        },
      });

      introTimeline.to(
        horizontalLines,
        {
          scaleX: 1,
          duration: 0.85,
          stagger: 0.06,
          ease: "power2.inOut",
        },
        0,
      );

      introTimeline.to(
        verticalStart,
        {
          scaleY: 1,
          duration: 0.95,
          ease: "power2.inOut",
        },
        0.03,
      );

      introTimeline.to(
        verticalEnd,
        {
          scaleY: 1,
          duration: 0.95,
          ease: "power2.inOut",
        },
        0.08,
      );

      introTimeline.to(
        backgroundIndex,
        {
          opacity: 1,
          scale: 1,
          duration: 0.85,
          ease: "power3.out",
        },
        0.06,
      );

      introTimeline.to(
        eyebrowLine,
        {
          scaleX: 1,
          duration: 0.5,
          ease: "power3.inOut",
        },
        0.13,
      );

      introTimeline.to(
        eyebrow,
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        0.16,
      );

      introTimeline.to(
        chapter,
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        0.2,
      );

      introTimeline.to(
        chapterLine,
        {
          scaleX: 1,
          duration: 0.45,
          ease: "power3.inOut",
        },
        0.23,
      );

      introTimeline.to(
        mainDivider,
        {
          scaleY: 1,
          duration: 0.72,
          ease: "power2.inOut",
        },
        0.25,
      );

      introTimeline.to(
        bottomVertical,
        {
          scaleY: 1,
          duration: 0.68,
          ease: "power2.inOut",
        },
        0.31,
      );

      introTimeline.to(
        copy,
        {
          opacity: 1,
          duration: 0.18,
        },
        0.3,
      );

      introTimeline.to(
        titleLines,
        {
          yPercent: 0,
          duration: 0.64,
          stagger: 0.06,
          ease: "power4.out",
        },
        0.36,
      );

      introTimeline.to(
        description,
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "power3.out",
        },
        0.46,
      );

      introTimeline.to(
        counter,
        {
          opacity: 1,
          y: 0,
          duration: 0.48,
          ease: "power3.out",
        },
        0.51,
      );

      introTimeline.to(
        scrollHint,
        {
          opacity: 1,
          y: 0,
          duration: 0.44,
          ease: "power3.out",
        },
        0.53,
      );

      introTimeline.to(
        readout,
        {
          opacity: 1,
          y: 0,
          duration: 0.44,
          ease: "power3.out",
        },
        0.56,
      );

      introTimeline.to(
        sideLabel,
        {
          opacity: 1,
          duration: 0.42,
        },
        0.59,
      );

      // =========================================================
      // Pinned Timeline
      // =========================================================

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.9,
          pin: stage,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,

          onUpdate: (self) => {
            if (!currentIndex) return;

            const normalized = gsap.utils.clamp(
              0,
              1,
              gsap.utils.mapRange(0.06, 0.82, 0, 1, self.progress),
            );

            const activeIndex = Math.min(
              nodes.length - 1,
              Math.floor(normalized * nodes.length),
            );

            currentIndex.textContent = String(activeIndex + 1).padStart(2, "0");
          },
        },
      });

      // =========================================================
      // Core
      // =========================================================

      timeline.to(
        core,
        {
          opacity: 1,
          scale: 1,
          duration: 0.58,
          ease: "power4.out",
        },
        0.05,
      );

      timeline.to(
        coreFrame,
        {
          scale: 1,
          duration: 0.5,
          ease: "power3.out",
        },
        0.05,
      );

      timeline.to(
        coreCorners,
        {
          scale: 1,
          duration: 0.28,
          stagger: 0.04,
          ease: "back.out(1.8)",
        },
        0.13,
      );

      timeline.to(
        corePulse,
        {
          opacity: 1,
          scale: 1,
          duration: 0.46,
          ease: "power3.out",
        },
        0.15,
      );

      // =========================================================
      // Network
      // 8 connections intentionally build much faster
      // =========================================================

      const buildStart = 0.55;
      const buildGap = 0.34;

      nodes.forEach((node, index) => {
        const link = links[index];

        const point = node.querySelector(".industry-node-point");

        const code = node.querySelector(".industry-node-code");

        const title = node.querySelector(".industry-node-title");

        const position = buildStart + index * buildGap;

        // Connection line
        if (link) {
          timeline.to(
            link,
            {
              strokeDasharray: "1 0",
              strokeDashoffset: 0,
              opacity: 1,
              duration: 0.26,
              ease: "power2.inOut",
            },
            position,
          );
        }

        // Node
        timeline.to(
          node,
          {
            opacity: 1,
            duration: 0.12,
            ease: "power2.out",
          },
          position + 0.12,
        );

        // Point
        timeline.to(
          point,
          {
            scale: 1,
            duration: 0.2,
            ease: "back.out(1.8)",
          },
          position + 0.13,
        );

        // Code
        timeline.to(
          code,
          {
            opacity: 1,
            y: 0,
            duration: 0.22,
            ease: "power3.out",
          },
          position + 0.14,
        );

        // Title
        timeline.to(
          title,
          {
            opacity: 1,
            y: 0,
            duration: 0.28,
            ease: "power3.out",
          },
          position + 0.17,
        );
      });

      // =========================================================
      // Final State
      // =========================================================

      const finalPosition = buildStart + nodes.length * buildGap;

      timeline.to(
        readoutProgress,
        {
          width: 80,
          duration: 0.55,
          ease: "power2.inOut",
        },
        finalPosition - 0.18,
      );

      timeline.to(
        corePulse,
        {
          scale: 1.06,
          opacity: 0.4,
          duration: 0.58,
          ease: "sine.inOut",
        },
        finalPosition,
      );

      // Small hold before leaving section
      timeline.to(
        {},
        {
          duration: 0.7,
        },
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
