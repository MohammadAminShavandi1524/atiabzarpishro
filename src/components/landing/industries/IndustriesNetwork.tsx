"use client";

import Image from "next/image";
import { industries } from "./industries.data";
import { cn } from "@/lib/utils";

interface IndustriesNetworkProps {
  t: (key: string) => string;
}

export default function IndustriesNetwork({ t }: IndustriesNetworkProps) {
  return (
    <div className="relative min-h-0 ps-[5vw]">
      <div className="industries-network relative h-full w-full">
        {/* Connections */}
        <svg
          aria-hidden="true"
          viewBox="0 0 1000 600"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
        >
          {industries.map((industry) => (
            <line
              key={industry.id}
              data-industry-link={industry.index}
              x1="500"
              y1="300"
              x2={industry.x * 10}
              y2={industry.y * 6}
              pathLength="1"
              stroke="currentColor"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
              className="industry-link text-border"
            />
          ))}
        </svg>

        {/* Core */}
        <div
          dir="ltr"
          className="industries-core absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
        >
          <div className="industries-core-frame border-border bg-background/75 relative flex size-[185px] items-center justify-center border backdrop-blur-[1px]">
            <span className="industries-core-corner bg-custom-primary absolute top-[-1px] left-[-1px] size-2" />

            <span className="industries-core-corner bg-custom-primary absolute right-[-1px] bottom-[-1px] size-2" />

            <div className="relative z-10 text-center">
              <span className="text-custom-primary block font-mono text-[14px] tracking-[0.16em]">
                ATI / CORE
              </span>

              <span className="text-foreground mt-3 block text-2xl font-semibold">
                {t("core.title")}
              </span>

              <span className="text-muted-foreground mt-2 block text-sm">
                {t("core.subtitle")}
              </span>
            </div>
          </div>

          <span className="industries-core-pulse border-custom-primary/20 absolute inset-[-10px] border" />
        </div>

        {/* Nodes */}
        {industries.map((industry) => (
          <article
            key={industry.id}
            data-industry-node={industry.index}
            className="industry-node absolute z-30"
            style={{
              left: `${industry.x}%`,
              top: `${industry.y}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="relative min-w-[270px]">
              <span className="industry-node-point bg-custom-primary absolute start-0 top-[4px] z-20 hidden size-2" />

              <div className="bg-background z-10 flex items-center justify-center gap-x-2">
                <div className={cn("relative shrink-0" , industry.imageSize)}>
                  <Image src={industry.image} alt={industry.id} fill />
                </div>
                <p className="industry-node-title text-foreground  text-[22px] leading-6 font-medium">
                  {t(industry.translationKey)}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
