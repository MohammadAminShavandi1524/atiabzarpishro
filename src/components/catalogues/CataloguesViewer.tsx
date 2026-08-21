"use client";

import { Download, ExternalLink, FileText } from "lucide-react";

import { useTranslations } from "next-intl";

import type { CatalogueBrand } from "./catalogues.api";

interface CatalogueViewerProps {
  catalogue: CatalogueBrand;

  fileSize?: string;
}

const CatalogueViewer = ({ catalogue, fileSize }: CatalogueViewerProps) => {
  const t = useTranslations("Catalogues");

  const handleOpen = () => {
    window.open(catalogue.catalog, "_blank", "noopener,noreferrer");
  };

  const handleDownload = () => {
    const link = document.createElement("a");

    link.href = catalogue.catalog;

    link.download = `${catalogue.name_en}-catalogue.pdf`;

    link.target = "_blank";

    link.rel = "noopener noreferrer";

    link.click();
  };

  return (
    <div className="border-border-secondary bg-background min-w-0 border">
      {/* Header */}
      <div className="border-border-secondary flex items-center justify-between gap-6 border-b px-6 py-5">
        <div className="flex min-w-0 items-center gap-4">
          <FileText
            size={22}
            strokeWidth={1.6}
            className="text-custom-primary shrink-0"
          />

          <div className="min-w-0">
            <span className="text-muted-foreground text-xs">
              {t("viewer.label")}
            </span>

            <h2 className="text-foreground mt-1 truncate text-lg font-semibold">
              {catalogue.name_en}
            </h2>

            {fileSize && (
              <span className="text-muted-foreground mt-1 block text-xs">
                {fileSize}
              </span>
            )}
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={handleOpen}
            className="border-border-secondary text-foreground hover:border-custom-primary/60 hover:text-custom-primary flex h-10 cursor-pointer items-center gap-2 border px-4 text-sm transition-colors duration-200"
          >
            <ExternalLink size={16} strokeWidth={1.7} />

            {t("viewer.open")}
          </button>

          <button
            type="button"
            onClick={handleDownload}
            className="bg-custom-primary flex h-10 cursor-pointer items-center gap-2 px-4 text-sm font-medium text-white"
          >
            <Download size={16} strokeWidth={1.7} />

            {t("viewer.download")}
          </button>
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="bg-secondary-bg h-[760px]">
        <iframe
          key={catalogue.catalog}
          src={catalogue.catalog}
          title={`${catalogue.name_en} ${t("viewer.catalogue")}`}
          className="h-full w-full"
        />
      </div>
    </div>
  );
};

export default CatalogueViewer;
