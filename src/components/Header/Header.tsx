"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "next-intl";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import LanguageSwitcher from "./LanguageSwitcher";
import Logo from "./Logo";
import { ThemeButton } from "../theme/ThemeButton";
import SearchBar from "./Searchbar";
import Nav from "./Nav";
import FAQButton from "./FAQButton";

import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP);

const Header = () => {
  const locale = useLocale();
  const isRTL = locale === "fa";

  const headerRef = useRef<HTMLElement>(null);

  const [showHeader, setShowHeader] = useState(true);

  const lastScrollY = useRef(0);

  // =========================================================
  // Header Hide / Show On Scroll
  // =========================================================
  useEffect(() => {
    const SCROLL_THRESHOLD = 60;
    const SCROLL_DELTA = 10;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const difference = currentScrollY - lastScrollY.current;

      // Always show header near the top
      if (currentScrollY <= SCROLL_THRESHOLD) {
        setShowHeader(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Prevent tiny scroll movements from toggling header
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

  // =========================================================
  // Entrance Animation
  // =========================================================
  useGSAP(
    () => {
      if (!headerRef.current) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) {
        gsap.set(
          [
            ".header-logo",
            ".header-search",
            ".header-actions",
            ".header-nav",
            ".header-faq",
          ],
          {
            opacity: 1,
            clearProps: "transform",
          },
        );

        gsap.set(".header-line", {
          scaleX: 1,
        });

        return;
      }

      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      // Initial States
      gsap.set(".header-logo", {
        opacity: 0,
        y: -12,
      });

      gsap.set(".header-search", {
        opacity: 0,
        y: -10,
      });

      gsap.set(".header-actions", {
        opacity: 0,
        y: -10,
      });

      gsap.set(".header-nav", {
        opacity: 0,
        y: 10,
      });

      gsap.set(".header-faq", {
        opacity: 0,
        y: 10,
      });

      gsap.set(".header-line", {
        scaleX: 0,
        transformOrigin: isRTL ? "right center" : "left center",
      });

      // Entrance
      timeline.to(
        ".header-logo",
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
        },
        0.05,
      );

      timeline.to(
        ".header-search",
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
        },
        0.12,
      );

      timeline.to(
        ".header-actions",
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
        },
        0.18,
      );

      timeline.to(
        ".header-line",
        {
          scaleX: 1,
          duration: 0.85,
          ease: "power2.inOut",
        },
        0.12,
      );

      timeline.to(
        ".header-nav",
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
        },
        0.28,
      );

      timeline.to(
        ".header-faq",
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
        },
        0.34,
      );

      return () => {
        timeline.kill();
      };
    },
    {
      scope: headerRef,
      dependencies: [isRTL],
    },
  );

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
        className="header-line bg-border pointer-events-none absolute inset-x-0 bottom-0 h-px"
      />

      <div className="w90 flex flex-col gap-y-1.5 pt-2.5 pb-2.5">
        {/* =====================================================
            TOP ROW
        ===================================================== */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="header-logo">
            <Logo />
          </div>

          {/* Search */}
          <div className="header-search">
            <SearchBar />
          </div>

          {/* Theme + Language */}
          <div className="header-actions flex items-center gap-x-3">
            <ThemeButton />

            <LanguageSwitcher defaultLocale={locale} />
          </div>
        </div>

        {/* =====================================================
            BOTTOM ROW
        ===================================================== */}
        <div className="flex items-center justify-between ps-1.5">
          {/* Navigation */}
          <div className="header-nav">
            <Nav />
          </div>

          {/* FAQ */}
          <div className="header-faq">
            <FAQButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
