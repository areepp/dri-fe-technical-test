import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Skilled | Maximize skill, minimize budget",
  description:
    "Our modern courses across a range of in-demand skills will give you the knowledge you need to live the life you want.",
  icons: [{ url: "/icons/favicon-32x32.png", type: "image/png", sizes: "32x32" }],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ReactLenis root options={{ lerp: 0.1, smoothWheel: true }} />
        {children}
      </body>
    </html>
  );
}
