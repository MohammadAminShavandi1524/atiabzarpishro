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
      className="xss:gap-x-3 flex min-w-0 items-center gap-x-2.5 text-white sm:gap-x-4"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <span className="min-w-[20px] text-[10px] font-medium tabular-nums sm:min-w-[22px] sm:text-xs">
        {formatNumber(current)}
      </span>

      <div className="xss:w-20 relative h-[2px] w-16 overflow-hidden bg-white/25 sm:w-28 md:w-32 lg:w-36">
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

      <span className="min-w-[20px] text-[10px] text-white/50 tabular-nums sm:min-w-[22px] sm:text-xs">
        {formatNumber(total)}
      </span>
    </div>
  );
}
