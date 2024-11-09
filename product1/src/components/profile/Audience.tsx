import React from 'react'
import { PieCharts } from '../shadcn/PieChart'
import { BarCharts } from '../shadcn/BarChart'
import { User } from '@/types/user'

const Audience = ({ data }: {
  data: User
}) => {
  return (
    <div className='flex flex-col w-full p-10'>
      <div>
        <h1 className='text-gray-900 font-semibold text-2xl'>Audience</h1>
      </div>
      <div className='flex flex-row mt-10'>
        <div className='w-1/2'>
          <PieCharts />
        </div>
        <div className='w-1/2'>
          {data.audienceLocation.types.map((item) => {
            return (
              <BarCharts data={item} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Audience