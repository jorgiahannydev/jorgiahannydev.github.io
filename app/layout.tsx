import type { Metadata } from "next";
import { Playfair_Display, Lora } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
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
    <html lang="es" className={`${playfair.variable} ${lora.variable}`}>
      <body className="bg-[#fdf8f0] text-stone-800 antialiased">
        {children}
      </body>
    </html>
  );
}
