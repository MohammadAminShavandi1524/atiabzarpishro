"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "next-intl";

import LanguageSwitcher from "./LanguageSwitcher";
import Logo from "./Logo";
import SearchBar from "./Searchbar";
import Nav from "./Nav";

import { cn } from "@/lib/utils";

const Header = () => {
  const locale = useLocale();

  const headerRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);

  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    const SCROLL_THRESHOLD = 60;
    const SCROLL_DELTA = 10;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const difference = currentScrollY - lastScrollY.current;

      if (currentScrollY <= SCROLL_THRESHOLD) {
        setShowHeader(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      if (Math.abs(difference) < SCROLL_DELTA) return;

      setShowHeader(difference < 0);
      lastScrollY.current = currentScrollY;
    };

    lastScrollY.current = window.scrollY;

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={cn(
        "bg-background fixed inset-x-0 top-0 z-50 hidden transition-transform duration-500 ease-out lg:block",
        showHeader ? "translate-y-0" : "-translate-y-full",
      )}
    >
      <span
        aria-hidden="true"
        className="bg-border pointer-events-none absolute inset-x-0 bottom-0 h-px"
      />

      <div className="w90 flex gap-x-1 py-2 xl:gap-x-1.5 xl:py-2.5">
        <div className="3xl:mt-1 mt-0.5 flex shrink-0 items-start">
          <Logo />
        </div>

        <div className="3xl:space-y-2.5 w-full space-y-1.5 pt-1.5 xl:space-y-2 xl:pt-2">
          <div className="flex items-center justify-between">
            <div />

            <SearchBar />

            <div className="flex items-center gap-x-3">
              <LanguageSwitcher defaultLocale={locale} />
            </div>
          </div>

          <div className="flex items-center justify-between ps-1.5">
            <Nav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
