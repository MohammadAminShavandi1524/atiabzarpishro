import type { ProductBrand } from "../products/brands.types";
import type { ProductItem } from "../products/products.types";

export interface SearchResponse {
  brands: ProductBrand[];
  categories: ProductItem[];
}