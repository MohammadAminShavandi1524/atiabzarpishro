"use client";

import IndustriesNetwork from "./IndustriesNetwork";

interface IndustriesStageProps {
  isRTL: boolean;
  t: (key: string) => string;
}

export default function IndustriesStage({ isRTL, t }: IndustriesStageProps) {
  return (
    <div className="relative w-full overflow-hidden py-24">
      <div className="w90 relative z-10">
        {/* Eyebrow */}
        <div className="mb-14 flex items-center gap-4">
          <span className="bg-custom-primary block h-px w-10" />

          <span className="text-muted-foreground text-sm font-medium tracking-[0.08em]">
            {t("eyebrow")}
          </span>
        </div>

        {/* Main */}
        <div className="grid min-h-[620px] grid-cols-[0.42fr_1.58fr]">
          {/* Story */}
          <div className="relative flex flex-col justify-center pe-12">
            <span
              aria-hidden="true"
              className="bg-border absolute inset-y-0 end-0 w-px"
            />

            <div className="max-w-[340px]">
              <h2 className="text-foreground text-[48px] font-semibold ltr:leading-[1] ltr:tracking-[-0.04em] rtl:leading-[1.2]">
                <span className="block">{t("titleLine1")}</span>

                <span className="text-custom-primary block rtl:pt-1">
                  {t("titleLine2")}
                </span>
              </h2>

              <p className="text-muted-foreground mt-10 text-justify text-[15px] leading-8">
                {t("description")}
              </p>
            </div>
          </div>

          {/* Network */}
          <IndustriesNetwork t={t} />
        </div>
      </div>
    </div>
  );
}
