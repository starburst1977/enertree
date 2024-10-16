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
import { DashboardChart } from "@/components/power-current-chart"
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

export interface DashboardUIState {
  activePhase: string; // Replace 'string' with the appropriate type if needed
  activeTimeFrame: string; // Replace 'string' with the appropriate type if needed
}

export function Charts({ activePhase, activeTimeFrame }: DashboardUIState) {
  return (
    <div className="chart-wrapper mx-auto max-w-screen-2xl grid grid-cols-2 gap-4 sm:px-6">
      <div className="w-full flex flex-col gap-4">
      
        <DashboardChart activeTimeFrame={activeTimeFrame}
          activePhase={activePhase} chartTitle="Current" unit="A"
          phaseValues={{
            L1: 6.8,
            L2: 7.2,
            L3: 6.5
          }} />
        
      </div>
      <div className="flex flex-col w-full gap-4">
        <DashboardChart activeTimeFrame={activeTimeFrame} activePhase={activePhase} chartTitle="Power" unit="W"
          phaseValues={{
            L1: 5002,
            L2: 6821,
            L3: 6892
          }} />
      </div>
      <div className="flex flex-col w-full gap-4">
        <DashboardChart activeTimeFrame={activeTimeFrame} activePhase={activePhase} chartTitle="Voltage" unit="V"
          phaseValues={{
            L1: 222,
            L2: 223,
            L3: 221
          }}
        />
      </div>
    </div>
  )
}


/* eslint-enable @typescript-eslint/no-unused-vars */