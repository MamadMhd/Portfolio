import React from "react";
import { CompanyCardProps } from "./types";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import { PiMapPinAreaFill } from "react-icons/pi";
import { HiOutlineCalendarDays } from "react-icons/hi2";

function CompanyCard({ data }: CompanyCardProps) {
  return (
    <div className="flex gap-4 font-vazirmatn text-white bg-gray-500/20 rounded-lg p-4 cursor-default w-full h-full justify-between sm:flex-row flex-col-reverse items-center">
      <div className="flex flex-col gap-4">
        <h1 className="lg:text-2xl text-xl font-bold">{data.company}</h1>
        <p className="flex gap-2 items-center lg:text-lg"><BsPersonWorkspace />{data.position}</p>
        <p className="flex gap-2 items-center lg:text-lg">
          <PiMapPinAreaFill /> {data.province} {data.city}
        </p>
        <p className="flex gap-2 items-center lg:text-lg"><HiOutlineCalendarDays /> از {data.start} تا {data.end}</p>
      </div>
      <div className="rounded-full bg-white h-[130px] w-[130px] object-contain overflow-hidden bg-center">
        <Image 
          src={data.image? data.image: "/company.png"}
          width={130}
          height={130}
          alt="Company Logo"
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default CompanyCard;
