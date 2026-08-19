"use client";

import { useRef } from "react";

import Link from "next/link";

import { ChevronDown } from "lucide-react";

import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

import gsap from "gsap";

import { cn } from "@/lib/utils";

import { ScrollArea } from "@/components/ui/scroll-area";

import { brands } from "../products/products.data";

import PartnerDropdownItem from "./PartnerDropdownItem";

const PartnersDropdown = () => {
  const t = useTranslations("Header.Navigation");

  const locale = useLocale();
  const pathname = usePathname();

  const dropdownRef = useRef<HTMLDivElement>(null);
  const chevronRef = useRef<SVGSVGElement>(null);

  const isActive =
    pathname === `/${locale}/products` ||
    pathname.startsWith(`/${locale}/products/`);

  const openDropdown = () => {
    if (!dropdownRef.current) return;

    const dropdown = dropdownRef.current;

    const dropdownItems =
      dropdown.querySelectorAll(".partner-item");

    gsap.killTweensOf([
      dropdown,
      dropdownItems,
      chevronRef.current,
    ]);

    gsap.set(dropdown, {
      pointerEvents: "auto",
    });

    gsap.fromTo(
      dropdown,
      {
        opacity: 0,
        y: -10,
        scaleY: 0.96,
        transformOrigin: "top center",
      },
      {
        opacity: 1,
        y: 0,
        scaleY: 1,
        duration: 0.34,
        ease: "power3.out",
      },
    );

    gsap.fromTo(
      dropdownItems,
      {
        opacity: 0,
        y: 8,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.24,
        stagger: 0.03,
        ease: "power2.out",
        delay: 0.05,
      },
    );

    if (chevronRef.current) {
      gsap.to(chevronRef.current, {
        rotate: 180,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const closeDropdown = () => {
    if (!dropdownRef.current) return;

    const dropdown = dropdownRef.current;

    const dropdownItems =
      dropdown.querySelectorAll(".partner-item");

    gsap.killTweensOf([
      dropdown,
      dropdownItems,
      chevronRef.current,
    ]);

    gsap.to(dropdownItems, {
      opacity: 0,
      y: 4,
      duration: 0.1,
      stagger: 0.01,
      ease: "power1.in",
    });

    gsap.to(dropdown, {
      opacity: 0,
      y: -6,
      scaleY: 0.985,
      duration: 0.2,
      ease: "power2.inOut",

      onComplete: () => {
        gsap.set(dropdown, {
          pointerEvents: "none",
        });
      },
    });

    if (chevronRef.current) {
      gsap.to(chevronRef.current, {
        rotate: 0,
        duration: 0.22,
        ease: "power2.inOut",
      });
    }
  };

  return (
    <li
      className="relative"
      onMouseEnter={openDropdown}
      onMouseLeave={closeDropdown}
    >
      {/* Trigger */}
      <Link
        href={`/${locale}/products`}
        className={cn(
          "flex cursor-pointer items-center gap-x-1 text-lg transition-colors",
          "hover:text-ring",
          isActive && "text-ring font-medium",
        )}
      >
        <span>{t("ourPartners")}</span>

        <ChevronDown
          ref={chevronRef}
          className="mt-[3px] size-5.5"
          strokeWidth={1.8}
        />
      </Link>

      {/* Dropdown */}
      <div
        ref={dropdownRef}
        className="pointer-events-none absolute start-0 top-full z-50 pt-3 opacity-0"
      >
        <div className="border-border-secondary bg-background w-[280px] overflow-hidden border shadow-[0_16px_45px_rgba(0,0,0,0.10)]">
          <ScrollArea
            dir={locale === "fa" ? "rtl" : "ltr"}
            className="h-[450px]"
            scrollBarClassName="me-0"
            lockWheel
          >
            {brands.map((brand) => (
              <PartnerDropdownItem
                key={brand.id}
                brand={brand}
              />
            ))}
          </ScrollArea>
        </div>
      </div>
    </li>
  );
};

export default PartnersDropdown;