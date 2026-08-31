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
      <div className="3xl:grid-cols-[0.9fr_1.3fr_1.5fr] 3xl:px-20 grid grid-cols-1 gap-y-10 px-0 py-10 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12 sm:px-2 md:gap-x-14 md:px-4 lg:grid-cols-[0.9fr_1.15fr_1.5fr] lg:gap-x-12 lg:px-8 lg:py-12 xl:grid-cols-[0.9fr_1.25fr_1.5fr] xl:gap-x-16 xl:px-12 2xl:px-16 2xl:pt-14 2xl:pb-10">
        <FooterColumn
          title={t("columns.pages")}
          type="pages"
          items={footerNavigation.pages}
        />

        <FooterColumn
          title={t("columns.partners")}
          type="partners"
          items={footerNavigation.partners}
        />

        <div className="sm:col-span-2 lg:col-span-1">
          <FooterContact />
        </div>
      </div>
    </section>
  );
}
