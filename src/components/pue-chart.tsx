"use client"

import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Sample data for the last 10 months
const data = [
  { month: "Jun", itPower: 85, otherPower: 25, totalPower: 110 },
  { month: "Jul", itPower: 90, otherPower: 30, totalPower: 120 },
  { month: "Aug", itPower: 95, otherPower: 35, totalPower: 130 },
  { month: "Sep", itPower: 88, otherPower: 28, totalPower: 116 },
  { month: "Oct", itPower: 85, otherPower: 25, totalPower: 110 },
  { month: "Nov", itPower: 83, otherPower: 23, totalPower: 106 },
  { month: "Dec", itPower: 80, otherPower: 20, totalPower: 100 },
  { month: "Jan", itPower: 78, otherPower: 18, totalPower: 96 },
  { month: "Feb", itPower: 75, otherPower: 15, totalPower: 90 },
  { month: "Mar", itPower: 77, otherPower: 17, totalPower: 94 },
].map(item => ({
  ...item,
  pue: ((item.itPower + item.otherPower) / item.itPower).toFixed(2)
}))

const latestPUE = data[data.length - 1].pue
const predictedPUE = (Number(latestPUE) - 0.05).toFixed(2)

export function PUEChart() {
  return (
    <div className="w-full max-w-full mx-auto space-y-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Power Usage Effectiveness (PUE)</CardTitle>
            <CardDescription>Latest and Predicted PUE Ratios</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col justify-around p-0">
            <div className="text-center border-y border-neutral-200 py-8">
              
              <p className="text-4xl font-bold pb-1">{latestPUE}</p>
              <p className="text-sm font-medium text-gray-600">Latest monthly PUE</p>
            </div>
            <div className="text-center py-8">
              
              <p className="text-4xl font-bold text-blue-600 pb-1">{predictedPUE}</p>
              <p className="text-sm font-medium text-gray-600">Predicted next months PUE</p>
            </div>
          </CardContent>
        </Card>

        

        <Card>
          <CardHeader>
            <CardTitle>Monthly PUE Breakdown</CardTitle>
            <CardDescription>IT Power vs Other Power for the Last 10 Months</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <ChartContainer
              config={{
                itPower: {
                  label: "IT Power",
                  color: "hsl(var(--chart-blue-2))",
                },
                otherPower: {
                  label: "Other Power",
                  color: "hsl(var(--chart-blue-1))",
                },
              }}
              className="h-[250px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<CustomTooltip />} />
                  <Legend />
                  <Bar dataKey="itPower" stackId="a" fill="var(--color-itPower)" />
                  <Bar dataKey="otherPower" stackId="a" fill="var(--color-otherPower)" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Total Power Consumption</CardTitle>
            <CardDescription>Last 10 Months</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                totalPower: {
                  label: "Total Power",
                  color: "hsl(var(--chart-3))",
                },
              }}
              className="h-[250px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Line type="monotone" dataKey="totalPower" stroke="var(--color-totalPower)" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

      </div>
    </div>
  )
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const itPower = payload[0].value
    const otherPower = payload[1].value
    const pue = ((itPower + otherPower) / itPower).toFixed(2)
    return (
      <div className="bg-white p-4 border border-neutral-200 rounded shadow dark:border-neutral-800">
        <p className="font-bold">{`${label}`}</p>
        <p>{`IT Power: ${itPower}`}</p>
        <p>{`Other Power: ${otherPower}`}</p>
        <p className="font-bold text-green-600">{`PUE: ${pue}`}</p>
      </div>
    )
  }
  return null
}

