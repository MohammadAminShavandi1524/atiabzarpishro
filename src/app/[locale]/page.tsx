import { Locale, useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import HeroCarousel from "@/components/landing/herosection/HeroCarousel";
import { use } from "react";
import CompanyStory from "@/components/landing/company-story/CompanyStory";
import Capabilities from "@/components/landing/capabilities/Capabilities";
import Industries from "@/components/landing/industries/Industries";
import BlogInsights from "@/components/landing/BlogInsights/BlogInsights";
import Partners from "@/components/landing/partners/Partners";

export default function IndexPage({ params }: PageProps<"/[locale]">) {
  const { locale } = use(params);

  setRequestLocale(locale as Locale);

  return (
    <div className="">
      {/* <HeroCarousel /> */}
      <CompanyStory />
      <Capabilities />
      <Industries />
      {/* <Partners /> */}
      {/* <BlogInsights /> */}
    </div>
  );
}
