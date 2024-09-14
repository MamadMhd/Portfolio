"use client";
import { useEffect, useState } from "react";
import { PiLinkSimpleBold } from "react-icons/pi";
import {
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoGoogle,
  IoClose,
} from "react-icons/io5";
import styles from "./styles.module.scss";

function SocialLinks() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="fixed bottom-10 left-10 cursor-pointer">
      <div className={`flex flex-col justify-center items-center gap-4 mb-4`}>
        <a
          className={`flex justify-center items-center rounded-full bg-[#ff3e30] w-16 h-16 border border-blue-950 hover:shadow-lg hover:shadow-[#ff3e30] ${
            isOpen ? styles["slide-up"] : styles["slide-down"]
          }`}
          href="mailto:mohammad.mahdi.bwe@gmail.com"
          target="_blank"
        >
          <IoLogoGoogle size={25} color="white" />
        </a>
        <a
          className={`flex justify-center items-center rounded-full bg-[#171515] w-16 h-16 border border-blue-950 hover:shadow-lg hover:shadow-[#171515] ${
            isOpen ? styles["slide-up"] : styles["slide-down"] 
          }`}
          href="https://github.com/MamadMhd"
          target="_blank"
        >
          <IoLogoGithub size={25} color="white" />
        </a>
        <a
          className={`flex justify-center items-center rounded-full bg-[#0077B5] w-16 h-16 border border-blue-950 hover:shadow-lg hover:shadow-[#0077B5] ${
            isOpen ? styles["slide-up"] : styles["slide-down"]
          }`}
          href="https://www.linkedin.com/in/mohammad-mahdi-58252b248/"
          target="_blank"
        >
          <IoLogoLinkedin size={25} color="white" />
        </a>
      </div>
      <div
        className="flex justify-center items-center rounded-full bg-blue-700 w-16 h-16 border border-blue-950"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? (
          <IoClose size={30} color="white" />
        ) : (
          <PiLinkSimpleBold size={25} color="white" />
        )}
      </div>
    </div>
  );
}

export default SocialLinks;
