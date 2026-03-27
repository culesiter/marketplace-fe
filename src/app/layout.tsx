import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import "../styles/globals.css";
import "../styles/sass/general.scss";
import "../styles/vendor/tooltipster.css";
import "../styles/vendor/simple-line-icons.css";
import "../styles/sass/_reset.scss";

import Header from "@/components/layout/Header";
import Icons from "@/components/ui/Icons";
import Menu from "@/components/layout/Menu";
import Footer from "@/components/layout/Footer";
import AlertBox from "@/components/ui/AlertBox";
import StoreProvider from "./StoreProvider";

const titilliumWeb = Titillium_Web({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-titillium",
});

export const metadata: Metadata = {
  robots: {
    index: process.env.SITE_INDEX === "true",
    follow: process.env.SITE_INDEX === "true",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
  title: {
    default: "Marketplace",
    template: "%s | Marketplace",
  },
  description: "The best online marketplace for buyers and sellers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={titilliumWeb.className}>
      <body>
        <StoreProvider>
          <Header />
          <Menu />
          {children}
          <Footer />
          <Icons />
          <AlertBox />
        </StoreProvider>
      </body>
    </html>
  );
}
