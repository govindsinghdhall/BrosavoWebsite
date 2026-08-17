import type { Metadata, Viewport } from "next";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { GSAPProvider } from "@/components/providers/GSAPProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ContactPopup } from "@/components/ui/ContactPopup";
import { GoogleTagManager } from "@next/third-parties/google";
import "../globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title:
    "Brosavo | Global Technology Company & Real Estate CRM",

  description:
    "Brosavo is a global technology company building real estate CRM, AI solutions, SaaS platforms, custom software, WhatsApp automation, and digital products for modern businesses.",

  // IMPORTANT: Use the same canonical domain everywhere
  metadataBase: new URL("https://www.brosavo.com"),

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },

  keywords: [
    "Brosavo",
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

  authors: [{ name: "Brosavo Technologies" }],

  openGraph: {
    title: "Brosavo | Global Technology Company & Real Estate CRM",

    description:
      "Brosavo builds real estate CRM, AI solutions, SaaS platforms, WhatsApp automation, and custom software for modern businesses.",

    url: "https://www.brosavo.com",

    siteName: "Brosavo",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Brosavo | Global Technology Company & Real Estate CRM",

    description:
      "Real estate CRM, AI solutions, SaaS platforms, WhatsApp automation, and custom software by Brosavo.",
  },

  robots: {
    index: true,
    follow: true,
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