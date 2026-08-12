"use client";

import { useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { customButtonVariants } from "../ui/custom-button/custom-button-variants";
import { cn } from "@/lib/utils";
import { CircleHelp } from "lucide-react";

interface FAQButtonProps {}

const FAQButton = ({}: FAQButtonProps) => {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <Link
      href={`/${locale}/faq`}
      className={cn(
        customButtonVariants({
          intent: "primary",
          variant: "solid",
        }),
        "bg-primary gap-2 rounded-sm h-12",
      )}
    >
      <CircleHelp className="size-5.5" />
      <span className="text-lg">
        {locale === "fa" ? "سؤالات متداول" : "FAQ"}
      </span>
    </Link>
  );
};

export default FAQButton;
