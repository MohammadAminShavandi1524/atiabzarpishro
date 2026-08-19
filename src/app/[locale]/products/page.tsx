import ProductsPage from "@/components/products/ProductsPage";

interface PageProps {
  searchParams: Promise<{
    brand?: string;
  }>;
}

export default async function Page({ searchParams }: PageProps) {
  const { brand } = await searchParams;

  return <ProductsPage activeBrand={brand} />;
}
