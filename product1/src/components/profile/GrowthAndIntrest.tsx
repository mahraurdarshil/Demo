import React from 'react'
import { LineCharts } from '../shadcn/LineChart'
import { User } from '@/types/user'

const GrowthAndIntrest = ({ data }: {
    data: User
}) => {
    return (
        <div className='p-10'>
            <div>
                <div className='flex flex-col'>
                    <h1 className='text-gray-900 font-semibold text-2xl'>{data.growthAndInterest.heading}</h1>
                    <p>{data.growthAndInterest.subHeading}</p>
                </div>
            </div>
            <div className='flex justify-around mt-10'>
                {data.growthAndInterest.type.map((item, index) => (
                    <LineCharts key={index} data={item} />
                ))}
            </div>
        </div>
    )
}

export default GrowthAndIntrest