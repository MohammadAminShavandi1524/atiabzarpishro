"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { LoaderCircle, PackageSearch, Search } from "lucide-react";

import { useLocale, useTranslations } from "next-intl";

import { cn } from "@/lib/utils";

import { getProducts } from "../products/products.api";
import { searchCatalog } from "./search.api";

import type { ProductItem } from "../products/products.types";

type SearchBarProps = {
  variant?: "default" | "mobile";
};

export default function SearchBar({ variant = "default" }: SearchBarProps) {
  const t = useTranslations("Header.Search");
  const locale = useLocale();

  const isMobile = variant === "mobile";
  const isRTL = locale === "fa";

  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  /*
   * Full products list is loaded only when a matched brand
   * needs its products to be added to the search results.
   *
   * After the first request, it stays cached inside this SearchBar.
   */
  const allProductsRef = useRef<ProductItem[] | null>(null);
  const allProductsPromiseRef = useRef<Promise<ProductItem[]> | null>(null);

  const [query, setQuery] = useState("");
  const [results, setResults] = useState<ProductItem[]>([]);

  const [isFocused, setIsFocused] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  /*
   * --------------------------------------------------
   * Load All Products
   * --------------------------------------------------
   */

  const loadAllProducts = async (): Promise<ProductItem[]> => {
    if (allProductsRef.current) {
      return allProductsRef.current;
    }

    if (allProductsPromiseRef.current) {
      return allProductsPromiseRef.current;
    }

    allProductsPromiseRef.current = getProducts();

    try {
      const products = await allProductsPromiseRef.current;

      allProductsRef.current = products;

      return products;
    } finally {
      allProductsPromiseRef.current = null;
    }
  };

  /*
   * --------------------------------------------------
   * Search
   * --------------------------------------------------
   */

  useEffect(() => {
    const normalizedQuery = query.trim();

    if (!normalizedQuery) {
      setResults([]);
      setIsLoading(false);
      setHasSearched(false);
      setIsOpen(false);

      return;
    }

    setHasSearched(false);

    const controller = new AbortController();

    const timeout = window.setTimeout(async () => {
      try {
        setIsLoading(true);

        const data = await searchCatalog(normalizedQuery, controller.signal);

        if (controller.signal.aborted) {
          return;
        }

        /*
         * Directly matched products returned by search API.
         */
        const directProducts = data.categories;

        /*
         * If the backend also matched one or more brands,
         * add every product belonging to those brands.
         *
         * Brands themselves are NOT rendered in the search UI.
         */
        let brandProducts: ProductItem[] = [];

        if (data.brands.length > 0) {
          const allProducts = await loadAllProducts();

          if (controller.signal.aborted) {
            return;
          }

          const matchedBrandIds = new Set(data.brands.map((brand) => brand.id));

          brandProducts = allProducts.filter((product) =>
            matchedBrandIds.has(product.brand.id),
          );
        }

        /*
         * Direct product matches stay first.
         * Brand products are appended afterwards.
         *
         * Duplicate products are removed using product.id.
         */
        const mergedProducts = [...directProducts, ...brandProducts];

        const uniqueProducts = Array.from(
          new Map(
            mergedProducts.map((product) => [product.id, product]),
          ).values(),
        );

        setResults(uniqueProducts);
        setHasSearched(true);
        setIsOpen(true);
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }

        console.error("CATALOG SEARCH ERROR =>", error);

        setResults([]);
        setHasSearched(true);
        setIsOpen(true);
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }, 500);

    return () => {
      window.clearTimeout(timeout);
      controller.abort();
    };
  }, [query]);

  /*
   * --------------------------------------------------
   * Open Results While Request Is Running
   * --------------------------------------------------
   */

  useEffect(() => {
    if (!isFocused || !query.trim()) return;

    if (isLoading || hasSearched) {
      setIsOpen(true);
    }
  }, [hasSearched, isFocused, isLoading, query]);

  /*
   * --------------------------------------------------
   * Outside Click
   * --------------------------------------------------
   */

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!rootRef.current) return;

      if (!rootRef.current.contains(event.target as Node)) {
        setIsFocused(false);
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  /*
   * --------------------------------------------------
   * Keyboard
   * --------------------------------------------------
   */

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Escape") {
      setIsOpen(false);
      setIsFocused(false);

      inputRef.current?.blur();

      return;
    }

    /*
     * Search is live.
     * Enter intentionally has no submit/navigation action.
     */
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  /*
   * --------------------------------------------------
   * Focus
   * --------------------------------------------------
   */

  const handleFocus = () => {
    setIsFocused(true);

    if (query.trim() && (isLoading || hasSearched)) {
      setIsOpen(true);
    }
  };

  const showPanel =
    Boolean(query.trim()) && isOpen && (isLoading || hasSearched);

  return (
    <div
      ref={rootRef}
      dir={isRTL ? "rtl" : "ltr"}
      className={cn(
        "relative",
        isMobile
          ? "w-full"
          : "3xl:w-[420px] w-[250px] xl:w-[320px] 2xl:w-[380px]",
      )}
    >
      {/* Search Input */}
      <div
        className={cn(
          "group border-border bg-tertiary/70 relative flex w-full items-center border transition-all duration-300",
          "hover:border-border-secondary focus-within:border-accent/50 focus-within:bg-background focus-within:shadow-[0_4px_24px_rgba(244,154,52,0.08)]",
          isMobile
            ? "h-11 px-3"
            : "3xl:h-13 3xl:px-3.5 h-11 px-2.5 xl:h-12 xl:px-3",
        )}
      >
        {/* Search Icon */}
        <div className="text-muted-foreground group-focus-within:text-accent flex shrink-0 items-center justify-center transition-colors duration-300">
          <Search
            className={cn(
              isMobile ? "size-5" : "3xl:size-[24px] size-5 xl:size-[22px]",
            )}
            strokeWidth={1.7}
          />
        </div>

        {/* Input */}
        <input
          ref={inputRef}
          type="text"
          value={query}
          placeholder={t("placeholder")}
          autoComplete="off"
          spellCheck={false}
          onChange={(event) => {
            setQuery(event.target.value);
          }}
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
          className={cn(
            "font-IRANYekanX text-foreground placeholder:text-muted-foreground/70 h-full min-w-0 flex-1 bg-transparent pt-0.75 outline-none",
            isMobile
              ? "px-2.5 text-sm"
              : "3xl:px-3 3xl:text-base px-2 text-[13px] xl:text-[15px]",
          )}
        />

        {/* Input Loading */}
        {isLoading && (
          <div className="text-muted-foreground flex shrink-0 items-center justify-center">
            <LoaderCircle
              className={cn(
                "animate-spin",
                isMobile ? "size-[18px]" : "size-4.5 xl:size-5",
              )}
              strokeWidth={1.7}
            />
          </div>
        )}

        {/* Focus Line */}
        <span className="bg-accent pointer-events-none absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 transition-all duration-300 group-focus-within:w-1/3" />
      </div>

      {/* Results Panel */}
      <div
        className={cn(
          "border-border bg-background absolute inset-x-0 top-full z-[70] mt-2 overflow-hidden border shadow-[0_18px_50px_rgba(0,0,0,0.12)]",
          "origin-top transition-[opacity,transform,visibility] duration-200 ease-out",
          showPanel
            ? "visible translate-y-0 opacity-100"
            : "pointer-events-none invisible -translate-y-1.5 opacity-0",
        )}
      >
        {/* Loading */}
        {isLoading && (
          <div
            className={cn(
              "flex items-center justify-center gap-2.5",
              isMobile ? "min-h-24 px-4 py-5" : "min-h-28 px-5 py-6",
            )}
          >
            <LoaderCircle
              className="text-custom-primary size-5 animate-spin"
              strokeWidth={1.7}
            />

            <span className="text-muted-foreground text-sm">
              {t("searching")}
            </span>
          </div>
        )}

        {/* Products */}
        {!isLoading && hasSearched && results.length > 0 && (
          <>
            {/* Results Header */}
            <div className="border-border-secondary bg-card-secondary flex items-center justify-between border-b px-4 py-3">
              <span className="text-custom-primary text-[11px] font-medium tracking-[0.12em] sm:text-xs">
                {t("products")}
              </span>

              <span
                dir="ltr"
                className="text-muted-foreground font-mono text-[11px] sm:text-xs"
              >
                {results.length}
              </span>
            </div>

            {/* Results List */}
            <div
              className={cn(
                "overflow-y-auto overscroll-contain",
                isMobile
                  ? "max-h-[min(55dvh,460px)]"
                  : "3xl:max-h-[500px] max-h-[440px]",
              )}
            >
              {results.map((product) => {
                const title = isRTL ? product.name_fa : product.name_en;

                const brandName = isRTL
                  ? product.brand.name_fa
                  : product.brand.name_en;

                return (
                  <Link
                    key={product.id}
                    href={`/${locale}/products?brand=${product.brand.id}`}
                    onClick={() => {
                      setIsOpen(false);
                      setIsFocused(false);
                    }}
                    className={cn(
                      "border-border-secondary group/result flex items-center border-b last:border-b-0",
                      "hover:bg-custom-primary/[0.045] transition-colors duration-200",
                      isMobile
                        ? "min-h-[78px] gap-3 px-3 py-2.5"
                        : "min-h-[82px] gap-3.5 px-3.5 py-3",
                    )}
                  >
                    {/* Product Image */}
                    <div
                      className={cn(
                        "bg-card-secondary relative flex shrink-0 items-center justify-center overflow-hidden",
                        isMobile
                          ? "h-14 w-16"
                          : "3xl:h-16 3xl:w-[72px] h-14 w-16 xl:h-[60px] xl:w-[68px]",
                      )}
                    >
                      {product.image ? (
                        <Image
                          src={product.image}
                          alt={title}
                          fill
                          sizes={
                            isMobile ? "64px" : "(min-width: 1696px) 72px, 68px"
                          }
                          className="object-contain p-1.5"
                        />
                      ) : (
                        <PackageSearch
                          className="text-muted-foreground/60 size-5"
                          strokeWidth={1.5}
                        />
                      )}
                    </div>

                    {/* Product Information */}
                    <div className="min-w-0 flex-1">
                      {/* Product Name */}
                      <span
                        className={cn(
                          "text-foreground group-hover/result:text-custom-primary block truncate font-medium transition-colors duration-200",
                          isMobile
                            ? "text-[13px] sm:text-sm"
                            : "3xl:text-[15px] text-[13px] xl:text-sm",
                        )}
                      >
                        {title}
                      </span>

                      {/* Brand */}
                      <span
                        lang="en"
                        className={cn(
                          "text-muted-foreground mt-1.5 block truncate",
                          isMobile
                            ? "text-[11px] sm:text-xs"
                            : "text-[11px] xl:text-xs",
                        )}
                      >
                        {brandName}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </>
        )}

        {/* Empty State */}
        {!isLoading && hasSearched && results.length === 0 && (
          <div
            className={cn(
              "flex flex-col items-center justify-center text-center",
              isMobile ? "min-h-[150px] px-5 py-6" : "min-h-[170px] px-6 py-7",
            )}
          >
            <div className="bg-card-secondary flex size-10 items-center justify-center">
              <PackageSearch
                className="text-muted-foreground size-5"
                strokeWidth={1.5}
              />
            </div>

            <span className="text-foreground mt-3 text-sm font-medium">
              {t("noResults")}
            </span>

            <span className="text-muted-foreground mt-1.5 max-w-[280px] text-xs leading-5">
              {t("noResultsDescription")}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
