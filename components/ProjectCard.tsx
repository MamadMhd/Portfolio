import React from "react";
import { ProjectCardProps } from "./types";
import Image from "next/image";

function ProjectCard({ curentProject }: ProjectCardProps) {
  return (
    <div className="flex flex-col w-full font-vazirmatn gap-4">
      <div className="flex justify-between">
        <div className="p-6 flex flex-col justify-around">
          <h1 className="text-3xl font-bold">
            نام پروژه : {curentProject?.name}
          </h1>
          <p className="text-2xl font-semibold">
            کارفرما / درخواست کننده : {curentProject?.employer}
          </p>
          <p className="text-xl">تاریخ : {curentProject?.date}</p>
        </div>
        <Image
          src="/bgForm.jpg"
          width={300}
          height={200}
          alt="project Image"
          className="object-cover w-[450px] h-[250px] object-center rounded-md"
        />
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-2xl">توضیحات :</p>
        <p className="text-lg w-full border border-gray-400 rounded-lg p-2">
          {curentProject?.desc}
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-2xl">تکنولوژی ها :</p>
        <div className="flex flex-wrap gap-4 items-center">
          {curentProject?.techs.map((tech, index) => {
            return (
              <span key={index} className="border rounded-lg py-1 px-3 bg-gray-500/30">
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
