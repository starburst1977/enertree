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
import { PUEChart } from "@/components/pue-chart"
import { PowerChart } from "@/app/powerchart"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle as fasCircle, faTriangle as fasTriangle } from '@fortawesome/pro-solid-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

import * as React from "react"
import { AlertList } from "./ui/AlertList"
import { TopTabs, TopTabsList, TopTabsTrigger } from "@/components/ui/tabs-top"

export function Charts() {
  const [activeTimeFrame, setActiveTimeFrame] = React.useState("30");
  const [activePhase, setActivePhase] = React.useState("L1");
  return (
      
      <div className="chart-wrapper mx-auto max-w-screen-2xl grid grid-cols-3 gap-4 px-6">
        <div className="col-span-3 pb-2">
          <PUEChart />
        </div>
        <div className="col-span-2">
          
          <div className="flex items-center gap-4 justify-between pb-4">
            <div className="flex gap-2 items-center">
              <h4 className="text-lg font-bold">Current & Power</h4>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <div className="text-xs text-neutral-400">Time frame</div>
              <TopTabs value={activeTimeFrame} className="mr-4" onValueChange={(value) => setActiveTimeFrame(value)}>
                <TopTabsList>
                  <TopTabsTrigger value="30">30 days</TopTabsTrigger>
                  <TopTabsTrigger value="14">14 days</TopTabsTrigger>
                  <TopTabsTrigger value="7">7 days</TopTabsTrigger>
                  <TopTabsTrigger value="1">Today</TopTabsTrigger>
                </TopTabsList>
              </TopTabs>
              <div className="text-xs text-neutral-400">Source</div>
              <TopTabs value={activePhase} className="" onValueChange={(value) => setActivePhase(value)}>
                <TopTabsList>
                  <TopTabsTrigger value="All">All</TopTabsTrigger>
                  <TopTabsTrigger value="L1">L1</TopTabsTrigger>
                  <TopTabsTrigger value="L2">L2</TopTabsTrigger>
                  <TopTabsTrigger value="L3">L3</TopTabsTrigger>
                </TopTabsList>
              </TopTabs>
            </div>
          </div>
          <div className="w-full grid grid-cols-2 gap-4">
            <div className="relative w-full flex flex-col gap-4">
              <DashboardChart
              chartTitle="Current"
              unit="A"
              phaseValues={{
                L1: 6.8,
                L2: 7.2,
                L3: 6.5
              }} activeTimeFrame={""} activePhase={""} />
                
              <DashboardChart activeTimeFrame={activeTimeFrame} activePhase={activePhase} chartTitle="Power" unit="W"
                  phaseValues={{
                    L1: 500,
                    L2: 681,
                    L3: 692
                  }} />
              <DashboardChart chartTitle="Residual Current" unit="W"
            phaseValues={{
              L1: 500,
              L2: 681,
              L3: 692
            }} activeTimeFrame={""} activePhase={""} />
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
        </div>
      <div className="col-span-1">
        <AlertList />
      </div>
    </div>
      
  )
}


/* eslint-enable @typescript-eslint/no-unused-vars */