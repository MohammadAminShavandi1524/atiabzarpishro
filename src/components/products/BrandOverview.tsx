"use client";

import { useEffect, useRef, useState } from "react";

import Link from "next/link";

import { Download, ExternalLink } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { getCatalogues } from "../catalogues/catalogues.api";

import type { CatalogueItem } from "../catalogues/catalogues.data";
import type { ProductBrand } from "./brands.types";

gsap.registerPlugin(useGSAP);

interface BrandOverviewProps {
  brand?: ProductBrand;
  count: number;
}

export default function BrandOverview({ brand, count }: BrandOverviewProps) {
  const locale = useLocale();
  const t = useTranslations("Products");

  const isRTL = locale === "fa";

  const rootRef = useRef<HTMLDivElement>(null);

  const [brandCatalogues, setBrandCatalogues] = useState<CatalogueItem[]>([]);

  const description = brand
    ? isRTL
      ? brand.description_fa
      : brand.description_en
    : undefined;

  useEffect(() => {
    if (!brand) {
      setBrandCatalogues([]);
      return;
    }

    const fetchBrandCatalogues = async () => {
      try {
        const catalogues = await getCatalogues();

        const filteredCatalogues = catalogues.filter(
          (catalogue) => catalogue.brand.id === brand.id,
        );

        setBrandCatalogues(filteredCatalogues);
      } catch (error) {
        console.error("FETCH BRAND CATALOGUES ERROR =>", error);
        setBrandCatalogues([]);
      }
    };

    fetchBrandCatalogues();
  }, [brand]);

  useGSAP(
    () => {
      if (!rootRef.current) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) return;

      const animatedElements = rootRef.current.querySelectorAll<HTMLElement>(
        "[data-overview-reveal]",
      );

      gsap.fromTo(
        animatedElements,
        {
          opacity: 0,
          y: 24,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
        },
      );
    },
    {
      scope: rootRef,
      dependencies: [brand?.id, isRTL],
      revertOnUpdate: true,
    },
  );

  if (!brand) {
    return (
      <div
        ref={rootRef}
        className="border-border mb-8 flex items-end justify-between gap-5 border-b pb-6 sm:mb-9 sm:pb-7 lg:mb-10 lg:pb-8"
      >
        <div data-overview-reveal className="min-w-0">
          <h1 className="text-foreground xss:text-[32px] text-[30px] leading-[1.2] font-semibold tracking-[-0.02em] sm:text-[36px] md:text-[38px] xl:text-[40px] 2xl:text-[42px] 2xl:leading-tight 2xl:tracking-[-0.03em]">
            {t("overview.allProducts")}
          </h1>
        </div>

        <div
          data-overview-reveal
          className="flex shrink-0 items-baseline gap-1.5"
        >
          <span
            dir="ltr"
            className="text-foreground text-sm leading-none font-semibold sm:text-[15px] 2xl:text-[16px]"
          >
            {count}
          </span>

          <span className="text-muted-foreground text-xs sm:text-[13px] 2xl:text-sm">
            {t("overview.products")}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={rootRef}
      className="border-border mb-8 border-b pb-8 sm:mb-9 sm:pb-9 lg:mb-10 lg:pb-10"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10 xl:gap-12 2xl:gap-16">
        {/* Brand Information */}
        <div className="max-w-[950px] min-w-0">
          {/* Brand Name */}
          <h1
            data-overview-reveal
            lang="en"
            className="text-foreground xss:text-[34px] text-[31px] leading-[1.15] font-semibold tracking-[-0.025em] sm:text-[38px] md:text-[40px] xl:text-[43px] 2xl:text-[46px] 2xl:leading-tight 2xl:tracking-[-0.035em]"
          >
            {brand.name_en}
          </h1>

          {/* Description */}
          {description && (
            <p
              data-overview-reveal
              className="text-muted-foreground mt-5 max-w-[900px] text-justify text-sm leading-7 sm:text-[15px] sm:leading-7.5 xl:mt-6 2xl:text-[16px] 2xl:leading-8"
            >
              {description}
            </p>
          )}

          {/* Actions */}
          <div
            data-overview-reveal
            className="xss:flex-row xss:items-center mt-6 flex flex-col gap-2.5 sm:gap-3 xl:mt-7"
          >
            {brand.url && (
              <a
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border-border text-foreground hover:border-custom-primary hover:text-custom-primary xss:w-auto inline-flex h-11 w-full items-center justify-center gap-3 border px-4 text-sm font-medium transition-colors duration-300 sm:px-5"
              >
                <span>{t("overview.website")}</span>

                <ExternalLink size={15} strokeWidth={1.7} />
              </a>
            )}

            {brandCatalogues.length === 1 && (
              <a
                href={brandCatalogues[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-custom-primary xss:w-auto inline-flex h-11 w-full items-center justify-center gap-3 px-4 text-sm font-medium text-white sm:px-5"
              >
                <span>{t("overview.catalog")}</span>

                <Download size={15} strokeWidth={1.7} />
              </a>
            )}

            {brandCatalogues.length > 1 && (
              <Link
                href={`/${locale}/catalogues?brand=${brand.id}`}
                className="bg-custom-primary xss:w-auto inline-flex h-11 w-full items-center justify-center gap-3 px-4 text-sm font-medium text-white sm:px-5"
              >
                <span>{t("overview.catalog")}</span>

                <Download size={15} strokeWidth={1.7} />
              </Link>
            )}
          </div>
        </div>

        {/* Product Count */}
        <div
          data-overview-reveal
          className="hidden shrink-0 items-baseline gap-2 lg:mb-1 lg:flex"
        >
          <span
            dir="ltr"
            className="text-foreground text-sm leading-none font-semibold sm:text-[15px] 2xl:text-[16px]"
          >
            {count}
          </span>

          <span className="text-muted-foreground text-xs sm:text-[13px] 2xl:text-sm">
            {t("overview.products")}
          </span>
        </div>
      </div>
    </div>
  );
}
