import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WTools",
  description: "Small tools for text, images, video, audio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <div className="min-w-screen min-h-screen">
          <div className="w-3/4 m-auto p-8">
            <div className="mb-10">
              <h1 className="text-3xl font-bold">
                WTools
              </h1>
              <p className="text-xs">
                Small tools for text, images, video, audio...
              </p>
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
