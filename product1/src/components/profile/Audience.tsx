import React from 'react'
import { PieCharts } from '../shadcn/PieChart'
import { BarCharts } from '../shadcn/BarChart'

const Audience = () => {
  return (
    <div className='flex flex-col w-full'>
      <div>
        <h1 className='font-semibold text-2xl'>Audience</h1>
      </div>
      <div className='flex justify-around'>
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