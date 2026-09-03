"use client";

import { useTransition } from "react";
import { useParams } from "next/navigation";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Locale, useLocale } from "next-intl";
import { Earth } from "lucide-react";

import { cn } from "@/lib/utils";

type Props = {
  defaultLocale: Locale;
  variant?: "default" | "icon";
};

export default function LanguageSwitcher({
  defaultLocale,
  variant = "default",
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const locale = useLocale();

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

  const currentLanguage = locale === "fa" ? "FA" : "EN";
  const targetLanguage = nextLocale === "fa" ? "FA" : "EN";

  if (variant === "icon") {
    return (
      <button
        type="button"
        onClick={handleToggle}
        disabled={isPending}
        aria-label={`Switch language to ${targetLanguage}`}
        className={cn(
          "border-border bg-tertiary/70 text-muted-foreground hover:border-accent/40 hover:text-accent flex size-11 cursor-pointer items-center justify-center border shadow-[0_2px_10px_rgba(9,6,5,0.04)] transition-all duration-300 active:scale-[0.96]",
          "dark:shadow-[0_2px_12px_rgba(0,0,0,0.15)]",
          isPending && "pointer-events-none opacity-50",
        )}
      >
        <Earth className="size-[22px]" strokeWidth={1.6} />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      disabled={isPending}
      aria-label={`Switch language to ${targetLanguage}`}
      className={cn(
        "group border-border bg-tertiary/70 relative flex h-11 cursor-pointer items-center gap-x-1 border ps-2 pe-3 shadow-[0_2px_10px_rgba(9,6,5,0.04)] backdrop-blur-sm transition-all duration-300",
        "hover:border-accent/40 hover:bg-secondary/70 hover:shadow-[0_4px_18px_rgba(244,154,52,0.10)] active:scale-[0.97]",
        "dark:hover:bg-secondary dark:shadow-[0_2px_12px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_4px_20px_rgba(244,154,52,0.08)]",
        "3xl:h-13 3xl:ps-2.5 3xl:pe-4 xl:h-12 xl:gap-x-1.5",
        isPending && "pointer-events-none opacity-50",
      )}
    >
      <span className="bg-background border-border group-hover:border-accent/30 group-hover:bg-secondary relative flex items-center justify-center overflow-hidden border p-1 transition-all duration-300">
        <Earth
          strokeWidth={1.6}
          className="text-muted-foreground group-hover:text-accent 3xl:size-[22px] size-[19px] transition-all duration-500 xl:size-5"
        />
      </span>

      <span className="mt-px flex items-center gap-x-1.5">
        <span className="text-foreground 3xl:text-base text-[13px] font-semibold tracking-wide transition-colors duration-300 xl:text-sm 2xl:text-[15px]">
          {currentLanguage}
        </span>

        <span className="bg-border-secondary/60 mb-0.5 h-3.5 w-px" />

        <span className="text-muted-foreground group-hover:text-accent 3xl:text-base text-[13px] font-medium transition-colors duration-300 xl:text-sm 2xl:text-[15px]">
          {targetLanguage}
        </span>
      </span>

      <span className="bg-accent absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 transition-all duration-300 group-hover:w-1/2" />
    </button>
  );
}
