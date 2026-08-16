"use client";

import {
  BadgeCheck,
  Factory,
  Headset,
  UsersRound,
} from "lucide-react";
import { useLocale } from "next-intl";

import type { AboutFeature } from "./about-features.data";

interface AboutFeatureItemProps {
  feature: AboutFeature;
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
  hasDivider = false,
}: AboutFeatureItemProps) {
  const locale = useLocale();
  const isRTL = locale === "fa";

  const Icon = featureIcons[feature.icon];

  const title = isRTL
    ? feature.title.fa
    : feature.title.en;

  const description = isRTL
    ? feature.description.fa
    : feature.description.en;

  return (
    <article
      className={[
        "relative flex min-h-[145px] items-start gap-5 py-6",
        "px-8 first:ps-0 last:pe-0",
        hasDivider
          ? "after:bg-border after:absolute after:inset-y-3 after:end-0 after:w-px"
          : "",
      ].join(" ")}
    >
      <div className="border-border flex size-14 shrink-0 items-center justify-center border">
        <Icon
          className="text-custom-primary size-9"
          strokeWidth={1.5}
        />
      </div>

      <div className="min-w-0 ">
        <h3 className="text-foreground text-[16px] leading-6 font-semibold">
          {title}
        </h3>

        <p className="text-muted-foreground mt-3 max-w-[260px] text-[14px] leading-7">
          {description}
        </p>
      </div>
    </article>
  );
}