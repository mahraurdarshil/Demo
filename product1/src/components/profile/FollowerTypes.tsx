import React from 'react'
import { PieChartText } from '../shadcn/PieChartText'
import { User } from '@/types/user'

const FollowerTypes = ({ data }: {
  data: User
}) => {

  return (
    <div><PieChartText data={data} /></div>
  )
}

export default FollowerTypes