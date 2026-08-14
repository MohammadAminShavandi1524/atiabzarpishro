"use client";

import { forwardRef } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { englishToPersianNumber } from "@/lib/utils";

import { featuredProducts } from "./featured-products.data";
import FeaturedProductVisual from "./FeaturedProductVisual";

interface FeaturedProductsStageProps {
  isRTL: boolean;
  t: (key: string) => string;
}

const FeaturedProductsStage = forwardRef<
  HTMLDivElement,
  FeaturedProductsStageProps
>(({ isRTL, t }, ref) => {
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div ref={ref} className="relative flex h-screen w-full overflow-hidden">
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <span className="featured-horizontal-line bg-border absolute inset-x-0 top-[18%] h-px" />

        <span className="featured-horizontal-line bg-border absolute inset-x-0 bottom-[18%] h-px" />

        <span className="featured-vertical-start bg-border absolute inset-y-0 start-[5%] w-px" />

        <span className="featured-vertical-end bg-border absolute inset-y-0 end-[5%] w-px" />

        <div className="featured-background-index text-foreground/[0.022] absolute end-[2%] top-1/2 -translate-y-1/2 text-[clamp(14rem,28vw,34rem)] leading-none font-semibold tracking-[-0.08em] select-none">
          {isRTL ? englishToPersianNumber("04") : "04"}
        </div>
      </div>

      {/* Content */}
      <div className="w90 relative z-10 flex h-full flex-col">
        {/* Top */}
        <div className="flex h-[18%] shrink-0 items-end justify-between pb-6">
          <div className="featured-eyebrow flex items-center gap-4">
            <span className="featured-eyebrow-line bg-custom-primary block h-px w-10" />

            <span className="text-muted-foreground text-sm font-medium tracking-[0.08em]">
              {t("eyebrow")}
            </span>
          </div>

          <div
            lang="en"
            dir="ltr"
            className="featured-chapter text-muted-foreground hidden items-center gap-3 text-xs tracking-[0.12em] uppercase lg:flex"
          >
            <span>ATI / 04</span>

            <span className="featured-chapter-line bg-border block h-px w-8" />

            <span>FEATURED PRODUCTS</span>
          </div>
        </div>

        {/* Main */}
        <div className="relative min-h-0 flex-1">
          <div className="featured-main-divider bg-border absolute inset-y-0 start-[42%] w-px opacity-50" />

          <div className="relative h-full">
            {featuredProducts.map((item) => (
              <FeaturedProductVisual
                key={item.id}
                item={item}
                t={t}
              />
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="relative grid h-[18%] shrink-0 grid-cols-[0.42fr_1.58fr]">
          <div className="flex items-center">
            <div
              lang="en"
              dir="ltr"
              className="featured-counter flex items-center gap-4"
            >
              <span className="featured-current-index text-foreground text-xl font-medium">
                01
              </span>

              <span className="bg-border block h-px w-16" />

              <span className="text-muted-foreground text-xs">
                03
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between ps-[6vw]">
            {/* Product steps */}
            <div
              lang="en"
              dir="ltr"
              className="featured-steps flex items-center gap-7"
            >
              {featuredProducts.map((item, index) => (
                <span
                  key={item.id}
                  data-featured-step={index}
                  className="featured-step text-muted-foreground text-xs"
                >
                  {item.index}
                </span>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/products"
              className="featured-view-all group text-foreground flex items-center gap-4 text-sm font-medium"
            >
              <span>{t("viewAll")}</span>

              <span className="border-border group-hover:border-custom-primary flex size-10 items-center justify-center border transition-colors duration-300">
                <ArrowIcon
                  size={17}
                  strokeWidth={1.8}
                  className="text-custom-primary"
                />
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Side label */}
      <div
        lang="en"
        dir="ltr"
        aria-hidden="true"
        className="featured-side-label text-muted-foreground/30 absolute top-1/2 hidden -translate-y-1/2 rotate-90 text-[9px] tracking-[0.16em] xl:block ltr:right-[1.5%] rtl:left-[1.5%]"
      >
        ATI ABZAR PISHRO — PRODUCT ENGINEERING / 04
      </div>
    </div>
  );
});

FeaturedProductsStage.displayName = "FeaturedProductsStage";

export default FeaturedProductsStage;