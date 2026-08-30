"use client";

import { useRef } from "react";
import Image from "next/image";
import { Mail } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function AboutCEO() {
  const locale = useLocale();
  const t = useTranslations("About.ceo");

  const isRTL = locale === "fa";
  const email = "Reza.adinelou@atiabzarpishro.com";

  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const eyebrowLineRef = useRef<HTMLSpanElement>(null);
  const portraitWrapperRef = useRef<HTMLDivElement>(null);
  const portraitMetaRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const identityRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const professionalMetaRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (
        !sectionRef.current ||
        !headingRef.current ||
        !eyebrowLineRef.current ||
        !portraitWrapperRef.current ||
        !portraitMetaRef.current ||
        !contentRef.current ||
        !identityRef.current ||
        !backgroundRef.current ||
        !professionalMetaRef.current ||
        !emailRef.current
      ) {
        return;
      }

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) {
        gsap.set(
          [
            headingRef.current.children,
            eyebrowLineRef.current,
            portraitWrapperRef.current,
            portraitMetaRef.current,
            identityRef.current,
            backgroundRef.current,
            professionalMetaRef.current,
            emailRef.current,
          ],
          {
            clearProps: "all",
          },
        );

        return;
      }

      const headingChildren = Array.from(headingRef.current.children);

      gsap.set(eyebrowLineRef.current, {
        scaleX: 0,
        transformOrigin: isRTL ? "right center" : "left center",
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 76%",
          once: true,
        },
      });

      timeline
        .to(eyebrowLineRef.current, {
          scaleX: 1,
          duration: 0.8,
          ease: "power4.out",
        })
        .fromTo(
          headingChildren,
          {
            opacity: 0,
            y: 24,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .fromTo(
          portraitWrapperRef.current,
          {
            opacity: 0,
            x: isRTL ? 40 : -40,
            clipPath: isRTL ? "inset(0% 10% 0% 0%)" : "inset(0% 0% 0% 10%)",
          },
          {
            opacity: 1,
            x: 0,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1,
            ease: "power4.out",
          },
          "-=0.35",
        )
        .fromTo(
          portraitMetaRef.current,
          {
            opacity: 0,
            y: 14,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.45",
        )
        .fromTo(
          identityRef.current,
          {
            opacity: 0,
            x: isRTL ? -32 : 32,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.85,
            ease: "power4.out",
          },
          "-=0.7",
        )
        .fromTo(
          backgroundRef.current,
          {
            opacity: 0,
            y: 24,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.55",
        )
        .fromTo(
          professionalMetaRef.current.children,
          {
            opacity: 0,
            y: 18,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .fromTo(
          emailRef.current,
          {
            opacity: 0,
            y: 16,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: "power3.out",
          },
          "-=0.4",
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
      className="border-border bg-secondary-bg border-t"
    >
      <div className="w90 py-14 sm:py-18 lg:py-20">
        <div
          ref={headingRef}
          className="mb-8 flex items-center gap-3 sm:mb-9 sm:gap-4 xl:mb-10"
        >
          <span
            ref={eyebrowLineRef}
            className="bg-custom-primary h-px w-9 shrink-0 sm:w-10 xl:w-12"
          />

          <span className="text-custom-primary text-xs font-medium tracking-[0.12em] sm:text-sm sm:tracking-[0.14em]">
            {t("eyebrow")}
          </span>
        </div>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:gap-12 xl:gap-16">
          <div>
            <div
              ref={portraitWrapperRef}
              className="border-border mx-auto w-full max-w-[410px] overflow-hidden border lg:mx-0"
            >
              <Image
                src="/about/ceo/ceo2.jpg"
                alt={t("name")}
                width={538}
                height={670}
                sizes="(max-width: 1024px) 90vw, 410px"
                className="h-auto w-full"
              />
            </div>

            <div
              ref={portraitMetaRef}
              className="border-border mx-auto flex max-w-[410px] items-center justify-between border-b py-3.5 lg:mx-0 xl:py-4"
            >
              <span className="text-muted-foreground text-xs font-medium tracking-wider sm:text-sm">
                ATI ABZAR PISHRO
              </span>

              <span className="text-custom-primary text-xs font-medium sm:text-sm">
                CEO
              </span>
            </div>
          </div>

          <div ref={contentRef}>
            <div
              ref={identityRef}
              className="border-border border-b pb-5 xl:pb-6"
            >
              <span className="text-custom-primary text-xs font-medium sm:text-sm">
                {t("position")}
              </span>

              <h2 className="text-foreground mt-2.5 max-w-4xl text-[26px] leading-[1.15] font-semibold sm:text-[29px] xl:mt-3 xl:text-[32px] xl:leading-[1.12]">
                {t("name")}
              </h2>
            </div>

            <div
              ref={backgroundRef}
              className="border-border border-b py-5 xl:py-6"
            >
              <h3 className="text-foreground text-lg font-semibold xl:text-[20px]">
                {t("backgroundTitle")}
              </h3>

              <p className="text-muted-foreground mt-4 max-w-4xl  text-[15px] leading-8 text-justify sm:text-base xl:mt-5 xl:text-[17px] xl:leading-9">
                {t("background")}
              </p>
            </div>

            <div
              ref={professionalMetaRef}
              className="border-border grid grid-cols-1 border-b sm:grid-cols-2"
            >
              <div className="border-border border-b py-5 sm:border-e sm:border-b-0 sm:pe-6 xl:py-6 xl:pe-8">
                <span className="text-muted-foreground block text-xs font-medium tracking-wider sm:text-sm">
                  {t("educationLabel")}
                </span>

                <p className="text-foreground mt-2 text-[15px] font-medium sm:text-base xl:mt-2.5 xl:text-[17px]">
                  {t("education")}
                </p>
              </div>

              <div className="py-5 sm:ps-6 xl:py-6 xl:ps-8">
                <span className="text-muted-foreground block text-xs font-medium tracking-wider sm:text-sm">
                  {t("roleLabel")}
                </span>

                <p className="text-foreground mt-2 text-[15px] font-medium sm:text-base xl:mt-2.5 xl:text-[17px]">
                  {t("role")}
                </p>
              </div>
            </div>

            <div ref={emailRef} className="pt-6 xl:pt-7">
              <a
                href={`mailto:${email}`}
                className="group/email inline-flex max-w-full items-center gap-3 sm:gap-4"
              >
                <span className="border-border group-hover/email:border-custom-primary group-hover/email:text-custom-primary flex size-10 shrink-0 items-center justify-center border transition-colors duration-300 sm:size-11">
                  <Mail size={19} strokeWidth={1.8} />
                </span>

                <div className="min-w-0">
                  <span className="text-muted-foreground block text-xs font-medium tracking-wider sm:text-sm">
                    {t("emailLabel")}
                  </span>

                  <span
                    dir="ltr"
                    className="text-foreground group-hover/email:text-custom-primary mt-1 block text-sm font-medium break-all transition-colors duration-300 sm:text-base"
                  >
                    {email}
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
