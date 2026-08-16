"use client";

import { useEffect, useState } from "react";

import { Copy, Linkedin, Send, XIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

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
    <section className="border-border mt-20 border-t pt-12">
      <div className="grid grid-cols-[1fr_0.7fr] gap-16">
        {/* Tags */}
        <div>
          <span className="text-muted-foreground text-sm font-medium tracking-wider">
            {t("tagsTitle")}
          </span>

          <p className="text-muted-foreground mt-3 max-w-xl text-sm leading-7">
            {t("tagsDescription")}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="border-border text-foreground border px-3 py-2 text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Share */}
        <div className="border-border border-s ps-10">
          <span className="text-muted-foreground text-sm font-medium tracking-wider">
            {t("shareTitle")}
          </span>

          <p className="text-muted-foreground mt-3 max-w-md text-sm leading-7">
            {t("shareDescription")}
          </p>

          <div className="mt-6 flex items-center gap-3">
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
              className="border-border text-muted-foreground hover:border-custom-primary hover:text-custom-primary flex size-11 items-center justify-center border transition-colors duration-300"
            >
              <Linkedin className="size-4.5" />
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
              className="border-border text-muted-foreground hover:border-custom-primary hover:text-custom-primary flex size-11 items-center justify-center border transition-colors duration-300"
            >
              <XIcon className="size-4.5" />
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
              className="border-border text-muted-foreground hover:border-custom-primary hover:text-custom-primary flex size-11 items-center justify-center border transition-colors duration-300"
            >
              <Send className="size-4.5" />
            </Link>

            {/* Copy */}
            <button
              type="button"
              onClick={handleCopy}
              aria-label="Copy news link"
              className="border-border text-muted-foreground hover:border-custom-primary hover:text-custom-primary flex size-11 cursor-pointer items-center justify-center border transition-colors duration-300"
            >
              <Copy className="size-4.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
