"use client";

import { CircleHelp } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const FAQButton = () => {
  const locale = useLocale();
  const t = useTranslations("Header");

  return (
    <Link
      href={`/${locale}/faq`}
      className={[
        "group/faq inline-flex h-12 items-center justify-center gap-2.5",
        "border-custom-primary border",
        "bg-custom-primary px-5",
        "text-white",
        "transition-[background-color,border-color,box-shadow] duration-300",
        "hover:bg-custom-primary/90",
        "hover:shadow-[0_4px_18px_rgba(30,157,189,0.18)]",
        "focus-visible:outline-none",
        "focus-visible:ring-custom-primary/40 focus-visible:ring-2",
      ].join(" ")}
    >
      <CircleHelp
        strokeWidth={1.8}
        className="size-5.5 transition-colors duration-300"
      />

      <span className="text-lg font-medium">{t("faq")}</span>
    </Link>
  );
};

export default FAQButton;
