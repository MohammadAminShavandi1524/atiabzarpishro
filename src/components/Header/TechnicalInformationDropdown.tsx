"use client";

import { useRef } from "react";

import Link from "next/link";

import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

import {
  BookOpen,
  ChevronDown,
  FileText,
  MonitorCog,
  Newspaper,
  Video,
} from "lucide-react";

import gsap from "gsap";

import { cn } from "@/lib/utils";

const TechnicalInformationDropdown = () => {
  const t = useTranslations("Header.Navigation");

  const locale = useLocale();
  const pathname = usePathname();

  const dropdownRef = useRef<HTMLDivElement>(null);
  const chevronRef = useRef<SVGSVGElement>(null);

  const items = [
    {
      key: "news",
      href: `/${locale}/news`,
      icon: Newspaper,
    },
    {
      key: "videoClips",
      href: `/${locale}/video-clips`,
      icon: Video,
    },
    {
      key: "brochures",
      href: `/${locale}/brochures`,
      icon: FileText,
    },
    {
      key: "catalogues",
      href: `/${locale}/catalogues`,
      icon: BookOpen,
    },
    {
      key: "softwares",
      href: `/${locale}/softwares`,
      icon: MonitorCog,
    },
  ] as const;

  const isActive =
    pathname === `/${locale}/technical-information` ||
    items.some(
      (item) => pathname === item.href || pathname.startsWith(`${item.href}/`),
    );

  const openDropdown = () => {
    if (!dropdownRef.current) return;

    const dropdown = dropdownRef.current;

    const dropdownItems = dropdown.querySelectorAll(".technical-item");

    gsap.killTweensOf([dropdown, dropdownItems, chevronRef.current]);

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
        duration: 0.26,
        stagger: 0.04,
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

    const dropdownItems = dropdown.querySelectorAll(".technical-item");

    gsap.killTweensOf([dropdown, dropdownItems, chevronRef.current]);

    gsap.to(dropdownItems, {
      opacity: 0,
      y: 4,
      duration: 0.12,
      stagger: 0.015,
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
      <div
        className={cn(
          "flex cursor-pointer items-center gap-x-1 text-lg transition-colors",
          "hover:text-ring",
          isActive && "text-ring font-medium",
        )}
      >
        <span>{t("technicalInformation")}</span>

        <ChevronDown
          ref={chevronRef}
          className="mt-[3px] size-5.5"
          strokeWidth={1.8}
        />
      </div>

      {/* Dropdown */}
      <div
        ref={dropdownRef}
        className="pointer-events-none absolute start-0 top-full z-50 pt-3 opacity-0"
      >
        <div className="border-border-secondary bg-background w-[390px] border shadow-[0_16px_45px_rgba(0,0,0,0.10)]">
          {items.map((item) => {
            const Icon = item.icon;

            const itemActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.key}
                href={item.href}
                className={cn(
                  "technical-item",
                  "border-border-secondary group/item relative flex items-center gap-4 border-b px-6 py-[18px] last:border-b-0",
                  "transition-colors duration-200",
                  "hover:bg-custom-primary/[0.045]",
                  itemActive && "bg-custom-primary/[0.045]",
                )}
              >
                {/* Active Line */}
                <span
                  className={cn(
                    "bg-custom-primary absolute inset-y-0 start-0 w-[2px]",
                    "scale-y-0 transition-transform duration-200",
                    "group-hover/item:scale-y-100",
                    itemActive && "scale-y-100",
                  )}
                />

                {/* Icon */}
                <div
                  className={cn(
                    "border-border-secondary flex size-11 shrink-0 items-center justify-center border",
                    "transition-colors duration-200",
                    "group-hover/item:border-custom-primary/60",
                    itemActive && "border-custom-primary/60",
                  )}
                >
                  <Icon
                    className={cn(
                      "text-muted-foreground size-5",
                      "transition-colors duration-200",
                      "group-hover/item:text-custom-primary",
                      itemActive && "text-custom-primary",
                    )}
                    strokeWidth={1.6}
                  />
                </div>

                {/* Content */}
                <div className="min-w-0">
                  <div
                    className={cn(
                      "text-foreground text-[15px] font-medium",
                      "transition-colors duration-200",
                      "group-hover/item:text-custom-primary",
                      itemActive && "text-custom-primary",
                    )}
                  >
                    {t(`technicalDropdown.${item.key}.title`)}
                  </div>

                  <div className="text-muted-foreground mt-1.5 text-[13px] leading-5">
                    {t(`technicalDropdown.${item.key}.description`)}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </li>
  );
};

export default TechnicalInformationDropdown;
