"use client";

import { useEffect, useRef } from "react";
import { useLocale, useTranslations } from "next-intl";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import FooterColumn from "./FooterColumn";
import FooterContact from "./FooterContact";
import { footerNavigation } from "./footer-navigation.data";

gsap.registerPlugin(ScrollTrigger);

export default function FooterMain() {
  const locale = useLocale();
  const t = useTranslations("Footer");

  const isRTL = locale === "fa";

  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return;

    const ctx = gsap.context(() => {
      const columns = contentRef.current!.children;

      gsap.from(columns, {
        opacity: 0,
        y: 35,
        duration: 0.8,
        stagger: 0.14,
        ease: "power3.out",

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      dir={isRTL ? "rtl" : "ltr"}
      className="border-footer-border border-b"
    >
      <div
        ref={contentRef}
        className="mx-auto grid grid-cols-1 gap-y-12 px-6 py-16 sm:px-8 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[0.9fr_1fr_1.5fr] lg:gap-x-16 lg:px-12 xl:px-16 2xl:px-20 2xl:py-20"
      >
        {/* Pages */}
        <FooterColumn
          title={t("columns.pages")}
          type="pages"
          items={footerNavigation.pages}
        />

        {/* Partners */}
        <FooterColumn
          title={t("columns.partners")}
          type="partners"
          items={footerNavigation.partners}
        />

        {/* Contact */}
        <FooterContact />
      </div>
    </section>
  );
}
