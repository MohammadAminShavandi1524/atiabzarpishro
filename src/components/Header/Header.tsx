"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "next-intl";

import LanguageSwitcher from "./LanguageSwitcher";
import Logo from "./Logo";
import { ThemeButton } from "../theme/ThemeButton";
import SearchBar from "./Searchbar";
import Nav from "./Nav";
import FAQButton from "./FAQButton";

import { cn } from "@/lib/utils";

const Header = () => {
  const locale = useLocale();

  const headerRef = useRef<HTMLElement>(null);

  const [showHeader, setShowHeader] = useState(true);

  const lastScrollY = useRef(0);

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

      if (Math.abs(difference) < SCROLL_DELTA) {
        return;
      }

      if (difference > 0) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      lastScrollY.current = currentScrollY;
    };

    lastScrollY.current = window.scrollY;

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={cn(
        "bg-background fixed inset-x-0 top-0 z-50",
        "transition-transform duration-500 ease-out",
        showHeader ? "translate-y-0" : "-translate-y-full",
      )}
    >
      {/* Animated Bottom Border */}
      <span
        aria-hidden="true"
        className="bg-border pointer-events-none absolute inset-x-0 bottom-0 h-px"
      />

      <div className="w90 flex gap-x-1.5 pt-2.5 pb-2.5">
        {/* Logo */}
        <div className="flex mt-1 items-start shrink-0">
          <Logo />
        </div>

        <div className="w-full space-y-2.5 pt-2">
          {/* =====================================================
            TOP ROW
        ===================================================== */}
          <div className="flex items-center justify-between">
            <div></div>
            {/* Search */}
            <div className="">
              <SearchBar />
            </div>

            {/* Theme + Language */}
            <div className="flex items-center gap-x-3">
              {/* <ThemeButton /> */}

              <LanguageSwitcher defaultLocale={locale} />
            </div>
          </div>

          {/* =====================================================
            BOTTOM ROW
        ===================================================== */}
          <div className="flex items-center justify-between ps-1.5">
            {/* Navigation */}
            <div className="">
              <Nav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
