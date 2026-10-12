import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.brosavo.com"
  ),

  title: "Brosavo | Official Website of Brosavo Technologies",

  description:
    "Brosavo Technologies builds modern websites, custom software, AI solutions, SaaS platforms, and digital solutions for businesses worldwide.",

  openGraph: {
    title: "Brosavo | Official Website of Brosavo Technologies",
    description:
      "Software, AI & Digital Solutions for Modern Businesses.",
    url: "https://www.brosavo.com",
    siteName: "Brosavo Technologies",
    type: "website",
    images: [
      {
        url: "/images/og/brosavo-og.webp",
        width: 1200,
        height: 630,
        alt: "BROSAVO Technologies — Software, AI & Digital Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Brosavo | Official Website of Brosavo Technologies",
    description:
      "Software, AI & Digital Solutions for Modern Businesses.",
    images: ["/images/og/brosavo-og.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="w-full max-w-full overflow-x-hidden antialiased bg-background text-foreground"
        suppressHydrationWarning
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}