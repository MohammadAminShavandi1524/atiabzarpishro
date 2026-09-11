export interface CatalogueBrand {
  id: number;
  name_en: string;
  name_fa: string;
  description_en: string;
  description_fa: string;
  image: string;
  url: string;
  index: number;
}

export interface BrandCatalogue {
  id: number;
  name_en: string;
  name_fa: string;
  image: string;
  object_storage: boolean;
  url: string;
  created: string;
}

export interface CatalogueBrandWithCatalogs extends CatalogueBrand {
  catalogs: BrandCatalogue[];
}

export interface CatalogueItem extends BrandCatalogue {
  brand: CatalogueBrand;
}
