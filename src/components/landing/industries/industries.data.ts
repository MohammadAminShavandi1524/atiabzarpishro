export interface IndustryItem {
  id: string;
  index: string;
  translationKey: string;
  code: string;
  image: string;
  imageSize: string;
  x: number;
  y: number;
}

export const industries: IndustryItem[] = [
  {
    id: "automotive",
    index: "01",
    translationKey: "items.automotive",
    code: "AUTO",
    image: "/home/industriesLogos/automotive.png",
    x: 20,
    y: 20,
    imageSize: "size-15",
  },

  {
    id: "power",
    index: "02",
    translationKey: "items.power",
    code: "POWER",
    image: "/home/industriesLogos/power_generation.png",
    x: 50,
    y: 12,
    imageSize: "size-13",
  },

  {
    id: "machinery",
    index: "03",
    translationKey: "items.machinery",
    code: "MACHINERY",
    image: "/home/industriesLogos/GearBox.png",
    x: 80,
    y: 20,
    imageSize: "size-13",
  },

  {
    id: "steel",
    index: "04",
    translationKey: "items.steel",
    code: "STEEL",
    image: "/home/industriesLogos/pipe_rolling.png",
    x: 88,
    y: 50,
    imageSize: "size-16",
  },

  {
    id: "mold",
    index: "05",
    translationKey: "items.mold",
    code: "MOLD",
    image: "/home/industriesLogos/mold_die.png",
    x: 80,
    y: 80,
    imageSize: "size-13",
  },

  {
    id: "oilGas",
    index: "06",
    translationKey: "items.oilGas",
    code: "OIL / GAS",
    image: "/home/industriesLogos/Oil_gas.png",
    x: 50,
    y: 88,
    imageSize: "size-13",
  },

  {
    id: "railway",
    index: "07",
    translationKey: "items.railway",
    code: "RAIL",
    image: "/home/industriesLogos/Railway.png",
    x: 20,
    y: 80,
    imageSize: "size-13",
  },

  {
    id: "aerospace",
    index: "08",
    translationKey: "items.aerospace",
    code: "AERO",
    image: "/home/industriesLogos/aerospace.png",
    x: 12,
    y: 50,
    imageSize: "size-13",
  },
];
