export type Project = {
    id: number,
    name: string,
    desc: string,
    employer: string,
    date: string,
    techs: Array<string>,
    images?: Array<string>
}