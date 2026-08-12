"use client";

import { Search } from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

export default function SearchBar() {
  const t = useTranslations("Header.Search");

  return (
    <div
      className={cn(
        "group relative flex h-13 w-full items-center",
        "border-border border",
        "bg-tertiary/70",
        "me-[12%] px-3.5",
        "transition-all duration-300",
        "hover:border-border-secondary",
        "focus-within:border-accent/50",
        "focus-within:bg-background",
        "focus-within:shadow-[0_4px_24px_rgba(244,154,52,0.08)]",
        "lg:w-[420px] xl:w-[520px] 2xl:w-[600px]",
      )}
    >
      {/* Search Icon */}
      <div
        className={cn(
          "flex shrink-0 items-center justify-center",
          "text-muted-foreground",
          "transition-colors duration-300",
          "group-focus-within:text-accent",
        )}
      >
        <Search className="size-[24px]" strokeWidth={1.7} />
      </div>

      {/* Input */}
      <input
        type="text"
        placeholder={t("placeholder")}
        className={cn(
          "h-full w-full bg-transparent",
          "px-3 pt-0.75",
          "text-foreground text-base",
          "placeholder:text-muted-foreground/70",
          "outline-none",
          "font-IRANYekanX",
        )}
      />

      {/* Accent Line */}
      <span
        className={cn(
          "pointer-events-none absolute bottom-0 left-1/2",
          "h-[2px] w-0 -translate-x-1/2",
          "bg-accent",
          "transition-all duration-300",
          "group-focus-within:w-1/3",
        )}
      />
    </div>
  );
}