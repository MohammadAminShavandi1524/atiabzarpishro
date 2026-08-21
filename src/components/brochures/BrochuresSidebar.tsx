"use client";

import { useLocale, useTranslations } from "next-intl";

import { ScrollArea } from "@/components/ui/scroll-area";

import type { BrochureProduct } from "./brochures.api";

import BrochureItem from "./BrochureItem";

interface BrochuresSidebarProps {
  brochures: BrochureProduct[];
  activeBrochureId?: number;
  onSelect: (brochure: BrochureProduct) => void;
}

const BrochuresSidebar = ({
  brochures,
  activeBrochureId,
  onSelect,
}: BrochuresSidebarProps) => {
  const t = useTranslations("Brochures");
  const locale = useLocale();

  return (
    <aside className="sticky top-28 self-start">
      <div className="border-border-secondary bg-background flex max-h-[calc(100vh-150px)] flex-col overflow-hidden border">
        <div className="border-border-secondary bg-card-secondary flex shrink-0 items-center justify-between border-b px-5 py-5">
          <span className="text-custom-primary text-xs font-medium tracking-[0.14em]">
            {t("sidebar.title")}
          </span>

          <span className="text-muted-foreground text-xs">
            {brochures.length.toString().padStart(2, "0")}
          </span>
        </div>

        <ScrollArea
          dir={locale === "fa" ? "rtl" : "ltr"}
          className="h-[520px]"
          scrollBarClassName="me-0"
        >
          <div>
            {brochures.map((brochure) => (
              <BrochureItem
                key={brochure.id}
                brochure={brochure}
                active={activeBrochureId === brochure.id}
                onClick={() => onSelect(brochure)}
              />
            ))}
          </div>
        </ScrollArea>
      </div>
    </aside>
  );
};

export default BrochuresSidebar;