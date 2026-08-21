"use client";

import { useEffect, useState } from "react";

import { useTranslations } from "next-intl";

import {
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

import { FileSearch } from "lucide-react";

import BrochuresHero from "./BrochuresHero";
import BrochuresSidebar from "./BrochuresSidebar";
import BrochureViewer from "./BrochureViewer";

import {
  getBrochures,
  type BrochureProduct,
} from "./brochures.api";

const BrochuresPage = () => {
  const t = useTranslations("Brochures");

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [brochures, setBrochures] = useState<BrochureProduct[]>([]);

  const [activeBrochure, setActiveBrochure] =
    useState<BrochureProduct>();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBrochures = async () => {
      try {
        const data = await getBrochures();

        const availableBrochures = data.filter(
          (product) => Boolean(product.brochure),
        );

        setBrochures(availableBrochures);

        if (!availableBrochures.length) {
          return;
        }

        const productId = searchParams.get("product");

        const selectedBrochure = productId
          ? availableBrochures.find(
              (item) => String(item.id) === productId,
            )
          : undefined;

        setActiveBrochure(
          selectedBrochure ?? availableBrochures[0],
        );
      } catch (error) {
        console.error(
          "GET BROCHURES ERROR:",
          error,
        );
      } finally {
        setLoading(false);
      }
    };

    fetchBrochures();
  }, [searchParams]);

  const handleSelect = (
    brochure: BrochureProduct,
  ) => {
    setActiveBrochure(brochure);

    const params = new URLSearchParams(
      searchParams.toString(),
    );

    params.set(
      "product",
      String(brochure.id),
    );

    router.replace(
      `${pathname}?${params.toString()}`,
      {
        scroll: false,
      },
    );
  };

  return (
    <>
      <BrochuresHero />

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
          ) : brochures.length > 0 && activeBrochure ? (
            <div className="grid grid-cols-[290px_minmax(0,1fr)] items-start gap-8">
              <BrochuresSidebar
                brochures={brochures}
                activeBrochureId={activeBrochure.id}
                onSelect={handleSelect}
              />

              <BrochureViewer
                brochure={activeBrochure}
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

export default BrochuresPage;