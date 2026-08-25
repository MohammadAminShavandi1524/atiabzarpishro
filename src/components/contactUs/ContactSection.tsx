"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import ContactForm from "./ContactForm";

export default function ContactSection() {
  const locale = useLocale();
  const t = useTranslations("Contact");

  const isRTL = locale === "fa";

  return (
    <div dir={isRTL ? "rtl" : "ltr"} className="bg-background">
      {/* Contact Hero */}
      <section className="bg-secondary-bg border-border border-b">
        <div className="w90 py-20">
          <div className="grid grid-cols-[1.35fr_0.65fr] items-end gap-20">
            {/* Hero Intro */}
            <div className="max-w-5xl">
              <div className="mb-6 flex items-center gap-4">
                <span className="bg-custom-primary h-px w-12 shrink-0" />

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
            <div className="border-border border-s ps-9">
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
      <section className="w90 py-24">
        <div className="grid grid-cols-[1fr_1.6fr] items-start gap-20">
          {/* Contact Information */}
          <aside className="self-start">
            <div>
              {/* Section Label */}
              <div className="mb-6 flex items-center justify-between">
                <span className="text-muted-foreground text-sm font-medium tracking-wider">
                  {t("formSection.contactLabel")}
                </span>
              </div>

              {/* Contact Details */}
              <div className="border-border border-t">
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
          <div>
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
      <section className="border-border border-t">
        <div className="w90 py-12">
          {/* Map */}
          <div className="border-border relative h-[430px] overflow-hidden border">
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
