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
      {/* Heading */}
      <div className="mb-8">
        <h3 className="text-footer-foreground text-lg font-medium tracking-wide">
          {t("columns.contact")}
        </h3>

        <div className="bg-footer-border mt-3 h-px w-10" />
      </div>

      <div className="space-y-6">
        {/* Address */}
        <div className="flex items-start gap-x-4">
          <MapPin
            className="text-custom-primary mt-0.5 size-6 shrink-0"
            strokeWidth={1.5}
          />

          <div className="min-w-0">
            <span className="text-footer-muted mb-1.5 block text-sm">
              {t("contact.addressLabel")}
            </span>

            <p
              className="text-footer-foreground max-w-sm text-base leading-7"
              dir={isRTL ? "rtl" : "ltr"}
            >
              {t("contact.address")}
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-x-4">
          <Phone
            className="text-custom-primary mt-0.5 size-6 shrink-0"
            strokeWidth={1.5}
          />

          <div className="min-w-0">
            <span className="text-footer-muted mb-1.5 block text-sm">
              {t("contact.phoneLabel")}
            </span>

            <a
              href={`tel:${contact.phone}`}
              dir="ltr"
              className="text-footer-foreground hover:text-custom-primary inline-block text-base transition-colors duration-300"
            >
              {contact.phone}
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-x-4">
          <Mail
            className="text-custom-primary mt-0.5 size-6 shrink-0"
            strokeWidth={1.5}
          />

          <div className="min-w-0">
            <span className="text-footer-muted mb-1.5 block text-sm">
              {t("contact.emailLabel")}
            </span>

            <a
              href={`mailto:${contact.email}`}
              dir="ltr"
              className="text-footer-foreground hover:text-custom-primary inline-block text-base transition-colors duration-300"
            >
              {contact.email}
            </a>
          </div>
        </div>

        {/* Fax */}
        <div className="flex items-start gap-x-4">
          <Printer
            className="text-custom-primary mt-0.5 size-6 shrink-0"
            strokeWidth={1.5}
          />

          <div className="min-w-0">
            <span className="text-footer-muted mb-1.5 block text-sm">
              {t("contact.faxLabel")}
            </span>

            <span dir="ltr" className="text-footer-foreground block text-base">
              {contact.fax}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
