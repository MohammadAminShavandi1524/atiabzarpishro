"use client";

import Image from "next/image";

import type { RepresentationItem } from "./representations";

interface RepresentationCardProps {
  representation: RepresentationItem;
  isRTL: boolean;
}

export default function RepresentationCard({
  representation,
  isRTL,
}: RepresentationCardProps) {
  const title = isRTL ? representation.name_fa : representation.name_en;

  const address = isRTL ? representation.address_fa : representation.address_en;

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      className="bg-background border-border-secondary flex min-h-[88px] w-[min(360px,calc(100vw-32px))] items-center overflow-hidden rounded-lg border shadow-[0_8px_24px_rgba(0,0,0,0.12)] sm:min-h-24 lg:min-h-25"
    >
      {/* Image */}
      <div className="mx-3 shrink-0 sm:mx-4">
        <div className="relative size-16 overflow-hidden bg-transparent sm:size-[72px] lg:size-[80px]">
          <Image
            src={representation.image || "/logo2.webp"}
            alt={title}
            fill
            sizes="(max-width: 639px) 64px, (max-width: 1023px) 72px, 80px"
            className="object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex min-w-0 flex-1 items-center py-3 pe-3 sm:py-3.5 sm:pe-4">
        <div className="min-w-0 flex-1">
          <h3 className="text-foreground truncate text-sm font-semibold sm:text-[15px]">
            {title}
          </h3>

          <p className="text-muted-foreground mt-1.5 line-clamp-1 text-xs leading-5 sm:mt-2 sm:text-[13px]">
            {address}
          </p>
        </div>
      </div>
    </div>
  );
}
