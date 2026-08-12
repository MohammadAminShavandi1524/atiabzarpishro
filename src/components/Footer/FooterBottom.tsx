"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export default function FooterBottom() {
  const locale = useLocale();
  const t = useTranslations("Footer");

  const isRTL = locale === "fa";

  return (
    <div dir={isRTL ? "rtl" : "ltr"} className="border-footer-border border-t">
      <div className="mx-auto flex flex-col items-center gap-y-3 px-8 py-8 text-center md:flex-row md:justify-between md:text-start">
        {/* Copyright */}
        <p className="text-footer-muted text-base">{t("bottom.copyright")}</p>

        {/* Credit */}
        <p className="text-footer-muted flex items-center gap-x-1.5 text-base">
          <span className="">{t("bottom.designedBy")}</span>
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
