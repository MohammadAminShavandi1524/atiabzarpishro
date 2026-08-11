"use client";

import { useTransition } from "react";
import { useParams } from "next/navigation";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Locale, useLocale } from "next-intl";
import clsx from "clsx";
import { Earth } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  defaultLocale: Locale;
};

export default function LanguageSwitcher({ defaultLocale }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const locale = useLocale();

  // زبان مقابل رو پیدا می‌کنیم
  const nextLocale = defaultLocale === "fa" ? "en" : "fa";

  function handleToggle() {
    startTransition(() => {
      router.replace(
        // @ts-expect-error
        { pathname, params },
        { locale: nextLocale },
      );
    });
  }

  return (
    <button
      onClick={handleToggle}
      disabled={isPending}
      className={clsx(
        "flex items-center gap-x-1 rounded px-2 py-3 2xl:gap-x-1.25",
        isPending ? "cursor-not-allowed opacity-50" : "cursor-pointer",
      )}
    >
      <span>
        <Earth className="size-5 2xl:size-6" />
      </span>
      <span
        className={cn(
          locale === "fa" ? "pt-px xl:pt-[2px] 2xl:pt-[3px]" : "font-IRANYekanX pt-px xl:pt-[2px] 2xl:pt-[3px]",
          "text-[17px] 2xl:text-xl",
        )}
      >
        {defaultLocale !== "fa" ? "فا" : "en"}
      </span>
    </button>
  );
}
