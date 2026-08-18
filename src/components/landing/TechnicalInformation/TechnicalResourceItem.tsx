"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";

import { englishToPersianNumber } from "@/lib/utils";

import type { TechnicalResource } from "./technicalInformation.data";
import Link from "next/link";

interface TechnicalResourceItemProps {
  resource: TechnicalResource;
  isRTL: boolean;
  t: (key: string) => string;
}

export default function TechnicalResourceItem({
  resource,
  isRTL,
  t,
}: TechnicalResourceItemProps) {
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <Link
      href={resource.href}
      className="technical-resource group border-border relative grid  grid-cols-[80px_1fr_auto] items-center border-t first:border-t-0"
    >
      {/* Active line */}
      <span className="technical-resource-line bg-custom-primary origin-start absolute inset-x-0 top-[-1px] h-px scale-x-0" />

      {/* Index */}
      <div className="technical-resource-index text-muted-foreground self-start pt-7 font-mono text-[12px]">
        {/* {isRTL ? englishToPersianNumber(resource.index) : resource.index} */}
      </div>

      {/* Content */}
      <div className="pt-4 pb-6 pe-8">
        <div className="technical-resource-code text-muted-foreground mb-3 font-mono text-[10px] tracking-[0.14em]"></div>

        <h3 className="technical-resource-title text-foreground text-[28px] leading-tight font-medium">
          {t(resource.titleKey)}
        </h3>

        <p className="technical-resource-description text-muted-foreground mt-2.5 max-w-[540px] text-[14px] leading-7">
          {t(resource.descriptionKey)}
        </p>
      </div>

      {/* Arrow */}
      <div className="technical-resource-arrow border-border ms-8 flex h-full w-[88px] items-center justify-center border-s">
        <Arrow
          strokeWidth={1.4}
          className="text-muted-foreground group-hover:text-custom-primary size-5 transition-colors duration-300"
        />
      </div>
    </Link>
  );
}
