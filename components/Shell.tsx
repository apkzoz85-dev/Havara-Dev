import Script from "next/script";
import "@/app/globals.css";
import { SITE, type Lang } from "@/lib/site";
import UIProvider from "./UIProvider";

export default function Shell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Alexandria:wght@300;400;500;600;700;800&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,500&display=swap"
        />
        <link rel="preload" as="image" href="/images/hava-lagoon-night.webp" />
        <meta name="theme-color" content="#0d3f3d" />
      </head>
      <body>
        <UIProvider lang={lang}>{children}</UIProvider>
        {/* Google Ads gtag — replace SITE.gtagId */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${SITE.gtagId}`} strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${SITE.gtagId}');`}
        </Script>
      </body>
    </html>
  );
}
