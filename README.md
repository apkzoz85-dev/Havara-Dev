# Hava Residence — Landing Page (AR + EN)

Next.js 16.4 · React 19 · Tailwind 4 · static build

الفورم بيحوّل العميل على واتساب مباشرة (رسالة جاهزة بالاسم والرقم ونوع الوحدة)، وبعدها صفحة `/thank-you` اللي بيتسجل فيها conversion الفورم.

- `/` هافا ريزيدنس عربي (RTL) — `/en` English
- `/nuzul` نزل تاور عربي — `/en/nuzul` English
- `/about` `/privacy` `/disclaimer` `/thank-you` (+ نسخ `/en/...`)

## قبل الرفع — عدّل `lib/site.ts`
- `url` → الدومين الفعلي (canonical / hreflang / sitemap)
- `phone` / `whatsapp` لو هتغيرهم (رقم الواتساب هو اللي بتوصله الليدز)

كل النصوص في `lib/content.ts` — توزيع الكيوردز في `KEYWORDS.md`.

```
npm install
npm run build
```

## Google Tag Manager — `GTM-5TFJGJNK`
الكود متركب في `<head>` و الـ noscript بعد `<body>` في كل الصفحات.
الموقع بيبعت Events على الـ dataLayer — اعمل لكل واحد Custom Event Trigger في GTM:

| Event | بيحصل إمتى |
|---|---|
| `lead_form` | لما العميل يبعت الفورم ويوصل لصفحة الشكر (مرة واحدة بس) |
| `whatsapp_click` | ضغطة على أي زرار واتساب |
| `call_click` | ضغطة على أي زرار اتصال |

كل Event معاه متغيرات `project` (hava / nuzul) و `page_language` (ar / en).

## Google Ads tag — `AW-18171758010`
متركب مباشرة في `<head>` في كل الصفحات (gtag.js). **ما تضيفش Google Tag لنفس الحساب تاني من جوه GTM** عشان ما يبقاش فيه تاجين.
