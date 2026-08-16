export interface AboutFeature {
  key: string;

  icon: "automation" | "brands" | "support" | "team";

  title: {
    en: string;
    fa: string;
  };

  description: {
    en: string;
    fa: string;
  };
}

export const aboutFeatures: AboutFeature[] = [
  {
    key: "automation",
    icon: "automation",

    title: {
      en: "Industrial Automation Focus",
      fa: "تمرکز بر اتوماسیون صنعتی",
    },

    description: {
      en: "Advanced solutions for modern industrial applications.",
      fa: "ارائه راهکارهای پیشرفته برای کاربردهای صنعتی مدرن.",
    },
  },

  {
    key: "brands",
    icon: "brands",

    title: {
      en: "Trusted Global Brands",
      fa: "برندهای معتبر جهانی",
    },

    description: {
      en: "Working with globally recognized manufacturers.",
      fa: "همکاری با تولیدکنندگان معتبر جهانی.",
    },
  },

  {
    key: "support",
    icon: "support",

    title: {
      en: "Expert Support & Consulting",
      fa: "پشتیبانی و مشاوره تخصصی",
    },

    description: {
      en: "Technical guidance tailored to your requirements.",
      fa: "ارائه مشاوره فنی متناسب با نیازهای شما.",
    },
  },

  {
    key: "team",
    icon: "team",

    title: {
      en: "Experienced Technical Team",
      fa: "تیم فنی باتجربه",
    },

    description: {
      en: "Engineering expertise achieved through years of experience.",
      fa: "دانش مهندسی و تجربه تخصصی در صنایع مختلف.",
    },
  },
];
