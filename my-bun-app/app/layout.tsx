import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { LocaleProvider } from "@/components/LocaleProvider";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PORTFOLIO.SYS",
  description: "DevOps / network engineer portfolio",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pl" className={`${geistMono.variable} h-full`}>
      <body className="flex h-full flex-col overflow-hidden font-mono antialiased">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
