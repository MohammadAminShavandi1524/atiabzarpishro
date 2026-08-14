export interface BlogInsightItem {
  id: number;
  titleKey: string;
  descriptionKey: string;
  image: string;
  tags: string[];
  slug: string;
  avgReadTime: number;
}

export const blogInsights: BlogInsightItem[] = [
  {
    id: 1,
    titleKey: "items.first.title",
    descriptionKey: "items.first.description",
    image: "/home/blog/1.webp",
    tags: ["CUTTING TOOLS"],
    slug: "choosing-the-right-cutting-tool",
    avgReadTime: 5,
  },
  {
    id: 2,
    titleKey: "items.second.title",
    descriptionKey: "items.second.description",
    image: "/home/blog/2.webp",
    tags: ["TOOL LIFE"],
    slug: "cutting-parameters-and-tool-life",
    avgReadTime: 4,
  },
  {
    id: 3,
    titleKey: "items.third.title",
    descriptionKey: "items.third.description",
    image: "/home/blog/3.webp",
    tags: ["MACHINING"],
    slug: "understanding-carbide-inserts",
    avgReadTime: 6,
  },
];