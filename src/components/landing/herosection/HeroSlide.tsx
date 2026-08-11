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
        "hero-slide relative min-w-0 shrink-0 grow-0 basis-full",
        "h-[480px] overflow-hidden",
        "lg:h-[540px]",
        "xl:h-[580px]",
        "2xl:h-[620px]",
      )}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Image */}
      <div className="hero-slide-image absolute inset-0">
        <Image
          src={item.image}
          alt={title}
          fill
          priority={item.id === "1"}
          sizes="100vw"
          className={cn("object-cover", isRTL && "-scale-x-100")}
        />
      </div>

      {/* Dark / readable overlay */}
      <div
        className={cn(
          "hero-slide-overlay absolute inset-0",
          "bg-gradient-to-r from-black/75 via-black/35 to-transparent",
          isRTL && "bg-gradient-to-l from-black/75 via-black/35 to-transparent",
        )}
      />

      {/* Subtle bottom gradient */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/30 to-transparent" />

      {/* Content */}
      <div className="w90 relative z-10 mx-auto flex h-full items-center">
        <div
          className={cn(
            "hero-slide-content max-w-[680px]",
            "text-white",
            isRTL ? "ms-0 me-auto" : "ms-0 me-auto",
          )}
        >
          {/* Label */}
          <div className="hero-slide-label mb-4 flex items-center gap-x-3">
            <span className="bg-accent h-px w-8" />

            <span className="text-sm font-medium tracking-[0.12em] text-white/80">
              {label}
            </span>
          </div>

          {/* Title */}
          <h2
            className={cn(
              "hero-slide-title",
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
              "hero-slide-description mt-5 max-w-[650px]",
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
                "hero-slide-cta group mt-7 inline-flex items-center gap-x-3",
                "bg-accent rounded-md px-5 py-3",
                "text-accent-foreground text-sm font-medium",
                "transition-all duration-300",
                "hover:bg-primary-hover",
              )}
            >
              <span>{isRTL ? "مشاهده بیشتر" : "Explore More"}</span>

              <ArrowUpRight
                className={cn(
                  "size-4 transition-transform duration-300",
                  "group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
                  isRTL && "rotate-[270deg]",
                )}
                strokeWidth={1.8}
              />
            </Link>
          )}
        </div>
      </div>

      {/* Cinematic edge */}
      <div className="pointer-events-none absolute inset-0 border-y border-white/10" />

      {!isActive && (
        <div className="pointer-events-none absolute inset-0 bg-black/10" />
      )}
    </article>
  );
}
