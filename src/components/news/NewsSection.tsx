"use client";

import Image from "next/image";

interface NewsSectionProps {
  title?: string | null;
  paragraphs?: Array<string | null | undefined>;
  image?: string | null;
}

export function NewsSection({
  title,
  paragraphs = [],
  image,
}: NewsSectionProps) {
  const hasTitle = Boolean(title?.trim());

  const validParagraphs = paragraphs.filter(
    (paragraph): paragraph is string =>
      typeof paragraph === "string" && paragraph.trim().length > 0,
  );

  const hasDescription = validParagraphs.length > 0;

  const hasImage = Boolean(image);

  if (!hasTitle && !hasDescription && !hasImage) {
    return null;
  }

  return (
    <section className="mb-12 last:mb-0 sm:mb-14 md:mb-16">
      {/* Title */}
      {hasTitle && (
        <h2 className="text-foreground mb-5 text-[20px] leading-8 font-semibold sm:mb-6 sm:text-[22px] sm:leading-8.5 xl:text-[24px] xl:leading-9">
          {title}
        </h2>
      )}

      {/* Description */}
      {hasDescription && (
        <div
          className={
            hasImage
              ? "mb-6 space-y-4 sm:mb-7 sm:space-y-5"
              : "space-y-4 sm:space-y-5"
          }
        >
          {validParagraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-muted-foreground text-justify text-sm leading-7 sm:text-[15px] sm:leading-7.5 xl:text-base xl:leading-8"
            >
              {paragraph}
            </p>
          ))}
        </div>
      )}

      {/* Image */}
      {hasImage && (
        <div className="border-border relative aspect-[16/9] w-full overflow-hidden border">
          <Image
            src={image!}
            alt={title?.trim() || "News image"}
            fill
            sizes="(max-width: 1023px) 100vw, 65vw"
            className="object-cover"
          />
        </div>
      )}
    </section>
  );
}
