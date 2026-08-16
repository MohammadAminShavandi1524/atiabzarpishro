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
        });

        gsap.set(indicatorRef.current, {
          scaleY: isOpen ? 1 : 0,
        });

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
        onClick={onToggle}
        className={[
          "flex w-full cursor-pointer items-start gap-7 py-8 text-start",
          "transition-[padding] duration-500 ease-out",
          isOpen ? "ps-5" : "ps-0",
        ].join(" ")}
      >
        {/* Number */}
        <span
          className={[
            "mt-1.5 shrink-0 text-sm font-medium transition-colors duration-300",
            isOpen
              ? "text-custom-primary"
              : "text-muted-foreground group-hover:text-custom-primary",
          ].join(" ")}
        >
          {String(id).padStart(2, "0")}
        </span>

        {/* Question Content */}
        <div className="flex flex-1 items-start justify-between gap-8">
          <h3
            className={[
              "max-w-3xl text-lg leading-8 font-medium transition-colors duration-300",
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
              "flex size-10 shrink-0 items-center justify-center border",
              "transition-[color,background-color,border-color] duration-300",
              isOpen
                ? "border-custom-primary bg-custom-primary text-white"
                : "border-border text-foreground group-hover:border-custom-primary group-hover:text-custom-primary",
            ].join(" ")}
          >
            {isOpen ? <Minus size={18} /> : <Plus size={18} />}
          </span>
        </div>
      </button>

      {/* Answer */}
      <div ref={answerRef} className="h-0 overflow-hidden">
        <div ref={answerInnerRef} className="ps-17 pe-16 pb-9 opacity-0">
          <p className="text-muted-foreground max-w-3xl text-justify text-base leading-8">
            {answer}
          </p>
        </div>
      </div>
    </article>
  );
}
