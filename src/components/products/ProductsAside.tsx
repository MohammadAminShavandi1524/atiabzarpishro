"use client";

import Image from "next/image";
import Link from "next/link";

import { useLocale, useTranslations } from "next-intl";

import { Boxes } from "lucide-react";

import { cn } from "@/lib/utils";

import { ScrollArea } from "../ui/scroll-area";

import type { ProductBrand } from "./products.data";

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

  const totalProducts = Object.values(productCounts).reduce(
    (sum, count) => sum + count,
    0,
  );

  return (
    <aside className="sticky top-12 w-[290px] shrink-0 self-start">
      <div className="border-border-secondary bg-background flex max-h-[calc(100vh-80px)] flex-col overflow-hidden border">
        {/* Header */}
        <div className="border-border-secondary bg-card-secondary flex shrink-0 items-center justify-between border-b px-5 ps-7.5 py-5">
          <span className="text-custom-primary text-[12px] font-medium tracking-[0.14em]">
            {t("aside.title")}
          </span>

          <span className="text-muted-foreground font-mono text-[12px]">
            {brands.length.toString().padStart(2, "0")}
          </span>
        </div>

        <ScrollArea
          dir={isRTL ? "rtl" : "ltr"}
          className="h-[520px]"
          scrollBarClassName="me-0"
          lockWheel
        >
          {/* All Products */}
          <Link
            href={`/${locale}/products`}
            className={cn(
              "border-border-secondary group relative flex min-h-[64px] shrink-0 items-center gap-3 border-b px-5 py-2.5",
              "transition-colors duration-200",
              "hover:bg-custom-primary/[0.04]",
              !activeBrand && "bg-custom-primary/[0.055]",
            )}
          >
            {/* Icon */}
            <div className="flex h-9 w-13 shrink-0 items-center justify-center pe-1">
              <Boxes
                strokeWidth={1.6}
                className={cn(
                  "text-muted-foreground size-6 transition-colors duration-200",
                  !activeBrand && "text-custom-primary",
                )}
              />
            </div>

            {/* Label */}
            <span
              className={cn(
                "text-foreground min-w-0 flex-1 truncate text-sm font-medium transition-colors duration-200",
                "group-hover:text-custom-primary",
                !activeBrand && "text-custom-primary",
              )}
            >
              {t("aside.allProducts")}
            </span>

            {/* Count */}
            <span className="text-muted-foreground shrink-0 font-mono text-xs">
              {totalProducts}
            </span>

            {/* Active Line */}
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

              const name = brand.name_en;

              return (
                <Link
                  key={brand.id}
                  href={`/${locale}/products?brand=${brand.slug}`}
                  className={cn(
                    "border-border-secondary group relative flex min-h-[64px] items-center gap-3 border-b px-4 py-2.5 pe-5 last:border-b-0",
                    "transition-colors duration-200",
                    "hover:bg-custom-primary/[0.04]",
                    active && "bg-custom-primary/[0.055]",
                  )}
                >
                  {/* Logo */}
                  <div className="relative flex h-10 w-14 shrink-0 items-center justify-center overflow-hidden">
                    <div className="relative h-9 w-13">
                      <Image
                        src={brand.image}
                        alt={brand.name_en}
                        fill
                        sizes="56px"
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
                    {name}
                  </span>

                  {/* Count */}
                  <span className="text-muted-foreground shrink-0 font-mono text-xs">
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
