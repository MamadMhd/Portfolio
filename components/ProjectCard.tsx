import React from "react";
import { ProjectCardProps } from "./types";
import Image from "next/image";

function ProjectCard({ curentProject }: ProjectCardProps) {
  return (
    <div className="flex flex-col w-full font-vazirmatn gap-4 bg-gray-50/10 p-5 rounded-lg">
      <div className="flex lg:flex-row flex-col justify-between">
        <div className="lg:p-6 py-3 px-1 flex flex-col justify-around gap-5">
          <h1 className="text-xl lg:text-3xl font-extrabold">
            نام پروژه : {curentProject?.name}
          </h1>
          <p className="lg:text-2xl text-lg font-semibold">
            کارفرما / درخواست کننده : {curentProject?.employer}
          </p>
          <p className="text-md lg:text-xl">تاریخ : {curentProject?.date}</p>
        </div>
        <Image
          src="/bgForm.jpg"
          width={300}
          height={200}
          alt="project Image"
          className="object-cover w-[300px] h-[200px] object-center rounded-md mx-auto lg:ml-0"
        />
      </div>
      <div className="flex flex-col gap-3">
        <p className="lg:text-2xl text-lg">توضیحات :</p>
        <p className="lg:text-lg text-sm w-full border border-gray-400 rounded-lg p-2">
          {curentProject?.desc}
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <p className="lg:text-2xl text-lg">تکنولوژی ها :</p>
        <div className="flex flex-wrap gap-4 items-center">
          {curentProject?.techs.map((tech, index) => {
            return (
              <span key={index} className="border lg:text-md text-sm rounded-lg py-1 px-3 bg-gray-500/30">
                {tech}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
