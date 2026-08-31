"use client";

import Link from "next/link";

import { useLocale, useTranslations } from "next-intl";

export default function FooterBottom() {
  const locale = useLocale();
  const t = useTranslations("Footer");

  const isRTL = locale === "fa";

  return (
    <div dir={isRTL ? "rtl" : "ltr"} className="border-footer-border border-t">
      <div className="3xl:px-20 flex flex-col items-center gap-y-2.5 px-0 py-4 text-center sm:px-2 md:flex-row md:justify-between md:px-4 md:text-start lg:px-8 xl:px-12 2xl:px-16">
        <p className="text-footer-muted text-xs leading-6 sm:text-sm">
          {t("bottom.copyright")}
        </p>

        <p className="text-footer-muted flex flex-wrap items-center justify-center gap-x-1.5 text-xs leading-6 sm:text-sm md:justify-start">
          <span>{t("bottom.designedBy")}</span>

          <Link
            href="https://atihooshbonyan.com"
            target="_blank"
            rel="noopener noreferrer"
            dir="ltr"
            className="text-footer-foreground hover:text-custom-primary transition-colors duration-300"
          >
            {t("bottom.developer")}
          </Link>
        </p>
      </div>
    </div>
  );
}
