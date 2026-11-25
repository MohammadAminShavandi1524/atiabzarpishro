export type NewsLanguage = "fa" | "en";

export interface NewsTechNews {
  id: number;
  name_en: string;
  name_fa: string;
  image: string | null;
  object_storage: boolean;
  url: string;
  created: string;
}

export interface NewsChild {
  id: number;
  blog: number;
  title: string | null;
  description: string | null;
  image: string | null;
}

export interface NewsParent {
  id: number;
  title: string;
  description: string;
  image: string | null;
  category: {
    id: number;
    name: string;
  } | null;
  root_blog: number;
  tags: string[];
  lang: string;
  published: boolean;
  slug: string;
  tech_news: NewsTechNews | null;
}

export interface NewsLanguageData {
  parent: NewsParent | null;
  child: NewsChild[];
}

export type NewsResponse = Partial<
  Record<NewsLanguage, NewsLanguageData | null>
>;
