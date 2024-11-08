import React from 'react'
import { BarCharts } from '../shadcn/BarChart'

const AudienceInterests = () => {
  return (
    <div className='flex flex-row mt-10'>
      <div className='w-1/2'><BarCharts /></div>
      <div className='w-1/2'><BarCharts /></div>
    </div>
  )
}

export default AudienceInterests