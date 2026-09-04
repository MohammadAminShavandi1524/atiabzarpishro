"use client";

import Image from "next/image";

import { useLocale } from "next-intl";

import type { ProductItem } from "./products.data";

interface ProductCardProps {
  product: ProductItem;
}

export default function ProductCard({ product }: ProductCardProps) {
  const locale = useLocale();

  const isRTL = locale === "fa";

  const title = isRTL ? product.name_fa : product.name_en;

  const description = isRTL
    ? product.short_description_fa
    : product.short_description_en;

  const brandName = product.brand.name_en;

  return (
    <article className="group border-border-secondary bg-background hover:border-custom-primary/40 flex h-full min-w-0 flex-col overflow-hidden border transition-colors duration-300">
      {/* Image */}
      <div className="relative aspect-square w-full overflow-hidden bg-[#f5f5f5]">
        <Image
          src={product.image}
          alt={title}
          fill
          sizes="(max-width: 399px) 100vw, (max-width: 767px) 50vw, (max-width: 1535px) 33vw, 25vw"
          className="object-contain p-3 transition-transform duration-500 ease-out sm:p-4 lg:group-hover:scale-[1.03]"
        />
      </div>

      {/* Content */}
      <div className="border-border-secondary flex flex-1 flex-col border-t px-3.5 py-3.5 sm:px-4 sm:py-4">
        {/* Brand */}
        <span
          lang="en"
          dir="ltr"
          className="text-custom-primary text-[9px] font-medium tracking-[0.12em] sm:text-[10px] sm:tracking-[0.13em]"
        >
          {brandName}
        </span>

        {/* Title */}
        <h3 className="text-foreground mt-2 line-clamp-2 min-h-[48px] text-[14px] leading-6 font-semibold sm:min-h-[52px] sm:text-[15px] lg:text-[16px]">
          {title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground mt-2 text-[12px] leading-5.5 sm:text-[13px] sm:leading-6">
          {description}
        </p>
      </div>
    </article>
  );
}
