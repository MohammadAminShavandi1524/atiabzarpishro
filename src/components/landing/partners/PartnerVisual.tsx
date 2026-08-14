"use client";

import Image from "next/image";

import type { PartnerItem } from "./partners.data";

interface PartnerVisualProps {
  partner: PartnerItem;
  t: (key: string) => string;
}

export default function PartnerVisual({
  partner,
  t,
}: PartnerVisualProps) {
  return (
    <article
      data-partner-item={partner.index}
      className="partner-item pointer-events-none absolute inset-0"
    >
      <div className="flex h-full flex-col justify-center ps-[7vw] pe-[4vw]">
        {/* Logo */}
        <div className="partner-logo-plate border-border relative flex h-[145px] w-[280px] items-center justify-center border">
          <span className="partner-logo-corner bg-custom-primary absolute start-[-1px] top-[-1px] size-1.5" />

          <span className="partner-logo-corner bg-custom-primary absolute end-[-1px] bottom-[-1px] size-1.5" />

          <div
            className="partner-logo relative"
            style={{
              width: `${partner.logoScale * 100}%`,
              height: `${partner.logoScale * 100}%`,
            }}
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              fill
              sizes="280px"
              className="object-contain"
            />
          </div>
        </div>

        {/* Info */}
        <div className="mt-9 max-w-[680px]">
          <div
            lang="en"
           
            className="partner-code text-custom-primary text-[11px] tracking-[0.16em]"
          >
            PARTNER / {partner.index}
          </div>

          <div className="mt-4 overflow-hidden">
            <h2
              lang="en"
              
              className="partner-name text-foreground text-[clamp(2.4rem,3.7vw,4.8rem)] leading-[1.03] font-semibold tracking-[-0.04em]"
            >
              {partner.name}
            </h2>
          </div>

          <p className="partner-description text-muted-foreground mt-6 max-w-[620px] text-justify text-[16px] leading-8">
            {t(partner.descriptionKey)}
          </p>
        </div>
      </div>
    </article>
  );
}