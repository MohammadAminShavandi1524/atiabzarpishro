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
    <article className="group border-border-secondary bg-background hover:border-custom-primary/40 flex h-full flex-col overflow-hidden border transition-colors duration-300">
      {/* Image */}
      <div className="bg-[#f5f5f5] relative aspect-[4/4] overflow-hidden">
        <Image
          src={product.image}
          alt={title}
          fill
          sizes="(max-width: 1280px) 25vw, 20vw"
          className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>

      {/* Content */}
      <div className="border-border-secondary flex flex-1 flex-col border-t px-4 py-4">
        {/* Brand */}
        <span
          lang="en"
          className="text-custom-primary text-[10px] font-medium tracking-[0.13em]"
        >
          {brandName}
        </span>

        {/* Title */}
        <h3 className="text-foreground mt-2 line-clamp-2 min-h-[52px] text-[16px] leading-6 font-semibold">
          {title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground mt-2 line-clamp-2 text-[13px] leading-6">
          {description}
        </p>
      </div>
    </article>
  );
}
