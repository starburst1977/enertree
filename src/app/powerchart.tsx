"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A line chart with dots"

const chartData = [
  { month: "01", desktop: 202, mobile: 76 },
  { month: "02", desktop: 182, mobile: 84 },
  { month: "03", desktop: 186, mobile: 80 },
  { month: "06", desktop: 305, mobile: 200 },
  { month: "07", desktop: 237, mobile: 120 },
  { month: "08", desktop: 73, mobile: 190 },
  { month: "09", desktop: 209, mobile: 130 },
  { month: "10", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function PowerChart() {
  return (
    
        <ChartContainer config={chartConfig} className="h-[116px]">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 24,
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
              stroke="hsl(var(--chart-blue-1))"
              strokeWidth={2}
              dot={{
                fill: "hsl(var(--chart-blue-2))",
              }}
              activeDot={{
                r: 6,
              }}
            />
          </LineChart>
        </ChartContainer>
      
  )
}

export default PowerChart;