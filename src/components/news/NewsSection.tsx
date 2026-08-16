interface NewsSectionProps {
  title: string;
  paragraphs: string[];
}

export function NewsSection({ title, paragraphs }: NewsSectionProps) {
  return (
    <section className="mb-16 last:mb-0">
      {/* Title */}
      <h2 className="text-foreground mb-6 text-[24px] leading-9 font-semibold">
        {title}
      </h2>

      {/* Content */}
      <div className="space-y-5">
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="text-muted-foreground text-justify text-base leading-8"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
