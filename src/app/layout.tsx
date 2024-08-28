import type { Metadata } from "next";
import { spaceGrotesk } from "@/utils/fonts";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

export const metadata: Metadata = {
  title: "jorm",
  description: "a corner of the internet for jorm <3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="absolute inset-0 min-h-screen overflow-auto bg-denim-950 bg-[linear-gradient(to_right,#191d24_1px,transparent_1px),linear-gradient(to_bottom,#191d24_1px,transparent_1px)] bg-[size:75px_75px]">
        <div
          className={`${spaceGrotesk.className} min-h-screen bg-gradient-to-t from-denim-950 via-transparent mx-auto flex max-w-4xl flex-col px-8 py-10 text-denim-300`}
        >
          <Navbar />
          <div className="flex-grow py-16 sm:py-24">{children}</div>
        </div>
      </body>
    </html>
  );
}
