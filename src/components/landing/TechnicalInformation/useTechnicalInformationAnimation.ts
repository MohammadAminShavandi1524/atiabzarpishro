"use client";

import type { RefObject } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface UseTechnicalInformationAnimationProps {
  sectionRef: RefObject<HTMLElement | null>;
  isRTL: boolean;
}

export function useTechnicalInformationAnimation({
  sectionRef,
  isRTL,
}: UseTechnicalInformationAnimationProps) {
  useGSAP(
    () => {
      const section = sectionRef.current;

      if (!section) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) return;

      const eyebrow = section.querySelector(".technical-eyebrow");

      const eyebrowLine = section.querySelector(".technical-eyebrow-line");

      const chapter = section.querySelector(".technical-chapter");

      const chapterLine = section.querySelector(".technical-chapter-line");

      const divider = section.querySelector(".technical-divider");

      const listDivider = section.querySelector(".technical-list-divider");

      const titleLines = section.querySelectorAll(".technical-title-line");

      const description = section.querySelector(".technical-description");

      const backgroundIndex = section.querySelector(".technical-bg-index");

      const backgroundLines = section.querySelectorAll(".technical-bg-line");

      const listLabel = section.querySelector(".technical-list-label");

      const resources = gsap.utils.toArray<HTMLElement>(
        section.querySelectorAll(".technical-resource"),
      );

      const bottom = section.querySelector(".technical-bottom");

      // Initial
      gsap.set(backgroundLines, {
        scaleY: 0,
        transformOrigin: "top center",
      });

      gsap.set(backgroundIndex, {
        opacity: 0,
        scale: 0.96,
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

      gsap.set([divider, listDivider], {
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

      gsap.set(listLabel, {
        opacity: 0,
        y: 16,
      });

      gsap.set(resources, {
        opacity: 0,
        y: 30,
      });

      gsap.set(bottom, {
        opacity: 0,
      });

      // Intro
      const intro = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          once: true,
        },
      });

      intro.to(backgroundLines, {
        scaleY: 1,
        duration: 1.2,
        stagger: 0.08,
        ease: "power2.inOut",
      });

      intro.to(
        backgroundIndex,
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
        },
        0.1,
      );

      intro.to(
        eyebrowLine,
        {
          scaleX: 1,
          duration: 0.5,
          ease: "power2.out",
        },
        0.18,
      );

      intro.to(
        eyebrow,
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        0.2,
      );

      intro.to(
        chapter,
        {
          opacity: 1,
          duration: 0.5,
        },
        0.28,
      );

      intro.to(
        chapterLine,
        {
          scaleX: 1,
          duration: 0.45,
        },
        0.32,
      );

      intro.to(
        divider,
        {
          scaleY: 1,
          duration: 0.8,
          ease: "power2.inOut",
        },
        0.3,
      );

      intro.to(
        titleLines,
        {
          yPercent: 0,
          duration: 0.85,
          stagger: 0.1,
          ease: "power4.out",
        },
        0.38,
      );

      intro.to(
        description,
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power3.out",
        },
        0.58,
      );

      // Resources
      const listTrigger = gsap.timeline({
        scrollTrigger: {
          trigger: resources[0],
          start: "top 82%",
          once: true,
        },
      });

      listTrigger.to(listDivider, {
        scaleY: 1,
        duration: 0.8,
        ease: "power2.inOut",
      });

      listTrigger.to(
        listLabel,
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "power3.out",
        },
        0.1,
      );

      listTrigger.to(
        resources,
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.1,
          ease: "power3.out",
        },
        0.16,
      );

      listTrigger.to(
        bottom,
        {
          opacity: 1,
          duration: 0.5,
        },
        0.45,
      );

      // Hover
      resources.forEach((resource) => {
        const line = resource.querySelector(".technical-resource-line");

        const index = resource.querySelector(".technical-resource-index");

        const title = resource.querySelector(".technical-resource-title");

        const onEnter = () => {
          gsap.to(line, {
            scaleX: 1,
            duration: 0.45,
            ease: "power3.out",
            transformOrigin: isRTL ? "right center" : "left center",
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
            transformOrigin: isRTL ? "left center" : "right center",
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

        resource.addEventListener("mouseenter", onEnter);
        resource.addEventListener("mouseleave", onLeave);
      });
    },
    {
      scope: sectionRef,
      dependencies: [isRTL],
    },
  );
}
