export interface BrochureProduct {
  id: number;

  name_en: string;
  name_fa: string;

  brand: {
    id: number;
    name_en: string;
    name_fa: string;

    description_en: string;
    description_fa: string;

    image: string;
    catalog: string;

    created: string;
  };

  image: string;
  brochure: string;

  created: string;
}

export const getBrochures = async (): Promise<BrochureProduct[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/catalog/category/get_all/`,
    {
      method: "GET",
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch brochures");
  }

  return response.json();
};
