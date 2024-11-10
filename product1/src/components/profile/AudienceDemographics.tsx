import React from 'react'
import { BarChartV } from '../shadcn/BarChartV'
import { User } from '@/types/user'

const AudienceDemographics = ({ data }: {
  data: User
}) => {
  return (
    <div className='flex flex-col w-full md:p-10'>
      <BarChartV data={data}/>
    </div>
  )
}

export default AudienceDemographics