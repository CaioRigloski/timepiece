import type { Metadata, Viewport } from "next";
import { Goudy_Bookletter_1911 } from "next/font/google";
import "../app/styles/globals.css";
import Layout from "./components/Layout";

const goudy = Goudy_Bookletter_1911({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Timepiece",
  description: "Luxury watch store",
  icons: {
    icon: "/icon.png"
  }
};

export const viewport: Viewport = {
  themeColor: '#060D0D',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={goudy.className}>
          <Layout/>
          {children}
      </body>
    </html>
  )
}
