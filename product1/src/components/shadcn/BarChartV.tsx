"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { User } from "@/types/user"
import { useEffect, useState } from "react"

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function BarChartV({ data }: {
  data: User
}) {
  const [type, setType] = useState<string>('age')
  const [chartData, setChartData] = useState<Array<{
    month: string
    desktop: number
  }>>([
    { month: "", desktop: 0 },
    { month: "", desktop: 0 },
    { month: "", desktop: 0 },
  ])

  useEffect(() => {
    if (type === 'age') {
      const valueArray = data.audienceDemographics.type[0].value
      setChartData(valueArray.map((item) => {
        return {
          month: item.type,
          desktop: item.value
        }
      }))
    } else if (type === 'language') {
      const valueArray = data.audienceDemographics.type[1].value
      setChartData(valueArray.map((item) => {
        return {
          month: item.type,
          desktop: item.value
        }
      }))
    } else if (type === 'ethnicity') {
      const valueArray = data.audienceDemographics.type[2].value
      setChartData(valueArray.map((item) => {
        return {
          month: item.type,
          desktop: item.value
        }
      }))
    }
  }, [type])

  console.log("C data ", chartData)
  return (
    <Card>
      <CardHeader>
        <CardTitle>{data.audienceDemographics.heading}</CardTitle>
        <CardDescription>{data.audienceDemographics.subHeading}</CardDescription>
        <div className="mt-5 mb-5">
          <div className="flex space-x-6 border rounded-full w-fit p-2 pr-4 pl-4 bg-slate-50">
            <button onClick={() => setType('age')} className={`mr-2 ${type === 'age' ? 'text-primary bg-slate-200 p-2 rounded-full' : 'text-gray-400'}`}>Age</button>
            <button onClick={() => setType('language')} className={`mr-2 ${type === 'language' ? 'text-primary bg-slate-200 p-2 rounded-full' : 'text-gray-400'}`}>Language</button>
            <button onClick={() => setType('ethnicity')} className={`mr-2 ${type === 'ethnicity' ? 'text-primary bg-slate-200 p-2 rounded-full' : 'text-gray-400'}`}>Ethnicity</button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={true}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
