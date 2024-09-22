"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="relative z-20 mt-5 rounded-3xl md:p-5 p-3.5 shadow-customShadow1 flex justify-between items-center backdrop-blur-md bg-white/30">
      {/* right section */}
      <div className="flex lg:gap-10 gap-0 md:gap-5 items-center">
        <div
          className={`absolute bg-white rounded-3xl ${
            !openMenu ? "invisible" : ""
          } right-0 top-0 shadow-customShadow2 min-w-56 p-5 
                      md:static md:bg-transparent md:shadow-none md:min-w-0 md:p-0 md:visible`}
        >
          <nav
            className="flex flex-col md:flex-row md:gap-5 md:text-2xl 
                        text-xl *:text-center md:*:text-right gap-4 text-black md:text-white font-vazirmatn"
          >
            <IoClose
              className="h-7 md:hidden w-7 drop-shadow-lg my-1 ml-auto cursor-pointer"
              onClick={() => setOpenMenu(false)}
              size={"2em"}
            />
            <Link
              className="hover:scale-[1.2] hover:drop-shadow-[0_10px_10px_rgba(0,0,0,0.50)] transition duration-300"
              onClick={() => setOpenMenu(false)}
              href="/"
            >
              خانه
            </Link>
            <Link
              className="hover:scale-[1.2] hover:drop-shadow-[0_10px_10px_rgba(0,0,0,0.50)] transition duration-300"
              onClick={() => setOpenMenu(false)}
              href="/projects"
            >
              پروژه ها
            </Link>
            <Link
              className="hover:scale-[1.2] hover:drop-shadow-[0_10px_10px_rgba(0,0,0,0.50)] transition duration-300"
              onClick={() => setOpenMenu(false)}
              href="/workExperience"
            >
              سوابق شغلی
            </Link>
            <Link
              className="hover:scale-[1.2] hover:drop-shadow-[0_10px_10px_rgba(0,0,0,0.50)] transition duration-300"
              onClick={() => setOpenMenu(false)}
              href="/contactMe"
            >
              ارتباط با من
            </Link>
          </nav>
        </div>
        <div className="inline-block md:hidden">
          <TiThMenu
            className="fill-gray-200 cursor-pointer size-16 px-4"
            size={"2em"}
            onClick={() => setOpenMenu(true)}
          />
        </div>
      </div>

      {/* left section */}
      <Link href="/">
        <Image src="/logo.svg" alt="Next.js Logo" width={120} height={20} />
      </Link>
    </header>
  );
};

export default Menu;
