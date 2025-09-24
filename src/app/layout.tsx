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

// Star Shield 2 font
const starShield2 = {
  variable: "--font-star-shield-2",
  style: {
    fontFamily: "Star Shield 2",
  },
};

export const metadata: Metadata = {
  title: "Mario Onoh - Creative Portfolio",
  description: "Creative Portfolio",
  keywords: "Mario Onoh, Rio, Skrio, Creative, Portfolio, Music, Tech, Film, Producer, Creative Director",
  authors: [{ name: "Mario Onoh" }],
  openGraph: {
    title: "Mario Onoh - Creative Portfolio",
    description: "Creative Portfolio",
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
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${starShield2.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
