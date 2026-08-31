export interface CatalogueItem {
  id: number;

  title: string;

  image: string;

  pdf: string;

  date: string;

  lang?: string;
}

const TEMP_CATALOGUE_PDF = "/catalogues/ati-abzar-pishro-catalogue.pdf";

export const catalogues: CatalogueItem[] = [
  {
    id: 1,

    title: "Thread Turning",

    image: "/1.png",

    pdf: TEMP_CATALOGUE_PDF,

    date: "2025.11",

    lang: "EN",
  },

  {
    id: 2,

    title: "Cutting Tools_Solid 2025-2026",

    image: "/1.png",

    pdf: TEMP_CATALOGUE_PDF,

    date: "2025.08",

    lang: "EN",
  },

  {
    id: 3,

    title: "Pipe Industry",

    image: "/1.png",

    pdf: TEMP_CATALOGUE_PDF,

    date: "2025.03",

    lang: "EN",
  },

  {
    id: 4,

    title: "Cutting Tools_Rotating 2025-2026",

    image: "/1.png",

    pdf: TEMP_CATALOGUE_PDF,

    date: "2024.12",

    lang: "EN",
  },

  {
    id: 5,

    title: "Cutting Tools",

    image: "/1.png",

    pdf: TEMP_CATALOGUE_PDF,

    date: "2024.10",

    lang: "EN",
  },

  {
    id: 6,

    title: "The Micro Endmill",

    image: "/1.png",

    pdf: TEMP_CATALOGUE_PDF,

    date: "2024.08",

    lang: "EN",
  },

  {
    id: 7,

    title: "Herramientas de Corte",

    image: "/1.png",

    pdf: TEMP_CATALOGUE_PDF,

    date: "2024.05",

    lang: "ES",
  },

  {
    id: 8,

    title: "Solid Tools Solution",

    image: "/1.png",

    pdf: TEMP_CATALOGUE_PDF,

    date: "2024.03",

    lang: "EN",
  },
];
