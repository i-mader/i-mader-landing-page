import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import LayoutHome from "@/components/wrapper/layout-home";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "I-Mader - Digital Innovation Maker For Your Business",
  description: "Digital Innovation Maker For Your Business",
  icons: {
    icon: "/fav-icon/favicon.ico?v=4",
    apple: "/fav-icon/apple-touch-icon.png?v=4",
    shortcut: "/fav-icon/apple-touch-icon.png",
  },
  openGraph: {
    url: "i-mader.tech",
    title: "I-Mader - Digital Innovation Maker For Your Bussines",
    description: "Digital Innovation Maker For Your Business",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry>
          <LayoutHome>{children}</LayoutHome>
        </AntdRegistry>
      </body>
    </html>
  );
}
