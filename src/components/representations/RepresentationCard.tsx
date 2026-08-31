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
      className="bg-background border-border-secondary flex min-h-25 w-[360px] items-center overflow-hidden rounded-lg border shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
    >
      <div className=" mx-4">
        <div className="relative size-[80px] shrink-0 overflow-hidden bg-transparent ">
          <Image
            src={representation.image || "/logo2.webp"}
            alt={title}
            fill
            className=" object-cover"
          />
        </div>
      </div>
      {/* Content */}
      <div className="flex min-w-0 flex-1 items-center pe-4 py-3.5">
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
