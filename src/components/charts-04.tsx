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
import { faCircle as fasCircle, faTriangle as fasTriangle } from '@fortawesome/pro-solid-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

import * as React from "react"
import { TopTabs, TopTabsList, TopTabsTrigger } from "@/components/ui/tabs-top"

export function Charts() {
  const [activeTimeFrame, setActiveTimeFrame] = React.useState("30");
  const [activePhase, setActivePhase] = React.useState("L1");
  return (
      
      <div className="chart-wrapper mx-auto max-w-screen-2xl grid grid-cols-3 gap-4 px-6">
        <div className="">
          <div className="flex flex-col gap-4 justify-between pb-4">
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
              </div>
            </div>
            <div className="flex flex-row gap-2 items-center justify-end">
              <div className="text-xs text-neutral-400">Time frame</div>
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
          <div className="w-full flex flex-col gap-4">
            <div className="relative w-full flex flex-col gap-4">
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
        </div>
        <div className="col-span-2 flex flex-col gap-4">
          <Card
            x-chunk="An area chart showing the time spent in bed for past 7 days."
            className="max-w-full"
          >
            <CardHeader className="p-6 pb-6">
              <CardTitle>Notifications</CardTitle>
            </CardHeader>
            
            <CardContent className="p-4 pt-0">
              <Table className="">
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-red-600 font-bold flex items-center gap-2">
                      <FontAwesomeIcon icon={fasCircle} className="text-[10px] text-red-600 dark:text-red-400"/>
                      Alerts
                    </TableHead>
                    <TableHead className="text-right">Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">PDU3_RowA_RackD</TableCell>
                      <TableCell className="text-right text-red-600">Voltage Drop</TableCell>
                    </TableRow>
                </TableBody>
              </Table>
              <Table className="mt-4">
                <TableHeader>
                  <TableRow>
                  <TableHead className="text-amber-600 font-bold flex items-center gap-2">
                      <FontAwesomeIcon icon={fasTriangle} className="text-[10px] text-amber-600 dark:text-amber-400"/>
                      Warnings
                    </TableHead>
                    <TableHead className="text-right">Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">PDU3_RowA_RackD</TableCell>
                      <TableCell className="text-right text-amber-600">Voltage Drop</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">PDU7_RowA_RackD</TableCell>
                      <TableCell className="text-right text-amber-600">Hardware Defect</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">PDU3_RowA_RackD</TableCell>
                      <TableCell className="text-right text-amber-600">Voltage Drop</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">PDU7_RowA_RackD</TableCell>
                      <TableCell className="text-right text-amber-600">Hardware Defect</TableCell>
                    </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card
            x-chunk="An area chart showing the time spent in bed for past 7 days."
            className="max-w-full"
          >
            <CardHeader className="p-6 pb-6">
              <CardTitle>Devices in this rack</CardTitle>
            </CardHeader>
            
            <CardContent className="p-4 pt-0">
              <Table className="">
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-red-600 font-bold flex items-center gap-2 w-1/4">
                      <FontAwesomeIcon icon={fasCircle} className="text-[10px] text-red-600 dark:text-red-400"/>
                      Alerts
                    </TableHead>
                    <TableHead className="w-1/4 text-gray-400">Type</TableHead>
                    <TableHead className=" text-gray-400">Manufacturer</TableHead>
                    <TableHead className="text-right text-gray-400">Value</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                      <TableCell className="font-medium w-1/4">PDU3_RowA_RackD</TableCell>
                      <TableCell className="text-gray-600 w-1/4">PDU</TableCell>
                      <TableCell className="font-medium">Schleifenbauer</TableCell>
                      <TableCell className="text-right text-red-600">0.0 A</TableCell>
                    </TableRow>
                </TableBody>
              </Table>
              <Table className="mt-4">
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-amber-600 font-bold flex items-center gap-2 w-1/4">
                      <FontAwesomeIcon icon={fasTriangle} className="text-[10px] text-amber-600 dark:text-amber-400"/>
                      Warnings
                    </TableHead>
                    <TableHead className="w-1/4 text-gray-400">Type</TableHead>
                    <TableHead className=" text-gray-400">Manufacturer</TableHead>
                    <TableHead className="text-right text-gray-400">Value</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium w-1/4">PDU3_RowA_RackD</TableCell>
                    <TableCell className="text-gray-600 w-1/4">PDU</TableCell>
                    <TableCell className="font-medium">Schleifenbauer</TableCell>
                    <TableCell className="text-right text-yellow-600">0.25 A</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium w-1/4">PDU3_RowA_RackD</TableCell>
                    <TableCell className="text-gray-600 w-1/4">PDU</TableCell>
                    <TableCell className="font-medium">Raritan</TableCell>
                    <TableCell className="text-right text-yellow-600">0.22 A</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium w-1/4">DEST24</TableCell>
                    <TableCell className="text-gray-600 w-1/4">Sensorbox</TableCell>
                    <TableCell className="font-medium">HW Group</TableCell>
                    <TableCell className="text-right text-yellow-600">0.15 A</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium w-1/4">PDU3_RowA_RackD</TableCell>
                    <TableCell className="text-gray-600 w-1/4">PDU</TableCell>
                    <TableCell className="font-medium">Raritan</TableCell>
                    <TableCell className="text-right text-yellow-600">0.22 A</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <Table className="mt-4">
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-green-600 font-bold flex items-center gap-2 w-1/4">
                      Good
                    </TableHead>
                    <TableHead className="w-1/4 text-gray-400">Type</TableHead>
                    <TableHead className=" text-gray-400">Manufacturer</TableHead>
                    <TableHead className="text-right text-gray-400">Value</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium w-1/4">PDU3_RowA_RackD</TableCell>
                    <TableCell className="text-gray-600 w-1/4">PDU</TableCell>
                    <TableCell className="font-medium">Schleifenbauer</TableCell>
                    <TableCell className="text-right text-green-600">20.25 A</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium w-1/4">PDU3_RowA_RackD</TableCell>
                    <TableCell className="text-gray-600 w-1/4">PDU</TableCell>
                    <TableCell className="font-medium">Raritan</TableCell>
                    <TableCell className="text-right text-green-600">29.20 A</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium w-1/4">DEST24</TableCell>
                    <TableCell className="text-gray-600 w-1/4">Sensorbox</TableCell>
                    <TableCell className="font-medium">HW Group</TableCell>
                    <TableCell className="text-right text-green-600">32.00 A</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium w-1/4">PDU3_RowA_RackD</TableCell>
                    <TableCell className="text-gray-600 w-1/4">PDU</TableCell>
                    <TableCell className="font-medium">Raritan</TableCell>
                    <TableCell className="text-right text-green-600">30.90 A</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium w-1/4">PDU3_RowA_RackD</TableCell>
                    <TableCell className="text-gray-600 w-1/4">PDU</TableCell>
                    <TableCell className="font-medium">Schleifenbauer</TableCell>
                    <TableCell className="text-right text-green-600">20.25 A</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium w-1/4">PDU3_RowA_RackD</TableCell>
                    <TableCell className="text-gray-600 w-1/4">PDU</TableCell>
                    <TableCell className="font-medium">Raritan</TableCell>
                    <TableCell className="text-right text-green-600">29.20 A</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium w-1/4">DEST24</TableCell>
                    <TableCell className="text-gray-600 w-1/4">Sensorbox</TableCell>
                    <TableCell className="font-medium">HW Group</TableCell>
                    <TableCell className="text-right text-green-600">32.00 A</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium w-1/4">PDU3_RowA_RackD</TableCell>
                    <TableCell className="text-gray-600 w-1/4">PDU</TableCell>
                    <TableCell className="font-medium">Raritan</TableCell>
                    <TableCell className="text-right text-green-600">30.90 A</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium w-1/4">PDU3_RowA_RackD</TableCell>
                    <TableCell className="text-gray-600 w-1/4">PDU</TableCell>
                    <TableCell className="font-medium">Schleifenbauer</TableCell>
                    <TableCell className="text-right text-green-600">20.25 A</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium w-1/4">PDU3_RowA_RackD</TableCell>
                    <TableCell className="text-gray-600 w-1/4">PDU</TableCell>
                    <TableCell className="font-medium">Raritan</TableCell>
                    <TableCell className="text-right text-green-600">29.20 A</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium w-1/4">DEST24</TableCell>
                    <TableCell className="text-gray-600 w-1/4">Sensorbox</TableCell>
                    <TableCell className="font-medium">HW Group</TableCell>
                    <TableCell className="text-right text-green-600">32.00 A</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium w-1/4">PDU3_RowA_RackD</TableCell>
                    <TableCell className="text-gray-600 w-1/4">PDU</TableCell>
                    <TableCell className="font-medium">Raritan</TableCell>
                    <TableCell className="text-right text-green-600">30.90 A</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium w-1/4">PDU3_RowA_RackD</TableCell>
                    <TableCell className="text-gray-600 w-1/4">PDU</TableCell>
                    <TableCell className="font-medium">Schleifenbauer</TableCell>
                    <TableCell className="text-right text-green-600">20.25 A</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium w-1/4">PDU3_RowA_RackD</TableCell>
                    <TableCell className="text-gray-600 w-1/4">PDU</TableCell>
                    <TableCell className="font-medium">Raritan</TableCell>
                    <TableCell className="text-right text-green-600">29.20 A</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium w-1/4">DEST24</TableCell>
                    <TableCell className="text-gray-600 w-1/4">Sensorbox</TableCell>
                    <TableCell className="font-medium">HW Group</TableCell>
                    <TableCell className="text-right text-green-600">32.00 A</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium w-1/4">PDU3_RowA_RackD</TableCell>
                    <TableCell className="text-gray-600 w-1/4">PDU</TableCell>
                    <TableCell className="font-medium">Raritan</TableCell>
                    <TableCell className="text-right text-green-600">30.90 A</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium w-1/4">PDU3_RowA_RackD</TableCell>
                    <TableCell className="text-gray-600 w-1/4">PDU</TableCell>
                    <TableCell className="font-medium">Schleifenbauer</TableCell>
                    <TableCell className="text-right text-green-600">20.25 A</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium w-1/4">PDU3_RowA_RackD</TableCell>
                    <TableCell className="text-gray-600 w-1/4">PDU</TableCell>
                    <TableCell className="font-medium">Raritan</TableCell>
                    <TableCell className="text-right text-green-600">29.20 A</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium w-1/4">DEST24</TableCell>
                    <TableCell className="text-gray-600 w-1/4">Sensorbox</TableCell>
                    <TableCell className="font-medium">HW Group</TableCell>
                    <TableCell className="text-right text-green-600">32.00 A</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium w-1/4">PDU3_RowA_RackD</TableCell>
                    <TableCell className="text-gray-600 w-1/4">PDU</TableCell>
                    <TableCell className="font-medium">Raritan</TableCell>
                    <TableCell className="text-right text-green-600">30.90 A</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
      
      
  )
}


/* eslint-enable @typescript-eslint/no-unused-vars */