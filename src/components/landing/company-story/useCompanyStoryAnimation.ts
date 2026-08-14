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

      // Elements
      const technicalLines = stage.querySelectorAll(".story-technical-line");

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

      // -------------------------------------------------------
      // Initial states
      // -------------------------------------------------------

      gsap.set(technicalLines, {
        scaleX: 0,
        transformOrigin: isRTL ? "right center" : "left center",
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

      // -------------------------------------------------------
      // Main scroll timeline
      // -------------------------------------------------------

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.15,
          pin: stage,
          anticipatePin: 1,
        },
      });

      // -------------------------------------------------------
      // Phase 01 — Construct the technical frame
      // -------------------------------------------------------

      timeline.to(
        technicalLines,
        {
          scaleX: 1,
          duration: 1.2,
          stagger: 0.08,
          ease: "power2.inOut",
        },
        0,
      );

      timeline.to(
        mainDivider,
        {
          scaleY: 1,
          duration: 1.05,
          ease: "power2.inOut",
        },
        0.08,
      );

      timeline.to(
        bottomDivider,
        {
          scaleX: 1,
          duration: 1.05,
          ease: "power2.inOut",
        },
        0.2,
      );

      timeline.to(
        bottomVerticalDivider,
        {
          scaleY: 1,
          duration: 0.95,
          ease: "power2.inOut",
        },
        0.35,
      );

      // -------------------------------------------------------
      // Phase 02 — Background construction
      // -------------------------------------------------------

      timeline.to(
        backgroundIndex,
        {
          opacity: 1,
          scale: 1,
          duration: 1.15,
          ease: "power3.out",
        },
        0.12,
      );

      timeline.to(
        eyebrow,
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        0.32,
      );

      timeline.to(
        chapter,
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        0.42,
      );

      // -------------------------------------------------------
      // Phase 03 — Experience number
      // -------------------------------------------------------

      timeline.to(
        number,
        {
          opacity: 1,
          yPercent: 0,
          duration: 1.2,
          ease: "power4.out",
        },
        0.62,
      );

      timeline.to(
        numberSuffix,
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.7,
          ease: "back.out(1.7)",
        },
        1.05,
      );

      // -------------------------------------------------------
      // Phase 04 — Main statement
      // -------------------------------------------------------

      timeline.to(
        titleLines,
        {
          yPercent: 0,
          duration: 1.1,
          stagger: 0.12,
          ease: "power4.out",
        },
        0.82,
      );

      timeline.to(
        experienceLine,
        {
          scaleX: 1,
          duration: 0.7,
          ease: "power3.inOut",
        },
        1.25,
      );

      timeline.to(
        experience,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        1.3,
      );

      timeline.to(
        description,
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
        },
        1.4,
      );

      // -------------------------------------------------------
      // Phase 05 — Measurement details
      // -------------------------------------------------------

      timeline.to(
        measurementLine,
        {
          scaleX: 1,
          duration: 0.7,
          ease: "power2.inOut",
        },
        1.6,
      );

      timeline.to(
        measurement,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        1.66,
      );

      // -------------------------------------------------------
      // Phase 06 — Bottom information
      // -------------------------------------------------------

      timeline.to(
        stats,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
        },
        1.82,
      );

      timeline.to(
        scrollLabel,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        1.95,
      );

      timeline.to(
        sideCoordinate,
        {
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        },
        2,
      );

      // -------------------------------------------------------
      // Global scroll progress
      // -------------------------------------------------------

      timeline.to(
        progress,
        {
          scaleY: 1,
          duration: 2.2,
          ease: "none",
        },
        0.8,
      );

      return () => {
        timeline.kill();
      };
    },
    {
      scope: sectionRef,
      dependencies: [isRTL],
    },
  );
}
