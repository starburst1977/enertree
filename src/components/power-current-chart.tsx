/* eslint-disable @typescript-eslint/no-unused-vars */

"use client"

import { useState } from "react"
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

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

  const chartData = {
    labels: powerData.map(item => item.date),
    datasets: [
      {
        label: `${chartTitle} (${unit})`,
        data: powerData.map(item => item.current),
        borderColor: 'hsl(var(--chart-1))',
        backgroundColor: 'hsl(var(--chart-1) / 0.1)',
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: `${chartTitle} (${unit})`,
        },
      },
    },
  };

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
        <div className="">
          <Line data={chartData} options={chartOptions} />
        </div>
      </CardContent>
    </Card>
  )
}

export { DashboardChart }

/* eslint-enable @typescript-eslint/no-unused-vars */
