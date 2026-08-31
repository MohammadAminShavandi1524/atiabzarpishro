import { notFound } from "next/navigation";

import TechNewsPreview from "@/components/techNews/TechNewsPreview";

import { techNewsItems } from "@/components/techNews/techNews.data";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  const item = techNewsItems.find((item) => item.id === Number(id));

  if (!item) {
    notFound();
  }

  return <TechNewsPreview item={item} />;
}
