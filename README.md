# Hava Residence — Landing Page (AR + EN)

Next.js 16.4 · React 19 · Tailwind 4 · Web3Forms · static build

- `/` عربي (RTL) — `/en` English
- `/about` `/privacy` `/disclaimer` `/thank-you` (+ نسخ `/en/...`)

## قبل الرفع — عدّل `lib/site.ts`
- `url` → الدومين الفعلي (canonical / hreflang / sitemap)
- `gtagId` و `conversions` → أكواد Google Ads
- `phone` / `whatsapp` / `web3formsKey` لو هتغيرهم

كل النصوص في `lib/content.ts` — توزيع الكيوردز في `KEYWORDS.md`.

```
npm install
npm run build
```
