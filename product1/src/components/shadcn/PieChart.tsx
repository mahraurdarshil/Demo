"use client"

import { TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"

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

export function PieCharts({ data }: {
  data: User['audienceSentiment']['types'][0]
}) {
  const [chartData, setChartData] = useState<Array<{
    browser: string;
    visitors: number;
    fill: string;
  }> | []>([])
  const chartConfig = {
    visitors: {
      label: "Neutral",
      color: "#808080",
    },
    chrome: {
      label: "Positive",
      color: "#00FF00",
    },
    safari: {
      label: "Negative",
      color: "#FF0000",
    },
  } satisfies ChartConfig

  useEffect(() => {
    if (data?.value) {
        setChartData(data.value.map((item) => ({
        browser: item.type,
        visitors: item.value,
        fill: item.fill,
      })))
    }
  }, [])
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>{data?.heading}</CardTitle>
        <CardDescription>{data?.subHeading}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
