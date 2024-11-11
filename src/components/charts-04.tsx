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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faCircle as fasCircle, 
  faPlus as fasPlus,
  faMinus as fasMinus
} from '@fortawesome/pro-solid-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

import * as React from "react"
import { TopTabs, TopTabsList, TopTabsTrigger } from "@/components/ui/tabs-top"
import { Button } from "./ui/button"

export function Charts() {
  const [activeTimeFrame, setActiveTimeFrame] = React.useState("30");
  const [activePhase, setActivePhase] = React.useState("L1");
  return (
      
      <div className="chart-wrapper mx-auto max-w-screen-2xl px-6 pt-2">
        <Card className="max-w-full col-span-3">
          <CardHeader className="px-4 py-4 flex flex-row items-center justify-between">
            <CardTitle className="pl-3">Devices in this rack</CardTitle>
            <Button size="default" variant="outline" className="flex flex-row gap-2 items-center" >
              <FontAwesomeIcon icon={fasPlus} className="text-blue-600"/>
              <span className="sm:whitespace-nowrap">
                Assign Device to Rack
              </span>
            </Button>
          </CardHeader>
          
          <CardContent className="p-4 pt-0">
            <Table className="">
              <TableHeader>
                <TableRow>
                  <TableHead className=" text-gray-400 w-8">Alerts</TableHead>
                  <TableHead className="text-gray-400 flex items-center gap-2">Name</TableHead>
                  <TableHead className="text-gray-400">Type</TableHead>
                  <TableHead className="text-gray-400">Manufacturer</TableHead>
                  <TableHead className="text-right text-gray-400">Value</TableHead>
                  <TableHead className="text-right text-gray-400">Options</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                  <TableRow>
                    <TableCell className="font-medium w-8"><FontAwesomeIcon icon={fasCircle} className="text-[10px] text-red-600"/></TableCell>
                    <TableCell className="font-medium flex items-center gap-4">
                      PDU3_RowA_RackD
                    </TableCell>
                    <TableCell className="text-gray-600">PDU</TableCell>
                    <TableCell className="font-medium">Schleifenbauer</TableCell>
                    <TableCell className="text-right text-red-600">0.0 A</TableCell>
                    <TableCell className="text-right text-gray-400 flex items-center gap-2 justify-end">
                      <Button size="default" variant="outline" className="flex flex-row gap-2 items-center">
                        <span className="sm:whitespace-nowrap text-gray-800">
                          Unassign device
                        </span>
                      </Button>
                    </TableCell>
                  </TableRow>
                <TableRow>
                  <TableCell className="font-medium w-8"></TableCell>
                  <TableCell className="font-medium flex items-center gap-4">
                    PDU3_RowA_RackD
                  </TableCell>
                  <TableCell className="text-gray-600">PDU</TableCell>
                  <TableCell className="font-medium">Schleifenbauer</TableCell>
                  <TableCell className="text-right text-yellow-600">0.25 A</TableCell>
                  <TableCell className="text-right text-gray-400 flex items-center gap-2 justify-end">
                      <Button size="default" variant="outline">
                        <span className="sm:whitespace-nowrap text-gray-800">
                          Unassign device
                        </span>
                      </Button>
                    </TableCell>
                </TableRow>
                
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <div className="">
          <div className="flex flex-col gap-4 justify-between py-4">
            <div className="flex flex-row justify-between items-center">
              <h4 className="text-lg font-bold">Current & Power</h4>
              <div className="flex flex-row gap-2 items-center">
                <div className="text-xs text-neutral-400">Source</div>
                <TopTabs value={activePhase} className="" onValueChange={(value) => setActivePhase(value)}>
                  <TopTabsList>
                    <TopTabsTrigger value="All">All</TopTabsTrigger>
                    <TopTabsTrigger value="L1">L1</TopTabsTrigger>
                    <TopTabsTrigger value="L2">L2</TopTabsTrigger>
                    <TopTabsTrigger value="L3">L3</TopTabsTrigger>
                  </TopTabsList>
                </TopTabs>
                <div className="text-xs text-neutral-400 ml-4">Time frame</div>
                <TopTabs value={activeTimeFrame} className="" onValueChange={(value) => setActiveTimeFrame(value)}>
                  <TopTabsList>
                    <TopTabsTrigger value="30">30 days</TopTabsTrigger>
                    <TopTabsTrigger value="14">14 days</TopTabsTrigger>
                    <TopTabsTrigger value="7">7 days</TopTabsTrigger>
                    <TopTabsTrigger value="1">Today</TopTabsTrigger>
                  </TopTabsList>
                </TopTabs>
              </div>
            </div>
          </div>
          <div className="w-full grid grid-cols-3 gap-4">
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
        <div className="col-span-2 flex flex-col gap-4">
          
          
        </div>
      </div>
      
      
  )
}


/* eslint-enable @typescript-eslint/no-unused-vars */