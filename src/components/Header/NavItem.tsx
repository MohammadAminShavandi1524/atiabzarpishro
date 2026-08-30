"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

interface NavItemProps {
  label: string;
  href: string;
}

const NavItem = ({ label, href }: NavItemProps) => {
  const pathname = usePathname();

  return (
    <li className="shrink-0">
      <Link
        href={href}
        className={cn(
          "hover:text-ring whitespace-nowrap transition-all",
          pathname === href && "text-ring font-medium",
        )}
      >
        {label}
      </Link>
    </li>
  );
};

export default NavItem;
