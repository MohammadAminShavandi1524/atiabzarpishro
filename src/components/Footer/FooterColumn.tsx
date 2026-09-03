"use client";

import { useState } from "react";

import Link from "next/link";

import { useLocale, useTranslations } from "next-intl";

import { ArrowUpRight, ChevronDown } from "lucide-react";

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

  const [isOpen, setIsOpen] = useState(false);

  const partners = type === "partners" ? (items as readonly string[]) : [];

  const firstPartnerColumn = partners.slice(0, 10);
  const secondPartnerColumn = partners.slice(10);

  const hasSecondPartnerColumn = secondPartnerColumn.length > 0;

  return (
    <div dir={isRTL ? "rtl" : "ltr"} className="min-w-0">
      <div className="border-footer-border border-b sm:border-b-0 ">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          className="flex w-full cursor-pointer items-center justify-between py-4 text-start sm:pointer-events-none sm:cursor-default sm:py-0"
        >
          <div>
            <h3 className="text-footer-foreground text-base font-medium tracking-wide sm:text-lg">
              {title}
            </h3>

            <div className="bg-footer-border mt-3 hidden h-px w-8 sm:block" />
          </div>

          <ChevronDown
            className={cn(
              "text-footer-muted size-5 transition-transform duration-300 sm:hidden",
              isOpen && "rotate-180",
            )}
            strokeWidth={1.6}
          />
        </button>
      </div>

      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-in-out sm:mt-6 sm:grid-rows-[1fr] lg:mt-7",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <div className="pt-5 sm:pt-0">
            {type === "pages" && (
              <ul className="space-y-3.5 lg:space-y-4">
                {(items as readonly PageItem[]).map((item) => (
                  <li key={item.key}>
                    <Link
                      href={`/${locale}${item.href}`}
                      className="group text-footer-muted hover:text-custom-primary inline-flex items-center gap-x-2 text-sm transition-colors duration-300 sm:text-base"
                    >
                      <span>{t(`pages.${item.key}`)}</span>

                      <ArrowUpRight
                        className={cn(
                          "size-4 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100",
                          isRTL && "rotate-[-90deg]",
                        )}
                        strokeWidth={1.5}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            )}

            {type === "partners" && (
              <div
                className={cn(
                  "grid gap-x-8",
                  hasSecondPartnerColumn ? "grid-cols-2" : "grid-cols-1",
                )}
              >
                <ul className="space-y-3.5 lg:space-y-4">
                  {firstPartnerColumn.map((partner) => (
                    <li key={partner}>
                      <span className="text-footer-muted hover:text-footer-foreground inline-block cursor-default text-sm transition-colors duration-300 sm:text-base">
                        {partner}
                      </span>
                    </li>
                  ))}
                </ul>

                {hasSecondPartnerColumn && (
                  <ul className="space-y-3.5 lg:space-y-4">
                    {secondPartnerColumn.map((partner) => (
                      <li key={partner}>
                        <span className="text-footer-muted hover:text-footer-foreground inline-block cursor-default text-sm transition-colors duration-300 sm:text-base">
                          {partner}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}