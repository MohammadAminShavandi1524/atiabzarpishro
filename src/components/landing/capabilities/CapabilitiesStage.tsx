"use client";

import { englishToPersianNumber } from "@/lib/utils";

interface CapabilitiesStageProps {
  isRTL: boolean;
  t: (key: string) => string;
}

const capabilities = [
  {
    index: "1",
    titleLine1: "items.process.titleLine1",
    titleLine2: "items.process.titleLine2",
    description: "items.process.description",
  },
  {
    index: "2",
    titleLine1: "items.consulting.titleLine1",
    titleLine2: "items.consulting.titleLine2",
    description: "items.consulting.description",
  },
  {
    index: "3",
    titleLine1: "items.tools.titleLine1",
    titleLine2: "items.tools.titleLine2",
    description: "items.tools.description",
  },
  {
    index: "4",
    titleLine1: "items.oem.titleLine1",
    titleLine2: "items.oem.titleLine2",
    description: "items.oem.description",
  },
  {
    index: "5",
    titleLine1: "items.training.titleLine1",
    titleLine2: "items.training.titleLine2",
    description: "items.training.description",
  },
];

export default function CapabilitiesStage({
  isRTL,
  t,
}: CapabilitiesStageProps) {
  return (
    <div className="w90">
      {/* Header */}
      <div className="max-w-[900px]">
        {/* Eyebrow */}
        <div className="flex items-center gap-4">
          <span className="bg-custom-primary block h-px w-12 shrink-0" />

          <span className="text-muted-foreground text-sm font-medium tracking-[0.08em]">
            {t("eyebrow")}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-foreground mt-8 max-w-[720px] text-[clamp(3rem,4vw,5rem)] font-semibold ltr:leading-[1.03] ltr:tracking-[-0.045em] rtl:leading-[1.2]">
          {t("label")}
        </h2>

        {/* Intro */}
        <p className="text-muted-foreground mt-6 max-w-[760px] text-[17px] leading-8">
          {t("intro")}
        </p>
      </div>

      {/* Capabilities */}
      <div className="mt-14 grid grid-cols-5 gap-4">
        {capabilities.map((item) => (
          <article
            key={item.index}
            className="group/capability border-border bg-background hover:border-custom-primary/45 hover:bg-card-secondary/20 relative min-h-[260px] border p-7 transition-[border-color,background-color] duration-300"
          >
            {/* Hover Accent */}
            <span className="bg-custom-primary origin-start absolute inset-x-0 top-0 h-[2px] scale-x-0 transition-transform duration-300 group-hover/capability:scale-x-100" />

            {/* Title */}
            <div className="flex items-start gap-4">
              <h3 className="text-foreground min-h-[92px] text-[26px] leading-[1.2] font-semibold">
                <span className="block">{t(item.titleLine1)}</span>

                <span className="text-custom-primary block">
                  {t(item.titleLine2)}
                </span>
              </h3>
            </div>

            {/* Description */}
            <p className="text-muted-foreground mt-5 text-[14px] leading-7">
              {t(item.description)}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
