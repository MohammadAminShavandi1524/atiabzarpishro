"use client";

import type { RefObject } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface UseBlogInsightsAnimationProps {
  sectionRef: RefObject<HTMLElement | null>;
  isRTL: boolean;
}

export function useBlogInsightsAnimation({
  sectionRef,
  isRTL,
}: UseBlogInsightsAnimationProps) {
  useGSAP(
    () => {
      const section = sectionRef.current;

      if (!section) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) return;

      // Elements
      const backgroundLines = section.querySelectorAll(".blog-bg-line");

      const backgroundIndex = section.querySelector(".blog-bg-index");

      const eyebrow = section.querySelector(".blog-eyebrow");

      const eyebrowLine = section.querySelector(".blog-eyebrow-line");

      const chapter = section.querySelector(".blog-chapter");

      const chapterLine = section.querySelector(".blog-chapter-line");

      const divider = section.querySelector(".blog-main-divider");

      const titleLines = section.querySelectorAll(".blog-title-line");

      const description = section.querySelector(".blog-description");

      const featured = section.querySelector(".blog-featured");

      const featuredImage = section.querySelector(".blog-featured-image");

      const featuredMeta = section.querySelector(".blog-featured-meta");

      const featuredTitle = section.querySelector(".blog-featured-title");

      const featuredDescription = section.querySelector(
        ".blog-featured-description",
      );

      const cards = gsap.utils.toArray<HTMLElement>(
        section.querySelectorAll(".blog-card"),
      );

      const viewAll = section.querySelector(".blog-view-all");

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

      gsap.set(divider, {
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

      gsap.set(featured, {
        opacity: 0,
        y: 30,
      });

      gsap.set(featuredImage, {
        scale: 1.06,
      });

      gsap.set([featuredMeta, featuredTitle, featuredDescription], {
        opacity: 0,
        y: 18,
      });

      gsap.set(cards, {
        opacity: 0,
        y: 34,
      });

      gsap.set(viewAll, {
        opacity: 0,
        y: 12,
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
        divider,
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
          duration: 0.8,
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
          duration: 0.6,
          ease: "power3.out",
        },
        0.52,
      );

      // Featured
      const featuredTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".blog-featured-section",
          start: "top 78%",
          once: true,
        },
      });

      featuredTimeline.to(featured, {
        opacity: 1,
        y: 0,
        duration: 0.75,
        ease: "power3.out",
      });

      featuredTimeline.to(
        featuredImage,
        {
          scale: 1,
          duration: 1.1,
          ease: "power3.out",
        },
        0,
      );

      featuredTimeline.to(
        [featuredMeta, featuredTitle, featuredDescription],
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
        },
        0.18,
      );

      // Secondary
      const secondaryTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".blog-secondary",
          start: "top 80%",
          once: true,
        },
      });

      secondaryTimeline.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
      });

      secondaryTimeline.to(
        viewAll,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
        },
        0.3,
      );

      // Image hover
      const imageWrappers = section.querySelectorAll(
        ".blog-featured-image-wrap, .blog-card-image-wrap",
      );

      imageWrappers.forEach((wrapper) => {
        const image = wrapper.querySelector("img");

        if (!image) return;

        const onEnter = () => {
          gsap.to(image, {
            scale: 1.035,
            duration: 0.6,
            ease: "power3.out",
          });
        };

        const onLeave = () => {
          gsap.to(image, {
            scale: 1,
            duration: 0.6,
            ease: "power3.out",
          });
        };

        wrapper.addEventListener("mouseenter", onEnter);
        wrapper.addEventListener("mouseleave", onLeave);
      });
    },
    {
      scope: sectionRef,
      dependencies: [isRTL],
    },
  );
}
