"use client";

import { FileText } from "lucide-react";

import { cn } from "@/lib/utils";

import type { BrochureProduct } from "./brochures.api";

interface BrochureItemProps {
  brochure: BrochureProduct;
  active: boolean;
  onClick: () => void;
}

const BrochureItem = ({
  brochure,
  active,
  onClick,
}: BrochureItemProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group/item border-border-secondary relative flex w-full cursor-pointer items-center gap-3 border-b px-5 py-4 text-start transition-colors duration-200 last:border-b-0",
        "hover:bg-custom-primary/[0.04]",
        active && "bg-custom-primary/[0.055]",
      )}
    >
      <FileText
        size={19}
        strokeWidth={1.6}
        className={cn(
          "text-muted-foreground shrink-0 transition-colors duration-200",
          "group-hover/item:text-custom-primary",
          active && "text-custom-primary",
        )}
      />

      <div className="min-w-0 flex-1">
        <p
          className={cn(
            "text-foreground truncate text-sm font-medium transition-colors duration-200",
            "group-hover/item:text-custom-primary",
            active && "text-custom-primary",
          )}
        >
          {brochure.name_en}
        </p>

        <span className="text-muted-foreground mt-1 block truncate text-xs">
          {brochure.brand.name_en}
        </span>
      </div>

      <span
        className={cn(
          "bg-custom-primary absolute inset-y-0 start-0 w-[2px] scale-y-0 transition-transform duration-200",
          "group-hover/item:scale-y-100",
          active && "scale-y-100",
        )}
      />
    </button>
  );
};

export default BrochureItem;