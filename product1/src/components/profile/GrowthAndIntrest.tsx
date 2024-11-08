import React from 'react'
import { LineCharts } from '../shadcn/LineChart'

const GrowthAndIntrest = () => {
    return (
        <div className='p-10'>
            <div>
                <div className='flex flex-col'>
                    <h1 className='text-gray-900 font-semibold text-2xl'>Growth & interest</h1>
                </div>
            </div>
            <div className='flex justify-around mt-10'>
                <div>
                    <LineCharts />
                </div>
                <div>
                    <LineCharts />
                </div>
            </div>
        </div>
    )
}

export default GrowthAndIntrest