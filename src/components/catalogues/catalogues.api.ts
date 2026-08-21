export interface CatalogueBrand {
  id: number;

  name_en: string;
  name_fa: string;

  description_en: string;
  description_fa: string;

  image: string;
  catalog: string;

  created: string;
}

export const getCatalogues = async (): Promise<CatalogueBrand[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/catalog/brand/get/`,
    {
      method: "GET",
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch catalogues");
  }

  return response.json();
};