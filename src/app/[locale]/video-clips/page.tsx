"use client";

import { useState } from "react";

import Image from "next/image";

import { Play, Video } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { cn } from "@/lib/utils";
import { videos } from "@/data/videos";

import { ScrollArea } from "@/components/ui/scroll-area";

const VIDEO_PLACEHOLDER = "/videos/korloyThumb.webp";

const Page = () => {
  const t = useTranslations("VideoClips");
  const locale = useLocale();

  const [activeVideo, setActiveVideo] = useState(videos[0]);

  const isRTL = locale === "fa";

  const getTitle = (video: (typeof videos)[number]) =>
    isRTL ? video.name_fa : video.name_en;

  const getDescription = (video: (typeof videos)[number]) =>
    isRTL ? video.description_fa : video.description_en;

  const getImage = (video: (typeof videos)[number]) => VIDEO_PLACEHOLDER;

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

      {/* Video Library */}
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

          {/* Player / Playlist */}
          <div className="grid grid-cols-[1fr_390px] items-start gap-6">
            {/* Active Video */}
            <div>
              {/* Player */}
              <div className="border-border-secondary border bg-black">
                <video
                  key={activeVideo.id}
                  src={activeVideo.video}
                  poster={getImage(activeVideo)}
                  controls
                  preload="metadata"
                  playsInline
                  className="aspect-video w-full object-contain"
                >
                  {t("playerNotSupported")}
                </video>
              </div>

              {/* Video Information */}
              <div className="border-border-secondary border-x border-b px-6 py-5">
                <div className="flex items-start gap-4">
                  <div className="border-border-secondary flex size-10 shrink-0 items-center justify-center border">
                    <Video
                      className="text-custom-primary size-[18px]"
                      strokeWidth={1.6}
                    />
                  </div>

                  <div>
                    <h3 className="text-foreground text-xl font-semibold">
                      {getTitle(activeVideo)}
                    </h3>

                    <p className="text-muted-foreground mt-3 max-w-4xl text-justify text-sm leading-7">
                      {getDescription(activeVideo)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Playlist */}

            <aside className="border-border-secondary sticky top-28 flex h-fit flex-col border">
              {/* Playlist Header */}
              <div className="border-border-secondary flex shrink-0 items-center justify-between border-b px-5 py-4">
                <div>
                  <div className="text-foreground text-base font-semibold">
                    {t("playlist.title")}
                  </div>

                  <div className="text-muted-foreground mt-1 text-xs">
                    {t("playlist.description")}
                  </div>
                </div>

                <Video
                  className="text-custom-primary size-5"
                  strokeWidth={1.6}
                />
              </div>

              {/* Videos */}
              <ScrollArea
                dir={isRTL ? "rtl" : "ltr"}
                className="h-[440px]"
                scrollBarClassName="me-1"
                lockWheel
              >
                <div>
                  {videos.map((video) => {
                    const active = activeVideo.id === video.id;

                    return (
                      <button
                        key={video.id}
                        type="button"
                        onClick={() => setActiveVideo(video)}
                        className={cn(
                          "border-border-secondary group relative flex w-full cursor-pointer gap-4 border-b p-4 text-start last:border-b-0",
                          "transition-[background-color,border-color] duration-200",
                          "hover:bg-custom-primary/[0.035]",
                          active && "bg-custom-primary/[0.07]",
                        )}
                      >
                        {/* Active Indicator */}
                        <span
                          className={cn(
                            "bg-custom-primary absolute inset-y-0 start-0 w-[3px]",
                            "scale-y-0 transition-transform duration-200",
                            "group-hover:scale-y-100",
                            active && "scale-y-100",
                          )}
                        />

                        {/* Thumbnail */}
                        <div
                          className={cn(
                            "border-border-secondary relative aspect-video w-[120px] shrink-0 overflow-hidden border",
                            "transition-colors duration-200",
                            "group-hover:border-custom-primary/40",
                            active && "border-custom-primary/60",
                          )}
                        >
                          <Image
                            src={getImage(video)}
                            alt={getTitle(video)}
                            fill
                            sizes="120px"
                            className={cn(
                              "object-cover transition-[filter,transform] duration-300",
                              "group-hover:brightness-[1.04]",
                              active && "brightness-[1.03]",
                            )}
                          />
                        </div>

                        {/* Information */}
                        <div className="min-w-0 flex-1 py-1">
                          <h4
                            className={cn(
                              "text-foreground line-clamp-2 text-sm leading-6 font-medium",
                              "transition-colors duration-200",
                              "group-hover:text-custom-primary",
                              active && "text-custom-primary",
                            )}
                          >
                            {getTitle(video)}
                          </h4>

                          <p
                            className={cn(
                              "text-muted-foreground mt-1.5 line-clamp-2 text-xs leading-5",
                              "transition-colors duration-200",
                              active && "text-foreground/65",
                            )}
                          >
                            {getDescription(video)}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </ScrollArea>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
