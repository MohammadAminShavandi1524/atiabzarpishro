"use client";

import { useRef } from "react";

import { Mail, MapPin, Phone } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import ContactForm from "./ContactForm";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ContactSection() {
  const locale = useLocale();
  const t = useTranslations("Contact");

  const isRTL = locale === "fa";

  const rootRef = useRef<HTMLDivElement>(null);

  const heroIntroRef = useRef<HTMLDivElement>(null);
  const heroDetailRef = useRef<HTMLDivElement>(null);
  const heroLineRef = useRef<HTMLSpanElement>(null);

  const contactSectionRef = useRef<HTMLElement>(null);
  const contactInfoRef = useRef<HTMLElement>(null);
  const contactLabelRef = useRef<HTMLDivElement>(null);
  const contactDetailsRef = useRef<HTMLDivElement>(null);

  const formWrapperRef = useRef<HTMLDivElement>(null);
  const formLabelRef = useRef<HTMLDivElement>(null);

  const locationRef = useRef<HTMLElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (
        !heroIntroRef.current ||
        !heroDetailRef.current ||
        !contactSectionRef.current ||
        !contactInfoRef.current ||
        !contactDetailsRef.current ||
        !formWrapperRef.current ||
        !mapRef.current
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

      /* Hero */
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
              duration: 0.85,
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

      /* Contact Label */
      if (contactLabelRef.current) {
        gsap.fromTo(
          contactLabelRef.current,
          {
            opacity: 0,
            y: 18,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: contactInfoRef.current,
              start: "top 82%",
              once: true,
            },
          },
        );
      }

      /* Contact Items */
      const contactItems = Array.from(contactDetailsRef.current.children);

      gsap.fromTo(
        contactItems,
        isBelowLg
          ? {
              opacity: 0,
              y: 24,
            }
          : {
              opacity: 0,
              x: isRTL ? 28 : -28,
            },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.75,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contactDetailsRef.current,
            start: isBelowLg ? "top 84%" : "top 80%",
            once: true,
          },
        },
      );

      /* Form Label */
      if (formLabelRef.current) {
        gsap.fromTo(
          formLabelRef.current,
          {
            opacity: 0,
            y: 18,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: formWrapperRef.current,
              start: "top 82%",
              once: true,
            },
          },
        );
      }

      /* Map */
      gsap.fromTo(
        mapRef.current,
        {
          opacity: 0,
          y: 30,
          scale: 0.985,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: locationRef.current ?? mapRef.current,
            start: "top 82%",
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
      {/* Contact Hero */}
      <section className="bg-secondary-bg border-border border-b">
        <div className="w90 py-11 sm:py-14 md:py-16 lg:py-[72px] xl:py-[76px] 2xl:py-20">
          <div className="grid grid-cols-1 gap-9 md:gap-11 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-10 xl:grid-cols-[1.35fr_0.65fr] xl:gap-14 2xl:gap-20">
            {/* Hero Intro */}
            <div ref={heroIntroRef} className="max-w-5xl min-w-0">
              <div className="mb-4 flex items-center gap-3 sm:mb-5 sm:gap-4 2xl:mb-6">
                <span
                  ref={heroLineRef}
                  className="bg-custom-primary h-px w-9 shrink-0 sm:w-10 xl:w-11 2xl:w-12"
                />

                <span className="text-custom-primary xss:text-xs text-[11px] font-medium tracking-[0.12em] sm:text-[13px] xl:text-sm xl:tracking-[0.14em]">
                  {t("eyebrow")}
                </span>
              </div>

              <h1 className="text-foreground xss:text-[32px] max-w-4xl text-[30px] leading-[1.2] font-semibold sm:text-[36px] sm:leading-[1.16] md:text-[40px] lg:text-[40px] xl:text-[44px] 2xl:text-[46px] 2xl:leading-[1.12]">
                {t("title")}
              </h1>

              <p className="text-muted-foreground mt-5 max-w-3xl text-justify text-sm leading-7 sm:mt-6 sm:text-[15px] sm:leading-7.5 lg:text-[15px] xl:mt-7 xl:text-base xl:leading-8">
                {t("description")}
              </p>
            </div>

            {/* Technical Meta */}
            <div
              ref={heroDetailRef}
              className="border-border border-t pt-6 lg:border-s lg:border-t-0 lg:ps-6 lg:pt-0 xl:ps-8 2xl:ps-9"
            >
              <div className="text-custom-primary text-xs font-medium tracking-[0.12em] sm:text-[13px] xl:text-sm xl:tracking-[0.14em]">
                {t("companyName")}
              </div>

              <div className="text-foreground mt-3 text-lg font-semibold sm:text-xl lg:text-lg xl:mt-4 xl:text-xl">
                {t("tagline")}
              </div>

              <div className="border-border mt-6 border-t pt-5 lg:mt-7 lg:pt-5 xl:mt-8 2xl:mt-9 2xl:pt-6">
                <span className="text-muted-foreground text-xs tracking-wider sm:text-[13px] xl:text-sm">
                  {t("heroMeta")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        ref={contactSectionRef}
        className="w90 py-14 sm:py-16 md:py-20 lg:py-20 xl:py-[88px] 2xl:py-24"
      >
        <div className="grid grid-cols-1 items-start gap-12 md:gap-14 lg:grid-cols-[0.9fr_1.6fr] lg:gap-10 xl:grid-cols-[1fr_1.6fr] xl:gap-16 2xl:gap-20">
          {/* Contact Information */}
          <aside ref={contactInfoRef} className="min-w-0 self-start">
            <div>
              <div
                ref={contactLabelRef}
                className="mb-4 flex items-center justify-between sm:mb-5 2xl:mb-6"
              >
                <span className="text-muted-foreground text-xs font-medium tracking-wider sm:text-[13px] xl:text-sm">
                  {t("formSection.contactLabel")}
                </span>
              </div>

              <div ref={contactDetailsRef} className="border-border border-t">
                {/* Phone */}
                <a
                  href="tel:+982144455407"
                  className="group/contact border-border flex items-start gap-4 border-b py-5 sm:gap-5 sm:py-6"
                >
                  <span className="border-border group-hover/contact:border-custom-primary group-hover/contact:text-custom-primary flex size-10 shrink-0 items-center justify-center border transition-colors duration-300 sm:size-11">
                    <Phone
                      className="size-[18px] sm:size-5"
                      strokeWidth={1.8}
                    />
                  </span>

                  <div className="min-w-0">
                    <span className="text-muted-foreground text-xs sm:text-sm">
                      {t("details.phone")}
                    </span>

                    <p
                      dir="ltr"
                      className="text-foreground group-hover/contact:text-custom-primary mt-1 text-sm transition-colors duration-300 sm:text-base"
                    >
                      +98-21 444 55 407-9
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:info@Atiabzarpishro.com"
                  className="group/contact border-border flex items-start gap-4 border-b py-5 sm:gap-5 sm:py-6"
                >
                  <span className="border-border group-hover/contact:border-custom-primary group-hover/contact:text-custom-primary flex size-10 shrink-0 items-center justify-center border transition-colors duration-300 sm:size-11">
                    <Mail className="size-[18px] sm:size-5" strokeWidth={1.8} />
                  </span>

                  <div className="min-w-0">
                    <span className="text-muted-foreground text-xs sm:text-sm">
                      {t("details.email")}
                    </span>

                    <p className="text-foreground group-hover/contact:text-custom-primary mt-1 text-sm break-all transition-colors duration-300 sm:text-base">
                      info@Atiabzarpishro.com
                    </p>
                  </div>
                </a>

                {/* Address */}
                <div className="border-border flex items-start gap-4 border-b py-5 sm:gap-5 sm:py-6">
                  <span className="border-border flex size-10 shrink-0 items-center justify-center border sm:size-11">
                    <MapPin
                      className="size-[18px] sm:size-5"
                      strokeWidth={1.8}
                    />
                  </span>

                  <div className="min-w-0">
                    <span className="text-muted-foreground text-xs sm:text-sm">
                      {t("details.address")}
                    </span>

                    <p className="text-foreground mt-1 max-w-md text-justify text-sm leading-7 sm:text-[15px] sm:leading-7.5 xl:text-base xl:leading-8">
                      {t("details.addressValue")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Form */}
          <div ref={formWrapperRef} className="min-w-0">
            <div
              ref={formLabelRef}
              className="mb-4 flex items-center justify-between sm:mb-5 2xl:mb-6"
            >
              <span className="text-muted-foreground text-xs font-medium tracking-wider sm:text-[13px] xl:text-sm">
                {t("formSection.formLabel")}
              </span>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Location */}
      <section
        ref={locationRef}
        className="border-border overflow-hidden border-t"
      >
        <div className="w90 py-8 sm:py-10 xl:py-12">
          <div
            ref={mapRef}
            className="border-border xss:h-[320px] relative h-[300px] overflow-hidden border sm:h-[350px] md:h-[380px] lg:h-[400px] xl:h-[420px] 2xl:h-[430px]"
          >
            <iframe
              src="https://www.google.com/maps?q=35.754243,51.332173&z=15&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title={t("location.mapTitle")}
              className="border-0"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
