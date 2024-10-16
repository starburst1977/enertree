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
      current: (Math.sin(i * 0.12) + 1) * 2.5 + Math.random() * 0.75 + 5 // Generates a value between 5 and 8.5
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
                className="data-[state=active]:bg-background data-[state=active]:border-none rounded-none flex flex-col gap-0 items-start px-8"
              >
                <h3 className="text-xs">{line}</h3> 
                <span className="text-base font-bold">{level.toFixed(1)} {unit}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent className="p-6 pt-4">
        <CardTitle className="pt-4 pb-8 pl-2">{timeFrameTitle} - {chartTitle}</CardTitle>
        <ChartContainer
          config={{
            current: {
              label: `${chartTitle} (${unit})`,
              color: "hsl(var(--chart-1))",
            },
          }}
          className="h-[150px] w-[325px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart width={200} height={150} data={powerData}>
              <Line type="monotone" dataKey="current" stroke="#1C4ED8" strokeWidth={2} />
              <Tooltip />
            </LineChart>
            
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export { DashboardChart }