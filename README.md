# Hava Residence — Landing Page (AR + EN)

Next.js 16.4 · React 19 · Tailwind 4 · static build

الفورم بيحوّل العميل على واتساب مباشرة (رسالة جاهزة بالاسم والرقم ونوع الوحدة)، وبعدها صفحة `/thank-you` اللي بيتسجل فيها conversion الفورم.

- `/` هافا ريزيدنس عربي (RTL) — `/en` English
- `/nuzul` نزل تاور عربي — `/en/nuzul` English
- `/about` `/privacy` `/disclaimer` `/thank-you` (+ نسخ `/en/...`)

## قبل الرفع — عدّل `lib/site.ts`
- `url` → الدومين الفعلي (canonical / hreflang / sitemap)
- `gtagId` و `conversions` → أكواد Google Ads
- `phone` / `whatsapp` لو هتغيرهم (رقم الواتساب هو اللي بتوصله الليدز)

كل النصوص في `lib/content.ts` — توزيع الكيوردز في `KEYWORDS.md`.

```
npm install
npm run build
```
