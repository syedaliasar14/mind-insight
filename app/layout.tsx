import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
//import { SessionProvider } from "next-auth/react";

const font = Quicksand({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: "MindInsight",
  description: "Your personal AI therapist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        {/* <SessionProvider> */}
          {children}
        {/* </SessionProvider> */}
      </body>
    </html>
  );
}
