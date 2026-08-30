"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { ArrowLeft, ArrowRight, Mail, Phone } from "lucide-react";

import { useLocale, useTranslations } from "next-intl";

import useEmblaCarousel from "embla-carousel-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { teamMembers } from "./about-team.data";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function AboutTeam() {
  const locale = useLocale();
  const t = useTranslations("About.team");

  const isRTL = locale === "fa";

  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const eyebrowLineRef = useRef<HTMLSpanElement>(null);
  const carouselWrapperRef = useRef<HTMLDivElement>(null);
  const cardsTrackRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<HTMLDivElement>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    direction: isRTL ? "rtl" : "ltr",
    skipSnaps: false,
    dragFree: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;

    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const handleLeft = () => {
    if (!emblaApi) return;

    const currentIndex = emblaApi.selectedScrollSnap();
    const lastIndex = teamMembers.length - 1;

    emblaApi.scrollTo(currentIndex === 0 ? lastIndex : currentIndex - 1);
  };

  const handleRight = () => {
    if (!emblaApi) return;

    const currentIndex = emblaApi.selectedScrollSnap();
    const lastIndex = teamMembers.length - 1;

    emblaApi.scrollTo(currentIndex === lastIndex ? 0 : currentIndex + 1);
  };

  useGSAP(
    () => {
      if (
        !sectionRef.current ||
        !headingRef.current ||
        !eyebrowLineRef.current ||
        !carouselWrapperRef.current ||
        !cardsTrackRef.current ||
        !controlsRef.current
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
            carouselWrapperRef.current,
            cardsTrackRef.current.children,
            controlsRef.current,
          ],
          {
            clearProps: "all",
          },
        );

        return;
      }

      const headingChildren = Array.from(headingRef.current.children);
      const cards = Array.from(cardsTrackRef.current.children);

      gsap.set(eyebrowLineRef.current, {
        scaleX: 0,
        transformOrigin: isRTL ? "right center" : "left center",
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
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
            y: 28,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .fromTo(
          carouselWrapperRef.current,
          {
            opacity: 0,
            y: 28,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .fromTo(
          cards,
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
          "-=0.45",
        )
        .fromTo(
          controlsRef.current,
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
          "-=0.35",
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
      className="border-t border-border py-14 sm:py-18 lg:py-20 xl:py-24"
    >
      <div className="w90">
        <div className="mb-9 flex flex-col items-start gap-6 sm:mb-11 sm:flex-row sm:items-end sm:justify-between sm:gap-10 xl:mb-14 xl:gap-16">
          <div ref={headingRef} className="max-w-4xl">
            <div className="mb-4 flex items-center gap-3 sm:mb-5 sm:gap-4 xl:mb-6">
              <span
                ref={eyebrowLineRef}
                className="h-px w-9 shrink-0 bg-custom-primary sm:w-10 xl:w-12"
              />

              <span className="text-xs font-medium tracking-[0.12em] text-custom-primary sm:text-sm sm:tracking-[0.14em]">
                {t("eyebrow")}
              </span>
            </div>

            <h2 className="max-w-4xl text-[1.85rem] leading-[1.22] font-semibold text-foreground sm:text-[2.1rem] lg:text-[2.3rem] xl:text-[2.5rem] xl:leading-[1.18]">
              {t("title")}
            </h2>
          </div>

          <div className="flex shrink-0 items-end gap-2">
            <span className="text-xl font-semibold text-custom-primary sm:text-2xl">
              {String(selectedIndex + 1).padStart(2, "0")}
            </span>

            <span className="mb-1 text-xs text-muted-foreground sm:text-sm">
              /
            </span>

            <span className="mb-1 text-xs text-muted-foreground sm:text-sm">
              {String(teamMembers.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        <div ref={carouselWrapperRef} className="overflow-hidden">
          <div ref={emblaRef}>
            <div ref={cardsTrackRef} className="flex">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="min-w-0 flex-[0_0_100%] pe-3 sm:flex-[0_0_50%] sm:pe-4 mlg:flex-[0_0_33.333333%] xl:flex-[0_0_25%]"
                >
                  <article className="group/member relative min-h-[340px] border border-border bg-background sm:min-h-[360px] xl:min-h-[380px]">
                    <span
                      className={[
                        "pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-custom-primary",
                        "scale-x-0 transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)]",
                        "group-hover/member:scale-x-100",
                        isRTL ? "origin-right" : "origin-left",
                      ].join(" ")}
                    />

                    <div className="flex min-h-[340px] flex-col p-5 sm:min-h-[360px] sm:p-5.5 xl:min-h-[380px] xl:p-6">
                      <div>
                        <h3 className="text-xl leading-tight font-semibold text-foreground transition-colors duration-300 group-hover/member:text-custom-primary sm:text-[22px] xl:text-2xl">
                          {t(`members.${member.key}.name`)}
                        </h3>

                        {t.has(`members.${member.key}.areas`) && (
                          <div className="mt-5 border-t border-border pt-5 xl:mt-7 xl:pt-6">
                            <span className="text-xs font-medium tracking-wider text-muted-foreground sm:text-sm">
                              {t("areasLabel")}
                            </span>

                            <p className="mt-2.5 text-[15px] leading-7 text-foreground sm:text-[16px] sm:leading-8 xl:mt-3">
                              {t(`members.${member.key}.areas`)}
                            </p>
                          </div>
                        )}
                      </div>

                      <div className="mt-auto border-t border-border pt-5 xl:pt-6">
                        <div className="flex flex-col gap-2.5 xl:gap-3">
                          {member.email && (
                            <a
                              href={`mailto:${member.email}`}
                              className="group/email inline-flex max-w-full items-center gap-2.5 sm:gap-3"
                            >
                              <span className="flex size-10 shrink-0 items-center justify-center border border-border text-muted-foreground transition-colors duration-300 group-hover/email:border-custom-primary group-hover/email:text-custom-primary xl:size-11">
                                <Mail
                                  className="size-[18px] xl:size-5"
                                  strokeWidth={1.8}
                                />
                              </span>

                              <span
                                dir="ltr"
                                className="truncate text-xs text-muted-foreground transition-colors duration-300 group-hover/email:text-custom-primary sm:text-sm"
                              >
                                {member.email}
                              </span>
                            </a>
                          )}

                          {member.phone && (
                            <a
                              href={`tel:${member.phone}`}
                              className="group/phone inline-flex max-w-full items-center gap-2.5 sm:gap-3"
                            >
                              <span className="flex size-10 shrink-0 items-center justify-center border border-border text-muted-foreground transition-colors duration-300 group-hover/phone:border-custom-primary group-hover/phone:text-custom-primary xl:size-11">
                                <Phone
                                  className="size-[18px] xl:size-5"
                                  strokeWidth={1.8}
                                />
                              </span>

                              <span
                                dir="ltr"
                                className="text-xs text-muted-foreground transition-colors duration-300 group-hover/phone:text-custom-primary sm:text-sm"
                              >
                                {member.phone}
                              </span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          ref={controlsRef}
          className="mt-8 flex flex-col gap-6 sm:mt-10 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              type="button"
              onClick={handleLeft}
              aria-label="Scroll team carousel left"
              className="flex size-11 cursor-pointer items-center justify-center border border-border text-foreground transition-colors duration-300 hover:border-custom-primary hover:text-custom-primary xl:size-12"
            >
              <ArrowLeft
                className="size-5 transition-transform duration-300 rtl:rotate-180"
                strokeWidth={1.8}
              />
            </button>

            <button
              type="button"
              onClick={handleRight}
              aria-label="Scroll team carousel right"
              className="flex size-11 cursor-pointer items-center justify-center border border-border text-foreground transition-colors duration-300 hover:border-custom-primary hover:text-custom-primary xl:size-12"
            >
              <ArrowRight
                className="size-5 transition-transform duration-300 rtl:rotate-180"
                strokeWidth={1.8}
              />
            </button>
          </div>

          <div className="flex w-full items-center gap-3 sm:w-64 sm:gap-4">
            <span className="text-xs text-muted-foreground">01</span>

            <div className="relative h-px flex-1 overflow-hidden bg-border">
              <span
                className="absolute inset-y-0 start-0 bg-custom-primary transition-[width] duration-500 ease-[cubic-bezier(0.65,0,0.35,1)]"
                style={{
                  width: `${((selectedIndex + 1) / teamMembers.length) * 100}%`,
                }}
              />
            </div>

            <span className="text-xs text-muted-foreground">
              {String(teamMembers.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}