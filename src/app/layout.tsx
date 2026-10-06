import Navbar from "@/components/navbar/Navbar";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: "jorm",
  description: "a corner of the internet for jorm <3",
};

const sfPro = localFont({
  src: "../../public/fonts/SF-Pro.ttf",
  variable: "--font-sf-pro",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="absolute inset-0 min-h-screen w-full overflow-auto bg-black-950">
        <Image
          width={1512}
          height={550}
          className="absolute left-1/2 top-0 -z-10 h-auto w-full max-w-[1512px] -translate-x-1/2 select-none"
          src="/images/ui/bg-gradient.png"
          alt=""
          priority
        />
        <div
          className={`${sfPro.className} mx-auto flex min-h-screen w-full max-w-4xl flex-col px-8 py-10 text-black-200`}
        >
          <Navbar />
          <div className="grow py-16 sm:py-24">{children}</div>
        </div>
      </body>
    </html>
  );
}
