"use client";

import Image from "next/image";
import Link from "next/link";

import type { CatalogueItem } from "./catalogues.data";

interface CatalogueCardProps {
  catalogue: CatalogueItem;
}

export default function CatalogueCard({ catalogue }: CatalogueCardProps) {
  return (
    <article className="group min-w-0">
      <Link
        href={catalogue.pdf}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {/* Cover */}
        <div className="border-border bg-card-secondary relative aspect-[210/297] w-full overflow-hidden border">
          <Image
            src={catalogue.image}
            alt={catalogue.title}
            fill
            sizes="25vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.015]"
          />
        </div>

        {/* Meta */}
        <div className="pt-5 text-center">
          <span
            lang="en"
            dir="ltr"
            className="text-muted-foreground block text-[14px]"
          >
            {catalogue.date}
          </span>

          <h2
            lang="en"
            dir="ltr"
            className="text-foreground group-hover:text-custom-primary mx-auto mt-3 max-w-[320px] text-[21px] leading-7 font-medium transition-colors duration-300"
          >
            {catalogue.title}
          </h2>
        </div>
      </Link>
    </article>
  );
}
