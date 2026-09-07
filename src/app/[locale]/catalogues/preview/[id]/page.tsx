import { notFound } from "next/navigation";

import CataloguePreview from "@/components/catalogues/CataloguePreview";
import { getCatalogueById } from "@/components/catalogues/catalogues.api";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  const catalogueId = Number(id);

  if (!Number.isInteger(catalogueId) || catalogueId <= 0) {
    notFound();
  }

  const catalogue = await getCatalogueById(catalogueId);

  if (!catalogue) {
    notFound();
  }

  return <CataloguePreview catalogue={catalogue} />;
}
