"use client";

import { useRef, useState } from "react";

import Image from "next/image";

import { Video } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { cn } from "@/lib/utils";
import { videos } from "@/data/videos";

import { ScrollArea } from "@/components/ui/scroll-area";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const VIDEO_PLACEHOLDER = "/videos/korloyThumb.webp";

const Page = () => {
  const t = useTranslations("VideoClips");
  const locale = useLocale();

  const [activeVideo, setActiveVideo] = useState(videos[0]);

  const isRTL = locale === "fa";

  const rootRef = useRef<HTMLDivElement>(null);

  const heroIntroRef = useRef<HTMLDivElement>(null);
  const heroMetaRef = useRef<HTMLDivElement>(null);
  const heroLineRef = useRef<HTMLSpanElement>(null);

  const librarySectionRef = useRef<HTMLElement>(null);
  const sectionHeaderRef = useRef<HTMLDivElement>(null);
  const sectionLineRef = useRef<HTMLSpanElement>(null);

  const playerRef = useRef<HTMLDivElement>(null);
  const playlistRef = useRef<HTMLElement>(null);

  const getTitle = (video: (typeof videos)[number]) =>
    isRTL ? video.name_fa : video.name_en;

  const getDescription = (video: (typeof videos)[number]) =>
    isRTL ? video.description_fa : video.description_en;

  const getImage = (video: (typeof videos)[number]) => VIDEO_PLACEHOLDER;

  useGSAP(
    () => {
      if (
        !heroIntroRef.current ||
        !heroMetaRef.current ||
        !sectionHeaderRef.current ||
        !playerRef.current ||
        !playlistRef.current
      ) {
        return;
      }

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) {
        return;
      }

      const isBelowLg = window.matchMedia("(max-width: 63.999rem)").matches;

      /* Hero */
      const heroChildren = Array.from(heroIntroRef.current.children);

      const heroTimeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      if (heroLineRef.current) {
        gsap.set(heroLineRef.current, {
          scaleX: 0,
          transformOrigin: isRTL ? "right center" : "left center",
        });

        heroTimeline.to(heroLineRef.current, {
          scaleX: 1,
          duration: 0.8,
          ease: "power4.out",
        });
      }

      heroTimeline.fromTo(
        heroChildren,
        {
          opacity: 0,
          y: isBelowLg ? 24 : 32,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.12,
        },
        "-=0.55",
      );

      heroTimeline.fromTo(
        heroMetaRef.current,
        isBelowLg
          ? {
              opacity: 0,
              y: 24,
            }
          : {
              opacity: 0,
              x: isRTL ? -35 : 35,
            },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.9,
          ease: "power4.out",
        },
        "-=0.65",
      );

      /* Library Header */
      const sectionHeaderChildren = Array.from(
        sectionHeaderRef.current.children,
      );

      const sectionTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: librarySectionRef.current,
          start: "top 82%",
          once: true,
        },
      });

      if (sectionLineRef.current) {
        gsap.set(sectionLineRef.current, {
          scaleX: 0,
          transformOrigin: isRTL ? "right center" : "left center",
        });

        sectionTimeline.to(sectionLineRef.current, {
          scaleX: 1,
          duration: 0.7,
          ease: "power4.out",
        });
      }

      sectionTimeline.fromTo(
        sectionHeaderChildren,
        {
          opacity: 0,
          y: 22,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.45",
      );

      /* Player */
      gsap.fromTo(
        playerRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: playerRef.current,
            start: "top 84%",
            once: true,
          },
        },
      );

      /* Playlist */
      gsap.fromTo(
        playlistRef.current,
        isBelowLg
          ? {
              opacity: 0,
              y: 28,
            }
          : {
              opacity: 0,
              x: isRTL ? -28 : 28,
            },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: playlistRef.current,
            start: "top 86%",
            once: true,
          },
        },
      );

      const playlistItems = playlistRef.current.querySelectorAll(
        ".video-playlist-item",
      );

      gsap.fromTo(
        playlistItems,
        {
          opacity: 0,
          y: 18,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.06,
          ease: "power3.out",
          scrollTrigger: {
            trigger: playlistRef.current,
            start: "top 82%",
            once: true,
          },
        },
      );
    },
    {
      scope: rootRef,
      dependencies: [isRTL],
      revertOnUpdate: true,
    },
  );

  return (
    <div ref={rootRef} dir={isRTL ? "rtl" : "ltr"} className="bg-background">
      {/* Hero */}
      <section className="bg-secondary-bg border-border border-b">
        <div className="w90 py-11 sm:py-14 md:py-16 lg:py-[72px] xl:py-[76px] 2xl:py-20">
          <div className="grid grid-cols-1 gap-9 md:gap-11 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-10 xl:grid-cols-[1.35fr_0.65fr] xl:gap-14 2xl:gap-20">
            {/* Intro */}
            <div ref={heroIntroRef} className="max-w-5xl min-w-0">
              <div className="mb-4 flex items-center gap-3 sm:mb-5 sm:gap-4 2xl:mb-6">
                <span
                  ref={heroLineRef}
                  className="bg-custom-primary h-px w-9 shrink-0 sm:w-10 xl:w-11 2xl:w-12"
                />

                <span className="text-custom-primary xss:text-xs text-[11px] font-medium tracking-[0.12em] sm:text-[13px] xl:text-sm xl:tracking-[0.14em]">
                  {t("hero.eyebrow")}
                </span>
              </div>

              <h1 className="text-foreground xss:text-[32px] max-w-4xl text-[30px] leading-[1.2] font-semibold sm:text-[36px] sm:leading-[1.16] md:text-[40px] lg:text-[40px] xl:text-[44px] 2xl:text-[46px] 2xl:leading-[1.12]">
                {t("hero.title")}
              </h1>

              <p className="text-muted-foreground mt-5 max-w-3xl text-justify text-sm leading-7 sm:mt-6 sm:text-[15px] sm:leading-7.5 lg:text-[15px] xl:mt-7 xl:text-base xl:leading-8">
                {t("hero.description")}
              </p>
            </div>

            {/* Meta */}
            <div
              ref={heroMetaRef}
              className="border-border border-t pt-6 lg:border-s lg:border-t-0 lg:ps-6 lg:pt-0 xl:ps-8 2xl:ps-9"
            >
              <div className="text-custom-primary text-xs font-medium tracking-[0.12em] sm:text-[13px] xl:text-sm xl:tracking-[0.14em]">
                {t("hero.companyName")}
              </div>

              <div className="text-foreground mt-3 text-lg font-semibold sm:text-xl lg:text-lg xl:mt-4 xl:text-xl">
                {t("hero.tagline")}
              </div>

              <div className="border-border mt-6 border-t pt-5 lg:mt-7 lg:pt-5 xl:mt-8 2xl:mt-9 2xl:pt-6">
                <span className="text-muted-foreground text-xs tracking-wider sm:text-[13px] xl:text-sm">
                  {t("hero.meta")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Library */}
      <section ref={librarySectionRef} className="bg-background">
        <div className="w90 py-10 sm:py-12 md:py-14 lg:py-14 xl:py-16">
          {/* Section Header */}
          <div ref={sectionHeaderRef} className="mb-7 sm:mb-8 lg:mb-9">
            <div className="mb-3 flex items-center gap-3">
              <span
                ref={sectionLineRef}
                className="bg-custom-primary h-px w-7 shrink-0 sm:w-8"
              />

              <span className="text-custom-primary xss:text-xs text-[11px] font-medium tracking-[0.12em] sm:tracking-[0.14em]">
                {t("section.eyebrow")}
              </span>
            </div>

            <h2 className="text-foreground xss:text-[28px] text-[26px] leading-[1.2] font-semibold sm:text-[30px] lg:text-[31px] xl:text-[32px]">
              {t("section.title")}
            </h2>
          </div>

          {/* Player / Playlist */}
          <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,1fr)_330px] xl:grid-cols-[minmax(0,1fr)_360px] 2xl:grid-cols-[minmax(0,1fr)_390px]">
            {/* Active Video */}
            <div ref={playerRef} className="min-w-0">
              {/* Player */}
              <div className="border-border-secondary overflow-hidden border bg-black">
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
              <div className="border-border-secondary border-x border-b px-4 py-4 sm:px-5 sm:py-5 xl:px-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="border-border-secondary flex size-9 shrink-0 items-center justify-center border sm:size-10">
                    <Video
                      className="text-custom-primary size-[17px] sm:size-[18px]"
                      strokeWidth={1.6}
                    />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-foreground text-[17px] leading-7 font-semibold sm:text-lg xl:text-xl">
                      {getTitle(activeVideo)}
                    </h3>

                    <p className="text-muted-foreground mt-2.5 max-w-4xl text-justify text-sm leading-7 sm:mt-3">
                      {getDescription(activeVideo)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Playlist */}
            <aside
              ref={playlistRef}
              className="border-border-secondary flex h-fit min-w-0 flex-col border lg:sticky lg:top-28"
            >
              {/* Playlist Header */}
              <div className="border-border-secondary flex shrink-0 items-center justify-between gap-4 border-b px-4 py-3.5 sm:px-5 sm:py-4">
                <div className="min-w-0">
                  <div className="text-foreground text-[15px] font-semibold sm:text-base">
                    {t("playlist.title")}
                  </div>

                  <div className="text-muted-foreground mt-1 text-[11px] leading-5 sm:text-xs">
                    {t("playlist.description")}
                  </div>
                </div>

                <Video
                  className="text-custom-primary size-5 shrink-0"
                  strokeWidth={1.6}
                />
              </div>

              {/* Videos */}
              <ScrollArea
                dir={isRTL ? "rtl" : "ltr"}
                className="xss:h-[360px] h-[330px] sm:h-[400px] lg:h-[420px] xl:h-[440px]"
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
                          "video-playlist-item border-border-secondary group relative flex w-full cursor-pointer gap-3 border-b p-3 text-start last:border-b-0 sm:gap-4 sm:p-4",
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
                            "border-border-secondary xss:w-[105px] relative aspect-video w-[92px] shrink-0 overflow-hidden border sm:w-[120px] lg:w-[105px] xl:w-[115px] 2xl:w-[120px]",
                            "transition-colors duration-200",
                            "group-hover:border-custom-primary/40",
                            active && "border-custom-primary/60",
                          )}
                        >
                          <Image
                            src={getImage(video)}
                            alt={getTitle(video)}
                            fill
                            sizes="(max-width: 399px) 92px, (max-width: 639px) 105px, 120px"
                            className={cn(
                              "object-cover transition-[filter,transform] duration-300",
                              "group-hover:brightness-[1.04]",
                              active && "brightness-[1.03]",
                            )}
                          />
                        </div>

                        {/* Information */}
                        <div className="min-w-0 flex-1 py-0.5 sm:py-1">
                          <h4
                            className={cn(
                              "text-foreground line-clamp-2 text-[13px] leading-5.5 font-medium sm:text-sm sm:leading-6",
                              "transition-colors duration-200",
                              "group-hover:text-custom-primary",
                              active && "text-custom-primary",
                            )}
                          >
                            {getTitle(video)}
                          </h4>

                          <p
                            className={cn(
                              "text-muted-foreground mt-1 line-clamp-2 text-[11px] leading-4.5 sm:mt-1.5 sm:text-xs sm:leading-5",
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
    </div>
  );
};

export default Page;
