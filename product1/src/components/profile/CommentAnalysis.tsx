import React from 'react'
import { Badge } from "@/components/ui/badge"
import { Chart } from '../shadcn/RadialChart'
import { User } from '@/types/user'
import { PieCharts } from '../shadcn/PieChart'

const CommentAnalysis = ({ data }: {
    data: User
}) => {
    return (
        <div className='flex flex-col w-full p-10'>
            <div className='flex justify-between'>
                <div className='flex flex-col'>
                    <h1 className='text-gray-900 font-semibold text-2xl'>Comments analysis</h1>
                    <p>We analyzed 150 comments across the most relevant posts by this creator. Last updated Nov 05, 2024</p>
                </div>
                <div><Badge variant="outline">Learn how we calculate this with AI</Badge>
                </div>
            </div>
            <div className='flex mt-10'>
                <div className='w-1/2'><Chart data={data.intentToBuyProduct}/></div>
                <div className='w-1/2'><PieCharts/></div>
            </div>
        </div>
    )
}

export default CommentAnalysis