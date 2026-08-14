export interface IndustryItem {
  id: string;
  index: string;
  translationKey: string;
  code: string;
  x: number;
  y: number;
}

export const industries: IndustryItem[] = [
  {
    id: "automotive",
    index: "01",
    translationKey: "items.automotive",
    code: "AUTO",
    x: 17,
    y: 20,
  },
  {
    id: "power",
    index: "02",
    translationKey: "items.power",
    code: "POWER",
    x: 50,
    y: 12,
  },
  {
    id: "machinery",
    index: "03",
    translationKey: "items.machinery",
    code: "MACHINERY",
    x: 81,
    y: 20,
  },
  {
    id: "steel",
    index: "04",
    translationKey: "items.steel",
    code: "STEEL",
    x: 90,
    y: 45,
  },
  {
    id: "mold",
    index: "05",
    translationKey: "items.mold",
    code: "MOLD",
    x: 78,
    y: 74,
  },
  {
    id: "oilGas",
    index: "06",
    translationKey: "items.oilGas",
    code: "OIL / GAS",
    x: 54,
    y: 87,
  },
  {
    id: "railway",
    index: "07",
    translationKey: "items.railway",
    code: "RAIL",
    x: 27,
    y: 80,
  },
  {
    id: "aerospace",
    index: "08",
    translationKey: "items.aerospace",
    code: "AERO",
    x: 9,
    y: 48,
  },
];