"use client";

import { BadgeCheck, Factory, Headset, UsersRound } from "lucide-react";
import { useLocale } from "next-intl";

import { cn } from "@/lib/utils";

import type { AboutFeature } from "./about-features.data";

interface AboutFeatureItemProps {
  feature: AboutFeature;
  index: number;
  hasDivider?: boolean;
}

const featureIcons = {
  automation: Factory,
  brands: BadgeCheck,
  support: Headset,
  team: UsersRound,
} as const;

export default function AboutFeatureItem({
  feature,
  index,
  hasDivider = false,
}: AboutFeatureItemProps) {
  const locale = useLocale();
  const isRTL = locale === "fa";

  const Icon = featureIcons[feature.icon];

  const title = isRTL ? feature.title.fa : feature.title.en;
  const description = isRTL ? feature.description.fa : feature.description.en;

  const borderClass =
    index === 0
      ? "border-b md:border-e lg:border-b-0 lg:border-e-0"
      : index === 1
        ? "border-b lg:border-b-0"
        : index === 2
          ? "border-b md:border-b-0 md:border-e lg:border-e-0"
          : "";

  return (
    <article
      className={cn(
        "border-border relative flex items-start gap-4 py-6 sm:gap-5 md:px-6 lg:min-h-[145px] lg:px-8",
        borderClass,
        hasDivider &&
          "lg:after:bg-border lg:after:absolute lg:after:inset-y-3 lg:after:end-0 lg:after:w-px",
        index === 0 && "lg:ps-0",
        index === 3 && "lg:pe-0",
      )}
    >
      <div className="border-border flex size-12 shrink-0 items-center justify-center border sm:size-13 lg:size-14">
        <Icon
          className="text-custom-primary size-7 sm:size-8 lg:size-9"
          strokeWidth={1.5}
        />
      </div>

      <div className="min-w-0">
        <h3 className="text-foreground text-[15px] leading-6 font-semibold sm:text-[16px]">
          {title}
        </h3>

        <p className="text-muted-foreground mt-2 max-w-[300px] text-[13px] leading-6 sm:mt-3 sm:text-[14px] sm:leading-7 lg:max-w-[260px]">
          {description}
        </p>
      </div>
    </article>
  );
}
