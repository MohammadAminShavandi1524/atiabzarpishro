"use client";

import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

import type { HeroCarouselItem } from "./hero-carousel.types";

type Props = {
  item: HeroCarouselItem;
  locale: "fa" | "en";
  isActive: boolean;
};

export default function HeroSlide({ item, locale, isActive }: Props) {
  const isRTL = locale === "fa";

  const label = isRTL ? item.faLabel : item.enLabel;

  const title = isRTL ? item.faTitle : item.enTitle;

  const description = isRTL ? item.faDescription : item.enDescription;

  return (
    <article
      className={cn(
        "hero-slide relative min-w-0 shrink-0 grow-0 basis-full overflow-hidden",
        "h-[550px]",
        "md:h-[590px]",
        "lg:h-[calc(100svh-154px)]",
        "lg:min-h-[620px]",
        "lg:max-h-[760px]",
      )}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Image */}
      <div className="absolute inset-0">
        <Image
          src={item.image}
          alt={title}
          fill
          priority={item.id === "1"}
          sizes="100vw"
          className={cn(
            "object-cover",
            ["1", "2","7"].includes(item.id) ? "" : isRTL ? "-scale-x-100" : "",
          )}
        />
      </div>

      {/* Readable Overlay */}
      <div
        className={cn(
          "absolute inset-0",
          "bg-gradient-to-r from-black/75 via-black/35 to-transparent",
          isRTL && "bg-gradient-to-l from-black/75 via-black/35 to-transparent",
        )}
      />

      {/* Bottom Gradient */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/30 to-transparent" />

      {/* Content */}
      <div className="w90 relative z-10 mx-auto flex h-full items-center">
        <div className="max-w-[680px] text-white">
          {/* logo */}
          <div className="flex justify-start">
            <div
              dir="ltr"
              className={cn(
                "flex items-center",
                item.brandName && "",
                item.className,
              )}
            >
              <div
                className={cn(
                  "relative size-30",
                  ["3", "4", "8", "9"].includes(item.id) && "size-40",
                  ["8", "10"].includes(item.id) && "size-36",
                )}
              >
                <Image
                  src={item.logo}
                  alt="logo"
                  fill
                  className="scale-1.8 object-cover [filter:drop-shadow(0_1px_1px_rgba(255,255,255,0.25))_drop-shadow(0_3px_6px_rgba(0,0,0,0.4))]"
                />
              </div>
              {item.brandName && (
                <div
                  lang="en"
                  className="-ms-4 text-[24px] font-semibold tracking-wide"
                >
                  {item.brandName}
                </div>
              )}
            </div>
          </div>

          {/* Title */}
          <h2
            className={cn(
              "max-w-[700px]",
              "text-4xl leading-[1.08] font-semibold",
              "tracking-tight",
              "sm:text-5xl",
              "lg:text-6xl",
              "xl:text-7xl",
              isRTL && "font-IRANYekanX leading-[1.3]",
            )}
          >
            {title}
          </h2>

          {/* Description */}
          <p
            className={cn(
              "mt-10 max-w-[650px]",
              "text-sm leading-7 text-white/75",
              "sm:text-base sm:leading-8",
              isRTL && "font-IRANYekanX",
            )}
          >
            {description}
          </p>

          {/* CTA */}
          {item.href && (
            <Link
              href={item.href}
              className={cn(
                "group mt-7 inline-flex items-center gap-x-3",
                "bg-accent rounded-md px-5 py-3",
                "text-accent-foreground text-sm font-medium",
                "transition-colors duration-300",
                "hover:bg-primary-hover",
              )}
            >
              <span>{isRTL ? "مشاهده بیشتر" : "Explore More"}</span>

              <ArrowUpRight
                className={cn("size-4", isRTL && "rotate-[270deg]")}
                strokeWidth={1.8}
              />
            </Link>
          )}
        </div>
      </div>

      {/* Edge */}
      <div className="pointer-events-none absolute inset-0 border-y border-white/10" />

      {!isActive && (
        <div className="pointer-events-none absolute inset-0 bg-black/10" />
      )}
    </article>
  );
}
