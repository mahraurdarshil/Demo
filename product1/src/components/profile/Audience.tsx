import React from 'react'
import { PieCharts } from '../shadcn/PieChart'
import { BarCharts } from '../shadcn/BarChart'

const Audience = () => {
  return (
    <div className='flex flex-col w-full p-10'>
      <div>
        <h1 className='text-gray-900 font-semibold text-2xl'>Audience</h1>
      </div>
      <div className='flex justify-around mt-10'>
        <div>
          <PieCharts />
        </div>
        <div>
          <BarCharts />
        </div>
      </div>
    </div>
  )
}

export default Audience