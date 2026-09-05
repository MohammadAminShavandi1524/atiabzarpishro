"use client";

import { useRef } from "react";

import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { cn } from "@/lib/utils";

import type { HeroCarouselItem } from "./hero-carousel.types";

gsap.registerPlugin(useGSAP);

type Props = {
  item: HeroCarouselItem;
  locale: "fa" | "en";
  isActive: boolean;
};

const mobileObjectPositions: Record<string, string> = {
  "1": "50% 50%",
  "2": "55% 50%",
  "3": "55% 50%",
  "4": "72% 50%",
  "5": "70% 50%",
  "6": "70% 50%",
  "8": "68% 50%",
  "9": "52% 50%",
  "10": "76% 50%",
  "11": "68% 50%",
};

const mobileLogoSizes: Record<string, string> = {
  "3": "size-[86px]",
  "4": "size-[86px]",
  "8": "size-[82px]",
  "9": "size-[86px]",
  "10": "size-[82px]",
};

const desktopLogoSizes: Record<string, string> = {
  "3": "size-40",
  "4": "size-40",
  "8": "size-36",
  "9": "size-40",
  "10": "size-36",
};

export default function HeroSlide({ item, locale, isActive }: Props) {
  const isRTL = locale === "fa";

  const rootRef = useRef<HTMLElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  const label = isRTL ? item.faLabel : item.enLabel;
  const title = isRTL ? item.faTitle : item.enTitle;
  const description = isRTL ? item.faDescription : item.enDescription;

  const imageSrc = item.flipedImage
    ? isRTL
      ? item.flipedImage
      : item.image
    : item.image;

  const mobileObjectPosition =
    item.id === "7"
      ? isRTL
        ? "28% 50%"
        : "72% 50%"
      : (mobileObjectPositions[item.id] ?? "50% 50%");

  const shouldFlipImage = !["1", "2", "7"].includes(item.id) && isRTL;

  const mobileLogoSize = mobileLogoSizes[item.id] ?? "size-[74px]";

  const desktopLogoSize = desktopLogoSizes[item.id] ?? "size-30";

  useGSAP(
    () => {
      if (!isActive || !rootRef.current || !imageWrapperRef.current) {
        return;
      }

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) return;

      const isMobile = window.matchMedia("(max-width: 39.999rem)").matches;

      const isDesktop = window.matchMedia("(min-width: 64rem)").matches;

      const logoBlocks =
        rootRef.current.querySelectorAll<HTMLElement>(".hero-logo-block");

      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      /*
       * Image
       */
      if (isDesktop) {
        timeline.fromTo(
          imageWrapperRef.current,
          {
            opacity: 0.92,
            scale: 1.02,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.7,
            ease: "power2.out",
          },
          0,
        );
      } else {
        timeline.fromTo(
          imageWrapperRef.current,
          {
            opacity: isMobile ? 0.88 : 0.92,
          },
          {
            opacity: 1,
            duration: isMobile ? 0.26 : 0.35,
            ease: "power1.out",
          },
          0,
        );
      }

      /*
       * Logo
       */
      timeline.fromTo(
        logoBlocks,
        {
          opacity: 0,
          y: isMobile ? 7 : 10,
        },
        {
          opacity: 1,
          y: 0,
          duration: isMobile ? 0.26 : 0.36,
        },
        isMobile ? 0.02 : 0.06,
      );

      /*
       * Title
       */
      if (titleRef.current) {
        timeline.fromTo(
          titleRef.current,
          {
            opacity: 0,
            x: isMobile ? (isRTL ? 10 : -10) : 0,
            y: isMobile ? 4 : 15,
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: isMobile ? 0.3 : 0.42,
            ease: "power3.out",
          },
          isMobile ? 0.05 : 0.1,
        );
      }

      /*
       * Description
       */
      if (descriptionRef.current) {
        timeline.fromTo(
          descriptionRef.current,
          {
            opacity: 0,
            y: isMobile ? 7 : 12,
          },
          {
            opacity: 1,
            y: 0,
            duration: isMobile ? 0.28 : 0.38,
          },
          isMobile ? 0.11 : 0.18,
        );
      }

      /*
       * CTA
       */
      if (ctaRef.current) {
        timeline.fromTo(
          ctaRef.current,
          {
            opacity: 0,
            y: isMobile ? 6 : 10,
          },
          {
            opacity: 1,
            y: 0,
            duration: isMobile ? 0.25 : 0.34,
          },
          isMobile ? 0.16 : 0.24,
        );
      }
    },
    {
      scope: rootRef,
      dependencies: [isActive, locale, item.id],
      revertOnUpdate: true,
    },
  );

  return (
    <article
      ref={rootRef}
      className={cn(
        "hero-slide relative min-w-0 shrink-0 grow-0 basis-full overflow-hidden",
        "h-[590px]",
        "xss:h-[610px]",
        "sm:h-[640px]",
        "md:h-[670px]",
        "lg:h-[calc(100svh-154px)]",
        "lg:min-h-[620px]",
        "lg:max-h-[760px]",
      )}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background Image */}
      <div ref={imageWrapperRef} className="absolute inset-0 overflow-hidden">
        <Image
          src={imageSrc}
          alt={title || label || item.brandName || "ATI Abzar Pishro"}
          fill
          priority={item.id === "1"}
          sizes="100vw"
          style={{
            objectPosition: mobileObjectPosition,
          }}
          className={cn(
            "object-cover lg:object-center",
            shouldFlipImage && "-scale-x-100",
          )}
        />
      </div>

      {/* Mobile Readability */}
      <div className="pointer-events-none absolute inset-0 bg-black/20 lg:hidden" />

      {/* Main Readable Overlay */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0",
          "bg-gradient-to-b from-black/15 via-black/35 to-black/85",
          "lg:bg-gradient-to-r lg:from-black/75 lg:via-black/35 lg:to-transparent",
          isRTL &&
            "lg:bg-gradient-to-l lg:from-black/75 lg:via-black/35 lg:to-transparent",
        )}
      />

      {/* Mobile Side Gradient */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 lg:hidden",
          "bg-gradient-to-r from-black/55 via-black/15 to-transparent",
          isRTL && "bg-gradient-to-l from-black/55 via-black/15 to-transparent",
        )}
      />

      {/* Desktop Bottom Gradient */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-1/2 bg-gradient-to-t from-black/30 to-transparent lg:block" />

      {/* Content */}
      <div className="w90 relative z-10 mx-auto flex h-full items-center pt-8 pb-[86px] sm:pb-[94px] lg:pt-0 lg:pb-[92px]">
        <div className="w-full max-w-[680px] text-white sm:max-w-[620px] lg:max-w-[680px]">
          {/* Logo */}
          <div className="flex justify-start">
            {/* Mobile / Tablet Logo */}
            <div
              dir="ltr"
              className={cn(
                "hero-logo-block flex items-center lg:hidden",
                item.className,
              )}
            >
              <div className={cn("relative shrink-0", mobileLogoSize)}>
                <Image
                  src={item.logo}
                  alt={item.brandName ?? "logo"}
                  fill
                  sizes="90px"
                  className="scale-[1.45] object-contain [filter:drop-shadow(0_1px_1px_rgba(255,255,255,0.25))_drop-shadow(0_3px_6px_rgba(0,0,0,0.4))]"
                />
              </div>

              {item.brandName && (
                <div
                  lang="en"
                  dir="ltr"
                  className="-ms-2 text-[17px] font-semibold tracking-wide sm:-ms-3 sm:text-[19px]"
                >
                  {item.brandName}
                </div>
              )}
            </div>

            {/* Desktop Logo */}
            <div
              dir="ltr"
              className={cn(
                "hero-logo-block hidden items-center lg:flex",
                item.className,
              )}
            >
              <div className={cn("relative shrink-0", desktopLogoSize)}>
                <Image
                  src={item.logo}
                  alt={item.brandName ?? "logo"}
                  fill
                  sizes="160px"
                  className="scale-1.8 object-contain [filter:drop-shadow(0_1px_1px_rgba(255,255,255,0.25))_drop-shadow(0_3px_6px_rgba(0,0,0,0.4))]"
                />
              </div>

              {item.brandName && (
                <div
                  lang="en"
                  dir="ltr"
                  className="-ms-4 text-[24px] font-semibold tracking-wide"
                >
                  {item.brandName}
                </div>
              )}
            </div>
          </div>

          {/* Title */}
          {title && (
            <h2
              ref={titleRef}
              className={cn(
                "max-w-[700px] font-semibold",
                "text-[32px] leading-[1.12]",
                "xss:text-[35px]",
                "sm:text-[42px] sm:leading-[1.1]",
                "md:text-[48px]",
                "lg:text-6xl",
                "xl:text-7xl",
                "ltr:tracking-[-0.03em]",
                "lg:ltr:tracking-tight",
                isRTL && "font-IRANYekanX leading-[1.35]",
              )}
            >
              {title}
            </h2>
          )}

          {/* Description */}
          {description && (
            <p
              ref={descriptionRef}
              className={cn(
                "max-w-[650px] text-justify text-white/80",
                "mt-6 text-[13px] leading-6.5",
                "xss:text-[14px] xss:leading-7",
                "sm:mt-7 sm:max-w-[580px] sm:text-[15px] sm:leading-7.5",
                "md:max-w-[620px]",
                "lg:mt-10 lg:text-start lg:text-base lg:leading-8",
                isRTL && "font-IRANYekanX",
              )}
            >
              {description}
            </p>
          )}

          {/* CTA */}
          {item.href && (
            <Link
              ref={ctaRef}
              href={item.href}
              className={cn(
                "group mt-6 inline-flex items-center gap-x-2.5",
                "bg-accent rounded-md px-4 py-2.5",
                "text-accent-foreground text-xs font-medium",
                "transition-colors duration-300",
                "sm:mt-7 sm:gap-x-3 sm:px-5 sm:py-3 sm:text-sm",
                "hover:bg-primary-hover",
              )}
            >
              <span>{isRTL ? "مشاهده بیشتر" : "Explore More"}</span>

              <ArrowUpRight
                className={cn("size-4", isRTL && "rotate-[270deg]")}
                strokeWidth={1.8}
              />
            </Link>
          )}
        </div>
      </div>

      {/* Edge */}
      <div className="pointer-events-none absolute inset-0 border-y border-white/10" />

      {!isActive && (
        <div className="pointer-events-none absolute inset-0 bg-black/10" />
      )}
    </article>
  );
}
