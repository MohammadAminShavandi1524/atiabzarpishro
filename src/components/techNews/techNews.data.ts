export interface TechNewsItem {
  id: number;

  title: string;

  image: string;

  pdf: string;

  date: string;
}

const TEMP_TECH_NEWS_PDF =
  "https://korloy.com/en/ebook/Cutting%20Tools_Turning%2025-26(EM)/assets/contents/download.pdf";

export const techNewsItems: TechNewsItem[] = [
  {
    id: 1,
    title: "Advanced Turning Solutions",
    image: "/1.png",
    pdf: TEMP_TECH_NEWS_PDF,
    date: "2026.08",
  },
  {
    id: 2,
    title: "High Performance Milling Tools",
    image: "/1.png",
    pdf: TEMP_TECH_NEWS_PDF,
    date: "2026.07",
  },
  {
    id: 3,
    title: "Solid Carbide Tooling Solutions",
    image: "/1.png",
    pdf: TEMP_TECH_NEWS_PDF,
    date: "2026.06",
  },
  {
    id: 4,
    title: "New CBN Cutting Technology",
    image: "/1.png",
    pdf: TEMP_TECH_NEWS_PDF,
    date: "2026.05",
  },
  {
    id: 5,
    title: "Precision Drilling Systems",
    image: "/1.png",
    pdf: TEMP_TECH_NEWS_PDF,
    date: "2026.04",
  },
  {
    id: 6,
    title: "Industrial Tooling Innovations",
    image: "/1.png",
    pdf: TEMP_TECH_NEWS_PDF,
    date: "2026.03",
  },
  {
    id: 7,
    title: "Machining Process Improvements",
    image: "/1.png",
    pdf: TEMP_TECH_NEWS_PDF,
    date: "2026.02",
  },
  {
    id: 8,
    title: "Modern Cutting Tool Applications",
    image: "/1.png",
    pdf: TEMP_TECH_NEWS_PDF,
    date: "2026.01",
  },
];
