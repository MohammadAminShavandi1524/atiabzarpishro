"use client";

import Image from "next/image";
import Link from "next/link";

import { useLocale } from "next-intl";

import type { PartnerItem } from "@/components/landing/partners/partners.data";

interface PartnerDropdownItemProps {
  partner: PartnerItem;
}

export default function PartnerDropdownItem({
  partner,
}: PartnerDropdownItemProps) {
  const locale = useLocale();

  return (
    <Link
      href={`/${locale}/products?brand=${partner.id}`}
      className="partner-item group/item hover:bg-custom-primary/[0.045] relative flex items-center gap-2 px-4 py-3 transition-colors duration-200"
    >
      {/* Hover Line */}
      <span className="bg-custom-primary absolute inset-y-0 start-0 w-[2px] scale-y-0 transition-transform duration-200 group-hover/item:scale-y-100" />

      {/* Logo */}
      <div className="relative flex h-10 w-12 shrink-0 items-center justify-center overflow-hidden">
        <div
          className="relative h-6 w-9"
          style={{
            transform: `scale(${partner.logoScale})`,
          }}
        >
          <Image
            src={partner.logo}
            alt={partner.name}
            fill
            sizes="48px"
            className="object-contain"
          />
        </div>
      </div>

      {/* Name */}
      <span
        lang="en"
        className="text-foreground group-hover/item:text-custom-primary min-w-0 truncate text-[14px] font-medium transition-colors duration-200"
      >
        {partner.name}
      </span>
    </Link>
  );
}
