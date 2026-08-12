"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type PageItem = {
  key: string;
  href: string;
};

type Props = {
  title: string;
  type: "pages" | "partners";
  items: readonly PageItem[] | readonly string[];
};

export default function FooterColumn({ title, type, items }: Props) {
  const locale = useLocale();
  const t = useTranslations("Footer");

  const isRTL = locale === "fa";

  return (
    <div dir={isRTL ? "rtl" : "ltr"} className="min-w-0">
      {/* Heading */}
      <div className="mb-7">
        <h3 className="text-footer-foreground text-lg font-medium tracking-wide">
          {title}
        </h3>

        <div className="bg-footer-border mt-3 h-px w-8" />
      </div>

      {/* Items */}
      <ul className="space-y-4">
        {type === "pages"
          ? (items as readonly PageItem[]).map((item) => (
              <li key={item.key}>
                <Link
                  href={`/${locale}${item.href}`}
                  className={cn(
                    "group inline-flex items-center gap-x-2",
                    "text-footer-muted text-base",
                    "transition-colors duration-300",
                    "hover:text-custom-primary",
                  )}
                >
                  <span>{t(`pages.${item.key}`)}</span>

                  <ArrowUpRight
                    className={cn(
                      "size-4 opacity-0",
                      "transition-all duration-300",
                      "group-hover:translate-x-0.5",
                      "group-hover:-translate-y-0.5",
                      "group-hover:opacity-100",
                      isRTL && "rotate-[-90deg]",
                    )}
                    strokeWidth={1.5}
                  />
                </Link>
              </li>
            ))
          : (items as readonly string[]).map((partner) => (
              <li key={partner}>
                <span
                  className={cn(
                    "inline-block cursor-default",
                    "text-footer-muted text-base",
                    "transition-colors duration-300",
                    "hover:text-footer-foreground",
                  )}
                >
                  {partner}
                </span>
              </li>
            ))}
      </ul>
    </div>
  );
}
