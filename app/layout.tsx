import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SATHWIK KAMATH",
  description: "nextjs | react | full stack developer",
  icons: {
    icon: [
      {
        url: "/Linkedinpic.png",
        sizes: "any",
        type: "image/png",
      },
    ],
    apple: "/Linkedinpic.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" type="image/png" href="/Linkedinpic.png" sizes="any" />
        <link rel="apple-touch-icon" href="/Linkedinpic.png" />
      </head>
      <body className="min-h-full bg-background text-foreground font-mono">{children}</body>
    </html>
  );
}
