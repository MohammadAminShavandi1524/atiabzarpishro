"use client";

import { useRef } from "react";

import { useTranslations } from "next-intl";
import { PackageSearch } from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import ProductCard from "./ProductCard";

import type { ProductItem } from "./products.data";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface ProductsGridProps {
  products: ProductItem[];
}

export default function ProductsGrid({ products }: ProductsGridProps) {
  const t = useTranslations("Products");

  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!rootRef.current) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) return;

      if (!products.length) {
        gsap.fromTo(
          rootRef.current,
          {
            opacity: 0,
            y: 24,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: rootRef.current,
              start: "top 88%",
              once: true,
            },
          },
        );

        return;
      }

      const cards =
        rootRef.current.querySelectorAll<HTMLElement>(".product-card-item");

      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 28,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.06,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 86%",
            once: true,
          },
        },
      );
    },
    {
      scope: rootRef,
      dependencies: [products.length],
    },
  );

  if (!products.length) {
    return (
      <div
        ref={rootRef}
        className="border-border-secondary flex min-h-[280px] flex-col items-center justify-center border px-5 text-center sm:min-h-[320px] sm:px-8 lg:min-h-[360px]"
      >
        <PackageSearch
          className="text-muted-foreground size-8 sm:size-9"
          strokeWidth={1.4}
        />

        <h3 className="text-foreground mt-4 text-[15px] font-semibold sm:text-base">
          {t("empty.title")}
        </h3>

        <p className="text-muted-foreground mt-2 max-w-sm text-sm leading-6">
          {t("empty.description")}
        </p>
      </div>
    );
  }

  return (
    <div
      ref={rootRef}
      className="s:grid-cols-2 grid min-w-0 grid-cols-1 gap-4 md:grid-cols-3 2xl:grid-cols-4"
    >
      {products.map((product) => (
        <div key={product.id} className="product-card-item min-w-0">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}
