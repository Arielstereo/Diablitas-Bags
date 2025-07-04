import { Zen_Dots, Funnel_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import WspButton from "@/components/WspButton";
import Footer from "@/components/Footer";
import MobileMenu from "@/components/MobileMenu";

const zen = Zen_Dots({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-zent-dots",
});

const funel = Funnel_Display({
  subsets: ["latin"],
  weight: ["400", "800"],
  variable: "--font-funel-display",
});

export const metadata = {
  title: "Diablita's Bags | Carteras, Minibags y Totebags",
  description:
    "Descubrí la mejor selección de carteras, minibags y totebags en Diablita's Bags. Envíos a todo el país. ¡Nuevos modelos temporada Otoño Invierno 2025!",
  keywords: [
    "carteras",
    "minibags",
    "totebags",
    "bolsos",
    "accesorios",
    "moda",
    "envíos",
    "Argentina",
    "Diablita's Bags",
    "comprar carteras online",
  ],
  authors: [
    { name: "Diablita's Bags", url: "https://diablitas-bags.empren.dev/" },
  ],
  openGraph: {
    title: "Diablita's Bags | Carteras, Minibags y Totebags",
    description:
      "Descubrí la mejor selección de carteras, minibags y totebags en Diablita's Bags. ¡Nuevos modelos temporada Otoño Invierno 2025!",
    url: "https://diablitas-bags.empren.dev/",
    siteName: "Diablita's Bags",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Diablita's Bags - Carteras y Minibags",
      },
    ],
    locale: "es_AR",
    type: "website",
  },

  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        <meta name="theme-color" content="#111" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${zen.variable} ${funel.variable} antialiased`}>
        <Header />
        <MobileMenu />
        {children}
        <WspButton />
        <Footer />
      </body>
    </html>
  );
}
