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

  {
    id: 4,

    titleKey: "items.fourth.title",

    descriptionKey: "items.fourth.description",

    image: "/home/blog/1.webp",

    tags: ["MILLING"],

    slug: "improving-milling-performance",

    avgReadTime: 5,
  },

  {
    id: 5,

    titleKey: "items.fifth.title",

    descriptionKey: "items.fifth.description",

    image: "/home/blog/2.webp",

    tags: ["PRODUCTIVITY"],

    slug: "reducing-machining-cycle-time",

    avgReadTime: 4,
  },

  {
    id: 6,

    titleKey: "items.sixth.title",

    descriptionKey: "items.sixth.description",

    image: "/home/blog/3.webp",

    tags: ["TOOLING"],

    slug: "importance-of-tool-selection",

    avgReadTime: 6,
  },
];