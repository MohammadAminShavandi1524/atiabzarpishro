"use client";

import { useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { Boxes, ChevronDown } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { cn } from "@/lib/utils";

import { ScrollArea } from "../ui/scroll-area";

import type { ProductBrand } from "./products.data";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface ProductsAsideProps {
  brands: ProductBrand[];
  activeBrand?: string;
  productCounts: Record<string, number>;
}

export default function ProductsAside({
  brands,
  activeBrand,
  productCounts,
}: ProductsAsideProps) {
  const locale = useLocale();
  const t = useTranslations("Products");

  const isRTL = locale === "fa";

  const [mobileOpen, setMobileOpen] = useState(false);

  const asideRef = useRef<HTMLElement>(null);

  const totalProducts = Object.values(productCounts).reduce(
    (sum, count) => sum + count,
    0,
  );

  const activeBrandItem = brands.find((brand) => brand.slug === activeBrand);

  const activeCount = activeBrandItem
    ? (productCounts[activeBrandItem.slug] ?? 0)
    : totalProducts;

  useGSAP(
    () => {
      if (!asideRef.current) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) return;

      const isBelowLg = window.matchMedia("(max-width: 63.999rem)").matches;

      gsap.fromTo(
        asideRef.current,
        isBelowLg
          ? {
              opacity: 0,
              y: 22,
            }
          : {
              opacity: 0,
              x: isRTL ? 24 : -24,
            },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: asideRef.current,
            start: "top 86%",
            once: true,
          },
        },
      );
    },
    {
      scope: asideRef,
      dependencies: [isRTL],
      revertOnUpdate: true,
    },
  );

  return (
    <aside
      ref={asideRef}
      className="min-w-0 self-start lg:sticky lg:top-12 lg:w-[250px] lg:shrink-0 xl:w-[270px] 2xl:w-[290px]"
    >
      {/* Mobile / Tablet */}
      <div className="border-border-secondary bg-background overflow-hidden border lg:hidden">
        {/* Header */}
        <div className="border-border-secondary bg-card-secondary flex items-center justify-between border-b px-4 py-3.5 sm:px-5 sm:py-4">
          <span className="text-custom-primary text-[11px] font-medium tracking-[0.12em] sm:text-[12px] sm:tracking-[0.14em]">
            {t("aside.title")}
          </span>

          <span className="text-muted-foreground font-mono text-[11px] sm:text-[12px]">
            {brands.length}
          </span>
        </div>

        {/* Selector */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-controls="products-mobile-brands"
          className="hover:bg-custom-primary/[0.025] flex min-h-[68px] w-full cursor-pointer items-center gap-3 px-4 py-3 text-start transition-colors duration-200 sm:px-5"
        >
          {/* Current Icon / Logo */}
          {activeBrandItem ? (
            <div className="relative size-10 shrink-0">
              <Image
                src={activeBrandItem.image}
                alt={activeBrandItem.name_en}
                fill
                sizes="40px"
                className="object-contain"
              />
            </div>
          ) : (
            <div className="flex size-10 shrink-0 items-center justify-center">
              <Boxes className="text-custom-primary size-6" strokeWidth={1.6} />
            </div>
          )}

          {/* Current Selection */}
          <div className="min-w-0 flex-1">
            <span className="text-foreground block truncate text-sm font-medium">
              {activeBrandItem
                ? activeBrandItem.name_en
                : t("aside.allProducts")}
            </span>

            <span className="text-muted-foreground mt-1 block text-[11px] sm:text-xs">
              {activeCount} {t("overview.products")}
            </span>
          </div>

          <ChevronDown
            className={cn(
              "text-muted-foreground size-5 shrink-0 transition-transform duration-300",
              mobileOpen && "text-custom-primary rotate-180",
            )}
            strokeWidth={1.7}
          />
        </button>

        {/* Dropdown */}
        <div
          id="products-mobile-brands"
          className={cn(
            "grid transition-[grid-template-rows] duration-300 ease-in-out",
            mobileOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          )}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="border-border-secondary border-t">
              <ScrollArea
                dir={isRTL ? "rtl" : "ltr"}
                className="h-[320px]"
                scrollBarClassName="me-0"
                lockWheel
              >
                {/* All Products */}
                <Link
                  href={`/${locale}/products`}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "border-border-secondary group relative flex min-h-[62px] items-center gap-3 border-b px-4 py-2.5 sm:px-5",
                    "transition-colors duration-200",
                    "hover:bg-custom-primary/[0.04]",
                    !activeBrand && "bg-custom-primary/[0.055]",
                  )}
                >
                  <div className="flex size-10 shrink-0 items-center justify-center">
                    <Boxes
                      className={cn(
                        "text-muted-foreground size-5.5 transition-colors duration-200",
                        !activeBrand && "text-custom-primary",
                      )}
                      strokeWidth={1.6}
                    />
                  </div>

                  <span
                    className={cn(
                      "text-foreground min-w-0 flex-1 truncate text-sm font-medium transition-colors duration-200",
                      "group-hover:text-custom-primary",
                      !activeBrand && "text-custom-primary",
                    )}
                  >
                    {t("aside.allProducts")}
                  </span>

                  <span className="text-muted-foreground shrink-0 font-mono text-xs">
                    {totalProducts}
                  </span>

                  <span
                    className={cn(
                      "bg-custom-primary absolute inset-y-0 start-0 w-[2px] scale-y-0 transition-transform duration-200",
                      !activeBrand && "scale-y-100",
                    )}
                  />
                </Link>

                {/* Brands */}
                {brands.map((brand) => {
                  const active = activeBrand === brand.slug;

                  return (
                    <Link
                      key={brand.id}
                      href={`/${locale}/products?brand=${brand.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "border-border-secondary group relative flex min-h-[62px] items-center gap-3 border-b px-4 py-2.5 last:border-b-0 sm:px-5",
                        "transition-colors duration-200",
                        "hover:bg-custom-primary/[0.04]",
                        active && "bg-custom-primary/[0.055]",
                      )}
                    >
                      {/* Logo */}
                      <div className="relative flex size-10 shrink-0 items-center justify-center">
                        <div className="relative h-9 w-10">
                          <Image
                            src={brand.image}
                            alt={brand.name_en}
                            fill
                            sizes="40px"
                            className="object-contain"
                          />
                        </div>
                      </div>

                      {/* Name */}
                      <span
                        className={cn(
                          "text-foreground min-w-0 flex-1 truncate text-sm font-medium transition-colors duration-200",
                          "group-hover:text-custom-primary",
                          active && "text-custom-primary",
                        )}
                      >
                        {brand.name_en}
                      </span>

                      {/* Count */}
                      <span className="text-muted-foreground shrink-0 font-mono text-xs">
                        {productCounts[brand.slug] ?? 0}
                      </span>

                      {/* Active Line */}
                      <span
                        className={cn(
                          "bg-custom-primary absolute inset-y-0 start-0 w-[2px] scale-y-0 transition-transform duration-200",
                          active && "scale-y-100",
                        )}
                      />
                    </Link>
                  );
                })}
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="border-border-secondary bg-background hidden max-h-[calc(100vh-80px)] flex-col overflow-hidden border lg:flex">
        {/* Header */}
        <div className="border-border-secondary bg-card-secondary flex shrink-0 items-center justify-between border-b px-4 py-5 xl:px-5 xl:ps-6 2xl:ps-6.5">
          <span className="text-custom-primary text-[11px] font-medium tracking-[0.12em] xl:text-[12px] xl:tracking-[0.14em]">
            {t("aside.title")}
          </span>

          <span className="text-muted-foreground font-mono text-[11px] xl:text-[12px]">
            {brands.length}
          </span>
        </div>

        <ScrollArea
          dir={isRTL ? "rtl" : "ltr"}
          className="h-[650px] xl:h-[680px] 2xl:h-[700px]"
          scrollBarClassName="me-0"
          lockWheel
        >
          {/* All Products */}
          <Link
            href={`/${locale}/products`}
            className={cn(
              "border-border-secondary group relative flex min-h-[64px] shrink-0 items-center gap-3 border-b py-2.5 ps-3 pe-4 xl:ps-4 xl:pe-5",
              "transition-colors duration-200",
              "hover:bg-custom-primary/[0.04]",
              !activeBrand && "bg-custom-primary/[0.055]",
            )}
          >
            <div className="flex h-9 w-11 shrink-0 items-center justify-center xl:w-13 xl:pe-1">
              <Boxes
                strokeWidth={1.6}
                className={cn(
                  "text-muted-foreground size-5.5 transition-colors duration-200 xl:size-6",
                  !activeBrand && "text-custom-primary",
                )}
              />
            </div>

            <span
              className={cn(
                "text-foreground min-w-0 flex-1 truncate text-[13px] font-medium transition-colors duration-200 xl:text-sm",
                "group-hover:text-custom-primary",
                !activeBrand && "text-custom-primary",
              )}
            >
              {t("aside.allProducts")}
            </span>

            <span className="text-muted-foreground shrink-0 font-mono text-[11px] xl:text-xs">
              {totalProducts}
            </span>

            <span
              className={cn(
                "bg-custom-primary absolute inset-y-0 start-0 w-[2px] scale-y-0 transition-transform duration-200",
                "group-hover:scale-y-100",
                !activeBrand && "scale-y-100",
              )}
            />
          </Link>

          {/* Brands */}
          <div>
            {brands.map((brand) => {
              const active = activeBrand === brand.slug;

              return (
                <Link
                  key={brand.id}
                  href={`/${locale}/products?brand=${brand.slug}`}
                  className={cn(
                    "border-border-secondary group relative flex min-h-[64px] items-center gap-3 border-b py-2.5 ps-2.5 pe-4 last:border-b-0 xl:ps-3 xl:pe-5",
                    "transition-colors duration-200",
                    "hover:bg-custom-primary/[0.04]",
                    active && "bg-custom-primary/[0.055]",
                  )}
                >
                  {/* Logo */}
                  <div className="relative flex h-10 w-12 shrink-0 items-center justify-center overflow-hidden xl:w-14">
                    <div className="relative h-9 w-10 xl:h-10 xl:w-12">
                      <Image
                        src={brand.image}
                        alt={brand.name_en}
                        fill
                        sizes="48px"
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Name */}
                  <span
                    className={cn(
                      "text-foreground min-w-0 flex-1 truncate text-[13px] font-medium transition-colors duration-200 xl:text-sm",
                      "group-hover:text-custom-primary",
                      active && "text-custom-primary",
                    )}
                  >
                    {brand.name_en}
                  </span>

                  {/* Count */}
                  <span className="text-muted-foreground shrink-0 font-mono text-[11px] xl:text-xs">
                    {productCounts[brand.slug] ?? 0}
                  </span>

                  {/* Active Line */}
                  <span
                    className={cn(
                      "bg-custom-primary absolute inset-y-0 start-0 w-[2px] scale-y-0 transition-transform duration-200",
                      "group-hover:scale-y-100",
                      active && "scale-y-100",
                    )}
                  />
                </Link>
              );
            })}
          </div>
        </ScrollArea>
      </div>
    </aside>
  );
}
