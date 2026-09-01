import type { Metadata, Viewport } from "next";
import { MotionConfig } from "motion/react";
import "../globals.css";
import { oswald, karla } from "@/lib/fonts";
import { SITE_URL } from "@/lib/constants";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BackToTop } from "@/components/layout/back-to-top";

const SITE_NAME_EN = "AGAVE Landscaping PR";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: `%s | ${SITE_NAME_EN} | Ponce, Puerto Rico`,
    default: `${SITE_NAME_EN} | Garden Design in Ponce, PR`,
  },
};

export const viewport: Viewport = {
  themeColor: "#4f5050",
};

export default function EnRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${karla.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-white font-body text-[17px] leading-[1.65] text-grey antialiased">
        <MotionConfig reducedMotion="user">
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-0 focus:top-0 focus:z-[200] focus:bg-tan focus:px-4 focus:py-2 focus:text-ink"
          >
            Skip to content
          </a>
          <AnnouncementBar locale="en" />
          <Header locale="en" />
          {children}
          <Footer locale="en" />
          <BackToTop locale="en" />
        </MotionConfig>
      </body>
    </html>
  );
}
