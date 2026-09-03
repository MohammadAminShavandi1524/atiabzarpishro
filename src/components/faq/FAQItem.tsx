"use client";

import { useRef } from "react";

import { Minus, Plus } from "lucide-react";
import { useLocale } from "next-intl";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type FAQItemProps = {
  id: number;
  index: number;

  question: string;
  answer: string;

  isOpen: boolean;

  hoveredIndex: number | null;
  onHoverChange: (index: number | null) => void;

  onToggle: () => void;
};

export default function FAQItem({
  id,
  index,
  question,
  answer,
  isOpen,
  hoveredIndex,
  onHoverChange,
  onToggle,
}: FAQItemProps) {
  const locale = useLocale();
  const isRTL = locale === "fa";

  const articleRef = useRef<HTMLElement>(null);
  const answerRef = useRef<HTMLDivElement>(null);
  const answerInnerRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const toggleRef = useRef<HTMLSpanElement>(null);

  const highlightOwnBottom = !isOpen && hoveredIndex === index;
  const highlightAsNextTop = hoveredIndex === index + 1;
  const highlightBoundary = highlightOwnBottom || highlightAsNextTop;

  const handleMouseEnter = () => {
    if (isOpen) return;

    onHoverChange(index);
  };

  const handleMouseLeave = () => {
    if (hoveredIndex === index) {
      onHoverChange(null);
    }
  };

  useGSAP(
    () => {
      if (
        !answerRef.current ||
        !answerInnerRef.current ||
        !indicatorRef.current ||
        !toggleRef.current
      ) {
        return;
      }

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) {
        gsap.set(answerRef.current, {
          height: isOpen ? "auto" : 0,
        });

        gsap.set(answerInnerRef.current, {
          opacity: isOpen ? 1 : 0,
          y: 0,
        });

        gsap.set(indicatorRef.current, {
          scaleY: isOpen ? 1 : 0,
        });

        gsap.set(toggleRef.current, {
          scale: 1,
        });

        ScrollTrigger.refresh();

        return;
      }

      const timeline = gsap.timeline({
        defaults: {
          overwrite: "auto",
        },

        onComplete: () => {
          ScrollTrigger.refresh();
        },
      });

      if (isOpen) {
        timeline
          .to(
            indicatorRef.current,
            {
              scaleY: 1,
              duration: 0.4,
              ease: "power3.out",
            },
            0,
          )
          .to(
            answerRef.current,
            {
              height: "auto",
              duration: 0.55,
              ease: "power3.inOut",
            },
            0,
          )
          .fromTo(
            answerInnerRef.current,
            {
              opacity: 0,
              y: 14,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.45,
              ease: "power3.out",
            },
            0.12,
          )
          .fromTo(
            toggleRef.current,
            {
              scale: 0.94,
            },
            {
              scale: 1,
              duration: 0.35,
              ease: "power3.out",
            },
            0,
          );
      } else {
        timeline
          .to(
            answerInnerRef.current,
            {
              opacity: 0,
              y: 8,
              duration: 0.25,
              ease: "power2.in",
            },
            0,
          )
          .to(
            answerRef.current,
            {
              height: 0,
              duration: 0.45,
              ease: "power3.inOut",
            },
            0.05,
          )
          .to(
            indicatorRef.current,
            {
              scaleY: 0,
              duration: 0.3,
              ease: "power2.in",
            },
            0.05,
          );
      }
    },
    {
      scope: articleRef,
      dependencies: [isOpen],
    },
  );

  return (
    <article
      ref={articleRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="faq-item group relative"
    >
      {/* Single Bottom Boundary */}
      <span className="bg-border pointer-events-none absolute inset-x-0 bottom-0 h-px" />

      <span
        className={[
          "bg-custom-primary pointer-events-none absolute inset-x-0 bottom-0 z-10 h-0.5",
          "scale-x-0 transition-transform duration-700",
          "ease-[cubic-bezier(0.65,0,0.35,1)]",
          highlightBoundary && "scale-x-100",
          isRTL ? "origin-right" : "origin-left",
        ]
          .filter(Boolean)
          .join(" ")}
      />

      {/* Active Indicator */}
      <span
        ref={indicatorRef}
        className="bg-custom-primary absolute inset-y-0 start-0 z-20 w-0.5 origin-top scale-y-0"
      />

      {/* Question */}
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${id}`}
        onClick={onToggle}
        className={[
          "flex w-full cursor-pointer items-start gap-3 py-5 text-start sm:gap-4 sm:py-6 md:gap-5 md:py-7 lg:gap-4 lg:py-6 xl:gap-6 xl:py-7 2xl:gap-7 2xl:py-8",
          "transition-[padding] duration-500 ease-out",
          isOpen ? "ps-5 sm:ps-3 md:ps-4 lg:ps-3 xl:ps-4 2xl:ps-5" : "ps-0",
        ].join(" ")}
      >
        {/* Number */}
        <span
          className={[
            "xss:text-xs mt-1 shrink-0 text-[11px] font-medium transition-colors duration-300 sm:mt-1.5 sm:text-[13px] xl:text-sm max-sm:hidden",
            isOpen
              ? "text-custom-primary"
              : "text-muted-foreground group-hover:text-custom-primary",
          ].join(" ")}
        >
          {String(id).padStart(2, "0")}
        </span>

        {/* Question Content */}
        <div className="xss:gap-3 flex min-w-0 flex-1 items-start justify-between gap-2.5 sm:gap-4 md:gap-5 lg:gap-4 xl:gap-6 2xl:gap-8">
          <h3
            className={[
              "xss:text-[15px] xss:leading-7 min-w-0 text-[14px] leading-6.5 font-medium transition-colors duration-300 sm:text-base md:leading-7.5 lg:text-[15px] lg:leading-7 xl:text-base xl:leading-7.5 2xl:max-w-3xl 2xl:text-lg 2xl:leading-8",
              isOpen
                ? "text-custom-primary"
                : "text-foreground group-hover:text-custom-primary",
            ].join(" ")}
          >
            {question}
          </h3>

          {/* Toggle */}
          <span
            ref={toggleRef}
            className={[
              "flex size-8.5 shrink-0 items-center justify-center border sm:size-9 md:size-10 lg:size-9 xl:size-10",
              "transition-[color,background-color,border-color] duration-300",
              isOpen
                ? "border-custom-primary bg-custom-primary text-white"
                : "border-border text-foreground group-hover:border-custom-primary group-hover:text-custom-primary",
            ].join(" ")}
          >
            {isOpen ? (
              <Minus className="size-4 2xl:size-[18px]" />
            ) : (
              <Plus className="size-4 2xl:size-[18px]" />
            )}
          </span>
        </div>
      </button>

      {/* Answer */}
      <div
        id={`faq-answer-${id}`}
        ref={answerRef}
        className="h-0 overflow-hidden"
      >
        <div
          ref={answerInnerRef}
          className="xss:ps-6.5 ps-5.5 pe-1 pb-6 opacity-0 sm:ps-11 sm:pe-4 sm:pb-7 md:ps-13 md:pe-8 md:pb-8 lg:ps-12 lg:pe-8 xl:ps-14 xl:pe-12 2xl:ps-17 2xl:pe-16 2xl:pb-9"
        >
          <p className="text-muted-foreground max-w-3xl text-justify text-sm leading-7 sm:text-[15px] sm:leading-7.5 lg:text-sm xl:text-[15px] 2xl:text-base 2xl:leading-8">
            {answer}
          </p>
        </div>
      </div>
    </article>
  );
}
