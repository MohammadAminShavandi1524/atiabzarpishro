"use client";

import { useEffect, useRef, useState } from "react";

import Map, {
  Marker,
  NavigationControl,
  Popup,
  type MapRef,
} from "react-map-gl/maplibre";

import { cn } from "@/lib/utils";

import { RepresentationItem, representations } from "./representations";

import RepresentationCard from "./RepresentationCard";

interface IranRepresentationsMapProps {
  isRTL: boolean;
}

const IRAN_FIT_BOUNDS: [[number, number], [number, number]] = [
  [41.5, 21.5],
  [66.5, 42.5],
];

const MAP_BOUNDS: [number, number, number, number] = [28, 12, 80, 52];

const mapStyle = {
  version: 8 as const,

  sources: {
    osm: {
      type: "raster" as const,

      tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],

      tileSize: 256,

      attribution: "© OpenStreetMap contributors",
    },
  },

  layers: [
    {
      id: "osm",

      type: "raster" as const,

      source: "osm",

      minzoom: 0,
      maxzoom: 19,

      paint: {
        "raster-saturation": -0.35,
        "raster-contrast": 0.15,
        "raster-brightness-min": 0.08,
        "raster-brightness-max": 1,
      },
    },
  ],
};

export default function IranRepresentationsMap({
  isRTL,
}: IranRepresentationsMapProps) {
  const mapRef = useRef<MapRef | null>(null);

  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [activeRepresentation, setActiveRepresentation] =
    useState<RepresentationItem | null>(null);

  const clearCloseTimer = () => {
    if (!closeTimerRef.current) return;

    clearTimeout(closeTimerRef.current);

    closeTimerRef.current = null;
  };

  const openRepresentation = (representation: RepresentationItem) => {
    clearCloseTimer();

    setActiveRepresentation(representation);
  };

  const scheduleClose = () => {
    clearCloseTimer();

    closeTimerRef.current = setTimeout(() => {
      setActiveRepresentation(null);
    }, 120);
  };

  const handleMarkerClick = (representation: RepresentationItem) => {
    openRepresentation(representation);

    const map = mapRef.current?.getMap();

    if (!map) return;

    map.flyTo({
      center: [representation.longitude, representation.latitude],
      zoom: 16,
      duration: 1400,
      essential: true,
    });
  };

  useEffect(() => {
    return () => {
      clearCloseTimer();
    };
  }, []);

  return (
    <div
      data-lenis-prevent-wheel
      className="border-border-secondary relative h-[650px] w-full overflow-hidden border"
    >
      <Map
        ref={mapRef}
        initialViewState={{
          bounds: IRAN_FIT_BOUNDS,

          fitBoundsOptions: {
            padding: 30,
          },
        }}
        minZoom={2.5}
        maxZoom={18}
        maxBounds={MAP_BOUNDS}
        mapStyle={mapStyle}
        attributionControl={false}
        scrollZoom
        dragPan
        dragRotate={false}
        pitchWithRotate={false}
        touchPitch={false}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <NavigationControl
          position={isRTL ? "top-left" : "top-right"}
          showCompass={false}
          showZoom
        />

        {representations.map((representation) => {
          const active = activeRepresentation?.id === representation.id;

          return (
            <Marker
              key={representation.id}
              longitude={representation.longitude}
              latitude={representation.latitude}
              anchor="bottom"
            >
              <button
                type="button"
                aria-label={
                  isRTL ? representation.name_fa : representation.name_en
                }
                onMouseEnter={() => openRepresentation(representation)}
                onMouseLeave={scheduleClose}
                onClick={() => handleMarkerClick(representation)}
                className="group relative cursor-pointer"
              >
                <div
                  className={cn(
                    "relative flex size-10 items-center justify-center rounded-full",
                    "bg-custom-primary text-white",
                    "border-[3px] border-white",
                    "shadow-[0_5px_14px_rgba(0,0,0,0.18)]",
                    "transition-transform duration-200",
                    "group-hover:scale-110",
                    active && "scale-110",
                  )}
                >
                  <span
                    dir="ltr"
                    className="relative z-10 text-[11px] font-semibold"
                  >
                    {representation.id.slice(0, 2).toUpperCase()}
                  </span>

                  <span className="bg-custom-primary absolute -bottom-[4px] left-1/2 size-2.5 -translate-x-1/2 rotate-45" />
                </div>
              </button>
            </Marker>
          );
        })}

        {activeRepresentation && (
          <Popup
            longitude={activeRepresentation.longitude}
            latitude={activeRepresentation.latitude}
            anchor="top"
            offset={16}
            closeButton={false}
            closeOnClick={false}
            maxWidth="none"
            className="representation-popup"
          >
            <div onMouseEnter={clearCloseTimer} onMouseLeave={scheduleClose}>
              <RepresentationCard
                representation={activeRepresentation}
                isRTL={isRTL}
              />
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
}
