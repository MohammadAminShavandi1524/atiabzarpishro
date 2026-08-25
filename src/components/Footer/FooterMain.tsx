"use client";

import { useLocale, useTranslations } from "next-intl";

import FooterColumn from "./FooterColumn";
import FooterContact from "./FooterContact";

import { footerNavigation } from "./footer-navigation.data";

export default function FooterMain() {
  const locale = useLocale();
  const t = useTranslations("Footer");

  const isRTL = locale === "fa";

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="border-footer-border border-b"
    >
      <div className="mx-auto grid grid-cols-1 gap-y-12 px-6 py-10 sm:px-8 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[0.9fr_1fr_1.5fr] lg:gap-x-16 lg:px-12 xl:px-16 2xl:px-20 2xl:py-20">
        {/* Pages */}
        <FooterColumn
          title={t("columns.pages")}
          type="pages"
          items={footerNavigation.pages}
        />

        {/* Partners */}
        <FooterColumn
          title={t("columns.partners")}
          type="partners"
          items={footerNavigation.partners}
        />

        {/* Contact */}
        <FooterContact />
      </div>
    </section>
  );
}