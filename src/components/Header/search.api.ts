import type { SearchResponse } from "./search.types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const searchCatalog = async (
  topic: string,
  signal?: AbortSignal,
): Promise<SearchResponse> => {
  const response = await fetch(`${API_URL}/catalog/search/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      topic,
    }),
    signal,
  });

  if (!response.ok) {
    throw new Error("Failed to search catalog");
  }

  return response.json();
};
