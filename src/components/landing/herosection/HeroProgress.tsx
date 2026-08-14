"use client";

import { cn } from "@/lib/utils";

type Props = {
  current: number;
  total: number;
  progress: number;
  locale: "fa" | "en";
};

export default function HeroProgress({
  current,
  total,
  progress,
  locale,
}: Props) {
  const isRTL = locale === "fa";

  const formatNumber = (number: number) => {
    const value = number.toString().padStart(2, "0");

    return isRTL
      ? value.replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[+digit])
      : value;
  };

  return (
    <div
      className="flex items-center gap-x-4 text-white"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <span className="min-w-[22px] text-xs font-medium tabular-nums">
        {formatNumber(current)}
      </span>

      <div className="relative h-[2px] w-28 overflow-hidden bg-white/25 sm:w-36">
        <div
          className={cn(
            "bg-accent absolute inset-0",
            isRTL ? "origin-right" : "origin-left",
          )}
          style={{
            transform: `scaleX(${progress / 100})`,
          }}
        />
      </div>

      <span className="min-w-[22px] text-xs text-white/50 tabular-nums">
        {formatNumber(total)}
      </span>
    </div>
  );
}
