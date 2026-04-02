import type { Metadata } from "next";
import { Playfair_Display, Noto_Serif } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto-serif",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "Jorgiahanny Almea | Full Stack Developer Jr.",
  description:
    "Desarrolladora Web Full Stack en formación. HTML · CSS · JavaScript · React · Node.js. Busco incorporarme a un equipo de desarrollo como Junior Developer.",
  openGraph: {
    title: "Jorgiahanny Almea | Full Stack Developer Jr.",
    description:
      "CV profesional — Full Stack Developer Jr. con experiencia en HTML, CSS, JavaScript, React y Node.js.",
    url: "https://jorgiahannydev.github.io",
    siteName: "Jorgiahanny Almea CV",
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${notoSerif.variable}`}>
      <head>
        {/* Newsreader — fuente de eje óptico, se carga via CDN por incompatibilidad con Turbopack */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300..700;1,6..72,300..700&display=swap"
          rel="stylesheet"
        />
      </head>
      {/* Google Analytics GA4 */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-5WQ04073WE"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-5WQ04073WE');
      `}</Script>
      {/* Google Tag Manager — script principal */}
      <Script id="gtm" strategy="afterInteractive">{`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-W2LXZFHP');
      `}</Script>
      <body className="bg-[#fdf9f3] text-[#1c1c18] antialiased">
        {/* Google Tag Manager — noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W2LXZFHP"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
