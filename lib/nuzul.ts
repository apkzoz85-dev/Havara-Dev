import type { Lang } from "./site";

/* =========================================================
   NUZUL Tower — bilingual content (from NUZUL Fact Sheet)
   ========================================================= */

export const nuzulUnits = [
  { key: "admin", ar: "مكاتب إدارية", en: "Administrative Offices", area: 35, from: 3_000_000 },
  { key: "hotel", ar: "شقق فندقية", en: "Hotel Apartments", area: 65, from: 10_000_000 },
  { key: "retail", ar: "محلات تجارية", en: "Retail Shops", area: 50, from: 15_000_000 },
];

const ar = {
  meta: {
    title: "نزل تاور العاصمة الإدارية | مكاتب ومحلات وشقق فندقية بالداون تاون",
    description:
      "نزل تاور NUZUL Tower من قرطبة للتطوير العقاري في شريط الأبراج السياحية بالداون تاون – العاصمة الإدارية الجديدة: مكاتب إدارية ومحلات تجارية وشقق فندقية بإدارة Time Hotels، مقدم 10% وتقسيط حتى 10 سنوات.",
    keywords: [
      "نزل تاور",
      "نزل تاور العاصمة الإدارية",
      "NUZUL Tower",
      "مكاتب إدارية للبيع في العاصمة الإدارية",
      "محلات تجارية للبيع في العاصمة الإدارية",
      "شقق فندقية للبيع في العاصمة الإدارية",
      "الداون تاون العاصمة الإدارية",
      "شريط الأبراج السياحية العاصمة الإدارية",
      "أسعار نزل تاور",
      "قرطبة للتطوير العقاري",
    ],
    ogAlt: "نزل تاور – الداون تاون العاصمة الإدارية",
  },
  nav: [
    { id: "overview", label: "عن المشروع" },
    { id: "prices", label: "الأسعار" },
    { id: "floors", label: "تقسيم الأدوار" },
    { id: "invest", label: "الاستثمار" },
    { id: "location", label: "الموقع" },
    { id: "faq", label: "أسئلة شائعة" },
  ],
  hero: {
    eyebrow: "قرطبة للتطوير العقاري · الداون تاون – العاصمة الإدارية",
    h1a: "نزل تاور العاصمة الإدارية",
    h1b: "تجاري · إداري · فندقي في قلب الداون تاون",
    sub: "مكاتب إدارية من 35 م²، ومحلات تجارية من 50 م²، وشقق فندقية من 65 م² في شريط الأبراج السياحية — بمقدم 10% وتقسيط حتى 10 سنوات.",
    stats: [
      { v: "G+15", u: "", l: "أرضي + 15 دور" },
      { v: "4,099", u: "م²", l: "مساحة الأرض" },
      { v: "30%", u: "", l: "نسبة بنائية" },
      { v: "10%", u: "", l: "مقدم · حتى 10 سنوات" },
    ],
  },
  overview: {
    kicker: "عن المشروع",
    title: "نزل تاور… عنوان استثماري في شريط الأبراج السياحية",
    body: "نزل تاور مشروع متعدد الاستخدامات في الداون تاون بالعاصمة الإدارية الجديدة، يجمع بين المحلات التجارية والمكاتب الإدارية والغرف الفندقية ومطعم بإطلالة سماوية، في مبنى بارتفاع أرضي + 15 دورًا مع مواقف مخصصة للسيارات.",
    facts: [
      { l: "الموقع", v: "ثالث قطعة في شريط الأبراج السياحية" },
      { l: "مساحة الأرض", v: "4,099.35 م²" },
      { l: "النسبة البنائية", v: "30%" },
      { l: "عدد الأدوار", v: "أرضي تجاري + 15 دور" },
      { l: "أنواع الوحدات", v: "تجاري – إداري – غرف فندقية – مطعم بإطلالة سماوية" },
      { l: "الباركينج", v: "مواقف مخصصة لصف السيارات" },
    ],
  },
  prices: {
    kicker: "أسعار نزل تاور",
    title: "أسعار المكاتب والمحلات والشقق الفندقية في نزل تاور",
    sub: "مكاتب إدارية ومحلات تجارية وشقق فندقية للبيع في العاصمة الإدارية بمقدم 10% وتقسيط حتى 10 سنوات.",
    areaFrom: "مساحات تبدأ من",
    priceFrom: "تبدأ الأسعار من",
    down: "مقدم 10%",
    years: "تقسيط حتى 10 سنوات",
    note: "أسعار استرشادية وقابلة للتغيير وفقًا لسياسة الشركة المطوّرة ووقت الحجز. للتأكد من السعر الحالي تواصل معنا.",
  },
  floors: {
    kicker: "تقسيم الأدوار",
    title: "مبنى G+15 مصمم لأعلى عائد تشغيل",
    sub: "الدور الأرضي فقط مخصص للمحلات التجارية، لتركيز حركة الزوار ورفع عوائد التشغيل.",
    items: [
      { f: "الدور الأرضي", t: "محلات تجارية وصيدلية", d: "واجهات تجارية مباشرة على الشارع بالقرب من محطة المونوريل." },
      { f: "الأول – الثاني", t: "مكاتب إدارية مفروشة", d: "مكاتب جاهزة بالكامل بإدارة عالمية." },
      { f: "الثالث – السادس", t: "مكاتب إدارية كاملة التشطيب", d: "تسليم كامل التشطيب بالتكييفات." },
      { f: "السابع – الخامس عشر", t: "غرف وشقق فندقية", d: "بإدارة خليجية إماراتية (Time Hotels)." },
      { f: "الروف", t: "مطعم بإطلالة سماوية", d: "إطلالة بانورامية على الداون تاون والأبراج." },
    ],
  },
  invest: {
    kicker: "لماذا نزل تاور؟",
    title: "فرصة استثمارية في الداون تاون",
    cards: [
      {
        icon: "Building2",
        t: "المكاتب الإدارية",
        points: [
          "إيجار المكاتب يرتفع كلما اقترب المبنى من المولات والميادين والبنوك والفنادق، مما يسهّل الوصول إلى الشركة والتعرف على موقعها.",
          "وجود المكتب داخل مبنى فندقي يشكّل علامة بارزة في قلب الداون تاون يرفع القيمة الإيجارية مقارنة بالمباني الإدارية التقليدية.",
        ],
      },
      {
        icon: "Store",
        t: "المحلات التجارية",
        points: [
          "قيمة المحل — للشراء أو الاستثمار والتشغيل — تعتمد على العنوان وإقبال العملاء وتوفير الأمان لهم.",
          "الموقع بالقرب من محطة المونوريل ووجود علامات تجارية بارزة داخل المبنى يحققان حركة زوار كبيرة يوميًا.",
        ],
      },
      {
        icon: "BedDouble",
        t: "الشقق الفندقية",
        points: [
          "بجوار مركز مصر الثقافي الإسلامي وسوق الذهب والحي الحكومي، ما يجعل نزل الإقامة الأقرب لزوار ودارسي المركز من الجنسيات المختلفة.",
          "قربه من منطقة المكاتب الإدارية بالداون تاون يسهّل إبرام عقود إقامة سنوية مع الشركات الحكومية والخاصة والأجنبية.",
        ],
      },
    ],
  },
  location: {
    kicker: "الموقع",
    title: "نزل تاور في شريط الأبراج السياحية – الداون تاون",
    body: "ثالث قطعة في شريط الأبراج السياحية بالعاصمة الإدارية الجديدة، مع سهولة الوصول بالمونوريل من محور محمد بن زايد والمحور الشرقي إلى الداون تاون.",
    points: [
      "بالقرب من محطة مونوريل المحور الشرقي",
      "بالقرب من سوق الذهب",
      "بالقرب من مركز مصر الثقافي الإسلامي",
      "بجوار الحي الحكومي",
      "منطقة المكاتب الإدارية بالداون تاون",
    ],
    mapTitle: "خريطة موقع نزل تاور – الداون تاون العاصمة الإدارية",
  },
  gallery: {
    kicker: "معرض الصور",
    title: "لقطات من نزل تاور",
    images: [
      { src: "/images/nuzul-tower-front.webp", alt: "نزل تاور العاصمة الإدارية – الواجهة" },
      { src: "/images/nuzul-lobby.webp", alt: "لوبي نزل تاور" },
      { src: "/images/nuzul-retail-plaza.webp", alt: "محلات تجارية للبيع في العاصمة الإدارية – نزل تاور" },
      { src: "/images/nuzul-hotel-room.webp", alt: "شقق فندقية للبيع في العاصمة الإدارية – غرفة فندقية في نزل تاور" },
      { src: "/images/nuzul-lobby-2.webp", alt: "مدخل المصاعد في نزل تاور" },
    ],
  },
  faq: {
    kicker: "أسئلة شائعة",
    title: "كل ما تريد معرفته عن نزل تاور",
    items: [
      { q: "أين يقع نزل تاور؟", a: "يقع نزل تاور في ثالث قطعة بشريط الأبراج السياحية في الداون تاون بالعاصمة الإدارية الجديدة، بالقرب من محطة مونوريل المحور الشرقي وسوق الذهب ومركز مصر الثقافي الإسلامي." },
      { q: "ما أنواع الوحدات المتاحة في نزل تاور؟", a: "محلات تجارية في الدور الأرضي، ومكاتب إدارية مفروشة وكاملة التشطيب، وغرف وشقق فندقية، بالإضافة إلى مطعم بإطلالة سماوية." },
      { q: "ما هي أسعار نزل تاور؟", a: "المكاتب الإدارية من 35 م² تبدأ من 3,000,000 ج.م، والشقق الفندقية من 65 م² تبدأ من 10,000,000 ج.م، والمحلات التجارية من 50 م² تبدأ من 15,000,000 ج.م (أسعار استرشادية)." },
      { q: "ما نظام السداد في نزل تاور؟", a: "مقدم 10% وتقسيط حتى 10 سنوات." },
      { q: "من يدير الغرف الفندقية؟", a: "الغرف الفندقية من الدور السابع حتى الخامس عشر بإدارة خليجية إماراتية (Time Hotels)." },
      { q: "من مطوّر نزل تاور؟", a: "المشروع من قرطبة للتطوير العقاري Qurtuba Developments، التي تأسست عام 2019 وسلّمت أكثر من 50 مشروعًا." },
    ],
  },
  cta: {
    title: "احجز وحدتك في نزل تاور بمقدم 10%",
    sub: "مكاتب · محلات · شقق فندقية — الداون تاون، العاصمة الإدارية",
  },
  popup: {
    title: "أسعار نزل تاور متاحة الآن",
    sub: "اترك رقمك ونرسل لك أسعار المكاتب والمحلات والشقق الفندقية وخطط السداد على واتساب.",
  },
  teaser: {
    kicker: "من مشروعات قرطبة",
    title: "نزل تاور – الداون تاون",
    body: "مكاتب إدارية ومحلات تجارية وشقق فندقية في شريط الأبراج السياحية بالعاصمة الإدارية، بمقدم 10% وتقسيط حتى 10 سنوات.",
    cta: "اكتشف نزل تاور",
  },
  backToHava: "هافا ريزيدنس",
};

