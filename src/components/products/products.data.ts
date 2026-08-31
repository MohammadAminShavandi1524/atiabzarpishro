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
      "KORLOY یکی از تولیدکنندگان مطرح کره جنوبی در زمینه ابزارهای برشی و سیستم‌های ابزارکاری است و مجموعه‌ای گسترده از راهکارهای تراشکاری، فرزکاری، سوراخ‌کاری و ماشین‌کاری تخصصی را برای صنایع مختلف ارائه می‌دهد.",

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
      "DINE تولیدکننده سیستم‌های ابزارگیری و راهکارهای دقیق نگهداری ابزار برای صنایع خودرو، الکترونیک، ماشین‌سازی و تولید صنعتی است و محصولات خود را با تمرکز بر دقت، صلبیت و عملکرد پایدار ماشین‌کاری توسعه می‌دهد.",

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
      "WIDIN یک تولیدکننده کره‌ای ابزارهای برشی است که در زمینه فرزهای انگشتی تمام‌کارباید، مته‌ها، برقوها و ابزارهای قلاویزکاری با عملکرد بالا برای ماشین‌کاری دقیق فعالیت می‌کند.",

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
      "HANBOO Engineering ارائه‌دهنده راهکارهای تخصصی ابزارکاری برای صنایع خودروسازی است و مجموعه‌ای از ابزارهای کارباید، PCD و CBN، ابزارهای Guide Pad، تجهیزات هونینگ و پکیج‌های کامل ابزارکاری را ارائه می‌دهد.",

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
      "FUNIK در زمینه مواد فوق‌سخت و راهکارهای برشی CBN فعالیت می‌کند و انواع اینسرت‌های CBN Tip و Solid CBN را برای افزایش راندمان براده‌برداری، مقاومت سایشی و طول عمر ابزار ارائه می‌دهد.",

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
      "IZAR Cutting Tools یکی از تولیدکنندگان اروپایی ابزارهای برشی HSS، HSS-E و کارباید است و طیف گسترده‌ای از مته، فرز انگشتی، برقو، قلاویز، Rotary Burr و ابزارهای اره‌کاری صنعتی را تولید می‌کند.",

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
      "UNION Materials تولیدکننده کره‌ای اینسرت‌های سرامیکی، سرمت و سایر مواد پیشرفته برشی است و راهکارهای تخصصی برای ماشین‌کاری سرعت بالا و کاربردهای صنعتی دشوار ارائه می‌دهد.",

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
      "MPA ارائه‌دهنده تجهیزات و هدهای تخصصی ماشین‌ابزار شامل Angle Head، سیستم‌های چنداسپیندله، هدهای ماژولار، افزایش‌دهنده‌های سرعت و ابزارهای Driven برای عملیات پیچیده ماشین‌کاری است.",

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
    name_en: "Drills",
    name_fa: "ابزارهای سوراخ‌کاری",
    short_description_en:
      "KORLOY drilling solutions designed for accurate, stable and efficient hole-making operations.",
    short_description_fa:
      "راهکارهای سوراخ‌کاری کرلوی برای ایجاد سوراخ‌های دقیق، پایدار و پربازده در عملیات ماشین‌کاری.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: korloy,
  },
  {
    id: 2,
    name_en: "Multi-functional Tool",
    name_fa: "ابزار چندمنظوره",
    short_description_en:
      "Multi-functional tooling solutions developed to perform multiple machining operations with a single tool system.",
    short_description_fa:
      "راهکارهای ابزار چندمنظوره برای انجام چندین عملیات ماشین‌کاری با یک سیستم ابزار واحد.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: korloy,
  },
  {
    id: 3,
    name_en: "Endmill",
    name_fa: "فرز انگشتی",
    short_description_en:
      "KORLOY end mills engineered for precision milling, contouring and high-performance material removal.",
    short_description_fa:
      "فرزهای انگشتی کرلوی برای فرزکاری دقیق، کانتورزنی و براده‌برداری پربازده طراحی شده‌اند.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: korloy,
  },
  {
    id: 4,
    name_en: "Tooling System",
    name_fa: "سیستم ابزارگیری",
    short_description_en:
      "Integrated tooling systems developed for reliable tool holding, rigidity and machining productivity.",
    short_description_fa:
      "سیستم‌های یکپارچه ابزارگیری با تمرکز بر صلبیت، نگهداری مطمئن ابزار و افزایش بهره‌وری ماشین‌کاری.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: korloy,
  },
  {
    id: 5,
    name_en: "Tooling Examples",
    name_fa: "نمونه‌های ابزارکاری",
    short_description_en:
      "Practical tooling configurations illustrating KORLOY solutions for different machining applications.",
    short_description_fa:
      "نمونه‌های کاربردی از چیدمان و انتخاب ابزارهای کرلوی برای عملیات مختلف ماشین‌کاری.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: korloy,
  },
  {
    id: 6,
    name_en: "Inserts",
    name_fa: "اینسرت‌ها",
    short_description_en:
      "Indexable cutting inserts for turning, milling and other demanding metal-cutting applications.",
    short_description_fa:
      "اینسرت‌های تعویض‌پذیر برای تراشکاری، فرزکاری و سایر عملیات حرفه‌ای براده‌برداری فلزات.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: korloy,
  },

  // =========================================================
  // DINE
  // =========================================================
  {
    id: 7,
    name_en: "Hydraulic Chuck",
    name_fa: "هیدرولیک چاک",
    short_description_en:
      "Precision hydraulic chuck systems providing reliable clamping, low runout and stable machining performance.",
    short_description_fa:
      "سیستم‌های هیدرولیک چاک دقیق برای ایجاد گیرش مطمئن، کاهش لنگی و افزایش پایداری ماشین‌کاری.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: dine,
  },
  {
    id: 8,
    name_en: "DINE Tooling System",
    name_fa: "سیستم ابزارگیری DINE",
    short_description_en:
      "Professional tooling systems designed to improve tool positioning, rigidity and machining reliability.",
    short_description_fa:
      "سیستم‌های ابزارگیری حرفه‌ای DINE برای بهبود موقعیت ابزار، صلبیت و قابلیت اطمینان فرآیند ماشین‌کاری.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: dine,
  },

  // =========================================================
  // WIDIN
  // =========================================================
  {
    id: 9,
    name_en: "Solid Carbide Endmills",
    name_fa: "فرز انگشتی کارباید جامد",
    short_description_en:
      "Solid carbide end mills for high-precision milling, finishing and demanding cutting conditions.",
    short_description_fa:
      "فرزهای انگشتی کارباید جامد برای فرزکاری دقیق، پرداخت و شرایط برش پرفشار.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: widin,
  },
  {
    id: 10,
    name_en: "Solid Carbide Drills",
    name_fa: "مته‌های کارباید جامد",
    short_description_en:
      "High-performance solid carbide drills for accurate and productive hole-making operations.",
    short_description_fa:
      "مته‌های کارباید جامد پربازده برای سوراخ‌کاری دقیق و افزایش بهره‌وری تولید.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: widin,
  },
  {
    id: 11,
    name_en: "Solid Carbide Centering Tools and Reamers",
    name_fa: "ابزارهای سنتر و برقو کارباید جامد",
    short_description_en:
      "Precision centering and reaming tools for accurate hole preparation and final dimensional control.",
    short_description_fa:
      "ابزارهای دقیق سنتر و برقوکاری برای آماده‌سازی سوراخ و دستیابی به کنترل ابعادی مطلوب.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: widin,
  },
  {
    id: 12,
    name_en: "Taps (HSS & Carbide)",
    name_fa: "قلاویزهای HSS و کارباید",
    short_description_en:
      "HSS and carbide tapping tools developed for reliable internal thread machining across various materials.",
    short_description_fa:
      "قلاویزهای HSS و کارباید برای ایجاد رزوه داخلی دقیق و پایدار در متریال‌های مختلف.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: widin,
  },

  // =========================================================
  // HANBOO
  // =========================================================
  {
    id: 13,
    name_en: "Special Carbide Tools",
    name_fa: "ابزارهای کارباید ویژه",
    short_description_en:
      "Custom carbide tooling engineered for specialized machining requirements and production processes.",
    short_description_fa:
      "ابزارهای کارباید سفارشی برای نیازهای خاص ماشین‌کاری و فرآیندهای تخصصی تولید.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: hanboo,
  },
  {
    id: 14,
    name_en: "Special PCD Tools",
    name_fa: "ابزارهای PCD ویژه",
    short_description_en:
      "Special PCD tooling solutions for high-precision machining and applications requiring extended tool life.",
    short_description_fa:
      "ابزارهای ویژه PCD برای ماشین‌کاری بسیار دقیق و کاربردهایی که به عمر ابزار بالا نیاز دارند.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: hanboo,
  },
  {
    id: 15,
    name_en: "Special Tools with Indexable Inserts",
    name_fa: "ابزارهای ویژه با اینسرت تعویض‌پذیر",
    short_description_en:
      "Custom tooling equipped with indexable inserts for flexible, economical and productive machining.",
    short_description_fa:
      "ابزارهای سفارشی مجهز به اینسرت‌های تعویض‌پذیر برای ماشین‌کاری اقتصادی، انعطاف‌پذیر و پربازده.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: hanboo,
  },
  {
    id: 16,
    name_en: "Special Guide Pads Tools",
    name_fa: "ابزارهای ویژه Guide Pad",
    short_description_en:
      "Special guide-pad tooling designed to provide stability and dimensional accuracy in demanding operations.",
    short_description_fa:
      "ابزارهای ویژه مجهز به Guide Pad برای افزایش پایداری و دقت ابعادی در عملیات‌های دشوار.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: hanboo,
  },
  {
    id: 17,
    name_en: "Special Motioning Tools",
    name_fa: "ابزارهای ویژه Motioning",
    short_description_en:
      "Special-purpose tooling solutions developed for complex machining motions and customized production needs.",
    short_description_fa:
      "ابزارهای ویژه برای حرکات پیچیده ماشین‌کاری و نیازهای سفارشی خطوط تولید.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: hanboo,
  },
  {
    id: 18,
    name_en: "Honing Heads",
    name_fa: "هدهای هونینگ",
    short_description_en:
      "Precision honing heads for improving bore geometry, dimensional accuracy and final surface quality.",
    short_description_fa:
      "هدهای دقیق هونینگ برای بهبود هندسه سوراخ، دقت ابعادی و کیفیت سطح نهایی.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: hanboo,
  },
  {
    id: 19,
    name_en: "Total Tooling Solution for Automotive Parts",
    name_fa: "راهکار جامع ابزارکاری قطعات خودرو",
    short_description_en:
      "Integrated tooling solutions developed for efficient machining of automotive components and production lines.",
    short_description_fa:
      "راهکار جامع ابزارکاری برای ماشین‌کاری پربازده قطعات خودرو و خطوط تولید صنایع خودروسازی.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: hanboo,
  },

  // =========================================================
  // SHINHAN DIAMOND
  // =========================================================
  {
    id: 20,
    name_en: "Diamond & CBN Grinding Wheels",
    name_fa: "چرخ‌های سنگ‌زنی Diamond و CBN",
    short_description_en:
      "Diamond and CBN grinding wheels developed for precision grinding, high wear resistance and surface quality.",
    short_description_fa:
      "چرخ‌های سنگ‌زنی Diamond و CBN برای سنگ‌زنی دقیق، مقاومت سایشی بالا و دستیابی به کیفیت سطح مطلوب.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: shinhan,
  },
  {
    id: 21,
    name_en: "PCD & PCBN Inserts & Tools",
    name_fa: "اینسرت‌ها و ابزارهای PCD و PCBN",
    short_description_en:
      "High-performance PCD and PCBN cutting solutions for precision machining of demanding materials.",
    short_description_fa:
      "راهکارهای برشی PCD و PCBN برای ماشین‌کاری دقیق مواد سخت و کاربردهای صنعتی پیشرفته.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: shinhan,
  },
  {
    id: 22,
    name_en: "Semiconductor Tools",
    name_fa: "ابزارهای صنایع نیمه‌هادی",
    short_description_en:
      "Precision tools including scribers and TFT-LCD edge grinding solutions for semiconductor-related applications.",
    short_description_fa:
      "ابزارهای دقیق شامل Scriber و راهکارهای سنگ‌زنی لبه TFT-LCD برای کاربردهای مرتبط با صنایع نیمه‌هادی.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: shinhan,
  },
  {
    id: 23,
    name_en: "Construction & Stone Diamond Tools",
    name_fa: "ابزارهای الماسه صنعت ساختمان و سنگ",
    short_description_en:
      "Diamond wire saw and saw blade solutions for professional stone cutting and construction applications.",
    short_description_fa:
      "راهکارهای Diamond Wire Saw و تیغه‌های الماسه برای برش حرفه‌ای سنگ و کاربردهای ساختمانی.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: shinhan,
  },
  {
    id: 24,
    name_en: "Diamond & CBN Honing Stones",
    name_fa: "سنگ‌های هونینگ Diamond و CBN",
    short_description_en:
      "Precision honing stones designed for controlled material removal and superior bore finishing.",
    short_description_fa:
      "سنگ‌های دقیق هونینگ برای براده‌برداری کنترل‌شده و بهبود کیفیت پرداخت سطوح داخلی.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: shinhan,
  },
  {
    id: 25,
    name_en: "Roller Dresser",
    name_fa: "رولر درسر",
    short_description_en:
      "Precision roller dressing tools for maintaining grinding wheel profile and machining consistency.",
    short_description_fa:
      "ابزارهای Roller Dresser برای حفظ پروفیل چرخ سنگ و افزایش ثبات فرآیند سنگ‌زنی.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: shinhan,
  },
  //   26 empty
  {
    id: 27,
    name_en: "Diamond Saw",
    name_fa: "اره الماسه",
    short_description_en:
      "Diamond saw solutions engineered for precise cutting of hard and abrasive materials.",
    short_description_fa:
      "راهکارهای اره الماسه برای برش دقیق مواد سخت و دارای سایش بالا.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: shinhan,
  },
  {
    id: 28,
    name_en: "Safety Glass Edge Wheel",
    name_fa: "چرخ سنگ لبه شیشه ایمنی",
    short_description_en:
      "Specialized grinding wheels for controlled and precise edge processing of safety glass.",
    short_description_fa:
      "چرخ‌های سنگ تخصصی برای پردازش کنترل‌شده و دقیق لبه شیشه‌های ایمنی.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: shinhan,
  },
  {
    id: 29,
    name_en: "Wire Saw",
    name_fa: "وایر ساو",
    short_description_en:
      "Diamond wire saw solutions designed for efficient and controlled cutting of industrial materials.",
    short_description_fa:
      "راهکارهای Wire Saw الماسه برای برش کنترل‌شده و پربازده مواد صنعتی.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: shinhan,
  },

  // =========================================================
  // FUNIK
  // =========================================================
  {
    id: 30,
    name_en: "CBN Tip Insert",
    name_fa: "اینسرت CBN Tip",
    short_description_en:
      "CBN-tipped inserts designed for precision machining of hardened steels and demanding materials.",
    short_description_fa:
      "اینسرت‌های CBN Tip برای ماشین‌کاری دقیق فولادهای سخت‌کاری‌شده و مواد دشوار ماشین‌کاری.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: funik,
  },
  {
    id: 31,
    name_en: "Solid CBN Insert",
    name_fa: "اینسرت Solid CBN",
    short_description_en:
      "Solid CBN inserts providing high hardness, wear resistance and reliable performance in hard turning.",
    short_description_fa:
      "اینسرت‌های Solid CBN با سختی و مقاومت سایشی بالا برای عملیات حرفه‌ای Hard Turning.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: funik,
  },

  // =========================================================
  // IZAR
  // =========================================================
  {
    id: 32,
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
    id: 33,
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
    id: 34,
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
    id: 35,
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
    id: 36,
    name_en: "Rotary Burrs Tools",
    name_fa: "ابزارهای Rotary Burr",
    short_description_en:
      "Rotary burr solutions for deburring, shaping, surface preparation and precision material removal.",
    short_description_fa:
      "ابزارهای Rotary Burr برای پلیسه‌گیری، فرم‌دهی، آماده‌سازی سطح و براده‌برداری دقیق.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: izar,
  },
  {
    id: 37,
    name_en: "Band Saw Blades & Slitting Saws",
    name_fa: "تیغه اره نواری و Slitting Saw",
    short_description_en:
      "Industrial sawing solutions for accurate cutting, sectioning and production-oriented metal processing.",
    short_description_fa:
      "راهکارهای اره‌کاری صنعتی برای برش دقیق و فرآیندهای تولیدی فلزکاری.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: izar,
  },

  // =========================================================
  // UNION MATERIALS
  // =========================================================
  {
    id: 38,
    name_en: "Ceramic Insert",
    name_fa: "اینسرت سرامیکی",
    short_description_en:
      "Ceramic cutting inserts developed for high-speed machining and demanding heat-resistant applications.",
    short_description_fa:
      "اینسرت‌های سرامیکی برای ماشین‌کاری سرعت بالا و کاربردهای نیازمند مقاومت حرارتی مناسب.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: union,
  },
  {
    id: 39,
    name_en: "Tool Holder",
    name_fa: "هلدر ابزار",
    short_description_en:
      "Rigid tool holding solutions developed for stable cutting performance and reliable insert positioning.",
    short_description_fa:
      "هلدرهای ابزار با صلبیت مناسب برای پایداری فرآیند برش و نگهداری دقیق اینسرت.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: union,
  },
  {
    id: 40,
    name_en: "Milling Cutter",
    name_fa: "کاتر فرزکاری",
    short_description_en:
      "Industrial milling cutters designed for productive material removal and consistent machining performance.",
    short_description_fa:
      "کاترهای صنعتی فرزکاری برای براده‌برداری پربازده و حفظ ثبات در فرآیند ماشین‌کاری.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: union,
  },

  // =========================================================
  // OSG
  // =========================================================
  {
    id: 41,
    name_en: "OSG Taps",
    name_fa: "قلاویزهای OSG",
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
    id: 42,
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
    id: 43,
    name_en: "HSS & HSS-E Manufacturing Program",
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
    id: 44,
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
    id: 45,
    name_en: "Special Application Tools",
    name_fa: "ابزارهای کاربردهای ویژه",
    short_description_en:
      "Special-purpose precision tooling developed for customized and non-standard machining requirements.",
    short_description_fa:
      "ابزارهای دقیق ویژه برای نیازهای سفارشی و عملیات‌های غیر استاندارد ماشین‌کاری.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: fromm,
  },

  // =========================================================
  // MPA
  // =========================================================
  {
    id: 46,
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
    id: 47,
    name_en: "Speed Increasers",
    name_fa: "افزایش‌دهنده‌های سرعت",
    short_description_en:
      "Speed increaser units designed to achieve higher spindle speeds for specialized machining applications.",
    short_description_fa:
      "واحدهای افزایش‌دهنده سرعت برای دستیابی به دور اسپیندل بالاتر در کاربردهای تخصصی ماشین‌کاری.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: mpa,
  },
  {
    id: 48,
    name_en: "Multispindle Heads",
    name_fa: "هدهای چنداسپیندله",
    short_description_en:
      "Multispindle heads enabling simultaneous machining operations to improve production efficiency.",
    short_description_fa:
      "هدهای چنداسپیندله برای اجرای هم‌زمان چند عملیات و افزایش بهره‌وری فرآیند تولید.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: mpa,
  },
  {
    id: 49,
    name_en: "Modular Heads",
    name_fa: "هدهای ماژولار",
    short_description_en:
      "Flexible modular head systems developed for adaptable machine configurations and specialized operations.",
    short_description_fa:
      "سیستم‌های هد ماژولار برای ایجاد پیکربندی‌های انعطاف‌پذیر و اجرای عملیات تخصصی.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: mpa,
  },
  {
    id: 50,
    name_en: "Pendular Heads",
    name_fa: "هدهای Pendular",
    short_description_en:
      "Pendular head solutions for specialized machining configurations and controlled tool movement.",
    short_description_fa:
      "هدهای Pendular برای پیکربندی‌های تخصصی ماشین‌کاری و کنترل مناسب حرکت ابزار.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: mpa,
  },
  {
    id: 51,
    name_en: "Turret Heads",
    name_fa: "هدهای Turret",
    short_description_en:
      "Turret head systems developed for versatile tooling configurations and efficient production machining.",
    short_description_fa:
      "سیستم‌های Turret Head برای ایجاد چیدمان‌های متنوع ابزار و افزایش کارایی ماشین‌کاری تولیدی.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: mpa,
  },
  {
    id: 52,
    name_en: "Special Heads",
    name_fa: "هدهای ویژه",
    short_description_en:
      "Customized special heads engineered for specific machines, components and production requirements.",
    short_description_fa:
      "هدهای سفارشی ویژه برای ماشین‌ها، قطعات و نیازهای خاص خطوط تولید.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: mpa,
  },
  {
    id: 53,
    name_en: "Driven Tools for Turning Centers",
    name_fa: "ابزارهای Driven برای مراکز تراش",
    short_description_en:
      "Driven tooling solutions enabling milling, drilling and auxiliary operations directly on turning centers.",
    short_description_fa:
      "ابزارهای Driven برای اجرای فرزکاری، سوراخ‌کاری و عملیات تکمیلی روی مراکز تراش.",
    image: PRODUCT_PLACEHOLDER_IMAGE,
    brochure: null,
    brand: mpa,
  },
];
