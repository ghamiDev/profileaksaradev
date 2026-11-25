import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2B3990",
};

export const metadata: Metadata = {
  title: "AKSARA DEV — Jasa Pembuatan Aplikasi",
  description:
    "AKSARA DEV: jasa pembuatan aplikasi web, mobile, dan sistem internal. Dari analisis kebutuhan, desain, pengembangan, sampai perawatan setelah rilis.",
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "AKSARA DEV",
    title: "AKSARA DEV — Jasa Pembuatan Aplikasi",
    description:
      "AKSARA DEV: jasa pembuatan aplikasi web, mobile, dan sistem internal. Dari analisis kebutuhan, desain, pengembangan, sampai perawatan setelah rilis.",
  },
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
