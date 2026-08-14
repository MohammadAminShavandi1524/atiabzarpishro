"use client";

import Image from "next/image";

import type { FeaturedProductItem } from "./featured-products.data";

interface FeaturedProductVisualProps {
  item: FeaturedProductItem;
  t: (key: string) => string;
}

export default function FeaturedProductVisual({
  item,
  t,
}: FeaturedProductVisualProps) {
  return (
    <article
      data-featured-product={item.index}
      className="featured-product-item absolute inset-0"
    >
      <div className="grid h-full grid-cols-[0.95fr_1.05fr] items-center gap-[6vw]">
        {/* Product info */}
        <div className="featured-product-copy relative z-20">
          <div
            lang="en"
            className="featured-product-code text-muted-foreground mb-6 flex items-center gap-3 text-[11px] tracking-[0.14em]"
          >
            <span>{item.code}</span>

            <span className="featured-product-code-line bg-border block h-px w-12" />
          </div>

          <div className="overflow-hidden">
            <span
              lang="en"
              className="featured-product-brand text-custom-primary block text-sm font-medium tracking-[0.18em]"
            >
              {item.brand}
            </span>
          </div>

          <h2 className="text-foreground mt-5 max-w-[650px] text-[clamp(2.7rem,4vw,5rem)] font-semibold ltr:leading-[1.02] ltr:tracking-[-0.04em] rtl:leading-[1.2]">
            <span className="block overflow-hidden">
              <span className="featured-product-title block">
                {t(item.titleKey)}
              </span>
            </span>
          </h2>

          <p className="featured-product-description text-muted-foreground mt-7 max-w-[560px] text-justify text-[16px] leading-8">
            {t(item.descriptionKey)}
          </p>
        </div>

        {/* Product image */}
        <div className="featured-product-image-wrap relative flex h-full items-center justify-center">
          <div className="featured-product-image relative aspect-[3/2] w-full max-w-[760px]">
            <Image
              src={item.image}
              alt={t(item.titleKey)}
              fill
              sizes="50vw"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </article>
  );
}
