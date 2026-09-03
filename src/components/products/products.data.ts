export interface ProductBrand {
  id: number;
  slug: string;

  name_en: string;
  name_fa: string;

  description_en: string;
  description_fa: string;

  image: string;

  website?: string | null;
  catalog?: string | null;
}

export interface ProductItem {
  id: number;

  name_en: string;
  name_fa: string;

  short_description_en: string;
  short_description_fa: string;

  image: string;

  brochure?: string | null;

  brand: ProductBrand;
}

const PRODUCT_PLACEHOLDER_IMAGE = "/placeholder.webp";

export const brands: ProductBrand[] = [
  {
    id: 1,
    slug: "korloy",

    name_en: "KORLOY",
    name_fa: "کرلوی",

    description_en:
      "KORLOY is a leading South Korean manufacturer of advanced cutting tools and tooling systems, offering professional solutions for turning, milling, drilling and specialized machining applications across a wide range of industries.",

    description_fa:
      "KORLOY یکی از تولیدکنندگان مطرح کره جنوبی در زمینه ابزارهای برشی و سیستم‌های گیرش ابزار است و مجموعه‌ای گسترده از راهکارهای تراشکاری، فرزکاری، سوراخ‌کاری و ماشین‌کاری تخصصی را برای صنایع مختلف ارائه می‌دهد.",

    image: "/home/partners/korloy.webp",

    website: "https://korloy.com/",
    catalog: "/catalogues/ati-abzar-pishro-catalogue.pdf",
  },

  {
    id: 2,
    slug: "dine",

    name_en: "DINE",
    name_fa: "DINE",

    description_en:
      "DINE develops high-quality tooling systems and precision tool-holding solutions for automotive, electronics, machinery and industrial manufacturing applications, with a focus on accuracy, rigidity and machining performance.",

    description_fa:
      "DINE تولیدکننده انواع ابزارگیرهای دقیق و با کیفیت بالا جهت استفاده در صنایع خودرو، الکترونیک، ماشین‌سازی و تولید صنعتی است و محصولات خود را با تمرکز بر دقت، صلبیت و عملکرد پایدار ماشین‌کاری توسعه می‌دهد.",

    image: "/home/partners/Dine.webp",

    website: "https://dine.co.kr/en/",
    catalog: "/catalogues/ati-abzar-pishro-catalogue.pdf",
  },

  {
    id: 3,
    slug: "widin",

    name_en: "WIDIN",
    name_fa: "ویدین",

    description_en:
      "WIDIN is a South Korean cutting-tool manufacturer specializing in high-performance solid carbide end mills, drills, reamers and tapping tools for precision machining and demanding industrial applications.",

    description_fa:
      "WIDIN تولیدکننده کره‌ای ابزارهای برشی است که در زمینه فرزهای انگشتی تمام‌کارباید، مته‌ها، برقوها و ابزارهای قلاویزکاری با عملکرد بالا برای ماشین‌کاری دقیق فعالیت می‌کند.",

    image: "/home/partners/Widin.webp",

    website: "https://widinus.com/",
    catalog: "/catalogues/ati-abzar-pishro-catalogue.pdf",
  },

  {
    id: 4,
    slug: "hanboo",

    name_en: "HANBOO Engineering",
    name_fa: "هانبو",

    description_en:
      "HANBOO Engineering provides specialized tooling solutions for automotive manufacturing, including carbide, PCD and CBN tools, guide-pad tooling, honing systems and complete tooling packages for critical automotive components.",

    description_fa:
      "HANBOO Engineering ارائه‌دهنده راهکارهای تخصصی ماشینکاری برای صنایع خودروسازی است و مجموعه‌ای از ابزارهای کارباید، PCD و CBN، ابزارهای Guide Pad دار، تجهیزات هونینگ و پکیج‌های کامل ماشینکاری  بلوک سیلندر، سرسیلندر و پوسته گیربکس را ارائه می‌دهد.",

    image: "/home/partners/hanboo.webp",

    website: "http://www.hbeg.co.kr/",
    catalog: "/catalogues/ati-abzar-pishro-catalogue.pdf",
  },

  {
    id: 5,
    slug: "shinhan",

    name_en: "SHINHAN Diamond",
    name_fa: "شینهان دایموند",

    description_en:
      "SHINHAN Diamond specializes in super-abrasive tooling technologies including Diamond and CBN grinding wheels, honing stones, dressers, PCD and PCBN tools, and advanced solutions for automotive, glass and precision industries.",

    description_fa:
      "SHINHAN Diamond در زمینه ابزارهای فوق‌سخت و سایشی تخصص دارد و محصولاتی مانند سنگ‌های Diamond و CBN، سنگ‌های هونینگ، Dresserها و ابزارهای PCD و PCBN را برای صنایع خودرو، شیشه و کاربردهای دقیق صنعتی ارائه می‌دهد.",

    image: "/home/partners/Shinhan_diamond.webp",

    website: "https://en.shinhandia.co.kr/",
    catalog: "/catalogues/ati-abzar-pishro-catalogue.pdf",
  },

  {
    id: 6,
    slug: "funik",

    name_en: "FUNIK",
    name_fa: "فونیک",

    description_en:
      "FUNIK specializes in ultra-hard cutting materials and high-performance CBN solutions, including tipped and solid CBN inserts developed to improve cutting efficiency, wear resistance and tool life in hard machining applications.",

    description_fa:
      "FUNIK در زمینه تولید ابزار های برشی فوق‌سخت و  CBN ها فعالیت می‌کند و انواع اینسرت‌های CBN Tip و Solid CBN را برای افزایش راندمان براده‌برداری، مقاومت سایشی و طول عمر ابزار ارائه می‌دهد.",

    image: "/home/partners/Funik.webp",

    website: "https://en.funik.com/",
    catalog: "/catalogues/ati-abzar-pishro-catalogue.pdf",
  },

  {
    id: 7,
    slug: "izar",

    name_en: "IZAR Cutting Tools",
    name_fa: "ایزار",

    description_en:
      "IZAR Cutting Tools is a European manufacturer offering a broad range of HSS, HSS-E and carbide cutting tools, including drills, end mills, reamers, taps, rotary burrs and industrial sawing solutions.",

    description_fa:
      "IZAR Cutting Tools یکی از تولیدکنندگان اروپایی ابزارهای برشی HSS، HSS-E و کارباید است و طیف گسترده‌ای از مته، فرز انگشتی، برقو، قلاویز، Rotary Burr و ابزارهای صنعتی را تولید می‌کند.",

    image: "/home/partners/IZAR.webp",

    website: "https://www.izartool.com/en/",
    catalog: "/catalogues/ati-abzar-pishro-catalogue.pdf",
  },

  {
    id: 8,
    slug: "union",

    name_en: "UNION Materials",
    name_fa: "یونیون متریالز",

    description_en:
      "UNION Materials is a South Korean manufacturer specializing in ceramic, cermet and advanced cutting inserts, together with tooling solutions developed for high-speed and demanding machining applications.",

    description_fa:
      "UNION Materials تولیدکننده کره‌ای اینسرت‌های سرامیکی، سرمت و سایر مواد پیشرفته برشی است و راهکارهای تخصصی برای ماشین‌کاری سرعت بالا و کاربردهای صنعتی خاص را ارائه می‌دهد.",

    image: "/home/partners/union.webp",

    website: "https://www.unionmaterials.com/eng/html/main.html",
    catalog: "/catalogues/ati-abzar-pishro-catalogue.pdf",
  },

  {
    id: 9,
    slug: "osg",

    name_en: "OSG",
    name_fa: "OSG",

    description_en:
      "OSG is a globally recognized cutting-tool manufacturer with extensive expertise in threading solutions, drills, end mills, forming tools and precision gauges for professional manufacturing applications.",

    description_fa:
      "OSG یکی از تولیدکنندگان شناخته‌شده ابزارهای برشی است و در زمینه قلاویزها، ابزارهای رزوه‌زنی، مته‌ها، فرزهای انگشتی، ابزارهای Forming و گیج‌های دقیق صنعتی فعالیت می‌کند.",

    image: "/home/partners/osg.webp",

    website: "http://www.osg.co.kr/en/",
    catalog: "/catalogues/ati-abzar-pishro-catalogue.pdf",
  },

  {
    id: 10,
    slug: "fromm",

    name_en: "FROMM Präzision",
    name_fa: "فروم پرسیژن",

    description_en:
      "FROMM Präzision is a German manufacturer of precision cutting tools, providing HSS, HSS-E, carbide and special-purpose drilling and reaming solutions for high-accuracy machining applications.",

    description_fa:
      "FROMM Präzision یک تولیدکننده آلمانی ابزارهای دقیق برشی است و انواع ابزارهای HSS، HSS-E، کارباید و ابزارهای مخصوص سوراخ‌کاری و برقوکاری را برای ماشین‌کاری دقیق ارائه می‌دهد.",

    image: "/home/partners/fromm.webp",

    website: "https://fromm-praezision.de/en/Products/",
    catalog: "/catalogues/ati-abzar-pishro-catalogue.pdf",
  },

  {
    id: 11,
    slug: "mpa",

    name_en: "MPA",
    name_fa: "MPA",

    description_en:
      "MPA provides advanced machine-tool accessories and specialized heads, including angle heads, multispindle systems, modular heads, speed increasers and driven tooling solutions for complex machining operations.",

    description_fa:
      "MPA ارائه‌دهنده تجهیزات و هدهای تخصصی ماشین‌ابزار شامل Angle Head ، مولتی اسپیندل، افزایش‌دهنده‌های سرعت، تارت های مخصوص و  ابزارهای متحرک برای عملیات پیچیده ماشین‌کاری است.",

    image: "/home/partners/mpa.webp",

    website: "https://www.m-p-a.it/index.php/en/",
    catalog: "/catalogues/ati-abzar-pishro-catalogue.pdf",
  },
];

