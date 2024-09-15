"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="relative lg:w-5/6 w-full max-w-8xl flex items-center justify-between text-sm backdrop-blur-md bg-white/30 py-4 rounded-xl px-5 z-50">
      <ul className="lg:flex gap-2 text-lg text-white font-vazirmatn h-full hidden">
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
      <div className="block lg:hidden">
        <TiThMenu
          className="fill-gray-200 cursor-pointer mx-4"
          size={"2em"}
          onClick={() => setOpenMenu(true)}
        />
      </div>
      <Link href="/">
        <Image
          className="relative"
          src="/logo.svg"
          alt="Next.js Logo"
          width={120}
          height={20}
        />
      </Link>
      {openMenu && (
          <div className="absolute lg:hidden text-black z-50 h-screen w-screen flex-col gap-2 -top-10 right-0 px-5 flex filter backdrop-blur-xl bg-white/90">
            <IoClose className="h-10 w-10 drop-shadow-lg my-2 mr-auto cursor-pointer" onClick={()=>setOpenMenu(false)} size={'2em'} />
            <Link
              className="p-3 text-2xl font-bold font-vazirmatn hover:bg-white rounded-lg w-full"
              href="/"
              onClick={()=>setOpenMenu(false)}
            >
              خانه
            </Link>
            <Link
              className="p-3 text-2xl font-bold font-vazirmatn hover:bg-white rounded-lg w-full"
              href="/projects"
              onClick={()=>setOpenMenu(false)}
            >
              پروژه ها
            </Link>
            <Link
              className="p-3 text-2xl font-bold font-vazirmatn hover:bg-white rounded-lg w-full"
              href="/workExperience"
              onClick={()=>setOpenMenu(false)}
            >
              سوابق شغلی
            </Link>
            <Link
              className="p-3 text-2xl font-bold font-vazirmatn hover:bg-white rounded-lg w-full"
              href="/contactMe"
              onClick={()=>setOpenMenu(false)}
            >
              ارتباط با من
            </Link>
          </div>
        )}
    </div>
  );
};

export default Menu;
