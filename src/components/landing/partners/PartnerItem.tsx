"use client";

import Image from "next/image";
import Link from "next/link";

import type { PartnerItem as PartnerItemType } from "./partners.data";

interface PartnerItemProps {
  partner: PartnerItemType;
}

export default function PartnerItem({ partner }: PartnerItemProps) {
  const content = (
    <article className="group flex min-h-[220px] flex-col items-center justify-center px-3 py-6">
      {/* Logo */}
      <div className="relative flex h-[105px] w-full items-center justify-center">
        {/* Base logo scale */}
        <div
          style={{
            transform: `scale(${partner.logoScale})`,
          }}
        >
          {/* Hover scale */}
          <div className="relative h-[70px] w-[130px] transition-transform duration-300 ease-out group-hover:scale-[1.05]">
            <Image
              src={partner.logo}
              alt={partner.name}
              fill
              sizes="160px"
              className="object-contain grayscale transition-[filter] duration-300 ease-out group-hover:grayscale-0"
            />
          </div>
        </div>
      </div>

      {/* Name */}
      <span
        lang="en"
        className="text-muted-foreground group-hover:text-custom-primary mt-5 text-center text-[13px] font-medium tracking-[0.06em]"
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
      className="block"
    >
      {content}
    </Link>
  );
}
