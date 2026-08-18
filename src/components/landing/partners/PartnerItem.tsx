"use client";

import Image from "next/image";

import type { PartnerItem as PartnerItemType } from "./partners.data";
import Link from "next/link";

interface PartnerItemProps {
  partner: PartnerItemType;
}

export default function PartnerItem({ partner }: PartnerItemProps) {
  const content = (
    <article className="group hover:bg-foreground/[0.015] flex min-h-[220px] flex-col items-center justify-center px-3 py-6 transition-colors duration-300">
      {/* Logo */}
      <div className="relative flex h-[105px] w-full items-center justify-center">
        <div
          className="relative h-[70px] w-[130px]"
          style={{
            transform: `scale(${partner.logoScale})`,
          }}
        >
          <Image
            src={partner.logo}
            alt={partner.name}
            fill
            sizes="160px"
            className="object-contain transition-opacity duration-300 group-hover:opacity-80"
          />
        </div>
      </div>

      {/* Name */}
      <span
        lang="en"
        className="text-muted-foreground group-hover:text-custom-primary mt-5 text-center text-[13px] font-medium tracking-[0.06em] transition-colors duration-300"
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
