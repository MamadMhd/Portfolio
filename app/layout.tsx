import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohammad Mahdi | CV",
  description:
    "Experienced Frontend Developer with a passion for innovation and excellence. Specializing in creating intuitive, responsive web designs and enhancing user experience. Explore my portfolio to learn more about my work and achievements.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={inter.className}>
        <main className="flex min-h-screen w-screen flex-col items-center gap-10 py-24">
          <div className="z-10 w-full lg:max-w-8xl md:max-w-4xl items-center justify-between text-sm lg:flex backdrop-blur-md bg-white/30 p-4 rounded-xl">
            <ul className="flex gap-2 text-lg text-white font-vazirmatn h-full">
              <li className="cursor-pointer px-2 pb-1 rounded">
                <Link href="/">خانه</Link>
              </li>
              <li className="cursor-pointer px-2 pb-1 rounded">
                <Link href="/projects">پروژه ها</Link>
              </li>
              <li className="cursor-pointer px-2 pb-1 rounded">
                <Link href="/workExperience">سوابق شغلی</Link>
              </li>
              <li className="cursor-pointer px-2 pb-1 rounded">
                <Link href="/contactMe">ارتباط با من</Link>
              </li>
            </ul>
            <Link href='/'>
              <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/logo.svg"
                alt="Next.js Logo"
                width={120}
                height={20}
                priority
              />
            </Link>
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
