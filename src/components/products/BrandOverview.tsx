"use client";

import { Download, ExternalLink } from "lucide-react";

import { useLocale, useTranslations } from "next-intl";

import type { ProductBrand } from "./products.data";

interface BrandOverviewProps {
  brand?: ProductBrand;
  count: number;
}

export default function BrandOverview({
  brand,
  count,
}: BrandOverviewProps) {
  const locale = useLocale();
  const t = useTranslations("Products");

  const isRTL = locale === "fa";

  const description = brand
    ? isRTL
      ? brand.description_fa
      : brand.description_en
    : undefined;

  /*
   * --------------------------------------------------
   * All Products
   * --------------------------------------------------
   */

  if (!brand) {
    return (
      <div className="border-border mb-10 flex items-end justify-between border-b pb-8">
        <div>
          <h1 className="text-foreground mt-3 text-[42px] leading-tight font-semibold tracking-[-0.03em]">
            {t("overview.allProducts")}
          </h1>
        </div>

        <div className="flex items-baseline gap-1">
          <span
            dir="ltr"
            className="text-foreground text-[16px] leading-none font-semibold"
          >
            {String(count)}
          </span>

          <span className="text-muted-foreground text-sm">
            {t("overview.products")}
          </span>
        </div>
      </div>
    );
  }

  /*
   * --------------------------------------------------
   * Selected Brand
   * --------------------------------------------------
   */

  return (
    <div className="border-border mb-10 border-b pb-10">
      <div className="flex items-end justify-between gap-16">
        {/* Brand Information */}
        <div className="max-w-[950px]">
          {/* <span className="text-custom-primary text-xs font-medium tracking-[0.14em]">
            {t("overview.brand")}
          </span> */}

          {/* Brand Name */}
          <h1
            lang="en"
            dir="ltr"
            className="text-foreground mt-3 text-[46px] leading-tight font-semibold tracking-[-0.035em]"
          >
            {brand.name_en}
          </h1>

          {/* Description */}
          {description && (
            <p className="text-muted-foreground mt-6 max-w-[900px] text-[16px] leading-8">
              {description}
            </p>
          )}

          {/* Actions */}
          <div className="mt-7 flex items-center gap-3">
            {brand.website && (
              <a
                href={brand.website}
                target="_blank"
                rel="noopener noreferrer"
                className="border-border text-foreground hover:border-custom-primary hover:text-custom-primary inline-flex h-11 items-center gap-3 border px-5 text-sm font-medium transition-colors duration-300"
              >
                <span>{t("overview.website")}</span>

                <ExternalLink size={15} strokeWidth={1.7} />
              </a>
            )}

            {brand.catalog && (
              <a
                href={brand.catalog}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="bg-custom-primary inline-flex h-11 items-center gap-3 px-5 text-sm font-medium text-white"
              >
                <span>{t("overview.catalog")}</span>

                <Download size={15} strokeWidth={1.7} />
              </a>
            )}
          </div>
        </div>

        {/* Product Count */}
        <div className="mb-1 flex shrink-0 items-baseline gap-2">
          <span
            dir="ltr"
            className="text-foreground text-[16px] leading-none font-semibold"
          >
            {String(count)}
          </span>

          <span className="text-muted-foreground text-sm">
            {t("overview.products")}
          </span>
        </div>
      </div>
    </div>
  );
}