import type { TechNewsItem } from "./techNews.data";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getTechNews = async (): Promise<TechNewsItem[]> => {
  const response = await fetch(`${API_URL}/news/get/`);

  if (!response.ok) {
    throw new Error("Failed to fetch tech news");
  }

  return response.json();
};

export const getTechNewsById = async (
  newsId: number,
): Promise<TechNewsItem> => {
  const response = await fetch(`${API_URL}/news/get/${newsId}/`);

  if (!response.ok) {
    throw new Error("Failed to fetch tech news");
  }

  return response.json();
};
