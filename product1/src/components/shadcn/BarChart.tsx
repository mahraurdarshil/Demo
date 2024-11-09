"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"

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
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
  label: {
    color: "hsl(var(--background))",
  },
} satisfies ChartConfig

export function BarCharts({ data }: {
  data: User["audienceInterests"]["types"][0]
}) {

  const [chartData, setChartData] = useState<Array<{
    month: string;
    desktop: number;
    mobile: number;
  }>>([
    { month: "", desktop: 0, mobile: 0 },
    { month: "", desktop: 0, mobile: 0 },
    { month: "", desktop: 0, mobile: 0 },
  ])

  useEffect(() => {
    setChartData(data?.value.map((item) => {
      return {
        month: item.type,
        desktop: item.value,
        mobile: item.value,
      }
    }))

  }, [])

  console.log("data", data)
  return (
    <Card>
      <CardHeader>
        <CardTitle>{data?.heading}</CardTitle>
        <CardDescription>{data?.subHeading}</CardDescription>
      </CardHeader>
      <CardContent>
        <div style={{ height: "200px", overflowY: "scroll" }}> {/* Set a fixed height and enable scrolling */}
          <ChartContainer config={chartConfig}>
            <BarChart
              accessibilityLayer
              data={chartData}
              layout="vertical"
              margin={{
                right: 16,
              }}
            >
              <CartesianGrid horizontal={false} />
              <YAxis
                dataKey="month"
                type="category"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 0)}
                hide
              />
              <XAxis dataKey="desktop" type="number" hide />
              <ChartTooltip
                cursor={true}
                content={<ChartTooltipContent indicator="line" />}
              />
              <Bar
                dataKey="desktop"
                layout="vertical"
                fill="var(--color-desktop)"
                radius={4}
              >
                <LabelList
                  dataKey="month"
                  position="insideLeft"
                  offset={8}
                  className="fill-[--color-label]"
                  fontSize={12}
                />
                <LabelList
                  dataKey="desktop"
                  position="right"
                  offset={8}
                  className="fill-foreground"
                  fontSize={12}
                />
              </Bar>
            </BarChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  )
}
