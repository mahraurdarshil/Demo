"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

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
import { growthAndInterestTypes, growthAndInterestTypesValue, User } from "@/types/user"
import { use, useEffect, useState } from "react"

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function LineCharts({ data }: {
  data: growthAndInterestTypes
}) {
  const [chartData, setChartData] = useState<Array<{
    month: string
    desktop: number
  }>>([
    { month: "", desktop: 0 },
    { month: "", desktop: 0 },
    { month: "", desktop: 0 },
  ])

  useEffect(() => {
    setChartData(data.value.map((item) => {
      return {
        month: item.type,
        desktop: item.value
      }
    }))
  }, [])

  console.log(chartData)
  return (
    <Card>
      <CardHeader>
        <CardTitle>{data.heading}</CardTitle>
        <CardDescription>{data.subHeading}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="desktop"
              type="linear"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
