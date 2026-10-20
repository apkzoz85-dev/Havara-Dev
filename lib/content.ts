import type { Lang } from "./site";

/* =========================================================
   Hava Residence — bilingual content
   Keywords are placed deliberately (see KEYWORDS.md)
   ========================================================= */

export type Unit = {
  key: string;
  ar: string;
  en: string;
  total?: number;
  down?: number;
  monthly?: number;
  years?: number;
};

export const units: Unit[] = [
  {
    key: "2br",
    ar: "شقة غرفتين نوم",
    en: "2-Bedroom Apartment",
    total: 2_500_000,
    down: 250_000,
    monthly: 18_000,
    years: 10,
  },
  {
    key: "3br",
    ar: "شقة 3 غرف نوم",
    en: "3-Bedroom Apartment",
    total: 3_300_000,
    down: 330_000,
    monthly: 24_000,
    years: 10,
  },
  {
    key: "duplex",
    ar: "دوبلكس",
    en: "Duplex",
    total: 8_000_000,
    down: 800_000,
    monthly: 50_000,
    years: 12,
  },
  {
    key: "altocasa",
    ar: "ألتوكاسا Altocasa",
    en: "Altocasa",
    total: 10_000_000,
    down: 1_000_000,
  },
];

const ar = {
  lang: "ar" as Lang,
  dir: "rtl" as "rtl" | "ltr",
  meta: {
    title: "هافا ريزيدنس العاصمة الإدارية | أكبر لاجون R8 – قرطبة للتطوير العقاري",
    description:
      "هافا ريزيدنس Hava Residence من قرطبة للتطوير العقاري في R8 بالعاصمة الإدارية الجديدة: شقق ودوبلكس للبيع حول أكبر لاجون في شرق القاهرة، مقدم 10% وتقسيط حتى 12 سنة. اعرف الأسعار الآن.",
    keywords: [
      "هافا ريزيدنس",
      "هافا ريزيدنس العاصمة الإدارية",
      "Hava Residence",
      "كمبوند هافا ريزيدنس",
      "قرطبة للتطوير العقاري",
      "شقق للبيع في العاصمة الإدارية",
      "كمبوند لاجون العاصمة الإدارية",
      "R8 العاصمة الإدارية",
      "أسعار هافا ريزيدنس",
      "دوبلكس للبيع في العاصمة الإدارية",
      "شقق بالتقسيط في العاصمة الإدارية",
    ],
    ogAlt: "هافا ريزيدنس – لاجون كمبوند في R8 العاصمة الإدارية",
  },
  nav: [
    { id: "about", label: "عن المشروع" },
    { id: "prices", label: "الأسعار" },
    { id: "masterplan", label: "المخطط العام" },
    { id: "amenities", label: "الخدمات" },
    { id: "location", label: "الموقع" },
    { id: "faq", label: "أسئلة شائعة" },
  ],
  ui: {
    call: "اتصل الآن",
    whatsapp: "واتساب",
    register: "سجّل اهتمامك",
    switchLang: "English",
    priceFrom: "يبدأ من",
    egp: "ج.م",
    down: "المقدم",
    monthly: "القسط الشهري",
    total: "إجمالي السعر",
    years: (n: number) => `تقسيط حتى ${n} سنوات`.replace("12 سنوات", "12 سنة"),
    askPrice: "اطلب التفاصيل",
    onRequest: "السعر عند الطلب",
    planOnRequest: "القسط ومدة التقسيط عند الطلب",
    onRequestSub: "تواصل معنا لمعرفة المساحات والسعر وخطة السداد",
    close: "إغلاق",
    menu: "القائمة",
  },
  hero: {
    eyebrow: "قرطبة للتطوير العقاري · R8 العاصمة الإدارية",
    h1a: "هافا ريزيدنس العاصمة الإدارية",
    h1b: "أكبر لاجون في شرق القاهرة",
    sub: "كمبوند هافا ريزيدنس Hava Residence — شقق ودوبلكس للبيع حول لاجون كريستالي على مساحة 12,000 م²، بمقدم 10% وتقسيط حتى 12 سنة.",
    stats: [
      { v: "20", u: "فدان", l: "مساحة المشروع" },
      { v: "15%", u: "", l: "نسبة بنائية فقط" },
      { v: "12,000", u: "م²", l: "مساحة اللاجون" },
      { v: "10%", u: "", l: "مقدم · حتى 12 سنة" },
    ],
  },
  form: {
    title: "احصل على الأسعار وخطط السداد",
    sub: "سجّل بياناتك وسيتواصل معك مستشار عقاري خلال دقائق.",
    name: "الاسم بالكامل",
    phone: "رقم الموبايل",
    unit: "نوع الوحدة",
    unitAny: "غير محدد",
    submit: "أرسل طلبك",
    sending: "جارٍ الإرسال…",
    viaWhatsapp: "واتساب",
    viaCall: "مكالمة",
    consent: "بالتواصل معنا توافق على",
    privacy: "سياسة الخصوصية",
    errName: "من فضلك اكتب الاسم",
    errPhone: "من فضلك اكتب رقم موبايل صحيح",
    errSend: "حدث خطأ، حاول مرة أخرى أو تواصل عبر واتساب.",
  },
  about: {
    kicker: "عن المشروع",
    title: "هافا… الهواء بصيغته التركية",
    body: "اسم Hava مستوحى من الكلمة العربية «هواء» بصيغتها التركية، ليعكس الانتعاش والانطلاق والحرية. هافا ريزيدنس مجتمع سكني في العاصمة الإدارية الجديدة يجمع بين العمارة العصرية والطبيعة، ليمنحك أسلوب حياة أكثر هدوءًا وإشراقًا.",
    exp: {
      title: "تجربة حياة استثنائية",
      body: "لاجونز واسعة، ومساحات مفتوحة، وإطلالات بانورامية، وتصميم معماري يحقق الانسجام بين الراحة والطبيعة.",
    },
    tagline: "تنفّس الحياة بشكل مختلف.",
    imgAlt: "هافا ريزيدنس – تنفّس الحياة بشكل مختلف",
  },
  highlights: {
    kicker: "أبرز المميزات",
    title: "لماذا كمبوند هافا ريزيدنس؟",
    items: [
      { icon: "Waves", t: "أكبر لاجون في شرق القاهرة", d: "أول وأكبر لاجون في العاصمة الإدارية بمساحة 12,000 م²." },
      { icon: "Trees", t: "أقل نسبة بنائية وكثافة", d: "15% مباني مقابل 85% مساحات خضراء ولاجونز." },
      { icon: "Eye", t: "إطلالات بانورامية", d: "مسافة 16 مترًا بين المباني لخصوصية وإطلالة مفتوحة." },
      { icon: "Footprints", t: "مسار للجري ونادٍ اجتماعي", d: "ممشى رياضي ونادٍ اجتماعي لكل أفراد الأسرة." },
      { icon: "Landmark", t: "مسجد وعناصر مائية", d: "مسجد داخل المشروع وعناصر مائية تخدم جميع المباني." },
      { icon: "Car", t: "طرق داخلية ومواقف", d: "طرق داخلية منظمة ومواقف سيارات مخصصة." },
      { icon: "Compass", t: "تصميم واستشارات متخصصة", d: "تصميم معماري واستشارات هندسية متخصصة." },
      { icon: "MapPin", t: "قلب R8", d: "على المحور المركزي بالعاصمة الإدارية الجديدة." },
    ],
  },
  prices: {
    kicker: "أسعار هافا ريزيدنس",
    title: "أسعار الشقق والدوبلكس في هافا ريزيدنس",
    sub: "شقق للبيع في العاصمة الإدارية بمقدم 10% وأقساط شهرية تبدأ من 18,000 ج.م.",
    note: "أسعار استرشادية وقابلة للتغيير وفقًا لسياسة الشركة المطوّرة ووقت الحجز. للتأكد من السعر الحالي تواصل معنا.",
  },
  payment: {
    kicker: "خطة السداد",
    title: "شقق بالتقسيط في العاصمة الإدارية",
    items: [
      { v: "10%", l: "مقدم تعاقد" },
      { v: "10", l: "سنوات تقسيط للشقق" },
      { v: "12", l: "سنة تقسيط للدوبلكس" },
    ],
  },
  masterplan: {
    kicker: "المخطط العام",
    title: "20 فدانًا… 85% منها طبيعة ولاجونز",
    body: "يمتد كمبوند هافا ريزيدنس على 20 فدانًا (88,000 م²)، بنسبة بنائية 15% فقط، مقابل 85% للمساحات الخضراء والمفتوحة واللاجونز، لتحقيق الخصوصية والهدوء.",
    landscape: {
      title: "تنسيق المساحات الطبيعية",
      body: "مساحات خضراء ولاجونز وممرات مفتوحة تعزز الخصوصية والانسيابية، وتخلق أجواء هادئة مستوحاة من المنتجعات.",
    },
    bars: [
      { l: "مساحات خضراء ولاجونز", v: 85 },
      { l: "مباني", v: 15 },
    ],
    alt1: "مخطط كمبوند لاجون العاصمة الإدارية – هافا ريزيدنس من أعلى",
    alt2: "لاجون هافا ريزيدنس R8 ليلًا",
  },
  amenities: {
    kicker: "المرافق والخدمات",
    title: "حياة المنتجعات داخل العاصمة الإدارية",
    sub: "مساحات خضراء واسعة، ولاجونز وعناصر مائية، ومرافق مصممة لتوفير تجربة سكنية مستوحاة من أجواء المنتجعات.",
    items: [
      { icon: "Droplets", t: "لاجون كريستالي وحمامات سباحة" },
      { icon: "Sparkles", t: "كلوب هاوس وسبا" },
      { icon: "Bike", t: "مسارات للجري والدراجات" },
      { icon: "Film", t: "سينما مفتوحة ومناطق شواء" },
      { icon: "Sailboat", t: "منطقة كاياك وبحيرات" },
      { icon: "Baby", t: "ملاعب أطفال وحدائق عائلية" },
      { icon: "ShieldCheck", t: "أمن ودخول ذكي" },
      { icon: "Mountain", t: "إطلالات بانورامية ومساحات مفتوحة" },
    ],
  },
  gallery: {
    kicker: "معرض الصور",
    title: "لقطات من هافا ريزيدنس",
    images: [
      { src: "/images/hava-buildings-lagoon.webp", alt: "عمارات هافا ريزيدنس على اللاجون – شقق للبيع في العاصمة الإدارية" },
      { src: "/images/hava-infinity-pool.webp", alt: "حمام سباحة إنفينيتي في كمبوند هافا ريزيدنس" },
      { src: "/images/hava-lagoon-aerial-2.webp", alt: "لاجون هافا ريزيدنس من أعلى – R8 العاصمة الإدارية" },
      { src: "/images/hava-lagoon-poster.webp", alt: "لاجون 12,000 م² في هافا ريزيدنس" },
      { src: "/images/hava-lagoon-night.webp", alt: "إطلالة ليلية على لاجون هافا ريزيدنس" },
      { src: "/images/hava-sunset-lagoon.webp", alt: "غروب الشمس على أكبر لاجون في العاصمة الإدارية" },
    ],
  },
  location: {
    kicker: "الموقع",
    title: "هافا ريزيدنس في قلب R8 العاصمة الإدارية",
    body: "في قلب العاصمة الإدارية الجديدة بمنطقة R8، على المحور المركزي، وعلى بُعد دقائق من الداون تاون والـCBD وأهم المعالم الحكومية والدبلوماسية.",
    points: ["المحور المركزي", "الداون تاون", "منطقة الأعمال CBD", "الحي الحكومي", "الحي الدبلوماسي"],
    mapTitle: "خريطة موقع هافا ريزيدنس R8 العاصمة الإدارية",
  },
  vision: {
    kicker: "الرؤية",
    title: "إيقاع جديد للحياة في R8",
    body: "حياة أكثر اتساعًا وهدوءًا وحيوية، بتجربة سكنية مختلفة في قلب العاصمة الإدارية.",
    cards: [
      { t: "الرؤية", d: "مجتمع متكامل يجمع بين الطبيعة والخصوصية والعمارة العصرية، ليمنح سكانه إحساسًا بالانتماء والراحة والتجدد." },
      { t: "فلسفة التصميم", d: "تعتمد على الانفتاح والإضاءة الطبيعية والانسيابية، من خلال دمج العمارة العصرية بالطبيعة لخلق بيئة سكنية ملهمة ومنعشة." },
      { t: "تنفّس الحياة بشكل مختلف", d: "حيث تلتقي الطبيعة والمساحات الرحبة والتصميم المدروس لتمنحك أسلوب حياة يعكس طموحاتك." },
    ],
  },
  developer: {
    kicker: "المطوّر العقاري",
    title: "قرطبة للتطوير العقاري Qurtuba Developments",
    body: "تأسست قرطبة للتطوير العقاري عام 2019، وتحمل خبرة مجمّعة تتجاوز 20 عامًا في السوق العقاري. سلّمت الشركة أكثر من 50 مشروعًا بإجمالي يزيد عن 4,000 وحدة سكنية، مع تركيز على التنمية العمرانية المستدامة في القاهرة الجديدة ودمياط الجديدة والمنصورة الجديدة والعاصمة الإدارية الجديدة.",
    stats: [
      { v: "2019", l: "سنة التأسيس" },
      { v: "+20", l: "سنة خبرة مجمّعة" },
      { v: "+50", l: "مشروع مُسلَّم" },
      { v: "+4,000", l: "وحدة سكنية" },
    ],
    cities: ["القاهرة الجديدة", "دمياط الجديدة", "المنصورة الجديدة", "العاصمة الإدارية الجديدة"],
  },
  faq: {
    kicker: "أسئلة شائعة",
    title: "كل ما تريد معرفته عن هافا ريزيدنس",
    items: [
      { q: "أين يقع كمبوند هافا ريزيدنس؟", a: "يقع هافا ريزيدنس في منطقة R8 بالعاصمة الإدارية الجديدة، على المحور المركزي وعلى بُعد دقائق من الداون تاون والـCBD والحي الحكومي." },
      { q: "من هو مطوّر هافا ريزيدنس؟", a: "المشروع من تطوير قرطبة للتطوير العقاري Qurtuba Developments، التي تأسست عام 2019 وسلّمت أكثر من 50 مشروعًا و4,000 وحدة سكنية." },
      { q: "ما هي أسعار هافا ريزيدنس؟", a: "تبدأ أسعار الشقق في هافا ريزيدنس من 2,500,000 ج.م لشقة غرفتين، و3,300,000 ج.م لشقة 3 غرف، و8,000,000 ج.م للدوبلكس (أسعار استرشادية)." },
      { q: "ما هي أنظمة السداد المتاحة؟", a: "مقدم 10% وتقسيط حتى 10 سنوات للشقق وحتى 12 سنة للدوبلكس، بأقساط شهرية تبدأ من 18,000 ج.م." },
      { q: "ما مساحة اللاجون في هافا ريزيدنس؟", a: "يضم المشروع لاجون بمساحة 12,000 م²، ويُعد أكبر لاجون في شرق القاهرة وأول وأكبر كمبوند لاجون في العاصمة الإدارية." },
      { q: "ما مساحة المشروع ونسبة البناء؟", a: "يمتد المشروع على 20 فدانًا (88,000 م²) بنسبة بنائية 15% فقط، و85% مساحات خضراء ولاجونز ومساحات مفتوحة." },
    ],
  },
  cta: {
    title: "احجز وحدتك في هافا ريزيدنس قبل زيادة الأسعار",
    sub: "مقدم 10% · تقسيط حتى 12 سنة · R8 العاصمة الإدارية",
  },
  popup: {
    title: "أسعار الإطلاق متاحة الآن",
    sub: "اترك رقمك ونرسل لك أسعار هافا ريزيدنس وخطط السداد على واتساب.",
  },
  footer: {
    disclosure:
      "هذا الموقع يديره جراندير سبيسز بصفته مستشارًا عقاريًا مستقلًا لأغراض التسويق وتلقي طلبات الاستفسار، وهو ليس الموقع الرسمي لقرطبة للتطوير العقاري. جميع الأسماء والعلامات التجارية مملوكة لأصحابها. الأسعار والصور استرشادية وقابلة للتغيير.",
    links: { about: "من نحن", privacy: "سياسة الخصوصية", disclaimer: "إخلاء المسؤولية" },
    rights: "جميع الحقوق محفوظة",
  },
  cookie: {
    text: "نستخدم ملفات تعريف الارتباط لتحسين تجربتك وقياس أداء الإعلانات.",
    accept: "موافق",
    decline: "رفض",
  },
  thanks: {
    title: "شكرًا لك",
    body: "تم تحويلك إلى واتساب لإرسال طلبك. اضغط «إرسال» في المحادثة وسيرد عليك مستشار عقاري بالأسعار وخطط السداد.",
    notOpened: "لو واتساب ما اتفتحش، اضغط هنا:",
    send: "إرسال الطلب على واتساب",
    summary: "بيانات طلبك",
    fields: { name: "الاسم", phone: "الموبايل", project: "المشروع", unit: "نوع الوحدة" },
    stepsTitle: "الخطوات القادمة",
    steps: ["أرسل الرسالة الجاهزة على واتساب", "مستشار عقاري يرسل لك الأسعار وخطط السداد", "نحدد معك موعد زيارة أو مكالمة"],
    back: "العودة للصفحة الرئيسية",
  },
};

