"use client";

import Image from "next/image";

import { ChevronLeft, ChevronRight } from "lucide-react";

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
      className="bg-background border-border-secondary flex w-[430px] items-stretch overflow-hidden rounded-lg border shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
    >
      {/* Image */}
      <div className="relative w-[125px] h-[100px] shrink-0 bg-custom-primary overflow-hidden">
        {/* {representation.image ? (
          <Image
            src={representation.image}
            alt={title}
            fill
            sizes="125px"
            className="object-cover"
          />
        ) : (
          <div className="bg-secondary-bg size-full" />
        )} */}
      </div>

      {/* Content */}
      <div className="flex min-w-0 flex-1 items-center px-4 py-3.5">
        <div className="min-w-0 flex-1">
          <h3 className="text-foreground truncate text-[15px] font-semibold">
            {title}
          </h3>

          <p className="text-muted-foreground mt-2 line-clamp-1 text-[13px] leading-5">
            {address}
          </p>
        </div>
      </div>
    </div>
  );
}
