"use client";

import Image from "next/image";
import Link from "next/link";

import type { PartnerItem as PartnerItemType } from "./partners.data";

interface PartnerItemProps {
  partner: PartnerItemType;
}

export default function PartnerItem({ partner }: PartnerItemProps) {
  const content = (
    <article className="group border-border xss:min-h-[165px] xss:border-e flex min-h-[150px] flex-col items-center justify-center border-b px-3 py-5 sm:min-h-[180px] sm:px-4 sm:py-6 md:min-h-[190px] lg:min-h-[200px] lg:border-0 xl:min-h-[210px] 2xl:min-h-[220px] 2xl:px-3">
      {/* Logo */}
      <div className="relative flex h-[76px] w-full items-center justify-center sm:h-[86px] md:h-[92px] xl:h-[98px] 2xl:h-[105px]">
        {/* Base logo scale */}
        <div
          style={{
            transform: `scale(${partner.logoScale})`,
          }}
        >
          {/* Hover scale */}
          <div className="relative h-[46px] w-[88px] transition-transform duration-300 ease-out sm:h-[52px] sm:w-[100px] md:h-[56px] md:w-[106px] lg:h-[58px] lg:w-[110px] lg:group-hover:scale-[1.05] xl:h-[64px] xl:w-[120px] 2xl:h-[70px] 2xl:w-[130px]">
            <Image
              src={partner.logo}
              alt={partner.name}
              fill
              sizes="(max-width: 639px) 100px, (max-width: 1279px) 120px, 160px"
              className="object-contain grayscale-0 transition-[filter] duration-300 ease-out lg:grayscale lg:group-hover:grayscale-0"
            />
          </div>
        </div>
      </div>

      {/* Name */}
      <span
        lang="en"
        dir="ltr"
        className="text-muted-foreground lg:group-hover:text-custom-primary mt-3 text-center text-[11px] font-medium tracking-[0.05em] transition-colors duration-300 sm:mt-4 sm:text-xs md:text-[13px] 2xl:mt-5 2xl:tracking-[0.06em]"
      >
        {partner.name}
      </span>
    </article>
  );

  if (!partner.website) {
    return content;
  }

  return (
    <Link
      href={partner.website}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${partner.name} website`}
      className="block min-w-0"
    >
      {content}
    </Link>
  );
}
