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
  const heroLineRef = useRef<HTMLSpanElement>(null);
  const heroMetaRef = useRef<HTMLDivElement>(null);

  const contactSectionRef = useRef<HTMLElement>(null);
  const contactIntroRef = useRef<HTMLDivElement>(null);
  const contactDetailsRef = useRef<HTMLDivElement>(null);
  const formWrapperRef = useRef<HTMLDivElement>(null);

  const locationSectionRef = useRef<HTMLElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (
        !heroIntroRef.current ||
        !heroMetaRef.current ||
        !contactSectionRef.current ||
        !contactIntroRef.current ||
        !contactDetailsRef.current ||
        !formWrapperRef.current ||
        !locationSectionRef.current ||
        !mapRef.current
      ) {
        return;
      }

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) {
        gsap.set(
          [
            heroIntroRef.current.children,
            heroMetaRef.current,
            contactIntroRef.current.children,
            contactDetailsRef.current.children,
            formWrapperRef.current,
            mapRef.current,
          ],
          {
            clearProps: "all",
          },
        );

        return;
      }

      // Hero
      const heroChildren = Array.from(heroIntroRef.current.children);

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
          duration: 0.85,
          ease: "power4.out",
        });
      }

      heroTimeline.fromTo(
        heroChildren,
        {
          opacity: 0,
          y: 34,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.13,
        },
        "-=0.55",
      );

      heroTimeline.fromTo(
        heroMetaRef.current,
        {
          opacity: 0,
          x: isRTL ? -42 : 42,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.95,
          ease: "power4.out",
        },
        "-=0.65",
      );

      // Contact intro
      const contactIntroChildren = Array.from(contactIntroRef.current.children);

      gsap.fromTo(
        contactIntroChildren,
        {
          opacity: 0,
          x: isRTL ? 42 : -42,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.85,
          stagger: 0.11,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contactSectionRef.current,
            start: "top 78%",
            once: true,
          },
        },
      );

      // Contact details
      gsap.fromTo(
        contactDetailsRef.current.children,
        {
          opacity: 0,
          y: 24,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contactDetailsRef.current,
            start: "top 82%",
            once: true,
          },
        },
      );

      // Form column
      gsap.fromTo(
        formWrapperRef.current,
        {
          opacity: 0,
          x: isRTL ? -45 : 45,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.95,
          ease: "power4.out",
          scrollTrigger: {
            trigger: contactSectionRef.current,
            start: "top 76%",
            once: true,
          },
        },
      );

      // Map
      gsap.fromTo(
        mapRef.current,
        {
          opacity: 0,
          y: 32,
          clipPath: "inset(12% 0% 0% 0%)",
        },
        {
          opacity: 1,
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: locationSectionRef.current,
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
        <div className="w90 py-20">
          <div className="grid grid-cols-[1.35fr_0.65fr] items-end gap-20">
            {/* Hero Intro */}
            <div ref={heroIntroRef} className="max-w-5xl">
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

              <p className="text-muted-foreground mt-7 max-w-3xl text-base leading-8">
                {t("description")}
              </p>
            </div>

            {/* Technical Meta */}
            <div ref={heroMetaRef} className="border-border border-s ps-9">
              <div className="text-custom-primary text-sm font-medium tracking-[0.14em]">
                {t("companyName")}
              </div>

              <div className="text-foreground mt-4 text-xl font-semibold">
                {t("tagline")}
              </div>

              <div className="border-border mt-9 border-t pt-6">
                <span className="text-muted-foreground text-sm tracking-wider">
                  {t("heroMeta")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

    
      {/* Contact Form Section */}
      <section ref={contactSectionRef} className="w90 py-24">
        <div className="grid grid-cols-[1fr_1.6fr] items-start gap-20">
          {/* Contact Information */}
          <aside className="self-start">
            <div ref={contactIntroRef}>
              {/* Section Label */}
              <div className="mb-6 flex items-center justify-between">
                <span className="text-muted-foreground text-sm font-medium tracking-wider">
                  {t("formSection.contactLabel")}
                </span>
              </div>

              {/* Contact Details */}
              <div ref={contactDetailsRef} className="border-border border-t">
                {/* Email */}
                <a
                  href="mailto:info@Atiabzarpishro.com"
                  className="group/contact border-border flex items-start gap-5 border-b py-6"
                >
                  <span className="border-border group-hover/contact:border-custom-primary group-hover/contact:text-custom-primary flex size-11 shrink-0 items-center justify-center border transition-colors duration-300">
                    <Mail size={20} />
                  </span>

                  <div>
                    <span className="text-muted-foreground text-sm">
                      {t("details.email")}
                    </span>

                    <p className="text-foreground group-hover/contact:text-custom-primary mt-1 text-base transition-colors duration-300">
                      info@Atiabzarpishro.com
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+982144455407"
                  className="group/contact border-border flex items-start gap-5 border-b py-6"
                >
                  <span className="border-border group-hover/contact:border-custom-primary group-hover/contact:text-custom-primary flex size-11 shrink-0 items-center justify-center border transition-colors duration-300">
                    <Phone size={20} />
                  </span>

                  <div>
                    <span className="text-muted-foreground text-sm">
                      {t("details.phone")}
                    </span>

                    <p
                      dir="ltr"
                      className="text-foreground group-hover/contact:text-custom-primary mt-1 text-base transition-colors duration-300"
                    >
                      +98-21 444 55 407-9
                    </p>
                  </div>
                </a>

                {/* Address */}
                <div className="border-border flex items-start gap-5 border-b py-6">
                  <span className="border-border flex size-11 shrink-0 items-center justify-center border">
                    <MapPin size={20} />
                  </span>

                  <div>
                    <span className="text-muted-foreground text-sm">
                      {t("details.address")}
                    </span>

                    <p className="text-foreground mt-1 max-w-md text-justify text-base leading-8">
                      {t("details.addressValue")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Form */}
          <div ref={formWrapperRef}>
            <div className="mb-6 flex items-center justify-between">
              <span className="text-muted-foreground text-sm font-medium tracking-wider">
                {t("formSection.formLabel")}
              </span>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Location */}
      <section ref={locationSectionRef} className="border-border border-t">
        <div className="w90 py-12">
          {/* Map */}
          <div
            ref={mapRef}
            className="border-border relative h-[430px] overflow-hidden border"
          >
            <iframe
              src="https://www.google.com/maps?q=35.755164,51.333777&z=15&output=embed"
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
