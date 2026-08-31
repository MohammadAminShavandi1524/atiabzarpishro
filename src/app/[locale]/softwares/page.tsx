"use client";

import Link from "next/link";

import { Download } from "lucide-react";
import { useTranslations } from "next-intl";

const softwares = [
  {
    key: "kts",
    version: "V0.1",
    size: "3.4 MB",
    file: "/softwares/kts.apk",
  },
  {
    key: "ktis",
    version: "Ver 1.00",
    size: "1.3 MB",
    file: "/softwares/ktis.apk",
  },
] as const;

const Page = () => {
  const t = useTranslations("Softwares");

  return (
    <>
      {/* Hero */}
      <section className="bg-secondary-bg border-border border-b">
        <div className="w90 py-20">
          <div className="grid grid-cols-[1.35fr_0.65fr] items-end gap-20">
            {/* Intro */}
            <div className="max-w-5xl">
              <div className="mb-6 flex items-center gap-4">
                <span className="bg-custom-primary h-px w-12 shrink-0" />

                <span className="text-custom-primary text-sm font-medium tracking-[0.14em]">
                  {t("hero.eyebrow")}
                </span>
              </div>

              <h1 className="text-foreground max-w-4xl text-[46px] leading-[1.12] font-semibold">
                {t("hero.title")}
              </h1>

              <p className="text-muted-foreground mt-7 max-w-3xl text-justify text-base leading-8">
                {t("hero.description")}
              </p>
            </div>

            {/* Meta */}
            <div className="border-border border-s ps-9">
              <div className="text-custom-primary text-sm font-medium tracking-[0.14em]">
                {t("hero.companyName")}
              </div>

              <div className="text-foreground mt-4 text-xl font-semibold">
                {t("hero.tagline")}
              </div>

              <div className="border-border mt-9 border-t pt-6">
                <span className="text-muted-foreground text-sm tracking-wider">
                  {t("hero.meta")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Softwares */}
      <section className="bg-background">
        <div className="w90 py-14">
          {/* Section Header */}
          <div className="mb-8">
            <div className="mb-3 flex items-center gap-3">
              <span className="bg-custom-primary h-px w-8" />

              <span className="text-custom-primary text-xs font-medium tracking-[0.14em]">
                {t("section.eyebrow")}
              </span>
            </div>

            <h2 className="text-foreground text-[32px] leading-tight font-semibold">
              {t("section.title")}
            </h2>
          </div>

          {/* Software Cards */}
          <div className="grid grid-cols-2 gap-5">
            {softwares.map((software) => (
              <div
                key={software.key}
                className="border-border-secondary bg-custom-primary/[0.025] group flex min-h-[210px] flex-col border p-6"
              >
                {/* Header */}
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-foreground text-xl font-semibold">
                    {t(`items.${software.key}.title`)}
                  </h3>

                  <span
                    dir="ltr"
                    lang="en"
                    className="border-custom-primary/25 bg-custom-primary/[0.06] text-custom-primary shrink-0 border px-2.5 py-1 text-[11px] font-medium"
                  >
                    {software.version}
                  </span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mt-4 text-justify text-sm leading-6">
                  {t(`items.${software.key}.description`)}
                </p>

                {/* Footer */}
                <div className="border-border-secondary mt-auto flex items-end justify-between border-t pt-5">
                  <span
                    dir="ltr"
                    lang="en"
                    className="text-muted-foreground text-xs"
                  >
                    {software.size}
                  </span>

                  <Link
                    href={software.file}
                    download
                    className="border-custom-primary text-custom-primary hover:bg-custom-primary flex items-center gap-2 border px-5 py-2.5 text-sm font-medium transition-colors duration-200 hover:text-white"
                  >
                    <Download className="size-4" strokeWidth={1.7} />

                    {t("download")}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
