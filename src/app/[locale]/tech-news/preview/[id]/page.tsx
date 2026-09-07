import { notFound } from "next/navigation";

import TechNewsPreview from "@/components/techNews/TechNewsPreview";

import { getTechNewsById } from "@/components/techNews/techNews.api";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  const newsId = Number(id);

  if (!Number.isInteger(newsId) || newsId <= 0) {
    notFound();
  }

  try {
    const item = await getTechNewsById(newsId);

    if (!item) {
      notFound();
    }

    return <TechNewsPreview item={item} />;
  } catch {
    notFound();
  }
}
