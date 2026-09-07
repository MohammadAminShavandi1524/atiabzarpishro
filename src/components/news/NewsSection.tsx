"use client";

import Image from "next/image";

interface NewsSectionProps {
  title: string;
  paragraphs: string[];
  image?: string | null;
}

export function NewsSection({ title, paragraphs, image }: NewsSectionProps) {
  return (
    <section className="mb-12 last:mb-0 sm:mb-14 md:mb-16">
      {/* Title */}
      <h2 className="text-foreground mb-5 text-[20px] leading-8 font-semibold sm:mb-6 sm:text-[22px] sm:leading-8.5 xl:text-[24px] xl:leading-9">
        {title}
      </h2>

      {/* Image */}
      {image && (
        <div className="border-border relative mb-6 aspect-[16/9] w-full overflow-hidden border sm:mb-7">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 1023px) 100vw, 65vw"
            className="object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="space-y-4 sm:space-y-5">
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="text-muted-foreground text-justify text-sm leading-7 sm:text-[15px] sm:leading-7.5 xl:text-base xl:leading-8"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
