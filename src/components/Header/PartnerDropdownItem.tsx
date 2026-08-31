"use client";

import Image from "next/image";
import Link from "next/link";

import { useLocale } from "next-intl";

import type { ProductBrand } from "../products/products.data";

interface PartnerDropdownItemProps {
  brand: ProductBrand;
}

export default function PartnerDropdownItem({
  brand,
}: PartnerDropdownItemProps) {
  const locale = useLocale();

  const isRTL = locale === "fa";

  const name = brand.name_en;

  return (
    <Link
    dir="ltr"
      href={`/${locale}/products?brand=${brand.slug}`}
      className="partner-item group/item hover:bg-custom-primary/[0.045] relative flex items-center gap-2 py-1.75 ps-4 pe-4 transition-colors duration-200 "
    >
      {/* Hover Line */}
      <span className="bg-custom-primary absolute inset-y-0 start-0 w-[2px] scale-y-0 transition-transform duration-200 group-hover/item:scale-y-100" />

      {/* Logo */}
      <div className="relative flex h-10 w-12 shrink-0 items-center justify-center overflow-hidden">
        <div className="relative h-11 w-12 ">
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
      <span className="text-foreground group-hover/item:text-custom-primary min-w-0 truncate text-[14px] font-medium transition-colors duration-200">
        {name}
      </span>
    </Link>
  );
}
