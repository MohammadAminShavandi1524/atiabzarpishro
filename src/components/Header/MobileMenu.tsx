"use client";

import { useState } from "react";

import Image from "next/image";
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
  X,
} from "lucide-react";

import { cn } from "@/lib/utils";

import {
  MobileSidebarBody,
  MobileSidebarFooter,
  MobileSidebarHeader,
  useMobileSidebar,
} from "@/components/ui/mobile-sidebar";

import { brands } from "../products/products.data";

import Logo from "./Logo";

export default function MobileMenu() {
  const locale = useLocale();
  const t = useTranslations("Header.Navigation");
  const pathname = usePathname();

  const { closeSidebar } = useMobileSidebar();

  const productsHref = `/${locale}/products`;

  const technicalItems = [
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
      key: "catalogues",
      href: `/${locale}/catalogues`,
      icon: BookOpen,
    },
    {
      key: "softwares",
      href: `/${locale}/softwares`,
      icon: MonitorCog,
    },
    {
      key: "brochures",
      href: `/${locale}/tech-news`,
      icon: FileText,
    },
  ] as const;

  const partnersActive =
    pathname === productsHref || pathname.startsWith(`${productsHref}/`);

  const technicalActive =
    pathname === `/${locale}/technical-information` ||
    technicalItems.some(
      (item) => pathname === item.href || pathname.startsWith(`${item.href}/`),
    );

  const [partnersOpen, setPartnersOpen] = useState(partnersActive);
  const [technicalOpen, setTechnicalOpen] = useState(technicalActive);

  const isActive = (href: string) => {
    if (href === `/${locale}`) {
      return pathname === href;
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const navItemClass = (href: string) =>
    cn(
      "flex min-h-13 items-center border-b border-border py-3 text-[15px] font-medium transition-colors duration-300 hover:text-custom-primary",
      isActive(href) && "text-custom-primary",
    );

  return (
    <>
      {/* Header */}
      <MobileSidebarHeader className="justify-between gap-4">
        <Logo variant="sidebar" onClick={closeSidebar} />

        <button
          type="button"
          onClick={closeSidebar}
          aria-label="Close navigation menu"
          className="border-border text-muted-foreground hover:border-custom-primary hover:text-custom-primary flex size-10 shrink-0 cursor-pointer items-center justify-center border transition-colors duration-300"
        >
          <X className="size-5" strokeWidth={1.7} />
        </button>
      </MobileSidebarHeader>

      {/* Body */}
      <MobileSidebarBody>
        <nav>
          <ul>
            {/* Home */}
            <li>
              <Link
                href={`/${locale}`}
                onClick={closeSidebar}
                className={navItemClass(`/${locale}`)}
              >
                {t("home")}
              </Link>
            </li>

            {/* Partners */}
            <li className="border-border border-b">
              <button
                type="button"
                onClick={() => setPartnersOpen((prev) => !prev)}
                aria-expanded={partnersOpen}
                aria-controls="mobile-partners-menu"
                className={cn(
                  "hover:text-custom-primary flex min-h-13 w-full cursor-pointer items-center justify-between py-3 text-start text-[15px] font-medium transition-colors duration-300 pe-2.5",
                  partnersActive && "text-custom-primary",
                )}
              >
                <span>{t("ourPartners")}</span>

                <ChevronDown
                  className={cn(
                    "text-muted-foreground size-5 shrink-0 transition-all duration-300",
                    partnersOpen && "text-custom-primary rotate-180",
                  )}
                  strokeWidth={1.7}
                />
              </button>

              <div
                id="mobile-partners-menu"
                className={cn(
                  "grid transition-[grid-template-rows] duration-300 ease-in-out",
                  partnersOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                )}
              >
                <div className="overflow-hidden">
                  <div className="border-border border-t py-2">
                    {brands.map((brand) => (
                      <Link
                        key={brand.id}
                        href={`/${locale}/products?brand=${brand.slug}`}
                        onClick={closeSidebar}
                        dir="ltr"
                        className="group/partner hover:bg-custom-primary/[0.045] flex items-center gap-3 px-3 py-2 transition-colors duration-200"
                      >
                        <div className="relative size-9 shrink-0">
                          <Image
                            src={brand.image}
                            alt={brand.name_en}
                            fill
                            sizes="36px"
                            className="object-contain"
                          />
                        </div>

                        <span className="text-muted-foreground group-hover/partner:text-custom-primary truncate text-sm font-medium transition-colors duration-200">
                          {brand.name_en}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </li>

            {/* Representations */}
            <li>
              <Link
                href={`/${locale}/representations`}
                onClick={closeSidebar}
                className={navItemClass(`/${locale}/representations`)}
              >
                {t("representations")}
              </Link>
            </li>

            {/* Technical Information */}
            <li className="border-border border-b">
              <button
                type="button"
                onClick={() => setTechnicalOpen((prev) => !prev)}
                aria-expanded={technicalOpen}
                aria-controls="mobile-technical-menu"
                className={cn(
                  "hover:text-custom-primary flex min-h-13 w-full cursor-pointer items-center justify-between py-3 text-start text-[15px] font-medium transition-colors duration-300 pe-2.5",
                  technicalActive && "text-custom-primary",
                )}
              >
                <span>{t("technicalInformation")}</span>

                <ChevronDown
                  className={cn(
                    "text-muted-foreground size-5 shrink-0 transition-all duration-300",
                    technicalOpen && "text-custom-primary rotate-180",
                  )}
                  strokeWidth={1.7}
                />
              </button>

              <div
                id="mobile-technical-menu"
                className={cn(
                  "grid transition-[grid-template-rows] duration-300 ease-in-out",
                  technicalOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                )}
              >
                <div className="overflow-hidden">
                  <div className="border-border border-t py-2">
                    {technicalItems.map((item) => {
                      const Icon = item.icon;
                      const active = isActive(item.href);

                      return (
                        <Link
                          key={item.key}
                          href={item.href}
                          onClick={closeSidebar}
                          className={cn(
                            "group/technical hover:bg-custom-primary/[0.045] flex items-center gap-3 px-3 py-2.5 transition-colors duration-200",
                            active && "bg-custom-primary/[0.045]",
                          )}
                        >
                          <span
                            className={cn(
                              "border-border text-muted-foreground group-hover/technical:border-custom-primary/50 group-hover/technical:text-custom-primary flex size-9 shrink-0 items-center justify-center border transition-colors duration-200",
                              active &&
                                "border-custom-primary/50 text-custom-primary",
                            )}
                          >
                            <Icon className="size-[17px]" strokeWidth={1.6} />
                          </span>

                          <span
                            className={cn(
                              "text-muted-foreground group-hover/technical:text-custom-primary text-sm font-medium transition-colors duration-200",
                              active && "text-custom-primary",
                            )}
                          >
                            {t(`technicalDropdown.${item.key}.title`)}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </li>

            {/* Contact */}
            <li>
              <Link
                href={`/${locale}/contact-us`}
                onClick={closeSidebar}
                className={navItemClass(`/${locale}/contact-us`)}
              >
                {t("contactUs")}
              </Link>
            </li>

            {/* About */}
            <li>
              <Link
                href={`/${locale}/about-us`}
                onClick={closeSidebar}
                className={navItemClass(`/${locale}/about-us`)}
              >
                {t("aboutUs")}
              </Link>
            </li>

            {/* FAQ */}
            <li>
              <Link
                href={`/${locale}/faq`}
                onClick={closeSidebar}
                className={navItemClass(`/${locale}/faq`)}
              >
                {t("faq")}
              </Link>
            </li>
          </ul>
        </nav>
      </MobileSidebarBody>

      {/* Footer */}
      <MobileSidebarFooter>
        <Link
          href={`/${locale}/contact-us`}
          onClick={closeSidebar}
          className="border-custom-primary text-custom-primary hover:bg-custom-primary hover:text-primary-foreground flex min-h-11 w-full items-center justify-center border px-4 text-sm font-medium transition-colors duration-300"
        >
          {t("contactUs")}
        </Link>
      </MobileSidebarFooter>
    </>
  );
}