export type NuzulDict = typeof ar;

const en: NuzulDict = {
  meta: {
    title: "NUZUL Tower New Capital | Offices, Retail & Hotel Apartments in Downtown",
    description:
      "NUZUL Tower by Qurtuba Developments on the Tourist Towers Strip, Downtown New Administrative Capital: administrative offices, retail shops and hotel apartments managed by Time Hotels. 10% down payment, up to 10 years.",
    keywords: [
      "NUZUL Tower",
      "Nuzul Tower New Capital",
      "offices for sale New Capital",
      "retail shops for sale New Capital",
      "hotel apartments for sale New Capital",
      "New Capital Downtown",
      "Tourist Towers Strip New Capital",
      "NUZUL Tower prices",
      "Qurtuba Developments",
    ],
    ogAlt: "NUZUL Tower – Downtown, New Administrative Capital",
  },
  nav: [
    { id: "overview", label: "Overview" },
    { id: "prices", label: "Prices" },
    { id: "floors", label: "Floors" },
    { id: "invest", label: "Investment" },
    { id: "location", label: "Location" },
    { id: "faq", label: "FAQ" },
  ],
  hero: {
    eyebrow: "Qurtuba Developments · Downtown, New Capital",
    h1a: "NUZUL Tower New Capital",
    h1b: "Retail · Offices · Hotel in the Heart of Downtown",
    sub: "Administrative offices from 35 m², retail shops from 50 m² and hotel apartments from 65 m² on the Tourist Towers Strip — 10% down payment, installments up to 10 years.",
    stats: [
      { v: "G+15", u: "", l: "Ground + 15 floors" },
      { v: "4,099", u: "m²", l: "Land area" },
      { v: "30%", u: "", l: "Building ratio" },
      { v: "10%", u: "", l: "Down · up to 10 yrs" },
    ],
  },
  overview: {
    kicker: "Overview",
    title: "NUZUL Tower — an Investment Address on the Tourist Towers Strip",
    body: "NUZUL Tower is a mixed-use project in the Downtown of the New Administrative Capital, combining retail shops, administrative offices, hotel rooms and a sky-view restaurant in a ground + 15-floor building with dedicated parking.",
    facts: [
      { l: "Location", v: "3rd plot on the Tourist Towers Strip" },
      { l: "Land area", v: "4,099.35 m²" },
      { l: "Building ratio", v: "30%" },
      { l: "Floors", v: "Commercial ground + 15 floors" },
      { l: "Unit types", v: "Retail – Offices – Hotel rooms – Sky-view restaurant" },
      { l: "Parking", v: "Dedicated parking" },
    ],
  },
  prices: {
    kicker: "NUZUL Tower Prices",
    title: "NUZUL Tower Office, Retail & Hotel Apartment Prices",
    sub: "Offices, retail shops and hotel apartments for sale in the New Capital with 10% down payment and up to 10 years of installments.",
    areaFrom: "Areas from",
    priceFrom: "Prices from",
    down: "10% down payment",
    years: "Up to 10 years",
    note: "Indicative prices, subject to change per the developer's pricing policy and booking date. Contact us to confirm current prices.",
  },
  floors: {
    kicker: "Floor Breakdown",
    title: "A G+15 Building Designed for the Highest Operating Returns",
    sub: "Only the ground floor is dedicated to retail, concentrating visitor traffic and maximizing operating returns.",
    items: [
      { f: "Ground", t: "Retail shops & pharmacy", d: "Street-facing retail close to the monorail station." },
      { f: "1st – 2nd", t: "Furnished offices", d: "Fully furnished offices under international management." },
      { f: "3rd – 6th", t: "Fully finished offices", d: "Delivered fully finished with air conditioning." },
      { f: "7th – 15th", t: "Hotel rooms & apartments", d: "Managed by an Emirati Gulf operator (Time Hotels)." },
      { f: "Roof", t: "Sky-view restaurant", d: "Panoramic views over Downtown and the towers." },
    ],
  },
  invest: {
    kicker: "Why NUZUL Tower?",
    title: "An Investment Opportunity in Downtown",
    cards: [
      {
        icon: "Building2",
        t: "Administrative Offices",
        points: [
          "Office rents rise the closer a building is to malls, squares, banks and hotels — making the company easy to find and reach.",
          "An office inside a hotel building that stands as a landmark in the heart of Downtown commands higher rental value than standard office buildings.",
        ],
      },
      {
        icon: "Store",
        t: "Retail Shops",
        points: [
          "A shop’s value — to own, invest or operate — depends on its address, customer footfall and customer safety.",
          "Proximity to the monorail station and leading brands inside the building drive strong daily visitor traffic.",
        ],
      },
      {
        icon: "BedDouble",
        t: "Hotel Apartments",
        points: [
          "Next to the Egypt Islamic Cultural Center, the Gold Market and the Government District — the closest stay for the center’s international visitors and students.",
          "Close to Downtown’s office district, making annual accommodation contracts with government, private and foreign companies easier.",
        ],
      },
    ],
  },
  location: {
    kicker: "Location",
    title: "NUZUL Tower on the Tourist Towers Strip – Downtown",
    body: "The 3rd plot on the Tourist Towers Strip of the New Administrative Capital, with easy monorail access from the Mohamed Bin Zayed Axis and the Eastern Axis to Downtown.",
    points: [
      "Near the East Axis monorail station",
      "Near the Gold Market",
      "Near the Egypt Islamic Cultural Center",
      "Next to the Government District",
      "Downtown office district",
    ],
    mapTitle: "Map of NUZUL Tower location – Downtown, New Capital",
  },
  gallery: {
    kicker: "Gallery",
    title: "Inside NUZUL Tower",
    images: [
      { src: "/images/nuzul-tower-front.webp", alt: "NUZUL Tower New Capital – facade" },
      { src: "/images/nuzul-lobby.webp", alt: "NUZUL Tower lobby" },
      { src: "/images/nuzul-retail-plaza.webp", alt: "Retail shops for sale New Capital – NUZUL Tower" },
      { src: "/images/nuzul-hotel-room.webp", alt: "Hotel apartments for sale New Capital – NUZUL Tower room" },
      { src: "/images/nuzul-lobby-2.webp", alt: "NUZUL Tower elevator lobby" },
    ],
  },
  faq: {
    kicker: "FAQ",
    title: "Everything About NUZUL Tower",
    items: [
      { q: "Where is NUZUL Tower located?", a: "NUZUL Tower is on the 3rd plot of the Tourist Towers Strip in Downtown New Administrative Capital, near the East Axis monorail station, the Gold Market and the Egypt Islamic Cultural Center." },
      { q: "What unit types are available?", a: "Ground-floor retail shops, furnished and fully finished administrative offices, hotel rooms and apartments, plus a sky-view restaurant." },
      { q: "What are NUZUL Tower prices?", a: "Offices from 35 m² start at EGP 3,000,000, hotel apartments from 65 m² at EGP 10,000,000 and retail shops from 50 m² at EGP 15,000,000 (indicative prices)." },
      { q: "What is the payment plan?", a: "10% down payment with installments up to 10 years." },
      { q: "Who manages the hotel rooms?", a: "Hotel rooms on floors 7 to 15 are managed by an Emirati Gulf operator (Time Hotels)." },
      { q: "Who is the developer of NUZUL Tower?", a: "The project is developed by Qurtuba Developments, founded in 2019 with 50+ delivered projects." },
    ],
  },
  cta: {
    title: "Secure Your Unit at NUZUL Tower with 10% Down",
    sub: "Offices · Retail · Hotel Apartments — Downtown, New Capital",
  },
  popup: {
    title: "NUZUL Tower Prices Available Now",
    sub: "Leave your number and we’ll send office, retail and hotel-apartment prices and payment plans on WhatsApp.",
  },
  teaser: {
    kicker: "More from Qurtuba",
    title: "NUZUL Tower – Downtown",
    body: "Administrative offices, retail shops and hotel apartments on the Tourist Towers Strip of the New Capital — 10% down, up to 10 years.",
    cta: "Discover NUZUL Tower",
  },
  backToHava: "Hava Residence",
};

export const nuzulDict = (lang: Lang): NuzulDict => (lang === "ar" ? ar : en);
