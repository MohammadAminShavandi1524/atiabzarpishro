"use client";

import { useRef } from "react";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const GetNewArticle = () => {
  const t = useTranslations("News.GetNewArticle");
  const locale = useLocale();

  const isRTL = locale === "fa";

  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      if (!contentRef.current || !contactRef.current) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) return;

      const isBelowLg = window.matchMedia("(max-width: 63.999rem)").matches;

      const contentChildren = Array.from(contentRef.current.children);

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      if (lineRef.current) {
        gsap.set(lineRef.current, {
          scaleX: 0,
          transformOrigin: isRTL ? "right center" : "left center",
        });

        timeline.to(lineRef.current, {
          scaleX: 1,
          duration: 0.7,
          ease: "power4.out",
        });
      }

      timeline.fromTo(
        contentChildren,
        {
          opacity: 0,
          y: 24,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.11,
          ease: "power3.out",
        },
        "-=0.45",
      );

      timeline.fromTo(
        contactRef.current,
        isBelowLg
          ? {
              opacity: 0,
              y: 22,
            }
          : {
              opacity: 0,
              x: isRTL ? -30 : 30,
            },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.55",
      );
    },
    {
      scope: sectionRef,
      dependencies: [isRTL],
      revertOnUpdate: true,
    },
  );

  return (
    <section
      ref={sectionRef}
      dir={isRTL ? "rtl" : "ltr"}
      className="border-border border-t"
    >
      <div className="w90 py-14 sm:py-16 md:py-20 lg:py-20 xl:py-[88px] 2xl:py-24">
        <div className="grid grid-cols-1 gap-10 md:gap-12 lg:grid-cols-[1fr_0.65fr] lg:items-end lg:gap-12 xl:gap-16 2xl:gap-20">
          {/* Content */}
          <div ref={contentRef} className="min-w-0">
            <div className="mb-4 flex items-center gap-3 sm:mb-5 sm:gap-4">
              <span
                ref={lineRef}
                className="bg-custom-primary h-px w-8 shrink-0 sm:w-9 2xl:w-10"
              />

              <span className="text-custom-primary text-xs font-medium tracking-[0.12em] sm:text-[13px] xl:text-sm xl:tracking-[0.14em]">
                {t("eyebrow")}
              </span>
            </div>

            <h2 className="text-foreground xss:text-[29px] max-w-3xl text-[27px] leading-[1.22] font-semibold sm:text-[32px] md:text-[34px] lg:text-[36px] xl:text-[38px] 2xl:text-[2.5rem] 2xl:leading-[1.18]">
              {t("title")}
            </h2>

            <p className="text-muted-foreground mt-5 max-w-2xl text-justify text-sm leading-7 sm:mt-6 sm:text-[15px] sm:leading-7.5 xl:text-base xl:leading-8">
              {t("description")}
            </p>
          </div>

          {/* Contact */}
          <div
            ref={contactRef}
            className="border-border border-t pt-6 lg:border-s lg:border-t-0 lg:ps-7 lg:pt-0 xl:ps-9 2xl:ps-10"
          >
            <span className="text-muted-foreground block text-xs font-medium tracking-wider sm:text-[13px] xl:text-sm">
              {t("emailLabel")}
            </span>

            <Link
              href="mailto:info@Atiabzarpishro.com"
              dir="ltr"
              className="text-foreground hover:text-custom-primary mt-3 inline-block text-base font-medium break-all transition-colors duration-300 sm:mt-4 sm:text-lg"
            >
              info@Atiabzarpishro.com
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetNewArticle;
