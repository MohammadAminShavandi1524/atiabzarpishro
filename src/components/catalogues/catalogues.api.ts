import type {
  CatalogueBrandWithCatalogs,
  CatalogueItem,
} from "./catalogues.data";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getCatalogues = async (): Promise<CatalogueItem[]> => {
  const response = await fetch(
    `${API_URL}/catalog/catalog/get_all_brands/`,
    {
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch catalogues");
  }

  const brands: CatalogueBrandWithCatalogs[] = await response.json();

  return brands.flatMap((brand) =>
    brand.catalogs.map((catalogue) => ({
      ...catalogue,

      brand: {
        id: brand.id,
        name_en: brand.name_en,
        name_fa: brand.name_fa,
        description_en: brand.description_en,
        description_fa: brand.description_fa,
        image: brand.image,
        url: brand.url,
      },
    })),
  );
};

export const getCatalogueById = async (
  catalogueId: number,
): Promise<CatalogueItem | null> => {
  const catalogues = await getCatalogues();

  return catalogues.find((catalogue) => catalogue.id === catalogueId) ?? null;
};