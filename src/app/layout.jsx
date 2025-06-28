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
  title: "Jazmin Bags",
  description: "Venta de bolsos y accesorios de moda",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
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
