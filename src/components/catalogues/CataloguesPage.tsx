"use client";

import { useEffect, useState } from "react";

import { useTranslations } from "next-intl";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { FileSearch } from "lucide-react";

import CataloguesHero from "./CataloguesHero";

import CataloguesSidebar from "./CataloguesSidebar";



import { getCatalogues, type CatalogueBrand } from "./catalogues.api";
import CatalogueViewer from "./CataloguesViewer";

const formatBytes = (bytes: number) => {
  if (!bytes) {
    return "";
  }

  const units = ["B", "KB", "MB", "GB"];

  const index = Math.floor(Math.log(bytes) / Math.log(1024));

  const value = bytes / Math.pow(1024, index);

  return `${value.toFixed(index === 0 ? 0 : 1)} ${units[index]}`;
};

const CataloguesPage = () => {
  const t = useTranslations("Catalogues");

  const router = useRouter();

  const pathname = usePathname();

  const searchParams = useSearchParams();

  const [catalogues, setCatalogues] = useState<CatalogueBrand[]>([]);

  const [activeCatalogue, setActiveCatalogue] = useState<CatalogueBrand>();

  const [fileSizes, setFileSizes] = useState<Record<number, string>>({});

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCatalogues = async () => {
      try {
        const data = await getCatalogues();

        setCatalogues(data);

        if (!data.length) {
          return;
        }

        const brandId = searchParams.get("brand");

        const selectedCatalogue = brandId
          ? data.find((item) => String(item.id) === brandId)
          : undefined;

        setActiveCatalogue(selectedCatalogue ?? data[0]);
      } catch (error) {
        console.error("GET CATALOGUES ERROR:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCatalogues();
  }, [searchParams]);

  useEffect(() => {
    if (!catalogues.length) {
      return;
    }

    const fetchSizes = async () => {
      const results = await Promise.all(
        catalogues.map(async (catalogue) => {
          try {
            const response = await fetch(catalogue.catalog, {
              method: "HEAD",
            });

            const contentLength = response.headers.get("content-length");

            return [
              catalogue.id,
              contentLength ? formatBytes(Number(contentLength)) : "",
            ] as const;
          } catch {
            return [catalogue.id, ""] as const;
          }
        }),
      );

      setFileSizes(Object.fromEntries(results));
    };

    fetchSizes();
  }, [catalogues]);

  const handleSelect = (catalogue: CatalogueBrand) => {
    setActiveCatalogue(catalogue);

    const params = new URLSearchParams(searchParams.toString());

    params.set("brand", String(catalogue.id));

    router.replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  };

  return (
    <>
      <CataloguesHero />

      <section className="bg-background">
        <div className="w90 py-12">
          {loading ? (
            <div className="border-border-secondary flex min-h-[600px] items-center justify-center border">
              <div className="flex items-center gap-3">
                <span className="border-custom-primary size-5 animate-spin rounded-full border-2 border-t-transparent" />

                <span className="text-muted-foreground text-sm">
                  {t("loading")}
                </span>
              </div>
            </div>
          ) : catalogues.length > 0 && activeCatalogue ? (
            <div className="grid grid-cols-[290px_minmax(0,1fr)] items-start gap-8">
              <CataloguesSidebar
                catalogues={catalogues}
                activeCatalogueId={activeCatalogue.id}
                onSelect={handleSelect}
                fileSizes={fileSizes}
              />

              <CatalogueViewer
                catalogue={activeCatalogue}
                fileSize={fileSizes[activeCatalogue.id]}
              />
            </div>
          ) : (
            <div className="border-border-secondary flex min-h-[520px] flex-col items-center justify-center border px-6 text-center">
              <FileSearch
                size={28}
                strokeWidth={1.6}
                className="text-muted-foreground"
              />

              <h2 className="text-foreground mt-4 text-lg font-semibold">
                {t("empty.title")}
              </h2>

              <p className="text-muted-foreground mt-2 max-w-md text-sm leading-7">
                {t("empty.description")}
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default CataloguesPage;
