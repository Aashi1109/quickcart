import { RootProvider } from "@/components/providers";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QuickCart",
  description: "PWA application with Next 14",
  generator: "Next.js",
  manifest: "/manifest.webmanifest",
  keywords: ["nextjs", "nextjs14", "next14", "pwa", "next-pwa"],
  authors: [
    { name: "Ashish Pal" },
    {
      name: "Ashish Pal",
      url: "https://www.linkedin.com/in/aashishpal2201/",
    },
  ],

  icons: [
    { rel: "apple-touch-icon", url: "/assets/icons/icon-128x128.png" },
    { rel: "icon", url: "/assets/icons/icon-128x128.png" },
  ],
};

export const viewport: Viewport = {
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  viewportFit: "cover",
  minimumScale: 1,
  initialScale: 1,
  width: "device-width",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
