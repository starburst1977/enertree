"use client"

import { useState } from "react"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

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

const powerData = generateDummyData()

// Current power levels for each line
const powerLevels = {
  L1: 6.8,
  L2: 7.2,
  L3: 6.5
}

export default function PowerCurrentChart() {
  const [selectedInput, setSelectedInput] = useState("L2")

  return (
    <Card className="w-full max-w-3xl overflow-hidden">
      <CardHeader className="p-0">
        <Tabs value={selectedInput} onValueChange={setSelectedInput} className="w-full">
          <TabsList className="grid w-full grid-cols-3 h-12 border-b border-input">
            {Object.entries(powerLevels).map(([line, level]) => (
              <TabsTrigger 
                key={line} 
                value={line} 
                className="data-[state=active]:bg-background data-[state=active]:border-none rounded-none"
              >
                <h3 className="text-xs text-blue-600 pr-2">{line}</h3> 
                <span className="text-base text-neutral-800">{level.toFixed(1)}A</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent className="p-6 pt-4">
        <CardTitle className="pt-4 pb-8 pl-2">30-Day Power Current: {selectedInput}</CardTitle>
        <ChartContainer
          config={{
            current: {
              label: "Current (A)",
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

export { PowerCurrentChart }