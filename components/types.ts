import { Project } from "@/app/projects/type"
import { WorkExprerience } from "@/app/workExperience/types"

export type ProjectsListProps = {
    projects?: Array<Project> | null,
    curentProject: Project | null,
    handleChange(id: number): void
}

export type ProjectCardProps = {
    curentProject: Project | null
}

export type CompanyCardProps = {
    data: WorkExprerience
}