import { Project } from "@/app/projects/type"

export type ProjectsListProps = {
    projects?: Array<Project> | null,
    curentProject: Project | null,
    handleChange(id: number): void
}

export type ProjectCardProps = {
    curentProject: Project | null
}