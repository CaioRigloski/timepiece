import type { Metadata } from "next";
import { Goudy_Bookletter_1911 } from "next/font/google";
import "./globals.css";

const goudy = Goudy_Bookletter_1911({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Timepiece",
  description: "Luxury watch store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={goudy.className}>{children}</body>
    </html>
  );
}
