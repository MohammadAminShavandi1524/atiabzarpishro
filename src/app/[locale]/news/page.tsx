"use client";

import GetNewArticle from "@/components/news/GetNewArticle";
import HeroSection from "@/components/news/HeroSection";
import LatestNews from "@/components/news/LatestNews";

const Page = () => {
  return (
    <>
      <HeroSection />

      <LatestNews />

      <GetNewArticle />
    </>
  );
};

export default Page;
