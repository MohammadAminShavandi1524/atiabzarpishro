"use client";

import { useTranslations } from "next-intl";

interface ProductsHeaderProps {
  count: number;
  activeBrandName?: string;
}

export default function ProductsHeader({
  count,
  activeBrandName,
}: ProductsHeaderProps) {
  const t = useTranslations("Products");

  return (
    <div className="border-border mb-8 flex items-end justify-between border-b pb-6">
      <div>
        <span className="text-custom-primary text-xs font-medium tracking-[0.14em]">
          {t("header.label")}
        </span>

        <h1 className="text-foreground mt-3 text-[32px] leading-tight font-semibold">
          {activeBrandName ?? t("header.title")}
        </h1>
      </div>

      <div className="text-muted-foreground flex items-center gap-x-1.5 rtl:gap-x-1.25 text-sm">
        <span dir="ltr">{String(count).padStart(2, "0")}</span>

        <span>{t("header.countLabel")}</span>
      </div>
    </div>
  );
}
