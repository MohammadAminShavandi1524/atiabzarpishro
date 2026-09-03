"use client";

import { useRef } from "react";

import { useLocale } from "next-intl";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import IranRepresentationsMap from "./IranRepresentationsMap";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function RepresentationsMapSection() {
  const locale = useLocale();

  const isRTL = locale === "fa";

  const sectionRef = useRef<HTMLElement>(null);
  const mapWrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!mapWrapperRef.current) {
        return;
      }

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) {
        return;
      }

      gsap.fromTo(
        mapWrapperRef.current,
        {
          opacity: 0,
          y: 28,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 82%",
            once: true,
          },
        },
      );
    },
    {
      scope: sectionRef,
    },
  );

  return (
    <section
      ref={sectionRef}
      dir={isRTL ? "rtl" : "ltr"}
      className="bg-background"
    >
      <div className="w90 py-8 sm:py-10 md:py-12 xl:py-14 2xl:py-16">
        <div ref={mapWrapperRef}>
          <IranRepresentationsMap isRTL={isRTL} />
        </div>
      </div>
    </section>
  );
}
