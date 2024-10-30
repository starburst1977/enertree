/* eslint-disable @typescript-eslint/no-unused-vars */



"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DashboardChart } from "@/components/power-current-chart"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { PUEChart2 } from "@/app/puechart2"
import { PUEChart } from "@/app/puechart"
import { PowerChart } from "@/app/powerchart"

export interface DashboardUIState {
  activePhase: string; // Replace 'string' with the appropriate type if needed
  activeTimeFrame: string; // Replace 'string' with the appropriate type if needed
}

import * as React from "react"
import { AlertList } from "./ui/AlertList"



export function Charts({ activePhase, activeTimeFrame }: DashboardUIState) {
  return (
    <div className="chart-wrapper mx-auto max-w-screen-2xl grid grid-cols-3 gap-4 sm:px-6">
      <div className="col-span-2 grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <Card>
            <div className="grid grid-cols-3">
              <CardHeader className="col-span-2">
                <CardTitle>PUE</CardTitle>
                <CardDescription>January - October 2024</CardDescription>
              </CardHeader>
              <CardHeader>
                <CardTitle>Energy Consumption</CardTitle>
                <CardDescription>January - October 2024</CardDescription>
              </CardHeader>
            </div>
            <CardContent className="grid grid-cols-3 gap-4">
              <PUEChart />
              <PUEChart2 />
              <PowerChart />
            </CardContent>
          </Card>
        </div>
        <div className="w-full flex flex-col gap-4">
          
          <DashboardChart activeTimeFrame={activeTimeFrame}
            activePhase={activePhase} chartTitle="Current" unit="A"
            phaseValues={{
              L1: 6.8,
              L2: 7.2,
              L3: 6.5
            }} />
          
          <DashboardChart activeTimeFrame={activeTimeFrame} activePhase={activePhase} chartTitle="Power" unit="W"
            phaseValues={{
              L1: 500,
              L2: 681,
              L3: 692
            }} />
          <DashboardChart activeTimeFrame={activeTimeFrame} activePhase={activePhase} chartTitle="Residual Current" unit="W"
            phaseValues={{
              L1: 500,
              L2: 681,
              L3: 692
            }} />
        </div>
        <div className="w-full flex flex-col gap-4">
        
          <DashboardChart activeTimeFrame={activeTimeFrame}
            activePhase={activePhase} chartTitle="Neutral Current" unit="A"
            phaseValues={{
              L1: 6.2,
              L2: 6.2,
              L3: 6.8
            }} />
          
          <DashboardChart activeTimeFrame={activeTimeFrame} activePhase={activePhase} chartTitle="Active Power" unit="W"
            phaseValues={{
              L1: 462,
              L2: 255,
              L3: 298
            }} />
          <DashboardChart activeTimeFrame={activeTimeFrame} activePhase={activePhase} chartTitle="Apparent Power" unit="VA"
            phaseValues={{
              L1: 102,
              L2: 90,
              L3: 88
              }} />
        </div>
      </div>
      <div className="flex flex-col w-full gap-4">
        <AlertList />
      </div>
        
      
    </div>
  )
}


/* eslint-enable @typescript-eslint/no-unused-vars */