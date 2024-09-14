import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SocialLinks from "@/components/SocialLinks";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import Menu from "@/components/Menu";

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
        <main className="flex min-h-screen min-w-screen w-full flex-col items-center gap-10 py-10">
          <Menu />
          {children}
          <SocialLinks />
        </main>
        <ToastContainer rtl={true} position="top-left" className={'font-vazirmatn'} />
      </body>
    </html>
  );
}
