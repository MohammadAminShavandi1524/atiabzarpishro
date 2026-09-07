import type { ProductBrand } from "./brands.types";

export interface ProductItem {
  id: number;

  name_en: string;
  name_fa: string;

  description_en: string | null;
  description_fa: string | null;

  brand: ProductBrand;

  image: string;

  index: number;
  created: string;
}