import type { ProductItem } from "./products.types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getProducts = async (): Promise<ProductItem[]> => {
  const response = await fetch(`${API_URL}/catalog/category/get_all/`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const products: ProductItem[] = await response.json();

  return products.sort((a, b) => {
    const brandIndexDifference = a.brand.index - b.brand.index;

    if (brandIndexDifference !== 0) {
      return brandIndexDifference;
    }

    return a.index - b.index;
  });
};
