"use client";

import { useEffect, useRef } from "react";
import { useLocale } from "next-intl";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import FooterFeatureItem from "./FooterFeatureItem";
import { footerFeatures } from "./footer-features.data";

gsap.registerPlugin(ScrollTrigger);

export default function FooterFeatures() {
  const locale = useLocale();
  const isRTL = locale === "fa";

  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !itemsRef.current) return;

    const ctx = gsap.context(() => {
      const items = itemsRef.current!.children;

      gsap.from(items, {
        opacity: 0,
        x: isRTL ? 40 : -40,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isRTL]);

  return (
   
      <section
        ref={sectionRef}
        dir={isRTL ? "rtl" : "ltr"}
        className=" border-b-footer-border border-b"
      >
        <div
          ref={itemsRef}
          className="divide-footer-border grid grid-cols-1 divide-y md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4"
        >
          {footerFeatures.map((feature) => (
            <FooterFeatureItem key={feature.id} feature={feature} />
          ))}
        </div>
      </section>
   
  );
}
