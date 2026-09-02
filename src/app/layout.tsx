import type { Metadata, Viewport } from "next";
import { MotionConfig } from "motion/react";
import "./globals.css";
import { oswald, karla } from "@/lib/fonts";
import { SITE_URL, SITE_NAME } from "@/lib/constants";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BackToTop } from "@/components/layout/back-to-top";
import { SkipLink } from "@/components/layout/skip-link";
import { HtmlLangSync } from "@/components/layout/html-lang-sync";

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${oswald.variable} ${karla.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-white font-body text-[17px] leading-[1.65] text-grey antialiased">
        <MotionConfig reducedMotion="user">
          <HtmlLangSync />
          <SkipLink />
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
