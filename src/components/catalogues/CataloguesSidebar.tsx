"use client";

import { useLocale, useTranslations } from "next-intl";

import { ScrollArea } from "@/components/ui/scroll-area";

import type { CatalogueBrand } from "./catalogues.api";

import CatalogueItem from "./CatalogueItem";

interface CataloguesSidebarProps {
  catalogues: CatalogueBrand[];

  activeCatalogueId?: number;

  onSelect: (catalogue: CatalogueBrand) => void;

  fileSizes: Record<number, string>;
}

const CataloguesSidebar = ({
  catalogues,
  activeCatalogueId,
  onSelect,
  fileSizes,
}: CataloguesSidebarProps) => {
  const t = useTranslations("Catalogues");

  const locale = useLocale();

  return (
    <aside className="sticky top-20 self-start">
      <div className="border-border-secondary bg-background flex max-h-[calc(100vh-150px)] flex-col overflow-hidden border">
        <div className="border-border-secondary bg-card-secondary flex shrink-0 items-center justify-between border-b px-5 py-5">
          <span className="text-custom-primary text-xs font-medium tracking-[0.14em]">
            {t("sidebar.title")}
          </span>

          <span className="text-muted-foreground text-xs">
            {catalogues.length.toString().padStart(2, "0")}
          </span>
        </div>

        <ScrollArea
          dir={locale === "fa" ? "rtl" : "ltr"}
          className="h-[520px]"
          scrollBarClassName="me-0"
        >
          <div>
            {catalogues.map((catalogue) => (
              <CatalogueItem
                key={catalogue.id}
                catalogue={catalogue}
                active={activeCatalogueId === catalogue.id}
                onClick={() => onSelect(catalogue)}
                fileSize={fileSizes[catalogue.id]}
              />
            ))}
          </div>
        </ScrollArea>
      </div>
    </aside>
  );
};

export default CataloguesSidebar;
