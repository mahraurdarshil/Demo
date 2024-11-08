import React from 'react'
import { LineCharts } from '../shadcn/LineChart'

const GrowthAndIntrest = () => {
    return (
        <div>
            <div>
                <h1 className='font-semibold text-2xl'>Growth & interests</h1>
            </div>
            <div className='flex justify-around'>
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