"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import { Copy, Linkedin, Send, XIcon } from "lucide-react";

import { useTranslations } from "next-intl";

interface ArticleFooterProps {
  tags: string[];
}

export default function ArticleFooter({ tags }: ArticleFooterProps) {
  const t = useTranslations("News.ArticleFooter");

  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  const handleCopy = async () => {
    if (!shareUrl) return;

    await navigator.clipboard.writeText(shareUrl);
  };

  return (
    <section className="border-border mt-14 border-t pt-10 sm:mt-16 sm:pt-12 lg:mt-20">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_0.7fr] lg:gap-10 xl:gap-12 2xl:gap-16">
        {/* Tags */}
        <div>
          <span className="text-muted-foreground text-xs font-medium tracking-wider sm:text-sm">
            {t("tagsTitle")}
          </span>

          <p className="text-muted-foreground mt-3 max-w-xl text-justify text-sm leading-7">
            {t("tagsDescription")}
          </p>

          <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
            {tags.map((tag) => (
              <span
                key={tag}
                className="border-border text-foreground border px-3 py-2 text-xs sm:text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Share */}
        <div className="border-border border-t pt-8 lg:border-s lg:border-t-0 lg:ps-8 lg:pt-0 xl:ps-10">
          <span className="text-muted-foreground text-xs font-medium tracking-wider sm:text-sm">
            {t("shareTitle")}
          </span>

          <p className="text-muted-foreground mt-3 max-w-md text-justify text-sm leading-7">
            {t("shareDescription")}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-2.5 sm:mt-6 sm:gap-3">
            {/* LinkedIn */}
            <Link
              href={
                shareUrl
                  ? `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                      shareUrl,
                    )}`
                  : "#"
              }
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on LinkedIn"
              className="border-border text-muted-foreground hover:border-custom-primary hover:text-custom-primary flex size-10 items-center justify-center border transition-colors duration-300 sm:size-11"
            >
              <Linkedin className="size-4 sm:size-4.5" />
            </Link>

            {/* X */}
            <Link
              href={
                shareUrl
                  ? `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                      shareUrl,
                    )}`
                  : "#"
              }
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on X"
              className="border-border text-muted-foreground hover:border-custom-primary hover:text-custom-primary flex size-10 items-center justify-center border transition-colors duration-300 sm:size-11"
            >
              <XIcon className="size-4 sm:size-4.5" />
            </Link>

            {/* Telegram */}
            <Link
              href={
                shareUrl
                  ? `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}`
                  : "#"
              }
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Telegram"
              className="border-border text-muted-foreground hover:border-custom-primary hover:text-custom-primary flex size-10 items-center justify-center border transition-colors duration-300 sm:size-11"
            >
              <Send className="size-4 sm:size-4.5" />
            </Link>

            {/* Copy */}
            <button
              type="button"
              onClick={handleCopy}
              aria-label="Copy news link"
              className="border-border text-muted-foreground hover:border-custom-primary hover:text-custom-primary flex size-10 cursor-pointer items-center justify-center border transition-colors duration-300 sm:size-11"
            >
              <Copy className="size-4 sm:size-4.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
