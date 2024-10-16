"use client"

import { useState } from "react"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { DashboardUIState } from "./charts-02"

// Generate 30 days of dummy data
const generateDummyData = () => {
  const data = []
  const startDate = new Date(2023, 4, 1) // May 1, 2023
  for (let i = 0; i < 30; i++) {
    const date = new Date(startDate)
    date.setDate(startDate.getDate() + i)
    data.push({
      date: date.toISOString().split('T')[0],
      current: (Math.sin(i * 0.2) + 1) * 3 + Math.random() * 0.5 + 5 // Generates a value between 5 and 8.5
    })
  }
  return data
}


export interface ChartProps extends DashboardUIState {
  chartTitle: string;
  phaseValues: Record<string, number>;
  unit: string;
}

export default function DashboardChart({ activePhase, activeTimeFrame, chartTitle, phaseValues, unit }: ChartProps) {

  const powerData = generateDummyData();

  let timeFrameTitle;
  switch (activeTimeFrame) {
    case "30":
      timeFrameTitle = "30 Day";
      break
    case "14":
      timeFrameTitle = "14 Day";
      break
    case "7":
      timeFrameTitle = "7 Day";
      break
    case "1":
      timeFrameTitle = "Today's";
      break;
  }

  return (
    <Card className="w-full max-w-3xl overflow-hidden">
      <CardHeader className="p-0">
        <Tabs value={activePhase} className="w-full">
          <TabsList className="grid w-full grid-cols-3 h-12 border-b border-input">
            {Object.entries(phaseValues).map(([line, level]) => (
              <TabsTrigger 
                key={line} 
                value={line} 
                className="data-[state=active]:bg-background data-[state=active]:border-none rounded-none"
              >
                <h3 className="text-xs text-blue-600 pr-2">{line}</h3> 
                <span className="text-base text-neutral-800">{level.toFixed(1)} {unit}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent className="p-6 pt-4">
        <CardTitle className="pt-4 pb-8 pl-2">{timeFrameTitle} {chartTitle}: {activePhase}</CardTitle>
        <ChartContainer
          config={{
            current: {
              label: `${chartTitle} (${unit})`,
              color: "hsl(var(--chart-1))",
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={powerData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="date" 
                tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                interval={6}
              />
              <YAxis domain={[5, 10]} ticks={[5, 10, 15]}  />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line
                type="monotone"
                dataKey="current"
                stroke="var(--color-current)"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export { DashboardChart }