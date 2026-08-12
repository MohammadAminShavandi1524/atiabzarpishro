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

  const [showHeader, setShowHeader] = useState(true);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const SCROLL_THRESHOLD = 60;
    const SCROLL_DELTA = 10;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const difference = currentScrollY - lastScrollY.current;

      // بالای صفحه هدر همیشه نمایش داده شود
      if (currentScrollY <= SCROLL_THRESHOLD) {
        setShowHeader(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // جلوگیری از لرزش هدر در اسکرول‌های خیلی کوچک
      if (Math.abs(difference) < SCROLL_DELTA) {
        return;
      }

      if (difference > 0) {
        // Scroll Down
        setShowHeader(false);
      } else {
        // Scroll Up
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
      className={cn(
        "bg-background border-border fixed inset-x-0 top-0 z-50 border-b",
        "transition-transform duration-500 ease-out",
        showHeader ? "translate-y-0" : "-translate-y-full",
      )}
    >
      <div className="w90 flex flex-col gap-y-1.5 pt-2.5 pb-2.5">
        {/* =========================
            TOP ROW
        ========================= */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Search */}
          <SearchBar />

          {/* Theme + Language */}
          <div className="flex items-center gap-x-3">
            <ThemeButton />

            <LanguageSwitcher defaultLocale={locale} />
          </div>
        </div>

        {/* =========================
            BOTTOM ROW
        ========================= */}
        <div className="flex items-center justify-between px-1.5">
          {/* Navigation */}
          <Nav />

          {/* FAQ */}
          <FAQButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
