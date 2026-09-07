import type { ProductBrand } from "./brands.types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getBrands = async (): Promise<ProductBrand[]> => {
  const response = await fetch(`${API_URL}/catalog/brand/get/`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch brands");
  }

  const brands: ProductBrand[] = await response.json();

  return brands.sort((a, b) => a.index - b.index);
};