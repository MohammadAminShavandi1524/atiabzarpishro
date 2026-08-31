"use client";

import Link from "next/link";

import { ArrowLeft, Download } from "lucide-react";

import { useLocale } from "next-intl";

import type { TechNewsItem } from "./techNews.data";

interface TechNewsPreviewProps {
  item: TechNewsItem;
}

export default function TechNewsPreview({ item }: TechNewsPreviewProps) {
  const locale = useLocale();

  return (
    <section className="bg-background">
      <div className="w90 py-10">
        {/* Top */}
        <div className="border-border mb-6 flex items-center justify-between border-b pb-5">
          <div>
            <h1 className="text-foreground text-[28px] font-semibold">
              {item.title}
            </h1>

            <span className="text-muted-foreground mt-2 block text-sm">
              {item.date}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href={`/${locale}/tech-news`}
              className="border-border text-foreground hover:border-custom-primary flex h-11 items-center gap-2 border px-4 text-sm transition-colors"
            >
              <ArrowLeft size={17} strokeWidth={1.7} />
              Back
            </Link>

            <a
              href={item.pdf}
              download
              className="bg-custom-primary flex h-11 items-center gap-2 px-4 text-sm font-medium text-white"
            >
              <Download size={17} strokeWidth={1.7} />
              Download PDF
            </a>
          </div>
        </div>

        {/* PDF */}
        <div className="border-border bg-secondary-bg h-[calc(100vh-240px)] min-h-[1200px] border">
          <iframe src={item.pdf} title={item.title} className="h-full w-full" />
        </div>
      </div>
    </section>
  );
}
