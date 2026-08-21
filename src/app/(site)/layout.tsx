import type { Metadata, Viewport } from "next";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { GSAPProvider } from "@/components/providers/GSAPProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ScrollToTop } from "@/components/providers/ScrollToTop";
import { ContactPopup } from "@/components/ui/ContactPopup";
import { GoogleTagManager } from "@next/third-parties/google";
import { JsonLd } from "@/components/blog/JsonLd";
import {
  buildOrganizationJsonLd,
  buildWebsiteJsonLd,
} from "@/lib/blog-seo";
import {
  COMPANY_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  LEGAL_NAME,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";
import "../globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: "Brosavo | Official Website of Brosavo Technologies",

  description: COMPANY_DESCRIPTION,

  applicationName: SITE_NAME,

  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },

  keywords: [
    "Brosavo",
    "Brosavo Technologies",
    "brosavo.com",
    "Brosavo CRM",
    "official Brosavo website",
    "real estate CRM",
    "real estate CRM software",
    "CRM for real estate agents",
    "real estate lead management",
    "WhatsApp CRM",
    "property management CRM",
    "AI solutions",
    "SaaS development",
    "enterprise software",
  ],

  authors: [{ name: LEGAL_NAME, url: SITE_URL }],

  creator: LEGAL_NAME,
  publisher: LEGAL_NAME,

  openGraph: {
    title: "Brosavo | Official Website of Brosavo Technologies",
    description:
      "Brosavo builds real estate CRM, AI solutions, SaaS platforms, WhatsApp automation, and custom software for modern businesses.",
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        alt: "Brosavo — official website of Brosavo Technologies",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Brosavo | Official Website of Brosavo Technologies",
    description:
      "Real estate CRM, AI solutions, SaaS platforms, WhatsApp automation, and custom software by Brosavo.",
  },

  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="w-full max-w-full overflow-x-hidden antialiased bg-background text-foreground">
        <JsonLd
          data={[buildOrganizationJsonLd(), buildWebsiteJsonLd()]}
        />

        {/* Reset scroll position when navigating to a new page */}
        <ScrollToTop />

        <GoogleTagManager
          gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID!}
        />

        <ThemeProvider>
          <SmoothScroll>
            <GSAPProvider>
              <Navigation />

              <main className="w-full max-w-full overflow-x-hidden">
                {children}
              </main>

              <Footer />

              <ContactPopup />
            </GSAPProvider>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}