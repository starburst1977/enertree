/* eslint-disable @typescript-eslint/no-unused-vars */



"use client"

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  Rectangle,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { PowerCurrentChart } from "@/components/power-current-chart"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Separator } from "@/components/ui/separator"

export function Charts() {
  return (
    <div className="chart-wrapper mx-auto max-w-screen-2xl grid grid-cols-2 gap-4 sm:px-6">
      <div className="w-full flex flex-col gap-4">
      
        <PowerCurrentChart />
        
      </div>
      <div className="flex flex-col w-full gap-4">
      
        <PowerCurrentChart />
        
      </div>
    </div>
  )
}


/* eslint-enable @typescript-eslint/no-unused-vars */