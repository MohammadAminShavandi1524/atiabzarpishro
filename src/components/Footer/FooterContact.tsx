"use client";

import { Mail, MapPin, Phone, Printer } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { footerNavigation } from "./footer-navigation.data";

export default function FooterContact() {
  const locale = useLocale();
  const t = useTranslations("Footer");

  const isRTL = locale === "fa";

  const { contact } = footerNavigation;

  return (
    <div dir={isRTL ? "rtl" : "ltr"} className="min-w-0">
      <div className="mb-6 lg:mb-8">
        <h3 className="text-base font-medium tracking-wide text-footer-foreground sm:text-lg">
          {t("columns.contact")}
        </h3>

        <div className="mt-3 h-px w-full sm:w-10 bg-footer-border" />
      </div>

      <div className="space-y-5 lg:space-y-6">
        <div className="flex items-start gap-x-3 sm:gap-x-4">
          <MapPin
            className="mt-0.5 size-5 shrink-0 text-custom-primary sm:size-6"
            strokeWidth={1.5}
          />

          <div className="min-w-0">
            <span className="mb-1.5 block text-xs text-footer-muted sm:text-sm">
              {t("contact.addressLabel")}
            </span>

            <p
              dir={isRTL ? "rtl" : "ltr"}
              className="max-w-sm text-sm leading-7 text-footer-foreground sm:text-base"
            >
              {t("contact.address")}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-x-3 sm:gap-x-4">
          <Phone
            className="mt-0.5 size-5 shrink-0 text-custom-primary sm:size-6"
            strokeWidth={1.5}
          />

          <div className="min-w-0">
            <span className="mb-1.5 block text-xs text-footer-muted sm:text-sm">
              {t("contact.phoneLabel")}
            </span>

            <a
              href={`tel:${contact.phone}`}
              dir="ltr"
              className="inline-block text-sm text-footer-foreground transition-colors duration-300 hover:text-custom-primary sm:text-base"
            >
              {contact.phone}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-x-3 sm:gap-x-4">
          <Mail
            className="mt-0.5 size-5 shrink-0 text-custom-primary sm:size-6"
            strokeWidth={1.5}
          />

          <div className="min-w-0">
            <span className="mb-1.5 block text-xs text-footer-muted sm:text-sm">
              {t("contact.emailLabel")}
            </span>

            <a
              href={`mailto:${contact.email}`}
              dir="ltr"
              className="inline-block break-all text-sm text-footer-foreground transition-colors duration-300 hover:text-custom-primary sm:text-base"
            >
              {contact.email}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-x-3 sm:gap-x-4">
          <Printer
            className="mt-0.5 size-5 shrink-0 text-custom-primary sm:size-6"
            strokeWidth={1.5}
          />

          <div className="min-w-0">
            <span className="mb-1.5 block text-xs text-footer-muted sm:text-sm">
              {t("contact.faxLabel")}
            </span>

            <span
              dir="ltr"
              className="block text-sm text-footer-foreground sm:text-base"
            >
              {contact.fax}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}