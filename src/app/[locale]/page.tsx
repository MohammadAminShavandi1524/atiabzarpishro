import { Locale, useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import HeroCarousel from "@/components/landing/herosection/HeroCarousel";
import { use } from "react";
import CompanyStory from "@/components/landing/CompanyStory";

export default function IndexPage({ params }: PageProps<"/[locale]">) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale as Locale);

  return (
    <div className="mb-100">
      
      <HeroCarousel />
      <CompanyStory />
    </div>
  );
}
