"use client";

import { useRef } from "react";
import { useLocale, useTranslations } from "next-intl";

import { englishToPersianNumber } from "@/lib/utils";

import ContactMethod from "./ContactMethod";
import { useContactCTAAnimation } from "./useContactCTAAnimation";

export default function ContactCTA() {
  const locale = useLocale();
  const t = useTranslations("Home.contactCTA");

  const isRTL = locale === "fa";

  const sectionRef = useRef<HTMLElement>(null);

  useContactCTAAnimation({
    sectionRef,
    isRTL,
  });

  return (
    <section
      ref={sectionRef}
      dir={isRTL ? "rtl" : "ltr"}
      className="bg-background border-border relative overflow-hidden border-t"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <span className="contact-bg-line bg-border absolute inset-y-0 start-[5%] w-px" />

        <span className="contact-bg-line bg-border absolute inset-y-0 end-[5%] w-px" />

        <div className="contact-bg-index text-foreground/[0.022] absolute end-[2%] top-1/2 -translate-y-1/2 text-[clamp(16rem,31vw,38rem)] leading-none font-semibold tracking-[-0.08em] select-none">
          {isRTL ? englishToPersianNumber("08") : "08"}
        </div>
      </div>

      <div className="w90 relative z-10">
        {/* Header */}
        <div className="contact-header border-border grid min-h-[430px] grid-cols-[0.42fr_1.58fr] border-b">
          {/* Left */}
          <div className="relative flex flex-col justify-between py-12 pt-16 pe-12">
            <span
              aria-hidden="true"
              className="contact-main-divider bg-border absolute inset-y-0 end-0 w-px"
            />

            <div className="contact-eyebrow flex items-center gap-4">
              <span className="contact-eyebrow-line bg-custom-primary block h-px w-10" />

              <span className="text-muted-foreground text-sm font-medium tracking-[0.08em]">
                {t("eyebrow")}
              </span>
            </div>

            <div
              lang="en"
              className="contact-chapter text-muted-foreground flex items-center gap-3 text-[10px] tracking-[0.14em]"
            >
              <span>ATI / 08</span>

              <span className="contact-chapter-line bg-border block h-px w-8" />

              <span>CONTACT</span>
            </div>
          </div>

          {/* Intro */}
          <div className="flex items-end ps-[7vw] pb-14  pt-16">
            <div className="max-w-[950px]">
              <div className="overflow-hidden">
                <h2 className="contact-title-line text-foreground text-[clamp(2.8rem,4.7vw,5.8rem)] font-semibold ltr:leading-[0.98] ltr:tracking-[-0.045em] rtl:leading-[1.2]">
                  {t("titleLine1")}
                </h2>
              </div>

              <div className="mt-1 overflow-hidden">
                <h2 className="contact-title-line text-foreground text-[clamp(2.8rem,4.7vw,5.8rem)] font-semibold ltr:leading-[0.98] ltr:tracking-[-0.045em] rtl:leading-[1.2]">
                  {t("titleLine2")}
                </h2>
              </div>

              <div className="mt-1 overflow-hidden">
                <h2 className="contact-title-line text-custom-primary text-[clamp(2.8rem,4.7vw,5.8rem)] font-semibold ltr:leading-[0.98] ltr:tracking-[-0.045em] rtl:leading-[1.2]">
                  {t("titleLine3")}
                </h2>
              </div>

              <p className="contact-description text-muted-foreground mt-8 max-w-[680px] text-[15px] leading-8">
                {t("description")}
              </p>
            </div>
          </div>
        </div>

        {/* Contact methods */}
        <div className="grid grid-cols-[0.42fr_1.58fr]">
          {/* Side */}
          <div className="relative py-10 pe-12">
            <span
              aria-hidden="true"
              className="contact-methods-divider bg-border absolute inset-y-0 end-0 w-px"
            />

            <div className="contact-side-copy">
              <span
                lang="en"
                dir="ltr"
                className="text-custom-primary text-[10px] tracking-[0.14em]"
              >
                02 / CHANNELS
              </span>

              <p className="text-muted-foreground mt-4 max-w-[260px] text-justify text-[13px] leading-7">
                {t("sideDescription")}
              </p>
            </div>
          </div>

          {/* Methods */}
          <div className="ps-[7vw]">
            <ContactMethod
              index="01"
              eyebrow={t("methods.email.eyebrow")}
              title={t("methods.email.title")}
              description={t("methods.email.description")}
              href="mailto:info@atiabzar.com"
              isRTL={isRTL}
              external
            />

            <ContactMethod
              index="02"
              eyebrow={t("methods.contact.eyebrow")}
              title={t("methods.contact.title")}
              description={t("methods.contact.description")}
              href={`/${locale}/contact-us`}
              isRTL={isRTL}
            />
          </div>
        </div>

        {/* Bottom */}
        <div className="contact-bottom border-border grid min-h-[130px] grid-cols-[0.42fr_1.58fr] border-t">
          <div className="relative flex items-center pe-12">
            <span
              aria-hidden="true"
              className="bg-border absolute inset-y-0 end-0 w-px"
            />

            <span
              lang="en"
              dir="ltr"
              className="text-muted-foreground text-[12px] tracking-[0.12em]"
            >
              08 / 08
            </span>
          </div>

          <div className="flex items-center justify-between ps-[7vw]">
            <span className="text-muted-foreground text-[12px] tracking-[0.08em]">
              {t("bottomLabel")}
            </span>

            <span
              lang="en"
              dir="ltr"
              className="text-muted-foreground text-[11px] tracking-[0.14em]"
            >
              ATI ABZAR PISHRO / ALL TOGETHER TO IMPROVE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
