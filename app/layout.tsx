import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import localFont from "next/font/local";

const inter = localFont({
  src: "./fonts/InterVF.ttf",
  variable: "--font-inter",
  weight: "100 200 300 400 500 600 700 800 900",
});

const spaceGrotesk = localFont({
  src: "./fonts/SpaceGroteskVF.ttf",
  variable: "--font-space-grotesk",
  weight: "300 400 500 600 700",
});

const bigShouldersInline = localFont({
  src: "./fonts/BigShouldersInlineVF.ttf",
  variable: "--font-big-shoulders-inline",
  weight: "100 200 300 400 500 600 700 800 900",
});

const bigShoulders = localFont({
  src: "./fonts/BigShouldersVF.ttf",
  variable: "--font-big-shoulders",
  weight: "100 200 300 400 500 600 700 800 900",
});

export const metadata: Metadata = {
  title: "Dev Overflow",
  description:
    "A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.",
  icons: {
    icon: "/images/site-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${spaceGrotesk.variable} ${bigShouldersInline.variable} ${bigShoulders.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
