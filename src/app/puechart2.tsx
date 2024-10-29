"use client"

import { Bar, BarChart, XAxis } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A stacked bar chart with a legend"

const chartData = [
  { date: "2024-04", running: 450, swimming: 300 },
  { date: "2024-05", running: 380, swimming: 420 },
  { date: "2024-06", running: 520, swimming: 120 },
  { date: "2024-08", running: 140, swimming: 550 },
  { date: "2024-09", running: 600, swimming: 350 },
  { date: "2024-10", running: 480, swimming: 400 },
]

const chartConfig = {
  running: {
    label: "Running",
    color: "hsl(var(--chart-blue-1))",
  },
  swimming: {
    label: "Swimming",
    color: "hsl(var(--chart-blue-2))",
  },
} satisfies ChartConfig

export function PUEChart2() {
  return (
    
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => {
                return new Date(value).toLocaleDateString("en-US", {
                  month: "short",
                })
              }}
            />
            <Bar
              dataKey="running"
              stackId="a"
              fill="var(--color-running)"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="swimming"
              stackId="a"
              fill="var(--color-swimming)"
              radius={[4, 4, 0, 0]}
            />
            <ChartTooltip
              content={<ChartTooltipContent />}
              cursor={false}
              defaultIndex={0}
            />
          </BarChart>
        </ChartContainer>

  )
}

export default PUEChart2;