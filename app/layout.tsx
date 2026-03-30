import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="es">
      <body className="bg-gray-50 text-gray-800 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
