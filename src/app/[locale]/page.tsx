import { Locale, useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import HeroCarousel from "@/components/landing/herosection/HeroCarousel";
import { use } from "react";
import CompanyStory from "@/components/landing/company-story/CompanyStory";
import Capabilities from "@/components/landing/capabilities/Capabilities";
import Industries from "@/components/landing/industries/Industries";
import FeaturedProducts from "@/components/landing/featured-products/FeaturedProducts";
import Partners from "@/components/landing/partners/Partners";
import TechnicalInformation from "@/components/landing/TechnicalInformation/TechnicalInformation";
import BlogInsights from "@/components/landing/BlogInsights/BlogInsights";

export default function IndexPage({ params }: PageProps<"/[locale]">) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale as Locale);

  return (
    <div className="mb-100">
      <HeroCarousel />

      <CompanyStory />
      <Capabilities />
      <Industries />
      <FeaturedProducts />
      <Partners />
      <TechnicalInformation />
      <BlogInsights />
    </div>
  );
}
