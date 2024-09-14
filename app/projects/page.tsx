"use client";
import ProjectCard from "@/components/ProjectCard";
import ProjectsList from "@/components/ProjectsList";
import { useState, useEffect } from "react";
import { Project } from "./type";

function Projects() {
  const [projects, setProjects] = useState<Array<Project> | null>(null);
  const [curentProject, setCurentProject] = useState<Project | null>(null);
  const data: Array<Project> = [
    {
      id: 1,
      name: "پروژه مدیریت تردد خودرو ها",
      desc: "اپلیکیشن کنترل تردد خودرو ها به وسیله پلاک خودرو ها که فرانت اند آن به وسیله electron js با استفاده از فریمورک React طراحی شده و بک اند آن به وسیله پایتون Django و کتابخانه MySQL در پایتون طراحی شده است.",
      employer: "بنیاد نخبگان",
      date: "دی 1401",
      techs: ["React", "ElectronJs", "Django", "Django RestFramework"],
    },
    {
      id: 2,
      name: "داشبورد مدیریتی داده ها",
      desc: "این پروژه یک داشبورد مدیریت داده ها است که در طی انجام کارآموزی در شرکت پرسیا سیستم مشغول به توسعه آن بودم. (Asp.net Core + DevExpress)",
      employer: "شرکت پرسیا سیستم",
      date: "تیر 1402",
      techs: [".Net Core", "DevExpress", "React"],
    },
  ];

  useEffect(() => {
    setProjects(data);
    setCurentProject(data[0]);
  }, []);

  const handleChange = (id: number) => {
    projects?.map((project) => {
      if (project.id === id) {
        setCurentProject(project);
        return;
      }
    });
  };

  return (
    <div className="flex lg:flex-row flex-col w-full max-w-8xl h-full gap-4 text-white lg:px-20 px-10">
      <div className="basis-1/4 w-full h-full">
        <ProjectsList
          projects={projects}
          curentProject={curentProject}
          handleChange={handleChange}
        />
      </div>
      <hr className="lg:hidden" />
      <div className="basis-3/4 w-full h-full">
        <ProjectCard curentProject={curentProject} />
      </div>
    </div>
  );
}

export default Projects;
