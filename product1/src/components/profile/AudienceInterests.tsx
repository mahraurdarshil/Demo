import React from 'react'
import { BarCharts } from '../shadcn/BarChart'
import { User } from '@/types/user'

const AudienceInterests = ({ data }: {
  data: User
}) => {
  return (
    <div className='flex flex-col md:flex-row mt-10 md:p-10'>
      {data.audienceInterests.types.map((item) => {
        return (
          <div className='w-full md:w-1/2'>
            <BarCharts data={item} />
          </div>
        )
      })}
    </div>
  )
}

export default AudienceInterests