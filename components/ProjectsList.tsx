import React from "react";
import { ProjectsListProps } from "./types";
import { IoIosArrowDropleft } from "react-icons/io";
import styles from "./styles.module.scss";

function ProjectsList({
  projects,
  curentProject,
  handleChange,
}: ProjectsListProps) {
  return (
    <div className="flex flex-col gap-4 font-vazirmatn lg:text-xl">
      {projects?.map((project) => {
        return (
          <div
          key={project.id}
            onClick={() => handleChange(project.id)}
            className={`${
              styles["forwardArrow"]
            } flex justify-between items-center p-4 border-r-4  border-gray-400 ${
              curentProject === project ? "bg-white/10" : "hover:bg-white/10"
            } rounded-l-lg rounded-r-md shadow-xl `}
          >
            <span>{project.name}</span>
            <span className={`${styles["icon"]}`}>
              <IoIosArrowDropleft size={28} />
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectsList;