export type Dict = typeof ar;

const en: Dict = {
  lang: "en",
  dir: "ltr",
  meta: {
    title: "Hava Residence New Capital | Largest Lagoon in R8 – Qurtuba Developments",
    description:
      "Hava Residence by Qurtuba Developments in R8, New Administrative Capital: apartments & duplexes for sale around the largest lagoon in East Cairo. 10% down payment, installments up to 12 years. Get prices now.",
    keywords: [
      "Hava Residence",
      "Hava Residence New Capital",
      "Hava Residence Qurtuba",
      "Qurtuba Developments",
      "apartments for sale New Capital",
      "lagoon compound New Administrative Capital",
      "R8 New Capital",
      "Hava Residence prices",
      "duplex for sale New Capital",
      "New Capital installments 12 years",
    ],
    ogAlt: "Hava Residence – lagoon compound in R8, New Administrative Capital",
  },
  nav: [
    { id: "about", label: "About" },
    { id: "prices", label: "Prices" },
    { id: "masterplan", label: "Master Plan" },
    { id: "amenities", label: "Amenities" },
    { id: "location", label: "Location" },
    { id: "faq", label: "FAQ" },
  ],
  ui: {
    call: "Call Now",
    whatsapp: "WhatsApp",
    register: "Register Interest",
    switchLang: "العربية",
    priceFrom: "Starting from",
    egp: "EGP",
    down: "Down Payment",
    monthly: "Monthly",
    total: "Total Price",
    years: (n: number) => `Installments up to ${n} years`,
    askPrice: "Request Details",
    onRequest: "Price on request",
    planOnRequest: "Installments & tenor on request",
    onRequestSub: "Contact us for areas, price and payment plan",
    close: "Close",
    menu: "Menu",
  },
  hero: {
    eyebrow: "Qurtuba Developments · R8, New Capital",
    h1a: "Hava Residence New Capital",
    h1b: "The Largest Lagoon in East Cairo",
    sub: "Hava Residence compound — apartments and duplexes for sale around a 12,000 m² crystal lagoon, with 10% down payment and installments up to 12 years.",
    stats: [
      { v: "20", u: "Feddans", l: "Project area" },
      { v: "15%", u: "", l: "Built-up area only" },
      { v: "12,000", u: "m²", l: "Lagoon area" },
      { v: "10%", u: "", l: "Down · up to 12 yrs" },
    ],
  },
  form: {
    title: "Get Prices & Payment Plans",
    sub: "Leave your details and a property consultant will call you within minutes.",
    name: "Full name",
    phone: "Mobile number",
    unit: "Unit type",
    unitAny: "Not sure yet",
    submit: "Send Request",
    sending: "Sending…",
    viaWhatsapp: "WhatsApp",
    viaCall: "Call",
    consent: "By contacting us you agree to our",
    privacy: "Privacy Policy",
    errName: "Please enter your name",
    errPhone: "Please enter a valid mobile number",
    errSend: "Something went wrong. Please try again or reach us on WhatsApp.",
  },
  about: {
    kicker: "About the Project",
    title: "Hava — “air”, in its Turkish form",
    body: "The name Hava is inspired by the Arabic word “Hawaa” (air) in its Turkish form, reflecting freshness, release and freedom. Hava Residence is a residential community in the New Administrative Capital that blends modern architecture with nature for a calmer, brighter way of life.",
    exp: {
      title: "An Exceptional Living Experience",
      body: "Expansive lagoons, open spaces, panoramic views and architecture that brings comfort and nature into harmony.",
    },
    tagline: "Breathe life differently.",
    imgAlt: "Hava Residence – breathe life differently",
  },
  highlights: {
    kicker: "Highlights",
    title: "Why Hava Residence Compound?",
    items: [
      { icon: "Waves", t: "Largest lagoon in East Cairo", d: "The first and largest lagoon in the New Capital — 12,000 m²." },
      { icon: "Trees", t: "Lowest density", d: "15% buildings vs. 85% green areas and lagoons." },
      { icon: "Eye", t: "Panoramic views", d: "16 m between buildings for privacy and open views." },
      { icon: "Footprints", t: "Jogging track & social club", d: "A running track and a social club for the whole family." },
      { icon: "Landmark", t: "Mosque & water features", d: "On-site mosque and water features serving every building." },
      { icon: "Car", t: "Internal roads & parking", d: "Well-planned internal roads and dedicated parking." },
      { icon: "Compass", t: "Specialist design", d: "Architectural design and specialist engineering consultancy." },
      { icon: "MapPin", t: "Heart of R8", d: "On the Central Axis of the New Administrative Capital." },
    ],
  },
  prices: {
    kicker: "Hava Residence Prices",
    title: "Hava Residence Apartment & Duplex Prices",
    sub: "Apartments for sale in the New Capital with 10% down payment and monthly installments from EGP 18,000.",
    note: "Indicative prices, subject to change per the developer's pricing policy and booking date. Contact us to confirm current prices.",
  },
  payment: {
    kicker: "Payment Plan",
    title: "New Capital Apartments in Installments",
    items: [
      { v: "10%", l: "Down payment" },
      { v: "10", l: "Years for apartments" },
      { v: "12", l: "Years for duplexes" },
    ],
  },
  masterplan: {
    kicker: "Master Plan",
    title: "20 Feddans… 85% Nature & Lagoons",
    body: "Hava Residence compound spans 20 feddans (88,000 m²) with only 15% built-up area, leaving 85% for green and open spaces and lagoons — for privacy and calm.",
    landscape: {
      title: "Landscape Design",
      body: "Green spaces, lagoons and open walkways that enhance privacy and flow, creating a calm, resort-inspired atmosphere.",
    },
    bars: [
      { l: "Green areas & lagoons", v: 85 },
      { l: "Buildings", v: 15 },
    ],
    alt1: "Aerial master plan of Hava Residence lagoon compound, New Capital",
    alt2: "Hava Residence R8 lagoon at night",
  },
  amenities: {
    kicker: "Lifestyle Facilities",
    title: "Resort Living in the New Capital",
    sub: "Wide green spaces, lagoons and water features, and facilities designed for a resort-inspired residential experience.",
    items: [
      { icon: "Droplets", t: "Crystal-clear lagoon & swimming pools" },
      { icon: "Sparkles", t: "Clubhouse & spa" },
      { icon: "Bike", t: "Jogging & cycling tracks" },
      { icon: "Film", t: "Outdoor cinema & BBQ zones" },
      { icon: "Sailboat", t: "Kayaking area & lakes" },
      { icon: "Baby", t: "Kids’ playgrounds & family parks" },
      { icon: "ShieldCheck", t: "Security & smart access control" },
      { icon: "Mountain", t: "Panoramic views & open spaces" },
    ],
  },
  gallery: {
    kicker: "Gallery",
    title: "Inside Hava Residence",
    images: [
      { src: "/images/hava-buildings-lagoon.webp", alt: "Hava Residence buildings on the lagoon – apartments for sale New Capital" },
      { src: "/images/hava-infinity-pool.webp", alt: "Infinity swimming pool at Hava Residence compound" },
      { src: "/images/hava-lagoon-aerial-2.webp", alt: "Aerial view of Hava Residence lagoon – R8 New Capital" },
      { src: "/images/hava-lagoon-poster.webp", alt: "12,000 m² lagoon at Hava Residence" },
      { src: "/images/hava-lagoon-night.webp", alt: "Night view over Hava Residence lagoon" },
      { src: "/images/hava-sunset-lagoon.webp", alt: "Sunset over the largest lagoon in the New Capital" },
    ],
  },
  location: {
    kicker: "Location",
    title: "Hava Residence in the Heart of R8, New Capital",
    body: "In the heart of the New Administrative Capital’s R8 district, on the Central Axis, minutes from Downtown, the CBD and key government and diplomatic landmarks.",
    points: ["Central Axis", "Downtown", "Central Business District", "Government District", "Diplomatic District"],
    mapTitle: "Map of Hava Residence location, R8 New Capital",
  },
  vision: {
    kicker: "Vision",
    title: "A New Rhythm of Life in R8",
    body: "A more spacious, calmer and livelier life — a different residential experience in the heart of the New Capital.",
    cards: [
      { t: "Our Vision", d: "An integrated community uniting nature, privacy and modern architecture, giving residents a sense of belonging, comfort and renewal." },
      { t: "Design Philosophy", d: "Built on openness, natural light and flow — merging modern architecture with nature to create an inspiring, refreshing living environment." },
      { t: "Breathe Life Differently", d: "Where nature, generous spaces and thoughtful design meet to give you a lifestyle that reflects your ambitions." },
    ],
  },
  developer: {
    kicker: "The Developer",
    title: "Qurtuba Developments",
    body: "Qurtuba Developments was founded in 2019, carrying more than 20 years of combined real-estate expertise. The company has successfully delivered over 50 projects with 4,000+ residential units, focusing on sustainable urban growth across New Cairo, New Damietta, New Mansoura, and the New Administrative Capital.",
    stats: [
      { v: "2019", l: "Founded" },
      { v: "20+", l: "Years combined expertise" },
      { v: "50+", l: "Projects delivered" },
      { v: "4,000+", l: "Residential units" },
    ],
    cities: ["New Cairo", "New Damietta", "New Mansoura", "New Administrative Capital"],
  },
  faq: {
    kicker: "FAQ",
    title: "Everything About Hava Residence",
    items: [
      { q: "Where is Hava Residence located?", a: "Hava Residence is in the R8 district of the New Administrative Capital, on the Central Axis, minutes from Downtown, the CBD and the Government District." },
      { q: "Who is the developer of Hava Residence?", a: "The project is developed by Qurtuba Developments, founded in 2019, with 50+ delivered projects and 4,000+ residential units." },
      { q: "What are Hava Residence prices?", a: "Prices start from EGP 2,500,000 for a 2-bedroom apartment, EGP 3,300,000 for a 3-bedroom apartment and EGP 8,000,000 for a duplex (indicative prices)." },
      { q: "What payment plans are available?", a: "10% down payment with installments up to 10 years for apartments and up to 12 years for duplexes; monthly installments start from EGP 18,000." },
      { q: "How big is the lagoon at Hava Residence?", a: "The project features a 12,000 m² lagoon — the largest lagoon in East Cairo and the first and largest lagoon compound in the New Capital." },
      { q: "What is the project area and building ratio?", a: "The project spans 20 feddans (88,000 m²) with only 15% built-up area and 85% green spaces, lagoons and open areas." },
    ],
  },
  cta: {
    title: "Secure Your Unit at Hava Residence Before Prices Rise",
    sub: "10% down · Up to 12 years · R8, New Capital",
  },
  popup: {
    title: "Launch Prices Available Now",
    sub: "Leave your number and we’ll send Hava Residence prices and payment plans on WhatsApp.",
  },
  footer: {
    disclosure:
      "This website is operated by Grandeur Spaces as an independent real estate consultant for marketing and inquiry purposes. It is not the official website of Qurtuba Developments. All names and trademarks belong to their respective owners. Prices and images are indicative and subject to change.",
    links: { about: "About Us", privacy: "Privacy Policy", disclaimer: "Disclaimer" },
    rights: "All rights reserved",
  },
  cookie: {
    text: "We use cookies to improve your experience and measure ad performance.",
    accept: "Accept",
    decline: "Decline",
  },
  thanks: {
    title: "Thank you",
    body: "You’ve been redirected to WhatsApp to send your request. Tap “Send” in the chat and a property consultant will reply with prices and payment plans.",
    notOpened: "If WhatsApp didn’t open, tap here:",
    send: "Send request on WhatsApp",
    summary: "Your request",
    fields: { name: "Name", phone: "Mobile", project: "Project", unit: "Unit type" },
    stepsTitle: "What happens next",
    steps: ["Send the ready-made message on WhatsApp", "A consultant sends you prices and payment plans", "We schedule a visit or a call with you"],
    back: "Back to home",
  },
};

export const dict = (lang: Lang): Dict => (lang === "ar" ? ar : en);
export const fmt = (n: number) => n.toLocaleString("en-US");
