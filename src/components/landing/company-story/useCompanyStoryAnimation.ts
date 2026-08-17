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

      const introTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 92%",
          end: "top top",
          scrub: 0.65,
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
        0.09,
      );

      introTimeline.to(
        backgroundIndex,
        {
          opacity: 1,
          scale: 1,
          duration: 0.82,
          ease: "power3.out",
        },
        0.06,
      );

      introTimeline.to(
        eyebrow,
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        0.12,
      );

      introTimeline.to(
        chapter,
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        0.17,
      );

      introTimeline.to(
        sideCoordinate,
        {
          opacity: 1,
          duration: 0.55,
          ease: "power2.out",
        },
        0.22,
      );

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
        },
      });

      timeline.to(
        mainDivider,
        {
          scaleY: 1,
          duration: 0.72,
          ease: "power2.inOut",
        },
        0,
      );

      timeline.to(
        bottomDivider,
        {
          scaleX: 1,
          duration: 0.72,
          ease: "power2.inOut",
        },
        0.06,
      );

      timeline.to(
        bottomVerticalDivider,
        {
          scaleY: 1,
          duration: 0.65,
          ease: "power2.inOut",
        },
        0.12,
      );

      timeline.to(
        number,
        {
          opacity: 1,
          yPercent: 0,
          duration: 0.9,
          ease: "power4.out",
        },
        0.18,
      );

      timeline.to(
        numberSuffix,
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          ease: "back.out(1.6)",
        },
        0.48,
      );

      timeline.to(
        titleLines,
        {
          yPercent: 0,
          duration: 0.8,
          stagger: 0.07,
          ease: "power4.out",
        },
        0.32,
      );

      timeline.to(
        experienceLine,
        {
          scaleX: 1,
          duration: 0.52,
          ease: "power3.inOut",
        },
        0.7,
      );

      timeline.to(
        experience,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        0.75,
      );

      timeline.to(
        description,
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power3.out",
        },
        0.84,
      );

      timeline.to(
        measurementLine,
        {
          scaleX: 1,
          duration: 0.48,
          ease: "power2.inOut",
        },
        1,
      );

      timeline.to(
        measurement,
        {
          opacity: 1,
          y: 0,
          duration: 0.52,
          ease: "power3.out",
        },
        1.05,
      );

      timeline.to(
        stats,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
        },
        1.18,
      );

      timeline.to(
        scrollLabel,
        {
          opacity: 1,
          y: 0,
          duration: 0.52,
          ease: "power3.out",
        },
        1.3,
      );

      timeline.to(
        progress,
        {
          scaleY: 1,
          duration: 1.8,
          ease: "none",
        },
        0.18,
      );

      timeline.to(
        backgroundIndex,
        {
          xPercent: isRTL ? -4 : 4,
          scale: 1.025,
          duration: 0.88,
          ease: "none",
        },
        1.18,
      );

      timeline.to(
        number,
        {
          yPercent: -3,
          duration: 0.8,
          ease: "none",
        },
        1.3,
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
