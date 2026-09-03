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

      const isBelowLg = window.matchMedia("(max-width: 63.999rem)").matches;

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
          y: isBelowLg ? 24 : 32,
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
        isBelowLg
          ? {
              opacity: 0,
              y: 24,
            }
          : {
              opacity: 0,
              x: isRTL ? -35 : 35,
            },
        isBelowLg
          ? {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power4.out",
            }
          : {
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
        isBelowLg
          ? {
              opacity: 0,
              y: 24,
            }
          : {
              opacity: 0,
              x: isRTL ? 35 : -35,
            },
        isBelowLg
          ? {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: contentRef.current,
                start: "top 82%",
                once: true,
              },
            }
          : {
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
              start: isBelowLg ? "top 86%" : "top 80%",
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
          y: isBelowLg ? 22 : 28,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: isBelowLg ? 0.06 : 0.09,
          ease: "power3.out",
          scrollTrigger: {
            trigger: listRef.current,
            start: isBelowLg ? "top 84%" : "top 76%",
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
    <div
      ref={rootRef}
      dir={isRTL ? "rtl" : "ltr"}
      className="bg-background"
    >
      {/* FAQ HERO */}
      <section className="bg-secondary-bg border-border border-b">
        <div className="w90 py-11 sm:py-14 md:py-16 lg:py-[72px] xl:py-20">
          <div className="grid grid-cols-1 gap-9 md:gap-11 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-10 xl:grid-cols-[1.35fr_0.65fr] xl:gap-14 2xl:grid-cols-[1.4fr_0.6fr] 2xl:gap-16">
            {/* Intro */}
            <div ref={heroIntroRef} className="min-w-0 max-w-4xl">
              <div className="mb-4 flex items-center gap-3 sm:mb-5 sm:gap-4 2xl:mb-6">
                <span
                  ref={heroLineRef}
                  className="bg-custom-primary h-px w-9 shrink-0 sm:w-10 xl:w-11 2xl:w-12"
                />

                <span className="text-custom-primary text-[11px] font-medium tracking-[0.12em] xss:text-xs sm:text-[13px] xl:text-sm xl:tracking-[0.14em]">
                  {t("eyebrow")}
                </span>
              </div>

              <h1 className="text-foreground max-w-4xl text-[30px] leading-[1.2] font-semibold xss:text-[32px] sm:text-[36px] sm:leading-[1.16] md:text-[40px] lg:text-[40px] xl:text-[44px] 2xl:text-[46px] 2xl:leading-[1.12]">
                {t("title")}
              </h1>

              <p className="text-muted-foreground mt-5 max-w-3xl text-justify text-sm leading-7 sm:mt-6 sm:text-[15px] sm:leading-7.5 md:max-w-2xl lg:max-w-3xl lg:text-[15px] xl:mt-7 xl:text-base xl:leading-8">
                {t("description")}
              </p>
            </div>

            {/* Industrial Detail */}
            <div
              ref={heroDetailRef}
              className="border-border border-t pt-6 lg:border-t-0 lg:border-s lg:pt-0 lg:ps-6 xl:ps-8 2xl:ps-9"
            >
              <div className="text-custom-primary text-xs font-medium tracking-[0.12em] sm:text-[13px] xl:text-sm xl:tracking-[0.14em]">
                {t("companyName")}
              </div>

              <div className="text-foreground mt-3 text-lg font-semibold sm:text-xl lg:text-lg xl:mt-4 xl:text-xl">
                {t("tagline")}
              </div>

              <div className="border-border mt-6 border-t pt-5 lg:mt-7 lg:pt-5 xl:mt-8 2xl:mt-9 2xl:pt-6">
                <span className="text-muted-foreground text-xs tracking-wider sm:text-[13px] xl:text-sm">
                  {t("shortLabel")} /{" "}
                  {String(faqItems.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ CONTENT */}
      <section
        ref={contentRef}
        className="w90 py-14 sm:py-16 md:py-20 lg:py-20 xl:py-[88px] 2xl:py-24"
      >
        <div className="grid grid-cols-1 items-start gap-12 md:gap-14 lg:grid-cols-[0.9fr_1.6fr] lg:gap-10 xl:grid-cols-[1fr_1.6fr] xl:gap-16 2xl:gap-20">
          {/* Sticky Intro */}
          <aside className="relative min-w-0 self-stretch">
            <div
              ref={stickyIntroRef}
              className="pb-0 lg:sticky lg:top-24 lg:pb-10 xl:top-26 2xl:pb-12"
            >
              {/* Section Index */}
              <div className="mb-4 flex items-center gap-3 sm:mb-5 xl:mb-6">
                <span className="text-custom-primary text-xs font-medium sm:text-[13px] xl:text-sm">
                  01
                </span>

                <span className="bg-border h-px w-8 sm:w-9 2xl:w-10" />

                <span className="text-muted-foreground text-xs font-medium tracking-wider sm:text-[13px] xl:text-sm">
                  {t("sectionLabel")}
                </span>
              </div>

              {/* Section Title */}
              <h2 className="text-foreground max-w-xl text-[27px] leading-[1.25] font-semibold xss:text-[28px] sm:text-[30px] md:text-[31px] lg:text-[28px] lg:leading-[1.22] xl:text-[30px] 2xl:text-[2rem] 2xl:leading-[1.2]">
                {t("sectionTitle")}
              </h2>

              {/* Section Description */}
              <p className="text-muted-foreground mt-5 max-w-xl text-justify text-sm leading-7 sm:mt-6 sm:text-[15px] sm:leading-7.5 lg:mt-6 lg:text-sm xl:mt-7 xl:pe-3 xl:text-[15px] 2xl:pe-5 2xl:text-base 2xl:leading-8">
                {t("sectionDescription")}
              </p>

              {/* Contact CTA */}
              <a
                href="mailto:info@Atiabzarpishro.com"
                className="group/contact mt-7 inline-flex items-center gap-3 sm:mt-8 sm:gap-4 lg:mt-8 xl:mt-9 2xl:mt-10"
              >
                <span className="text-foreground group-hover/contact:text-custom-primary text-sm font-medium transition-colors duration-300 sm:text-[15px] 2xl:text-base">
                  {t("contact")}
                </span>

                <span className="border-border group-hover/contact:border-custom-primary group-hover/contact:text-custom-primary flex size-9 shrink-0 items-center justify-center border transition-colors duration-300 sm:size-10">
                  <ArrowIcon className="size-4 2xl:size-4.5" />
                </span>
              </a>
            </div>
          </aside>

          {/* FAQ List */}
          <div ref={listRef} className="min-w-0">
            {/* List Header */}
            <div
              ref={listHeaderRef}
              className="flex items-center justify-between pb-4 sm:pb-5 xl:pb-6"
            >
              <span className="text-muted-foreground text-xs font-medium tracking-wider sm:text-[13px] xl:text-sm">
                {t("listLabel")}
              </span>

              <span className="text-muted-foreground text-xs sm:text-[13px] xl:text-sm">
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