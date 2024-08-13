import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/GoogleAnalytics";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

// const inter = Inter({ subsets: ["latin"] });

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

interface IRootLayout {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<IRootLayout>) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <GoogleAnalytics />
          {children}
          <Toaster />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
