"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A line chart with dots"

const chartData = [
  { month: "01", percent: 95, },
  { month: "02", percent: 92, },
  { month: "03", percent: 91, },
  { month: "06", percent: 95, },
  { month: "07", percent: 96, },
  { month: "08", percent: 91, },
  { month: "09", percent: 95, },
  { month: "10", percent: 97, },
]

const chartConfig = {
  desktop: {
    label: "percent",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function PowerChart() {
  return (
    
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 0,
              right: 6,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={true}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              dataKey="percent"
              tickLine={false}
              axisLine={true}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="percent"
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