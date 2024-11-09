import React from 'react'
import { BarCharts } from '../shadcn/BarChart'
import { User } from '@/types/user'

const AudienceInterests = ({ data }: {
  data: User
}) => {
  return (
    <div className='flex flex-row mt-10'>
      {data.audienceInterests.types.map((item) => {
        return (
          <div className='w-1/2'>
            <BarCharts data={item} />
          </div>
        )
      })}
    </div>
  )
}

export default AudienceInterests