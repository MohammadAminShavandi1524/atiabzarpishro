"use client";

import type { RefObject } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface UseCompanyStoryAnimationProps {
  sectionRef: RefObject<HTMLElement | null>;
  stageRef: RefObject<HTMLDivElement | null>;
  isRTL: boolean;
}

export function useCompanyStoryAnimation({
  sectionRef,
  stageRef,
  isRTL,
}: UseCompanyStoryAnimationProps) {
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

      const horizontalLines = stage.querySelectorAll(".story-horizontal-line");

      const verticalStart = stage.querySelector(".story-vertical-start");

      const verticalEnd = stage.querySelector(".story-vertical-end");

      const mainDivider = stage.querySelector(".story-main-divider");

      const bottomDivider = stage.querySelector(".story-bottom-divider");

      const bottomVerticalDivider = stage.querySelector(
        ".story-bottom-vertical-divider",
      );

      const eyebrow = stage.querySelector(".story-eyebrow");

      const chapter = stage.querySelector(".story-chapter");

      const number = stage.querySelector(".story-number");

      const numberSuffix = stage.querySelector(".story-number-suffix");

      const experience = stage.querySelector(".story-experience");

      const experienceLine = stage.querySelector(".story-experience-line");

      const measurement = stage.querySelector(".story-measurement");

      const measurementLine = stage.querySelector(".story-measurement-line");

      const titleLines = stage.querySelectorAll(".story-title-line");

      const description = stage.querySelector(".story-description");

      const stats = stage.querySelectorAll(".story-stat");

      const scrollLabel = stage.querySelector(".story-scroll-label");

      const progress = stage.querySelector(".story-progress");

      const backgroundIndex = stage.querySelector(".story-background-index");

      const sideCoordinate = stage.querySelector(".story-side-coordinate");

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

      gsap.set(mainDivider, {
        scaleY: 0,
        transformOrigin: "top center",
      });

      gsap.set(bottomDivider, {
        scaleX: 0,
        transformOrigin: isRTL ? "right center" : "left center",
      });

      gsap.set(bottomVerticalDivider, {
        scaleY: 0,
        transformOrigin: "top center",
      });

      gsap.set(eyebrow, {
        opacity: 0,
        x: isRTL ? 30 : -30,
      });

      gsap.set(chapter, {
        opacity: 0,
        x: isRTL ? -25 : 25,
      });

      gsap.set(number, {
        opacity: 0,
        yPercent: 110,
      });

      gsap.set(numberSuffix, {
        opacity: 0,
        scale: 0.6,
        y: 20,
      });

      gsap.set(experience, {
        opacity: 0,
        y: 24,
      });

      gsap.set(experienceLine, {
        scaleX: 0,
        transformOrigin: isRTL ? "right center" : "left center",
      });

      gsap.set(measurement, {
        opacity: 0,
        y: 15,
      });

      gsap.set(measurementLine, {
        scaleX: 0,
        transformOrigin: isRTL ? "right center" : "left center",
      });

      gsap.set(titleLines, {
        yPercent: 120,
      });

      gsap.set(description, {
        opacity: 0,
        y: 35,
      });

      gsap.set(stats, {
        opacity: 0,
        y: 28,
      });

      gsap.set(scrollLabel, {
        opacity: 0,
        y: 20,
      });

      gsap.set(progress, {
        scaleY: 0,
        transformOrigin: "top center",
      });

      gsap.set(backgroundIndex, {
        opacity: 0,
        scale: 0.94,
      });

      gsap.set(sideCoordinate, {
        opacity: 0,
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

      // Horizontal lines
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

      // Vertical start line
      introTimeline.to(
        verticalStart,
        {
          scaleY: 1,
          duration: 1.15,
          ease: "power2.inOut",
        },
        0.04,
      );

      // Vertical end line
      introTimeline.to(
        verticalEnd,
        {
          scaleY: 1,
          duration: 1.15,
          ease: "power2.inOut",
        },
        0.12,
      );

      // Background index
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

      // Eyebrow
      introTimeline.to(
        eyebrow,
        {
          opacity: 1,
          x: 0,
          duration: 0.75,
          ease: "power3.out",
        },
        0.16,
      );

      // Chapter
      introTimeline.to(
        chapter,
        {
          opacity: 1,
          x: 0,
          duration: 0.75,
          ease: "power3.out",
        },
        0.22,
      );

      // Side coordinate
      introTimeline.to(
        sideCoordinate,
        {
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
        },
        0.28,
      );

      // =========================================================
      // Main Pinned Timeline
      // =========================================================

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.15,
          pin: stage,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // =========================================================
      // Structural Dividers
      // =========================================================

      timeline.to(
        mainDivider,
        {
          scaleY: 1,
          duration: 0.9,
          ease: "power2.inOut",
        },
        0,
      );

      timeline.to(
        bottomDivider,
        {
          scaleX: 1,
          duration: 0.9,
          ease: "power2.inOut",
        },
        0.08,
      );

      timeline.to(
        bottomVerticalDivider,
        {
          scaleY: 1,
          duration: 0.8,
          ease: "power2.inOut",
        },
        0.16,
      );

      // =========================================================
      // Experience Number
      // =========================================================

      timeline.to(
        number,
        {
          opacity: 1,
          yPercent: 0,
          duration: 1.15,
          ease: "power4.out",
        },
        0.24,
      );

      timeline.to(
        numberSuffix,
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.65,
          ease: "back.out(1.6)",
        },
        0.65,
      );

      // =========================================================
      // Main Story Title
      // =========================================================

      timeline.to(
        titleLines,
        {
          yPercent: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.out",
        },
        0.45,
      );

      // =========================================================
      // Experience Detail
      // =========================================================

      timeline.to(
        experienceLine,
        {
          scaleX: 1,
          duration: 0.65,
          ease: "power3.inOut",
        },
        0.85,
      );

      timeline.to(
        experience,
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power3.out",
        },
        0.9,
      );

      // =========================================================
      // Description
      // =========================================================

      timeline.to(
        description,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        1.02,
      );

      // =========================================================
      // Measurement
      // =========================================================

      timeline.to(
        measurementLine,
        {
          scaleX: 1,
          duration: 0.6,
          ease: "power2.inOut",
        },
        1.22,
      );

      timeline.to(
        measurement,
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power3.out",
        },
        1.28,
      );

      // =========================================================
      // Bottom Stats
      // =========================================================

      timeline.to(
        stats,
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.1,
          ease: "power3.out",
        },
        1.42,
      );

      // =========================================================
      // Scroll Indicator
      // =========================================================

      timeline.to(
        scrollLabel,
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power3.out",
        },
        1.55,
      );

      // =========================================================
      // Progress
      // =========================================================

      timeline.to(
        progress,
        {
          scaleY: 1,
          duration: 2.1,
          ease: "none",
        },
        0.25,
      );

      // =========================================================
      // Late Motion
      // =========================================================

      timeline.to(
        backgroundIndex,
        {
          xPercent: isRTL ? -4 : 4,
          scale: 1.025,
          duration: 1.1,
          ease: "none",
        },
        1.45,
      );

      timeline.to(
        number,
        {
          yPercent: -3,
          duration: 1,
          ease: "none",
        },
        1.6,
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