const [
  korloy,
  dine,
  widin,
  hanboo,
  shinhan,
  funik,
  izar,
  union,
  osg,
  fromm,
  mpa,
] = brands;

export const products: ProductItem[] = [
  // =========================================================
  // KORLOY
  // =========================================================
  {
    id: 1,
    name_en: "Turning Inserts",
    name_fa: "اینسرت‌های تراشکاری",
    short_description_en:
      "Turning inserts for professional metal cutting operations, available in various materials.",
    short_description_fa:
      "اینسرت‌های تراشکاری، جهت عملیات حرفه‌ای براده‌برداری فلزات، در جنس‌های مختلف.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: korloy,
  },
  {
    id: 2,
    name_en: "Milling Inserts",
    name_fa: "اینسرت‌های فرزکاری",
    short_description_en:
      "Milling inserts for professional metal cutting operations, available in various materials.",
    short_description_fa:
      "اینسرت‌های فرزکاری، جهت عملیات حرفه‌ای براده‌برداری فلزات، در جنس‌های مختلف.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: korloy,
  },
  {
    id: 3,
    name_en: "Turning Tool Holders",
    name_fa: "هلدرهای تراشکاری",
    short_description_en:
      "Various tool holders for external turning, internal turning and threading operations.",
    short_description_fa: "انواع هلدرهای روتراش، داخل‌تراش و پیچ‌بری.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: korloy,
  },
  {
    id: 4,
    name_en: "Milling Tool Holders",
    name_fa: "هلدرهای فرزکاری",
    short_description_en:
      "Various face milling, shoulder milling and disc-type tooling solutions.",
    short_description_fa: "انواع کفتراش، دیواره‌تراش و ابزارهای دیسکی.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: korloy,
  },
  {
    id: 5,
    name_en: "Grooving Inserts",
    name_fa: "اینسرت‌های شیارزنی",
    short_description_en:
      "Grooving inserts available in various thicknesses and cutting profiles.",
    short_description_fa: "در ضخامت‌ها و پروفیل‌های برشی مختلف.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: korloy,
  },
  {
    id: 6,
    name_en: "Grooving Tool Holders",
    name_fa: "هلدرهای شیارزنی",
    short_description_en:
      "Various holders for face, internal and external grooving operations.",
    short_description_fa: "انواع هلدرهای پیشانی‌تراشی، داخل‌تراشی و روتراشی.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: korloy,
  },
  {
    id: 7,
    name_en: "Indexable Drills",
    name_fa: "مته اینسرتی",
    short_description_en:
      "Indexable drills from 9.5 to 100 mm in diameter, available in lengths from 2D to 8D.",
    short_description_fa:
      "انواع مته اینسرتی از قطر 9.5 تا 100 میلی‌متر در طول‌های 2D تا 8D.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: korloy,
  },
  {
    id: 8,
    name_en: "Carbide Head Drills",
    name_fa: "مته سر کارباید",
    short_description_en:
      "Carbide-head drills available with locking and screw-fixed insert systems, including TPDB and TPDC.",
    short_description_fa:
      "مته‌های سرکارباید، در دو نوع اینسرت قفل‌شونده و اینسرت پیچی TPDB - TPDC.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: korloy,
  },

  // =========================================================
  // DINE
  // =========================================================
  {
    id: 9,
    name_en: "Hydraulic Tool Holders",
    name_fa: "هلدرهای هیدرولیک",
    short_description_en: "",
    short_description_fa: "",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: dine,
  },
  {
    id: 10,
    name_en: "Shrink Fit Holders",
    name_fa: "هلدرهای شرینک فیت",
    short_description_en: "",
    short_description_fa: "",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: dine,
  },
  {
    id: 11,
    name_en: "ER Collet Holders",
    name_fa: "هلدرهای کولت ER",
    short_description_en: "",
    short_description_fa: "",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: dine,
  },
  {
    id: 12,
    name_en: "Face Mill Holders",
    name_fa: "هلدر کفتراش",
    short_description_en: "",
    short_description_fa: "",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: dine,
  },
  {
    id: 13,
    name_en: "Modular Holders",
    name_fa: "هلدر مدولار",
    short_description_en: "",
    short_description_fa: "",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: dine,
  },
  {
    id: 14,
    name_en: "Clutch Tapping Holders",
    name_fa: "قلاویزگیرهای کلاچ‌دار",
    short_description_en: "",
    short_description_fa: "",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: dine,
  },
  {
    id: 15,
    name_en: "Fine Boring",
    name_fa: "فاین بورینگ",
    short_description_en: "",
    short_description_fa: "",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: dine,
  },
  {
    id: 16,
    name_en: "Rough Boring",
    name_fa: "راف بورینگ",
    short_description_en: "",
    short_description_fa: "",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: dine,
  },

  // =========================================================
  // WIDIN
  // =========================================================
  {
    id: 17,
    name_en: "Solid Carbide End Mills",
    name_fa: "انواع فرز انگشتی کارباید",
    short_description_en:
      "Solid carbide end mills for precision milling, roughing, finishing and various machining conditions.",
    short_description_fa:
      "فرزهای انگشتی کارباید، جهت فرزکاری دقیق، خشن‌کاری، پرداخت و شرایط مختلف ماشین‌کاری.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: widin,
  },
  {
    id: 18,
    name_en: "Carbide Drills",
    name_fa: "انواع مته کارباید",
    short_description_en:
      "High-performance carbide drills for precision hole-making and increased production productivity.",
    short_description_fa:
      "مته‌های کارباید، با بازدهی بالا جهت سوراخ‌کاری دقیق و افزایش بهره‌وری تولید.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: widin,
  },
  {
    id: 19,
    name_en: "HSS-E & Carbide Taps",
    name_fa: "قلاویزهای HSS-E و کارباید",
    short_description_en:
      "HSS-E and carbide taps for producing accurate and stable internal threads in various materials.",
    short_description_fa:
      "قلاویزهای HSS-E و کارباید، برای ایجاد رزوه داخلی دقیق و پایدار در متریال‌های مختلف.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: widin,
  },
  {
    id: 20,
    name_en: "Carbide Chamfering & Reaming Tools",
    name_fa: "انواع ابزارهای پخ‌زن و برقو کارباید",
    short_description_en:
      "Precision carbide chamfering and reaming tools for hole preparation and achieving optimal dimensional control.",
    short_description_fa:
      "ابزارهای دقیق پخ‌زنی و برقوکاری، برای آماده‌سازی سوراخ و دستیابی به کنترل ابعادی مطلوب.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: widin,
  },

  // =========================================================
  // HANBOO
  // =========================================================
  {
    id: 21,
    name_en: "Special Carbide Tools",
    name_fa: "ابزار کارباید مخصوص",
    short_description_en:
      "Special carbide tools for specific machining requirements and specialized production processes.",
    short_description_fa:
      "ابزارهای کارباید مخصوص برای نیازهای خاص ماشین‌کاری و فرآیندهای تخصصی تولید.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: hanboo,
  },
  {
    id: 22,
    name_en: "Special PCD Tools",
    name_fa: "ابزار PCD مخصوص",
    short_description_en:
      "Special PCD tools for high-precision machining and applications requiring extended tool life.",
    short_description_fa:
      "ابزارهای مخصوص PCD برای ماشین‌کاری بسیار دقیق و کاربردهایی که در آن به عمر بالای ابزار نیاز است.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: hanboo,
  },
  {
    id: 23,
    name_en: "Guide Pad Tools",
    name_fa: "ابزار گاید پد دار",
    short_description_en:
      "Special tools equipped with Guide Pads to improve stability and dimensional accuracy in precision machining operations.",
    short_description_fa:
      "ابزارهای مخصوص مجهز به Guide Pad برای افزایش پایداری و دقت ابعادی در عملیات‌های دقیق ماشین‌کاری.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: hanboo,
  },
  {
    id: 24,
    name_en: "Motion Tools",
    name_fa: "ابزارهای حرکتی",
    short_description_en:
      "Special motion tools for complex machining movements and customized production-line requirements using special-purpose machinery.",
    short_description_fa:
      "ابزارهای حرکتی مخصوص، برای حرکت‌های پیچیده ماشین‌کاری و نیازهای سفارشی خطوط تولید با ماشین‌آلات مخصوص.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: hanboo,
  },
  {
    id: 25,
    name_en: "Honing Tools",
    name_fa: "ابزارهای هونینگ",
    short_description_en:
      "Precision honing tools for improving bore geometry, dimensional accuracy and final surface quality.",
    short_description_fa:
      "هلدرهای دقیق هونینگ برای بهبود هندسه سوراخ، دقت ابعادی و کیفیت سطح نهایی.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: hanboo,
  },
  {
    id: 26,
    name_en: "Specialized Cylinder Block & Cylinder Head Tools",
    name_fa: "ابزارهای تخصصی بلوک سیلندر و سرسیلندر",
    short_description_en:
      "Complete tooling packages for machining cylinder blocks, cylinder heads and major automotive components.",
    short_description_fa:
      "پکیج کامل ابزار ماشین‌کاری بلوک سیلندر، سرسیلندر و قطعات اصلی خودروسازی.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: hanboo,
  },

  // =========================================================
  // SHINHAN DIAMOND
  // =========================================================
  {
    id: 27,
    name_en: "CBN & PCD Grinding Wheels",
    name_fa: "سنگ CBN و PCD",
    short_description_en:
      "Diamond and CBN grinding wheels for precision grinding of components such as crankshafts and camshafts, providing high wear resistance and optimal surface quality.",
    short_description_fa:
      "سنگ‌های Diamond و CBN جهت سنگ‌زنی دقیق قطعات مانند میل‌لنگ، میل‌بادامک، با مقاومت سایشی بالا و دستیابی به کیفیت سطح مطلوب.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: shinhan,
  },
  {
    id: 28,
    name_en: "PCD & CBN Inserts and Tools",
    name_fa: "اینسرت و ابزار PCD و CBN",
    short_description_en:
      "PCD and CBN cutting tools for precision machining of hard materials and advanced industrial applications.",
    short_description_fa:
      "ابزارهای برشی PCD و CBN برای ماشین‌کاری دقیق مواد سخت و کاربردهای صنعتی پیشرفته.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: shinhan,
  },
  {
    id: 29,
    name_en: "Carbide Tools for Mining & Stone",
    name_fa: "ابزارهای کارباید معادن و سنگ",
    short_description_en:
      "Diamond Wire Saw tools and diamond blades for professional stone cutting and construction applications.",
    short_description_fa:
      "ابزارهای Diamond Wire Saw و تیغه‌های الماسه برای برش حرفه‌ای سنگ و کاربردهای ساختمانی.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: shinhan,
  },
  {
    id: 30,
    name_en: "Honing Stones",
    name_fa: "سنگ‌های هونینگ",
    short_description_en:
      "Honing stones for controlled material removal and improving the quality of internal surfaces.",
    short_description_fa:
      "سنگ‌های هونینگ برای براده‌برداری کنترل‌شده جهت بهبود کیفیت سطوح داخلی.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: shinhan,
  },
  {
    id: 31,
    name_en: "Glass Industry Grinding Wheels",
    name_fa: "سنگ صنایع شیشه",
    short_description_en:
      "Specialized grinding wheels for controlled and precise finishing of various glass edges.",
    short_description_fa:
      "سنگ‌های تخصصی برای پرداخت کنترل‌شده و دقیق لبه انواع شیشه.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: shinhan,
  },

  // =========================================================
  // FUNIK
  // =========================================================
  {
    id: 32,
    name_en: "Solid CBN Insert",
    name_fa: "اینسرت Solid CBN",
    short_description_en:
      "Solid CBN inserts for rough machining of cast iron, hardened steels and materials with poor machinability.",
    short_description_fa:
      "اینسرت‌های Solid CBN جهت ماشین‌کاری خشن قطعات چدنی، فولادهای سخت‌کاری‌شده و مواد با قابلیت ماشین‌کاری پایین.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: funik,
  },
  {
    id: 33,
    name_en: "CBN Tip Insert",
    name_fa: "اینسرت CBN Tip",
    short_description_en:
      "CBN Tip inserts for finish machining of cast iron, hardened steels and materials with poor machinability.",
    short_description_fa:
      "اینسرت‌های CBN Tip جهت ماشین‌کاری فینیش قطعات چدنی، فولادهای سخت‌کاری‌شده و مواد با قابلیت ماشین‌کاری پایین.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: funik,
  },
  {
    id: 34,
    name_en: "PCD Tip Insert",
    name_fa: "اینسرت PCD Tip",
    short_description_en:
      "PCD Tip inserts for precision machining of non-ferrous metals.",
    short_description_fa:
      "اینسرت‌های PCD Tip جهت ماشین‌کاری دقیق فلزات غیرآهنی.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: funik,
  },

  // =========================================================
  // IZAR
  // =========================================================
  {
    id: 35,
    name_en: "HSS & Carbide Drilling Tools",
    name_fa: "ابزارهای سوراخ‌کاری HSS و کارباید",
    short_description_en:
      "HSS and carbide drilling tools developed for accurate hole-making across a wide range of materials.",
    short_description_fa:
      "ابزارهای سوراخ‌کاری HSS و کارباید برای ایجاد سوراخ دقیق در طیف گسترده‌ای از مواد.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: izar,
  },
  {
    id: 36,
    name_en: "HSS & Carbide Milling Tools",
    name_fa: "ابزارهای فرزکاری HSS و کارباید",
    short_description_en:
      "Professional HSS and carbide milling tools for productive and reliable machining operations.",
    short_description_fa:
      "ابزارهای حرفه‌ای فرزکاری HSS و کارباید برای ماشین‌کاری پایدار و پربازده.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: izar,
  },
  {
    id: 37,
    name_en: "HSS & Carbide Reaming Tools",
    name_fa: "ابزارهای برقوکاری HSS و کارباید",
    short_description_en:
      "Precision reaming tools for dimensional accuracy, bore finishing and consistent hole quality.",
    short_description_fa:
      "ابزارهای دقیق برقوکاری برای دستیابی به دقت ابعادی و کیفیت سطح مناسب سوراخ.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: izar,
  },
  {
    id: 38,
    name_en: "HSS Threading Tools",
    name_fa: "ابزارهای رزوه‌زنی HSS",
    short_description_en:
      "HSS threading tools engineered for reliable production of internal and external threads.",
    short_description_fa:
      "ابزارهای رزوه‌زنی HSS برای ایجاد دقیق و پایدار رزوه‌های داخلی و خارجی.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: izar,
  },
  {
    id: 39,
    name_en: "Rotary Burrs Tools",
    name_fa: "ابزارهای Rotary Burrs",
    short_description_en:
      "Rotary burrs solutions for deburring, shaping, surface preparation and precision material removal.",
    short_description_fa:
      "ابزارهای Rotary Burrs برای پلیسه‌گیری، فرم‌دهی، آماده‌سازی سطح و براده‌برداری دقیق.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: izar,
  },

  // =========================================================
  // UNION MATERIALS
  // =========================================================
  {
    id: 40,

    name_en: "Ceramic Inserts",
    name_fa: "اینسرت سرامیک",

    short_description_en:
      "Ceramic inserts for high-speed machining of various materials with suitable thermal resistance.",

    short_description_fa:
      "اینسرت‌های سرامیکی جهت ماشین‌کاری انواع مواد با سرعت بالا و مقاومت حرارتی مناسب.",

    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: union,
  },
  {
    id: 401,

    name_en: "Cermet Inserts",
    name_fa: "اینسرت سرمت",

    short_description_en:
      "Cermet inserts for high-speed machining and finishing operations, providing good wear resistance and consistent surface quality.",

    short_description_fa:
      "اینسرت‌های سرمت جهت ماشین‌کاری با سرعت بالا و عملیات پرداخت، با مقاومت سایشی مناسب و دستیابی به کیفیت سطح پایدار.",

    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: union,
  },
  {
    id: 41,
    name_en: "Turning Tool Holders",
    name_fa: "هلدرهای تراشکاری",
    short_description_en:
      "Turning tool holders with suitable rigidity for stable cutting performance and accurate insert positioning.",
    short_description_fa:
      "هلدرهای تراشکاری با صلبیت مناسب برای پایداری فرآیند برش و نگهداری دقیق اینسرت.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: union,
  },
  {
    id: 42,
    name_en: "Milling Tool Holders",
    name_fa: "هلدرهای فرزکاری",
    short_description_en:
      "Milling cutters designed for productive material removal and maintaining stability throughout the machining process.",
    short_description_fa:
      "کاترهای فرزکاری برای براده‌برداری پربازده و حفظ ثبات در فرآیند ماشین‌کاری.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: union,
  },

  // =========================================================
  // OSG
  // =========================================================
  {
    id: 43,
    name_en: "Micro Drills",
    name_fa: "مته‌های میکرودریل",
    short_description_en:
      "Miniature carbide drills starting from 0.02 mm in diameter.",
    short_description_fa: "مته‌های کاربایدی مینیاتوری از قطر 0.02 میلی‌متر.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: osg,
  },
  {
    id: 44,
    name_en: "Long Carbide Drills",
    name_fa: "مته‌های کارباید بلند",
    short_description_en:
      "Carbide drills available in lengths up to 35 D the drill diameter.",
    short_description_fa: "انواع مته‌های کارباید تا طول 35 برابر قطر.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: osg,
  },
  {
    id: 45,

    name_en: "Thread Rolling Dies",
    name_fa: "انواع غلطک‌های رزوه‌زنی",

    short_description_en: "",
    short_description_fa: "",

    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: osg,
  },
  {
    id: 451,

    name_en: "Thread Gauges",
    name_fa: "گیج‌های رزوه",

    short_description_en: "",
    short_description_fa: "",

    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: osg,
  },
  {
    id: 46,
    name_en: " Taps",
    name_fa: "قلاویزهای",
    short_description_en:
      "Professional tapping solutions from OSG for accurate and reliable internal thread production.",
    short_description_fa:
      "راهکارهای حرفه‌ای قلاویزکاری OSG برای ایجاد دقیق و قابل اطمینان رزوه‌های داخلی.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: osg,
  },

  // =========================================================
  // FROMM PRÄZISION
  // =========================================================
  {
    id: 47,
    name_en: "Core Drill and Countersink",
    name_fa: "Core Drill و Countersink",
    short_description_en:
      "Precision core drilling and countersinking tools developed for accurate hole preparation and finishing.",
    short_description_fa:
      "ابزارهای دقیق Core Drill و Countersink برای آماده‌سازی و پرداخت دقیق سوراخ.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: fromm,
  },
  {
    id: 48,
    name_en: "HSS & HSS-E tools",
    name_fa: "ابزارهای HSS و HSS-E",
    short_description_en:
      "HSS and HSS-E tooling solutions for reliable cutting performance across general machining applications.",
    short_description_fa:
      "ابزارهای HSS و HSS-E برای عملکرد قابل اطمینان در طیف وسیعی از عملیات ماشین‌کاری.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: fromm,
  },
  {
    id: 49,
    name_en: "Solid Carbide Tip and Brazed Tools",
    name_fa: "ابزارهای Solid Carbide Tip و Brazed",
    short_description_en:
      "Solid carbide tipped and brazed cutting tools for precision machining and specialized industrial applications.",
    short_description_fa:
      "ابزارهای برشی Solid Carbide Tip و Brazed برای ماشین‌کاری دقیق و کاربردهای تخصصی صنعتی.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: fromm,
  },
  {
    id: 50,
    name_en: "Special Tools",
    name_fa: "ابزارهای مخصوص",
    short_description_en:
      "Special tools developed for customized requirements and special machining operations.",
    short_description_fa:
      "ابزارهای مخصوص برای نیازهای سفارشی و عملیات‌های خاص ماشین‌کاری.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: fromm,
  },

  // =========================================================
  // MPA
  // =========================================================
  {
    id: 51,
    name_en: "Angle Heads",
    name_fa: "Angle Head",
    short_description_en:
      "Angle heads designed to extend machine tool capability and enable machining from different orientations.",
    short_description_fa:
      "Angle Headها برای افزایش قابلیت ماشین‌ابزار و انجام عملیات ماشین‌کاری از زوایای مختلف.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: mpa,
  },
  {
    id: 52,
    name_en: "Speed Increaser",
    name_fa: "افزایش‌دهنده سرعت",
    short_description_en:
      "A speed increaser is used to achieve higher spindle speeds in specialized machining applications.",
    short_description_fa:
      "افزایش‌دهنده سرعت برای دستیابی به دور اسپیندل بالاتر در کاربردهای تخصصی ماشین‌کاری استفاده می‌شود.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: mpa,
  },
  {
    id: 53,
    name_en: "Multispindle",
    name_fa: "مولتی اسپیندل",
    short_description_en:
      "Multispindle systems are used to perform multiple operations simultaneously and increase production efficiency.",
    short_description_fa:
      "مولتی اسپیندل برای اجرای هم‌زمان چند عملیات و افزایش بهره‌وری فرآیند تولید استفاده می‌شود.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: mpa,
  },
  {
    id: 54,
    name_en: "Driven Tools for Turning Machines",
    name_fa: "ابزارهای متحرک تراشکاری",
    short_description_en:
      "Driven turning tools are used to perform milling, drilling and finishing operations on turning machines.",
    short_description_fa:
      "ابزارهای متحرک تراشکاری برای اجرای فرزکاری، سوراخ‌کاری و عملیات تکمیلی بر روی ماشین‌های تراش استفاده می‌شود.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: mpa,
  },
  {
    id: 55,
    name_en: "Special Heads",
    name_fa: "هدهای مخصوص",
    short_description_en:
      "Special heads developed for specific machines, components and production-line requirements.",
    short_description_fa:
      "هدهای مخصوص برای ماشین‌ها، قطعات و نیازهای خاص خطوط تولید.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: mpa,
  },
  {
    id: 56,
    name_en: "Special Turrets",
    name_fa: "تارت‌های مخصوص",
    short_description_en:
      "Special Turret Heads for creating diverse tooling configurations and improving machining efficiency.",
    short_description_fa:
      "Turret Head مخصوص برای ایجاد چیدمان‌های متنوع ابزار و افزایش کارایی ماشین‌کاری.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: mpa,
  },
];
