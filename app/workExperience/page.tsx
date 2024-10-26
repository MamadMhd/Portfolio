import CompanyCard from '@/components/CompanyCard'
import React from 'react'
import { WorkExprerience } from './types'

const data: Array<WorkExprerience> = [
  {
    position: "برنامه نویس React",
    company: "شرکت پیشگامان آسیا",
    province: "فارس",
    city: "شیراز",
    start: "مهر 1402",
    end: "آذر 1402",
    image: "/pishgamanasia.png"
  },
  {
    position: "برنامه نویس Net. و DevExpress",
    company: "شرکت پرسیا سیستم",
    province: "فارس",
    city: "شیراز",
    start: "تیر 1402",
    end: "شهریور 1402"
  }
]
function WorkExperience() {
  return (
    <div className='grid lg:grid-cols-2 gap-4 w-full min-w-7xl h-full'>
      {
        data.map((item, index)=> {
          return(
            <div key={index} className='h-full'><CompanyCard data={item} /></div>
          )
        })
      }
    </div>
  )
}

export default WorkExperience