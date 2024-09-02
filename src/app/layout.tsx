import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "jorm",
  description: "a corner of the internet for jorm <3",
};

const inter = localFont({
  src: "../../public/fonts/Inter-VariableFont.ttf",
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="absolute w-screen inset-0 min-h-screen overflow-auto bg-black-950 bg-[linear-gradient(to_right,#1c1c1c_1px,transparent_1px),linear-gradient(to_bottom,#1c1c1c_1px,transparent_1px)] bg-[size:75px_75px]">
        <Image
          width={1512}
          height={550}
          className="absolute left-1/2 top-0 -z-10 -translate-x-1/2"
          src="/images/ui/bg-gradient.png"
          alt=""
          priority
        />
        <div
          className={`${inter.className} min-h-screen w-screen bg-gradient-to-t from-black-950 via-transparent mx-auto flex max-w-4xl flex-col px-8 py-10 text-black-200`}
        >
          <Navbar />
          <div className="flex-grow py-16 sm:py-24">{children}</div>
        </div>
      </body>
    </html>
  );
}
