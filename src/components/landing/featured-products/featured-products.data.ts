export interface FeaturedProductItem {
  id: string;
  index: string;
  brand: string;
  code: string;
  image: string;
  titleKey: string;
  descriptionKey: string;
}

export const featuredProducts: FeaturedProductItem[] = [
  {
    id: "korloy",
    index: "01",
    brand: "KORLOY",
    code: "INDEXABLE / 01",
    image: "/home/featured-products/1.webp",
    titleKey: "items.korloy.title",
    descriptionKey: "items.korloy.description",
  },
  {
    id: "widin",
    index: "02",
    brand: "WIDIN",
    code: "SOLID CARBIDE / 02",
    image: "/home/featured-products/2.webp",
    titleKey: "items.widin.title",
    descriptionKey: "items.widin.description",
  },
  {
    id: "izar",
    index: "03",
    brand: "IZAR",
    code: "CUTTING TOOLS / 03",
    image: "/home/featured-products/3.webp",
    titleKey: "items.izar.title",
    descriptionKey: "items.izar.description",
  },
];
