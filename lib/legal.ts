import { SITE, type Lang } from "./site";

export const privacyText = (lang: Lang) =>
  lang === "ar"
    ? [
        `يحترم ${SITE.agencyNameAr} (${SITE.agencyName}) خصوصيتك. نجمع فقط البيانات التي تُدخلها طوعًا في نماذج التواصل (الاسم، رقم الموبايل، نوع الوحدة المفضلة) بهدف الرد على استفسارك بخصوص مشروع هافا ريزيدنس.`,
        "قد نشارك بياناتك مع فريق المبيعات المختص بالمشروع فقط لغرض التواصل معك، ولا نبيع بياناتك أو نؤجرها لأي طرف ثالث.",
        "نستخدم ملفات تعريف الارتباط (Cookies) وأدوات قياس مثل Google Ads وGoogle Analytics لقياس أداء الإعلانات وتحسين تجربة التصفح. يمكنك رفضها من شريط الموافقة أو من إعدادات المتصفح.",
        `يمكنك طلب تعديل بياناتك أو حذفها في أي وقت بالتواصل معنا على ${SITE.phone}.`,
      ]
    : [
        `${SITE.agencyName} respects your privacy. We only collect the data you voluntarily submit through our contact forms (name, mobile number, preferred unit type) in order to respond to your inquiry about Hava Residence.`,
        "Your data may be shared only with the sales team handling the project for the purpose of contacting you. We never sell or rent your data to third parties.",
        "We use cookies and measurement tools such as Google Ads and Google Analytics to measure ad performance and improve your browsing experience. You can decline them via the consent bar or your browser settings.",
        `You may request correction or deletion of your data at any time by contacting us at ${SITE.phone}.`,
      ];

export const disclaimerText = (lang: Lang) =>
  lang === "ar"
    ? [
        `هذا الموقع يديره ${SITE.agencyNameAr} (${SITE.agencyName}) بصفته مستشارًا عقاريًا مستقلًا، وهو ليس الموقع الرسمي لقرطبة للتطوير العقاري (Qurtuba Developments) أو أي جهة تابعة لها.`,
        "جميع الأسعار المعروضة أسعار استرشادية وقابلة للتغيير دون إشعار مسبق وفقًا لسياسة الشركة المطوّرة وتوافر الوحدات ووقت الحجز.",
        "الصور والتصميمات المعروضة تخيلية لأغراض توضيحية وقد تختلف عن الواقع النهائي للمشروع.",
        "المعلومات الواردة لا تُعد عرضًا تعاقديًا ملزمًا، ويُرجى التحقق من جميع التفاصيل مباشرة قبل اتخاذ أي قرار شراء. جميع الأسماء والشعارات والعلامات التجارية مملوكة لأصحابها.",
      ]
    : [
        `This website is operated by ${SITE.agencyName} as an independent real estate consultant. It is not the official website of Qurtuba Developments or any of its affiliates.`,
        "All prices shown are indicative and may change without prior notice according to the developer’s pricing policy, unit availability and booking date.",
        "Images and renderings are illustrative and may differ from the final delivered project.",
        "The information provided does not constitute a binding contractual offer; please verify all details directly before making any purchase decision. All names, logos and trademarks belong to their respective owners.",
      ];

export const aboutText = (lang: Lang) =>
  lang === "ar"
    ? [
        `${SITE.agencyNameAr} (${SITE.agencyName}) شركة استشارات وتسويق عقاري في القاهرة، تساعد العملاء في مصر والخليج على اختيار الوحدة المناسبة في أهم مشروعات المطورين العقاريين.`,
        "نعمل كمستشار عقاري مستقل: نقدم معلومات المشروعات والأسعار وخطط السداد، وننسّق الزيارات والمعاينات مع فرق المبيعات، دون أي رسوم إضافية على العميل.",
        `للتواصل: ${SITE.phone}`,
      ]
    : [
        `${SITE.agencyName} is a Cairo-based real estate consultancy and marketing firm helping buyers in Egypt and the Gulf choose the right unit in leading developers’ projects.`,
        "We act as an independent real estate consultant: we provide project information, prices and payment plans, and arrange visits with sales teams — at no extra cost to the buyer.",
        `Contact: ${SITE.phone}`,
      ];
