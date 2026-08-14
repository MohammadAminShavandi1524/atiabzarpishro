"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

interface ContactMethodProps {
  index: string;
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  isRTL: boolean;
  external?: boolean;
}

export default function ContactMethod({
  index,
  eyebrow,
  title,
  description,
  href,
  isRTL,
  external = false,
}: ContactMethodProps) {
  const Arrow = external ? ArrowUpRight : isRTL ? ArrowLeft : ArrowRight;

  return (
    <Link
      href={href}
      className="contact-method group border-border relative grid min-h-[190px] grid-cols-[90px_1fr_auto] items-center border-t first:border-t-0"
    >
      {/* Hover line */}
      <span className="contact-method-line bg-custom-primary origin-start absolute inset-x-0 top-[-1px] h-px scale-x-0" />

      {/* Index */}
      <div
        lang="en"
      
        className="contact-method-index text-muted-foreground self-start pt-10 text-[11px] tracking-[0.14em]"
      >
        {index}
      </div>

      {/* Content */}
      <div className="py-9 pe-10">
        <span className="contact-method-eyebrow text-custom-primary text-[11px] tracking-[0.12em]">
          {eyebrow}
        </span>

        <h3 className="contact-method-title text-foreground mt-4 text-[clamp(1.6rem,2.4vw,2.8rem)] leading-[1.15] font-semibold">
          {title}
        </h3>

        <p className="contact-method-description text-muted-foreground mt-4 max-w-[560px] text-[14px] leading-7">
          {description}
        </p>
      </div>

      {/* Arrow */}
      <div className="contact-method-arrow border-border ms-8 flex h-full w-[96px] items-center justify-center border-s">
        <Arrow
          size={20}
          strokeWidth={1.5}
          className="text-muted-foreground group-hover:text-custom-primary transition-colors duration-300"
        />
      </div>
    </Link>
  );
}
