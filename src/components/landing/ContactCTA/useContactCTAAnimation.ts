"use client";

import type { RefObject } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface UseContactCTAAnimationProps {
  sectionRef: RefObject<HTMLElement | null>;
  isRTL: boolean;
}

export function useContactCTAAnimation({
  sectionRef,
  isRTL,
}: UseContactCTAAnimationProps) {
  useGSAP(
    () => {
      const section = sectionRef.current;

      if (!section) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) return;

      // Elements
      const backgroundLines = section.querySelectorAll(".contact-bg-line");

      const backgroundIndex = section.querySelector(".contact-bg-index");

      const eyebrow = section.querySelector(".contact-eyebrow");

      const eyebrowLine = section.querySelector(".contact-eyebrow-line");

      const chapter = section.querySelector(".contact-chapter");

      const chapterLine = section.querySelector(".contact-chapter-line");

      const mainDivider = section.querySelector(".contact-main-divider");

      const titleLines = section.querySelectorAll(".contact-title-line");

      const description = section.querySelector(".contact-description");

      const methodsDivider = section.querySelector(
        ".contact-methods-divider",
      );

      const sideCopy = section.querySelector(".contact-side-copy");

      const methods = gsap.utils.toArray<HTMLElement>(
        section.querySelectorAll(".contact-method"),
      );

      const bottom = section.querySelector(".contact-bottom");

      // Initial
      gsap.set(backgroundLines, {
        scaleY: 0,
        transformOrigin: "top center",
      });

      gsap.set(backgroundIndex, {
        opacity: 0,
        scale: 0.95,
      });

      gsap.set(eyebrow, {
        opacity: 0,
        x: isRTL ? 20 : -20,
      });

      gsap.set(eyebrowLine, {
        scaleX: 0,
        transformOrigin: isRTL ? "right center" : "left center",
      });

      gsap.set(chapter, {
        opacity: 0,
      });

      gsap.set(chapterLine, {
        scaleX: 0,
      });

      gsap.set(mainDivider, {
        scaleY: 0,
        transformOrigin: "top center",
      });

      gsap.set(titleLines, {
        yPercent: 115,
      });

      gsap.set(description, {
        opacity: 0,
        y: 20,
      });

      gsap.set(methodsDivider, {
        scaleY: 0,
        transformOrigin: "top center",
      });

      gsap.set(sideCopy, {
        opacity: 0,
        y: 16,
      });

      gsap.set(methods, {
        opacity: 0,
        y: 28,
      });

      gsap.set(bottom, {
        opacity: 0,
      });

      // Header
      const headerTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          once: true,
        },
      });

      headerTimeline.to(backgroundLines, {
        scaleY: 1,
        duration: 1.1,
        stagger: 0.08,
        ease: "power2.inOut",
      });

      headerTimeline.to(
        backgroundIndex,
        {
          opacity: 1,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
        },
        0.08,
      );

      headerTimeline.to(
        eyebrowLine,
        {
          scaleX: 1,
          duration: 0.5,
        },
        0.15,
      );

      headerTimeline.to(
        eyebrow,
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        0.18,
      );

      headerTimeline.to(
        chapter,
        {
          opacity: 1,
          duration: 0.5,
        },
        0.22,
      );

      headerTimeline.to(
        chapterLine,
        {
          scaleX: 1,
          duration: 0.45,
        },
        0.25,
      );

      headerTimeline.to(
        mainDivider,
        {
          scaleY: 1,
          duration: 0.8,
          ease: "power2.inOut",
        },
        0.28,
      );

      headerTimeline.to(
        titleLines,
        {
          yPercent: 0,
          duration: 0.85,
          stagger: 0.08,
          ease: "power4.out",
        },
        0.34,
      );

      headerTimeline.to(
        description,
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power3.out",
        },
        0.58,
      );

      // Methods
      const methodsTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: methods[0],
          start: "top 82%",
          once: true,
        },
      });

      methodsTimeline.to(methodsDivider, {
        scaleY: 1,
        duration: 0.8,
        ease: "power2.inOut",
      });

      methodsTimeline.to(
        sideCopy,
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "power3.out",
        },
        0.08,
      );

      methodsTimeline.to(
        methods,
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.12,
          ease: "power3.out",
        },
        0.15,
      );

      methodsTimeline.to(
        bottom,
        {
          opacity: 1,
          duration: 0.5,
        },
        0.35,
      );

      // Hover
      methods.forEach((method) => {
        const line = method.querySelector(".contact-method-line");

        const index = method.querySelector(".contact-method-index");

        const title = method.querySelector(".contact-method-title");

        const onEnter = () => {
          gsap.to(line, {
            scaleX: 1,
            duration: 0.45,
            ease: "power3.out",
            transformOrigin: isRTL
              ? "right center"
              : "left center",
          });

          gsap.to(index, {
            color: "var(--custom-primary)",
            duration: 0.25,
          });

          gsap.to(title, {
            color: "var(--custom-primary)",
            duration: 0.25,
          });
        };

        const onLeave = () => {
          gsap.to(line, {
            scaleX: 0,
            duration: 0.35,
            ease: "power2.inOut",
            transformOrigin: isRTL
              ? "left center"
              : "right center",
          });

          gsap.to(index, {
            color: "",
            duration: 0.25,
          });

          gsap.to(title, {
            color: "",
            duration: 0.25,
          });
        };

        method.addEventListener("mouseenter", onEnter);
        method.addEventListener("mouseleave", onLeave);
      });
    },
    {
      scope: sectionRef,
      dependencies: [isRTL],
    },
  );
}