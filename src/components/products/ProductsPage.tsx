"use client";

import { useEffect, useState } from "react";

import { useLocale } from "next-intl";

import BrandOverview from "./BrandOverview";
import ProductsAside from "./ProductsAside";
import ProductsGrid from "./ProductsGrid";

import { getBrands } from "./brands.api";
import { getProducts } from "./products.api";

import type { ProductBrand } from "./brands.types";
import type { ProductItem } from "./products.types";

interface ProductsPageProps {
  activeBrand?: string;
}

export default function ProductsPage({ activeBrand }: ProductsPageProps) {
  const locale = useLocale();

  const isRTL = locale === "fa";

  const [brands, setBrands] = useState<ProductBrand[]>([]);
  const [products, setProducts] = useState<ProductItem[]>([]);

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const [brandsData, productsData] = await Promise.all([
          getBrands(),
          getProducts(),
        ]);

        setBrands(brandsData);
        setProducts(productsData);
      } catch (error) {
        console.error("FETCH PRODUCTS DATA ERROR =>", error);
      }
    };

    fetchProductsData();
  }, []);

  const activeBrandId = Number(activeBrand);

  const activeBrandItem =
    Number.isInteger(activeBrandId) && activeBrandId > 0
      ? brands.find((brand) => brand.id === activeBrandId)
      : undefined;

  const filteredProducts = activeBrandItem
    ? products.filter((product) => product.brand.id === activeBrandItem.id)
    : products;

  const productCounts = products.reduce<Record<number, number>>(
    (acc, product) => {
      const brandId = product.brand.id;

      acc[brandId] = (acc[brandId] ?? 0) + 1;

      return acc;
    },
    {},
  );

  const visibleBrands = brands.filter(
    (brand) =>
      (productCounts[brand.id] ?? 0) > 0 || brand.id === activeBrandItem?.id,
  );

  return (
    <section dir={isRTL ? "rtl" : "ltr"} className="bg-background">
      <div className="w90 py-8 sm:py-10 md:py-12">
        {/* Page / Brand Overview */}
        <BrandOverview
          brand={activeBrandItem}
          count={filteredProducts.length}
        />

        {/* Products */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-6 xl:grid-cols-[270px_minmax(0,1fr)] xl:gap-7 2xl:grid-cols-[290px_minmax(0,1fr)] 2xl:gap-8">
          <ProductsAside
            brands={visibleBrands}
            activeBrand={activeBrand}
            productCounts={productCounts}
          />

          <ProductsGrid
            key={activeBrand ?? "all-products"}
            products={filteredProducts}
          />
        </div>
      </div>
    </section>
  );
}
