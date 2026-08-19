"use client";

import { useLocale } from "next-intl";

import ProductsAside from "./ProductsAside";
import ProductsGrid from "./ProductsGrid";
import ProductsHeader from "./ProductsHeader";

import { brands, products } from "./products.data";

interface ProductsPageProps {
  activeBrand?: string;
}

export default function ProductsPage({ activeBrand }: ProductsPageProps) {
  const locale = useLocale();

  const isRTL = locale === "fa";

  const filteredProducts = activeBrand
    ? products.filter((product) => product.brand.slug === activeBrand)
    : products;

  const activeBrandItem = brands.find((brand) => brand.slug === activeBrand);

  const activeBrandName = activeBrandItem
    ? isRTL
      ? activeBrandItem.name_fa
      : activeBrandItem.name_en
    : undefined;

  const productCounts = products.reduce<Record<string, number>>(
    (acc, product) => {
      const slug = product.brand.slug;

      acc[slug] = (acc[slug] ?? 0) + 1;

      return acc;
    },
    {},
  );

  return (
    <section dir={isRTL ? "rtl" : "ltr"} className="bg-background">
      <div className="w90 py-12">
        <ProductsHeader
          count={filteredProducts.length}
          activeBrandName={activeBrandName}
        />

        <div className="grid grid-cols-[290px_minmax(0,1fr)] items-start gap-8">
          <ProductsAside
            brands={brands}
            activeBrand={activeBrand}
            productCounts={productCounts}
          />

          <ProductsGrid products={filteredProducts} />
        </div>
      </div>
    </section>
  );
}
