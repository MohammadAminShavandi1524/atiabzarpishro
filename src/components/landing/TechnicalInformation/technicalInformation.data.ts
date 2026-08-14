export interface TechnicalResource {
  id: string;
  index: string;
  titleKey: string;
  descriptionKey: string;
  href: string;
  code: string;
}

export const technicalResources: TechnicalResource[] = [
  {
    id: "videos",
    index: "01",
    titleKey: "items.videos.title",
    descriptionKey: "items.videos.description",
    href: "/technical-information/video-clips",
    code: "VIDEO / 01",
  },
  {
    id: "brochures",
    index: "02",
    titleKey: "items.brochures.title",
    descriptionKey: "items.brochures.description",
    href: "/technical-information/brochures",
    code: "BROCHURE / 02",
  },
  {
    id: "catalogues",
    index: "03",
    titleKey: "items.catalogues.title",
    descriptionKey: "items.catalogues.description",
    href: "/technical-information/catalogues",
    code: "CATALOGUE / 03",
  },
  {
    id: "softwares",
    index: "04",
    titleKey: "items.softwares.title",
    descriptionKey: "items.softwares.description",
    href: "/technical-information/softwares",
    code: "SOFTWARE / 04",
  },
];
