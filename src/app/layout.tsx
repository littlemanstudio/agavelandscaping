import type { Metadata, Viewport } from "next";
import { Oswald, Karla } from "next/font/google";
import { MotionConfig } from "motion/react";
import "./globals.css";
import { SITE_URL, SITE_NAME } from "@/lib/constants";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BackToTop } from "@/components/layout/back-to-top";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-oswald",
  display: "swap",
});

const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--font-karla",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: `%s | ${SITE_NAME} | Ponce, Puerto Rico`,
    default: `${SITE_NAME} | Diseño y Paisajismo en Ponce, PR`,
  },
};

export const viewport: Viewport = {
  themeColor: "#4f5050",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${oswald.variable} ${karla.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-white font-body text-[17px] leading-[1.65] text-grey antialiased">
        <MotionConfig reducedMotion="user">
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-0 focus:top-0 focus:z-[200] focus:bg-tan focus:px-4 focus:py-2 focus:text-ink"
          >
            Saltar al contenido
          </a>
          <AnnouncementBar />
          <Header />
          {children}
          <Footer />
          <BackToTop />
        </MotionConfig>
      </body>
    </html>
  );
}
