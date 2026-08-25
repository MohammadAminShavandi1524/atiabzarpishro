"use client";

import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  label: string;
  href: string;
}

const NavItem = ({ label, href }: NavItemProps) => {
  const t = useTranslations("Header.Navigation");
  const locale = useLocale();
  const pathname = usePathname();
  return (
    <li className="">
      <Link
        className={cn(
          "hover:text-ring transition-all ",
          pathname ===  href  && "text-ring font-medium",
        )}
        href={href}
      >
        {label}
      </Link>
    </li>
  );
};

export default NavItem;
