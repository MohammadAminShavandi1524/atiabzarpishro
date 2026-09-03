"use client";

import { Search } from "lucide-react";
import { useTranslations } from "next-intl";

import { cn } from "@/lib/utils";

type SearchBarProps = {
  variant?: "default" | "mobile";
};

export default function SearchBar({ variant = "default" }: SearchBarProps) {
  const t = useTranslations("Header.Search");

  const isMobile = variant === "mobile";

  return (
    <div
      className={cn(
        "group border-border bg-tertiary/70 relative flex items-center border transition-all duration-300",
        "hover:border-border-secondary focus-within:border-accent/50 focus-within:bg-background focus-within:shadow-[0_4px_24px_rgba(244,154,52,0.08)]",
        isMobile
          ? "h-11 w-full px-3"
          : "3xl:h-13 3xl:w-[420px] 3xl:px-3.5 h-11 w-[250px] px-2.5 xl:h-12 xl:w-[320px] xl:px-3 2xl:w-[380px]",
      )}
    >
      <div className="text-muted-foreground group-focus-within:text-accent flex shrink-0 items-center justify-center transition-colors duration-300">
        <Search
          className={cn(
            isMobile ? "size-5" : "3xl:size-[24px] size-5 xl:size-[22px]",
          )}
          strokeWidth={1.7}
        />
      </div>

      <input
        type="text"
        placeholder={t("placeholder")}
        className={cn(
          "font-IRANYekanX text-foreground placeholder:text-muted-foreground/70 h-full w-full bg-transparent pt-0.75 outline-none",
          isMobile
            ? "px-2.5 text-sm"
            : "3xl:px-3 3xl:text-base px-2 text-[13px] xl:text-[15px]",
        )}
      />

      <span className="bg-accent pointer-events-none absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 transition-all duration-300 group-focus-within:w-1/3" />
    </div>
  );
}
