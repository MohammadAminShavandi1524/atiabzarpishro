"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

type Props = {
  locale: "fa" | "en";
  onPrev: () => void;
  onNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
};

export default function HeroControls({
  locale,
  onPrev,
  onNext,
  canScrollPrev,
  canScrollNext,
}: Props) {
  const isRTL = locale === "fa";

  return (
    <div className="flex shrink-0 items-center gap-x-1.5" dir="ltr">
      {/* Previous */}
      <button
        type="button"
        aria-label={isRTL ? "اسلاید قبلی" : "Previous slide"}
        disabled={!canScrollPrev}
        onClick={isRTL ? onNext : onPrev}
        className={cn(
          "group relative flex size-10 cursor-pointer items-center justify-center overflow-hidden",

          "border border-white/25",

          "bg-black/30 text-white",

          "transition-all duration-300",

          "sm:size-11 sm:bg-black/20 sm:backdrop-blur-md",

          "lg:size-12",

          "hover:border-accent",
          "hover:bg-accent",
          "hover:text-accent-foreground",

          "active:scale-[0.97]",

          "disabled:pointer-events-none",
          "disabled:opacity-30",
        )}
      >
        <ArrowLeft
          className="relative z-10 size-4 sm:size-4.5"
          strokeWidth={1.6}
        />

        <span className="bg-accent absolute start-0 bottom-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full" />
      </button>

      {/* Next */}
      <button
        type="button"
        aria-label={isRTL ? "اسلاید بعدی" : "Next slide"}
        disabled={!canScrollNext}
        onClick={isRTL ? onPrev : onNext}
        className={cn(
          "group relative flex size-10 cursor-pointer items-center justify-center overflow-hidden",

          "border border-white/25",

          "bg-black/30 text-white",

          "transition-all duration-300",

          "sm:size-11 sm:bg-black/20 sm:backdrop-blur-md",

          "lg:size-12",

          "hover:border-accent",
          "hover:bg-accent",
          "hover:text-accent-foreground",

          "active:scale-[0.97]",

          "disabled:pointer-events-none",
          "disabled:opacity-30",
        )}
      >
        <ArrowRight
          className="relative z-10 size-4 sm:size-4.5"
          strokeWidth={1.6}
        />

        <span className="bg-accent absolute start-0 bottom-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full" />
      </button>
    </div>
  );
}
