"use client";

import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import FAQItem from "./FAQItem";
import { faqItems } from "./faq.data";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function FAQSection() {
  const locale = useLocale();
  const t = useTranslations("FAQ");

  const isRTL = locale === "fa";
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const rootRef = useRef<HTMLDivElement>(null);

  const heroIntroRef = useRef<HTMLDivElement>(null);
  const heroDetailRef = useRef<HTMLDivElement>(null);
  const heroLineRef = useRef<HTMLSpanElement>(null);

  const contentRef = useRef<HTMLElement>(null);
  const stickyIntroRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const listHeaderRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (
        !heroIntroRef.current ||
        !heroDetailRef.current ||
        !contentRef.current ||
        !stickyIntroRef.current ||
        !listRef.current
      ) {
        return;
      }

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) {
        return;
      }

      const heroIntroChildren = Array.from(heroIntroRef.current.children);

      const heroTimeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      if (heroLineRef.current) {
        gsap.set(heroLineRef.current, {
          scaleX: 0,
          transformOrigin: isRTL ? "right center" : "left center",
        });

        heroTimeline.to(heroLineRef.current, {
          scaleX: 1,
          duration: 0.8,
          ease: "power4.out",
        });
      }

      heroTimeline.fromTo(
        heroIntroChildren,
        {
          opacity: 0,
          y: 32,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.12,
        },
        "-=0.55",
      );

      heroTimeline.fromTo(
        heroDetailRef.current,
        {
          opacity: 0,
          x: isRTL ? -35 : 35,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: "power4.out",
        },
        "-=0.65",
      );

      const stickyChildren = Array.from(stickyIntroRef.current.children);

      gsap.fromTo(
        stickyChildren,
        {
          opacity: 0,
          x: isRTL ? 35 : -35,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",

          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 78%",
            once: true,
          },
        },
      );

      if (listHeaderRef.current) {
        gsap.fromTo(
          listHeaderRef.current,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",

            scrollTrigger: {
              trigger: listRef.current,
              start: "top 80%",
              once: true,
            },
          },
        );
      }

      const faqItemElements = listRef.current.querySelectorAll(".faq-item");

      gsap.fromTo(
        faqItemElements,
        {
          opacity: 0,
          y: 28,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.09,
          ease: "power3.out",

          scrollTrigger: {
            trigger: listRef.current,
            start: "top 76%",
            once: true,
          },
        },
      );
    },
    {
      scope: rootRef,
      dependencies: [isRTL],
      revertOnUpdate: true,
    },
  );

  return (
    <div ref={rootRef} dir={isRTL ? "rtl" : "ltr"} className="bg-background">
      {/* FAQ HERO */}
      <section className="bg-secondary-bg border-border border-b ">
        <div className="w90 py-20">
          <div className="grid grid-cols-[1.4fr_0.6fr] items-end gap-16">
            {/* Intro */}
            <div ref={heroIntroRef} className="max-w-4xl">
              <div className="mb-6 flex items-center gap-4">
                <span
                  ref={heroLineRef}
                  className="bg-custom-primary h-px w-12 shrink-0"
                />

                <span className="text-custom-primary text-sm font-medium tracking-[0.14em]">
                  {t("eyebrow")}
                </span>
              </div>

              <h1 className="text-foreground max-w-4xl text-[46px] leading-[1.12] font-semibold">
                {t("title")}
              </h1>

              <p className="text-muted-foreground mt-7 max-w-3xl text-justify text-base leading-8">
                {t("description")}
              </p>
            </div>

            {/* Industrial Detail */}
            <div ref={heroDetailRef} className="border-border border-s ps-9">
              <div className="text-custom-primary text-sm font-medium tracking-[0.14em]">
                {t("companyName")}
              </div>

              <div className="text-foreground mt-4 text-xl font-semibold">
                {t("tagline")}
              </div>

              <div className="border-border mt-9 border-t pt-6">
                <span className="text-muted-foreground text-sm tracking-wider">
                  {t("shortLabel")} / {String(faqItems.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ CONTENT */}
      <section ref={contentRef} className="w90 py-24">
        <div className="grid grid-cols-[1fr_1.6fr] items-start gap-20">
          {/* Sticky Intro */}
          <aside className="relative self-stretch">
            <div ref={stickyIntroRef} className="sticky top-26 pb-12">
              {/* Section Index */}
              <div className="mb-6 flex items-center gap-3">
                <span className="text-custom-primary text-sm font-medium">
                  01
                </span>

                <span className="bg-border h-px w-10" />

                <span className="text-muted-foreground text-sm font-medium tracking-wider">
                  {t("sectionLabel")}
                </span>
              </div>

              {/* Section Title */}
              <h2 className="text-foreground max-w-xl text-[2rem] leading-[1.2] font-semibold">
                {t("sectionTitle")}
              </h2>

              {/* Section Description */}
              <p className="text-muted-foreground mt-7 max-w-xl pe-5 text-justify text-base leading-8">
                {t("sectionDescription")}
              </p>

              {/* Contact CTA */}
              <a
                href="mailto:info@Atiabzarpishro.com"
                className="group/contact mt-10 inline-flex items-center gap-4"
              >
                <span className="text-foreground group-hover/contact:text-custom-primary text-base font-medium transition-colors duration-300">
                  {t("contact")}
                </span>

                <span className="border-border group-hover/contact:border-custom-primary group-hover/contact:text-custom-primary flex size-10 items-center justify-center border transition-colors duration-300">
                  <ArrowIcon className="size-4.5 transition-transform duration-300" />
                </span>
              </a>
            </div>
          </aside>

          {/* FAQ List */}
          <div ref={listRef}>
            {/* List Header */}
            <div
              ref={listHeaderRef}
              className=" flex items-center justify-between  pb-6"
            >
              <span className="text-muted-foreground text-sm font-medium tracking-wider">
                {t("listLabel")}
              </span>

              <span className="text-muted-foreground text-sm">
                {String(faqItems.length).padStart(2, "0")}
              </span>
            </div>

            {/* FAQ Items */}
            <div className="relative">
              {/* First Item Top Boundary */}
              <span className="bg-border pointer-events-none absolute inset-x-0 top-0 h-px" />

              <span
                className={[
                  "bg-custom-primary pointer-events-none absolute inset-x-0 top-0 z-20 h-0.5",
                  "scale-x-0 transition-transform duration-700",
                  "ease-[cubic-bezier(0.65,0,0.35,1)]",
                  hoveredIndex === 0 && activeIndex !== 0 && "scale-x-100",
                  isRTL ? "origin-right" : "origin-left",
                ]
                  .filter(Boolean)
                  .join(" ")}
              />

              {faqItems.map((item, index) => (
                <FAQItem
                  key={item.key}
                  id={item.id}
                  index={index}
                  question={t(`items.${item.key}.question`)}
                  answer={t(`items.${item.key}.answer`)}
                  isOpen={activeIndex === index}
                  hoveredIndex={hoveredIndex}
                  onHoverChange={setHoveredIndex}
                  onToggle={() => {
                    setHoveredIndex(null);

                    setActiveIndex((current) =>
                      current === index ? null : index,
                    );
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
