"use client";

import { useTranslations } from "next-intl";

import { PackageSearch } from "lucide-react";

import ProductCard from "./ProductCard";

import type { ProductItem } from "./products.data";

interface ProductsGridProps {
  products: ProductItem[];
}

export default function ProductsGrid({ products }: ProductsGridProps) {
  const t = useTranslations("Products");

  if (!products.length) {
    return (
      <div className="border-border-secondary flex min-h-[360px] flex-col items-center justify-center border px-8 text-center">
        <PackageSearch
          className="text-muted-foreground size-9"
          strokeWidth={1.4}
        />

        <h3 className="text-foreground mt-4 text-base font-semibold">
          {t("empty.title")}
        </h3>

        <p className="text-muted-foreground mt-2 max-w-sm text-sm leading-6">
          {t("empty.description")}
        </p>
      </div>
    );
  }

  return (
    <div className="grid min-w-0 grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
