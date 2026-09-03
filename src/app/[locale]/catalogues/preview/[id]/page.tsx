import { notFound } from "next/navigation";



import { catalogues } from "@/components/catalogues/catalogues.data";
import CataloguePreview from "@/components/catalogues/CataloguePreview";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  const catalogue = catalogues.find(
    (catalogue) => catalogue.id === Number(id),
  );

  if (!catalogue) {
    notFound();
  }

  return <CataloguePreview catalogue={catalogue} />;
}