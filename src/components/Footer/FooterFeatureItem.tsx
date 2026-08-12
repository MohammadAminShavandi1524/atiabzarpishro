"use client";

import { Factory, Globe2, HardHat, MessagesSquare } from "lucide-react";
import { useLocale } from "next-intl";
import { useRef } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Feature = {
  image: string;
  id: string;
  title: {
    en: string;
    fa: string;
  };
  description: {
    en: string;
    fa: string;
  };
};

type Props = {
  feature: Feature;
};

const featureIcons = {
  factory: Factory,
  globe: Globe2,
  support: MessagesSquare,
  team: HardHat,
} as const;

export default function FooterFeatureItem({ feature }: Props) {
  const locale = useLocale();
  const isRTL = locale === "fa";

  const iconRef = useRef<SVGSVGElement>(null);

  const title = isRTL ? feature.title.fa : feature.title.en;
  const description = isRTL ? feature.description.fa : feature.description.en;

  const handleEnter = () => {
    if (!iconRef.current) return;

    gsap.to(iconRef.current, {
      scale: 1.06,
      duration: 0.35,
      ease: "power2.out",
    });
  };

  const handleLeave = () => {
    if (!iconRef.current) return;

    gsap.to(iconRef.current, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <article
      dir={isRTL ? "rtl" : "ltr"}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="group relative my-8 flex flex-1 items-start gap-x-5 px-8"
    >
      {/* image */}

      <div className="relative mt-1 size-15 shrink-0">
        <Image src={feature.image} alt={feature.id} fill />
      </div>

      {/* Content */}
      <div className="min-w-0">
        <h3
          className={cn(
            "text-base font-medium",
            "tracking-wide",
            "text-footer-foreground",
            "transition-colors duration-300",
            "group-hover:text-custom-primary",
          )}
        >
          {title}
        </h3>

        <p className={cn("text-footer-muted mt-2 text-sm leading-6")}>
          {description}
        </p>
      </div>
    </article>
  );
}
