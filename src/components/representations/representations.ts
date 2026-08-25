export interface RepresentationItem {
  id: string;

  city_en: string;
  city_fa: string;

  name_en: string;
  name_fa: string;

  description_en: string;
  description_fa: string;

  address_en: string;
  address_fa: string;

  image?: string;

  latitude: number;
  longitude: number;
}

export const representations: RepresentationItem[] = [
  {
    id: "tehran",

    city_en: "Tehran",
    city_fa: "تهران",

    name_en: "ATI Abzar Pishro — Tehran",
    name_fa: "نمایندگی آتی ابزار پیشرو — تهران",

    description_en:
      "Sales, technical consultation and industrial tooling support for customers in Tehran.",

    description_fa:
      "ارائه خدمات فروش، مشاوره فنی و پشتیبانی ابزارهای صنعتی برای مشتریان استان تهران.",

    address_en: "Tehran, Iran",
    address_fa: "تهران، ایران",

    image: "/representations/tehran.webp",

    latitude: 35.754243,
    longitude: 51.332173,
  },

  // {
  //   id: "tabriz",

  //   city_en: "Tabriz",
  //   city_fa: "تبریز",

  //   name_en: "ATI Abzar Pishro — Tabriz",
  //   name_fa: "نمایندگی آتی ابزار پیشرو — تبریز",

  //   description_en:
  //     "Machining tools, industrial solutions and technical support for manufacturers in the northwest region.",

  //   description_fa:
  //     "تأمین ابزارهای ماشین‌کاری، راهکارهای صنعتی و پشتیبانی فنی برای صنایع منطقه شمال‌غرب کشور.",

  //   address_en: "Tabriz, East Azerbaijan, Iran",
  //   address_fa: "تبریز، آذربایجان شرقی، ایران",

  //   image: "/representations/tabriz.webp",

  //   latitude: 38.0801,
  //   longitude: 46.2919,
  // },

  // {
  //   id: "isfahan",

  //   city_en: "Isfahan",
  //   city_fa: "اصفهان",

  //   name_en: "ATI Abzar Pishro — Isfahan",
  //   name_fa: "نمایندگی آتی ابزار پیشرو — اصفهان",

  //   description_en:
  //     "Industrial cutting tool supply and machining consultation for manufacturing industries in Isfahan.",

  //   description_fa:
  //     "تأمین ابزارهای برشی صنعتی و ارائه مشاوره ماشین‌کاری برای صنایع تولیدی استان اصفهان.",

  //   address_en: "Isfahan, Iran",
  //   address_fa: "اصفهان، ایران",

  //   image: "/representations/isfahan.webp",

  //   latitude: 32.6546,
  //   longitude: 51.668,
  // },
];
