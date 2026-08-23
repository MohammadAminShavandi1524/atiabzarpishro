export interface IndustryItem {
  id: string;
  index: string;
  translationKey: string;
  code: string;
  image: string;
  x: number;
  y: number;
}

export const industries: IndustryItem[] = [
  {
    id: "automotive",
    index: "01",
    translationKey: "items.automotive",
    code: "AUTO",
    image: "/images/industries/automotive.svg",
    x: 20,
    y: 20,
  },
  {
    id: "power",
    index: "02",
    translationKey: "items.power",
    code: "POWER",
    image: "/images/industries/power.svg",
    x: 50,
    y: 12,
  },
  {
    id: "machinery",
    index: "03",
    translationKey: "items.machinery",
    code: "MACHINERY",
    image: "/images/industries/machinery.svg",
    x: 80,
    y: 20,
  },
  {
    id: "steel",
    index: "04",
    translationKey: "items.steel",
    code: "STEEL",
    image: "/images/industries/steel.svg",
    x: 88,
    y: 50,
  },
  {
    id: "mold",
    index: "05",
    translationKey: "items.mold",
    code: "MOLD",
    image: "/images/industries/mold.svg",
    x: 80,
    y: 80,
  },
  {
    id: "oilGas",
    index: "06",
    translationKey: "items.oilGas",
    code: "OIL / GAS",
    image: "/images/industries/oil-gas.svg",
    x: 50,
    y: 88,
  },
  {
    id: "railway",
    index: "07",
    translationKey: "items.railway",
    code: "RAIL",
    image: "/images/industries/railway.svg",
    x: 20,
    y: 80,
  },
  {
    id: "aerospace",
    index: "08",
    translationKey: "items.aerospace",
    code: "AERO",
    image: "/images/industries/aerospace.svg",
    x: 12,
    y: 50,
  },
];
