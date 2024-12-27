/* eslint-disable @typescript-eslint/no-unused-vars */

"use client"

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "An interactive bar chart"

const chartData = [
  { date: "2024-04-01", desktop: 222, mobile: 150 },
  { date: "2024-04-02", desktop: 97, mobile: 180 },
  { date: "2024-04-03", desktop: 167, mobile: 120 },
  { date: "2024-04-04", desktop: 242, mobile: 260 },
  { date: "2024-04-05", desktop: 373, mobile: 290 },
  { date: "2024-04-06", desktop: 301, mobile: 340 },
  { date: "2024-04-07", desktop: 245, mobile: 180 },
  { date: "2024-04-08", desktop: 409, mobile: 320 },
  { date: "2024-04-09", desktop: 59, mobile: 110 },
  { date: "2024-04-10", desktop: 261, mobile: 190 },
  { date: "2024-04-11", desktop: 327, mobile: 350 },
  { date: "2024-04-12", desktop: 292, mobile: 210 },
  { date: "2024-04-13", desktop: 342, mobile: 380 },
  { date: "2024-04-14", desktop: 137, mobile: 220 },
  { date: "2024-04-15", desktop: 120, mobile: 170 },
  { date: "2024-04-16", desktop: 138, mobile: 190 },
  { date: "2024-04-17", desktop: 446, mobile: 360 },
  { date: "2024-04-18", desktop: 364, mobile: 410 },
  { date: "2024-04-19", desktop: 243, mobile: 180 },
  { date: "2024-04-20", desktop: 89, mobile: 150 },
  { date: "2024-04-21", desktop: 137, mobile: 200 },
  { date: "2024-04-22", desktop: 224, mobile: 170 },
  { date: "2024-04-23", desktop: 138, mobile: 230 },
  { date: "2024-04-24", desktop: 387, mobile: 290 },
  { date: "2024-04-25", desktop: 215, mobile: 250 },
  { date: "2024-04-26", desktop: 75, mobile: 130 },
  { date: "2024-04-27", desktop: 383, mobile: 420 },
  { date: "2024-04-28", desktop: 122, mobile: 180 },
  { date: "2024-04-29", desktop: 315, mobile: 240 },
  { date: "2024-04-30", desktop: 454, mobile: 380 },
  { date: "2024-05-01", desktop: 165, mobile: 220 },
  { date: "2024-05-02", desktop: 293, mobile: 310 },
  { date: "2024-05-03", desktop: 247, mobile: 190 },
  { date: "2024-05-04", desktop: 385, mobile: 420 },
  { date: "2024-05-05", desktop: 481, mobile: 390 },
  { date: "2024-05-06", desktop: 498, mobile: 520 },
  { date: "2024-05-07", desktop: 388, mobile: 300 },
  { date: "2024-05-08", desktop: 149, mobile: 210 },
  { date: "2024-05-09", desktop: 227, mobile: 180 },
  { date: "2024-05-10", desktop: 293, mobile: 330 },
  { date: "2024-05-11", desktop: 335, mobile: 270 },
  { date: "2024-05-12", desktop: 197, mobile: 240 },
  { date: "2024-05-13", desktop: 197, mobile: 160 },
  { date: "2024-05-14", desktop: 448, mobile: 490 },
  { date: "2024-05-15", desktop: 473, mobile: 380 },
  { date: "2024-05-16", desktop: 338, mobile: 400 },
  { date: "2024-05-17", desktop: 499, mobile: 420 },
  { date: "2024-05-18", desktop: 315, mobile: 350 },
  { date: "2024-05-19", desktop: 235, mobile: 180 },
  { date: "2024-05-20", desktop: 177, mobile: 230 },
  { date: "2024-05-21", desktop: 82, mobile: 140 },
  { date: "2024-05-22", desktop: 81, mobile: 120 },
  { date: "2024-05-23", desktop: 252, mobile: 290 },
  { date: "2024-05-24", desktop: 294, mobile: 220 },
  { date: "2024-05-25", desktop: 201, mobile: 250 },
  { date: "2024-05-26", desktop: 213, mobile: 170 },
  { date: "2024-05-27", desktop: 420, mobile: 460 },
  { date: "2024-05-28", desktop: 233, mobile: 190 },
  { date: "2024-05-29", desktop: 78, mobile: 130 },
  { date: "2024-05-30", desktop: 340, mobile: 280 },
  { date: "2024-05-31", desktop: 178, mobile: 230 },
  { date: "2024-06-01", desktop: 178, mobile: 200 },
  { date: "2024-06-02", desktop: 470, mobile: 410 },
  { date: "2024-06-03", desktop: 103, mobile: 160 },
  { date: "2024-06-04", desktop: 439, mobile: 380 },
  { date: "2024-06-05", desktop: 88, mobile: 140 },
  { date: "2024-06-06", desktop: 294, mobile: 250 },
  { date: "2024-06-07", desktop: 323, mobile: 370 },
  { date: "2024-06-08", desktop: 385, mobile: 320 },
  { date: "2024-06-09", desktop: 438, mobile: 480 },
  { date: "2024-06-10", desktop: 155, mobile: 200 },
  { date: "2024-06-11", desktop: 92, mobile: 150 },
  { date: "2024-06-12", desktop: 492, mobile: 420 },
  { date: "2024-06-13", desktop: 81, mobile: 130 },
  { date: "2024-06-14", desktop: 426, mobile: 380 },
  { date: "2024-06-15", desktop: 307, mobile: 350 },
  { date: "2024-06-16", desktop: 371, mobile: 310 },
  { date: "2024-06-17", desktop: 475, mobile: 520 },
  { date: "2024-06-18", desktop: 107, mobile: 170 },
  { date: "2024-06-19", desktop: 341, mobile: 290 },
  { date: "2024-06-20", desktop: 408, mobile: 450 },
  { date: "2024-06-21", desktop: 169, mobile: 210 },
  { date: "2024-06-22", desktop: 317, mobile: 270 },
  { date: "2024-06-23", desktop: 480, mobile: 530 },
  { date: "2024-06-24", desktop: 132, mobile: 180 },
  { date: "2024-06-25", desktop: 141, mobile: 190 },
  { date: "2024-06-26", desktop: 434, mobile: 380 },
  { date: "2024-06-27", desktop: 448, mobile: 490 },
  { date: "2024-06-28", desktop: 149, mobile: 200 },
  { date: "2024-06-29", desktop: 103, mobile: 160 },
  { date: "2024-06-30", desktop: 446, mobile: 400 },
]

const chartConfig = {
  views: {
    label: "Page Views",
  },
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

import { Switch } from "@/components/ui/switch"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { TopTabs, TopTabsContent, TopTabsList, TopTabsTrigger } from "@/components/ui/tabs-top"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  TooltipProvider,
} from "@/components/ui/tooltip"
import {
  SidebarTrigger,
} from "@/components/ui/sidebar"
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquareBolt as faSquareBolt, faTriangle as faTriangle, faCircle as faCircle, faXmark as faXmark, faArrowsDownToLine as faArrowsDownToLine, faArrowUpToLine as faArrowUpToLine, faArrowDownToLine as faArrowDownToLine } from '@fortawesome/pro-solid-svg-icons'
import { faArrowUpRightFromSquare as faArrowUpRightFromSquare, faPowerOff as faPowerOff, } from '@fortawesome/pro-regular-svg-icons'

export function DialogComponent() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("desktop")

  const total = React.useMemo(
    () => ({
      desktop: chartData.reduce((acc, curr) => acc + curr.desktop, 0),
      mobile: chartData.reduce((acc, curr) => acc + curr.mobile, 0),
    }),
    []
  )

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-row justify-between gap-1 px-6 py-5 sm:py-6">
          <CardTitle className="text-xl">
            <div>L-L Voltage</div>
            <span className="text-sm font-light text-gray-400">Total Voltage</span>
          </CardTitle>
          
        </div>
        
        <div className="flex">
          {["desktop"].map((key) => {
            const chart = key as keyof typeof chartConfig
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  kWh
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            )
          })}
        </div>
        <div className="flex">
          <div className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6">
            <span className="text-xs text-muted-foreground">
              Min/Max per 10 seconds
            </span>
            <span className="leading-none flex items-center gap-2 pt-2">
              <Switch />
              <span className="text-sm border border-blue-300 rounded px-2 bg-blue-100 text-blue-600 font-bold py-0.5">Blue</span>
            </span>
          </div>
        </div>
        <div className="flex">
          <div className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6">
            <span className="text-xs text-muted-foreground">
              Min/Max per 10 minutes
            </span>
            <span className="leading-none flex items-center gap-2 pt-2">
              <Switch />
              <span className="text-sm border border-green-300 rounded px-2 bg-green-100 text-green-600 font-bold py-0.5">Green</span>
            </span>
          </div>
        </div>
        <div className="flex">
          <div className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6">
            <span className="text-xs text-muted-foreground">
              Chart Intervall
            </span>
            <Select defaultValue="4hours">
              <SelectTrigger className="w-[180px]">
                <SelectValue/>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="4hours">Last four hours</SelectItem>
                <SelectItem value="3days">Last three days</SelectItem>
                <SelectItem value="7days">Last seven days</SelectItem>
                <SelectItem value="system">Last 30 days</SelectItem>
                <SelectItem value="system">Last 90 days</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex">
          <div className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6">
            <DrawerClose>
              <Button variant="ghost" size="icon" className="p-0">
                <FontAwesomeIcon icon={faXmark} />
              </Button>
            </DrawerClose>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[400px] w-full"
        >
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="mobile"
              type="natural"
              fill="var(--color-mobile)"
              fillOpacity={0.4}
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardHeader className="flex flex-col items-stretch space-y-0 p-0 sm:flex-row border-t">
        <div className="flex flex-1 flex-row justify-between gap-1 px-6 py-5 sm:py-6">
          <CardTitle className="text-md">
            <div className="pt-0.5">Active Rule</div>
            <span className="text-sm font-light text-gray-400">Trigger events if value is above or below</span>
          </CardTitle>
        </div>
        
        <div className="flex">
          <div className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6">
            <span className="text-xs text-muted-foreground flex items-center gap-2">
            <FontAwesomeIcon icon={faTriangle} className="text-red-500" />Critical above
            </span>
            <span className="leading-none flex items-center gap-2 pt-2">
              <Switch />
              <Input type="text" className="w-24" placeholder="0" />
              <span>kWh</span>
            </span>
          </div>
        </div>
        <div className="flex">
          <div className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6">
            <span className="text-xs text-muted-foreground flex items-center gap-2">
            <FontAwesomeIcon icon={faTriangle} className="text-yellow-500" />Warn above
            </span>
            <span className="leading-none flex items-center gap-2 pt-2">
              <Switch />
              <Input type="text" className="w-24" placeholder="0" />
              <span>kWh</span>
            </span>
          </div>
        </div>
        <div className="flex">
          <div className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6">
            <span className="text-xs text-muted-foreground flex items-center gap-2">
            <FontAwesomeIcon icon={faCircle} className="text-yellow-500" />Warn below
            </span>
            <span className="leading-none flex items-center gap-2 pt-2">
              <Switch />
              <Input type="text" className="w-24" placeholder="0" />
              <span>kWh</span>
            </span>
          </div>
        </div>
        <div className="flex">
          <div className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6">
            <span className="text-xs text-muted-foreground flex items-center gap-2">
            <FontAwesomeIcon icon={faTriangle} className="text-red-500" />Critical below
            </span>
            <span className="leading-none flex items-center gap-2 pt-2">
              <Switch />
              <Input type="text" className="w-24" placeholder="0" />
              <span>kWh</span>
            </span>
          </div>
        </div>
        
      </CardHeader>
    </Card>
  )
}

export default function DeviceViewComponent() {
  return (
    <TooltipProvider>
      <Drawer >
        
        
      <div className="flex min-h-screen w-full mx-auto max-w-screen-2xl flex-col bg-neutral-100/40 dark:bg-neutral-800/40">
        <div className="flex flex-col sm:gap-4 sm:py-4">
          <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-white px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6 dark:bg-neutral-950">
            <Breadcrumb className="hidden md:flex">
              <SidebarTrigger />
              
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink className="text-lg pl-2" href="/devices/">Devices</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="#" className="text-blue-700 font-bold text-lg">PDU</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="relative ml-auto flex-1 md:grow-0 flex flex-row gap-4">
              <Button variant="outline" size="default" className="flex items-center gap-2">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Open external product management
              </Button>
            </div>
          </header>
          <main className="">
          <TopTabs defaultValue="info" className="px-8 py-4">
            <div className="flex flex-row gap-2 items-center justify-between pb-8">
              <h1 className="text-3xl font-bold text-blue-600">PX3-482</h1>
              <TopTabsList>
                <TopTabsTrigger value="info">Information</TopTabsTrigger>
                <TopTabsTrigger value="config">Configuration</TopTabsTrigger>
                <TopTabsTrigger value="notifications">Notifications</TopTabsTrigger>
                <TopTabsTrigger value="backups">Backups</TopTabsTrigger>
              </TopTabsList>
            </div>
            <TopTabsContent value="info">
              <div className="grid grid-cols-2 gap-4">

                <Card className="max-w-full col-span-2">
                  <CardHeader className="p-6 pb-6">
                    <CardTitle>Output Measurements</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="p-4 pt-0">
                    <Table className="">
                      <TableHeader>
                        <TableRow>
                          <TableHead className="text-blue-600 flex items-center gap-2">
                            Connected to
                          </TableHead>
                          <TableHead className="text-right text-gray-400">#</TableHead>
                          <TableHead className=" text-gray-400">Name</TableHead>
                          <TableHead className="text-right text-gray-400"> Total</TableHead>
                          <TableHead className="text-right text-gray-400">Subtotal</TableHead>
                          <TableHead className="text-right text-gray-400">App. Power</TableHead>
                          <TableHead className="text-right text-gray-400">Rec. Power</TableHead>
                          <TableHead className="text-right text-gray-400">Angle</TableHead>
                          <TableHead className="text-right text-gray-400">Voltage</TableHead>
                          <TableHead className="text-right text-gray-400">Act. Power</TableHead>
                          <TableHead className="text-right text-gray-400">Current</TableHead>
                          <TableHead className="text-right text-gray-400" colSpan={2}>Outlets</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell rowSpan={4} className="">
                            <div className="font-bold ">
                              Bank &quot;Disabled&quot;
                            </div>
                            <div className="font-bold text-lg pt-1">
                              0.64 <span className="text-xs text-neutral-400 pl-1">A</span>
                            </div>
                          </TableCell>
                          <TableCell className="text-right">A1</TableCell>
                          <TableCell className=" text-neutral-600">USV</TableCell>
                          <TableCell className="text-right text-neutral-600"><DrawerTrigger>494.36<span className="text-xs text-neutral-400 pl-1">kWh</span></DrawerTrigger></TableCell>
                          <TableCell className="text-right text-neutral-600">491.41<span className="text-xs text-neutral-400 pl-1">kWh</span></TableCell>
                          <TableCell className="text-right text-neutral-600">109.36<span className="text-xs text-neutral-400 pl-1">vA</span></TableCell>
                          <TableCell className="text-right text-neutral-600">-109<span className="text-xs text-neutral-400 pl-1">VAR</span></TableCell>
                          <TableCell className="text-right text-neutral-600">-76<span className="text-xs text-neutral-400 pl-1">º</span></TableCell>
                          <TableCell className="text-right text-neutral-600">231.7<span className="text-xs text-neutral-400 pl-1">V</span></TableCell>
                          <TableCell className="text-right text-neutral-600">28.7<span className="text-xs text-neutral-400 pl-1">W</span></TableCell>
                          <TableCell className="text-right text-neutral-600">0.5<span className="text-xs text-neutral-400 pl-1">A</span></TableCell>
                          <TableCell className="flex items-center justify-end"><Image src="../images/C13.svg" alt="Switch" width={6} height={6} className="h-6" /></TableCell>
                            <TableCell className="">
                              <div className="flex items-center h-6 w-6 justify-center bg-green-400 rounded text-xs">
                                <FontAwesomeIcon icon={faPowerOff} />
                              </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-right">A1</TableCell>
                          <TableCell className=" text-neutral-600">USV</TableCell>
                          <TableCell className="text-right text-neutral-600">494.36<span className="text-xs text-neutral-400 pl-1">kWh</span></TableCell>
                          <TableCell className="text-right text-neutral-600">491.41<span className="text-xs text-neutral-400 pl-1">kWh</span></TableCell>
                          <TableCell className="text-right text-neutral-600">109.36<span className="text-xs text-neutral-400 pl-1">vA</span></TableCell>
                          <TableCell className="text-right text-neutral-600">-109<span className="text-xs text-neutral-400 pl-1">VAR</span></TableCell>
                          <TableCell className="text-right text-neutral-600">-76<span className="text-xs text-neutral-400 pl-1">º</span></TableCell>
                          <TableCell className="text-right text-neutral-600">231.7<span className="text-xs text-neutral-400 pl-1">V</span></TableCell>
                          <TableCell className="text-right text-neutral-600">28.7<span className="text-xs text-neutral-400 pl-1">W</span></TableCell>
                          <TableCell className="text-right text-neutral-600">0.5<span className="text-xs text-neutral-400 pl-1">A</span></TableCell>
                          <TableCell className="flex items-center justify-end"><Image src="../images/C13.svg" alt="Switch" width={6} height={6} className="h-6" /></TableCell>
                            <TableCell className="">
                              <div className="flex items-center h-6 w-6 justify-center bg-green-400 rounded text-xs">
                                <FontAwesomeIcon icon={faPowerOff} />
                              </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-right">A1</TableCell>
                          <TableCell className=" text-neutral-600">USV</TableCell>
                          <TableCell className="text-right text-neutral-600">494.36<span className="text-xs text-neutral-400 pl-1">kWh</span></TableCell>
                          <TableCell className="text-right text-neutral-600">491.41<span className="text-xs text-neutral-400 pl-1">kWh</span></TableCell>
                          <TableCell className="text-right text-neutral-600">109.36<span className="text-xs text-neutral-400 pl-1">vA</span></TableCell>
                          <TableCell className="text-right text-neutral-600">-109<span className="text-xs text-neutral-400 pl-1">VAR</span></TableCell>
                          <TableCell className="text-right text-neutral-600">-76<span className="text-xs text-neutral-400 pl-1">º</span></TableCell>
                          <TableCell className="text-right text-neutral-600">231.7<span className="text-xs text-neutral-400 pl-1">V</span></TableCell>
                          <TableCell className="text-right text-neutral-600">28.7<span className="text-xs text-neutral-400 pl-1">W</span></TableCell>
                          <TableCell className="text-right text-neutral-600">0.5<span className="text-xs text-neutral-400 pl-1">A</span></TableCell>
                          <TableCell className="flex items-center justify-end"><Image src="../images/C13.svg" alt="Switch" width={6} height={6} className="h-6" /></TableCell>
                            <TableCell className="">
                              <div className="flex items-center h-6 w-6 justify-center bg-green-400 rounded text-xs">
                                <FontAwesomeIcon icon={faPowerOff} />
                              </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-right">A1</TableCell>
                          <TableCell className=" text-neutral-600">USV</TableCell>
                          <TableCell className="text-right text-neutral-600">494.36<span className="text-xs text-neutral-400 pl-1">kWh</span></TableCell>
                          <TableCell className="text-right text-neutral-600">491.41<span className="text-xs text-neutral-400 pl-1">kWh</span></TableCell>
                          <TableCell className="text-right text-neutral-600">109.36<span className="text-xs text-neutral-400 pl-1">vA</span></TableCell>
                          <TableCell className="text-right text-neutral-600">-109<span className="text-xs text-neutral-400 pl-1">VAR</span></TableCell>
                          <TableCell className="text-right text-neutral-600">-76<span className="text-xs text-neutral-400 pl-1">º</span></TableCell>
                          <TableCell className="text-right text-neutral-600">231.7<span className="text-xs text-neutral-400 pl-1">V</span></TableCell>
                          <TableCell className="text-right text-neutral-600">28.7<span className="text-xs text-neutral-400 pl-1">W</span></TableCell>
                          <TableCell className="text-right text-neutral-600">0.5<span className="text-xs text-neutral-400 pl-1">A</span></TableCell>
                          <TableCell className="flex items-center justify-end"><Image src="../images/C13.svg" width={6} height={6} alt="Switch" className="h-6" /></TableCell>
                            <TableCell className="">
                              <div className="flex items-center h-6 w-6 justify-center bg-green-400 rounded text-xs">
                                <FontAwesomeIcon icon={faPowerOff} />
                              </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell rowSpan={4} className="">
                            <div className="font-bold ">
                              Bank &quot;Disabled&quot;
                            </div>
                            <div className="font-bold text-lg pt-1">
                              0.64 <span className="text-xs text-neutral-400 pl-1">A</span>
                            </div>
                          </TableCell>
                          <TableCell className="text-right">A1</TableCell>
                          <TableCell className=" text-neutral-600">USV</TableCell>
                          <TableCell className="text-right text-neutral-600">494.36<span className="text-xs text-neutral-400 pl-1">kWh</span></TableCell>
                          <TableCell className="text-right text-neutral-600">491.41<span className="text-xs text-neutral-400 pl-1">kWh</span></TableCell>
                          <TableCell className="text-right text-neutral-600">109.36<span className="text-xs text-neutral-400 pl-1">vA</span></TableCell>
                          <TableCell className="text-right text-neutral-600">-109<span className="text-xs text-neutral-400 pl-1">VAR</span></TableCell>
                          <TableCell className="text-right text-neutral-600">-76<span className="text-xs text-neutral-400 pl-1">º</span></TableCell>
                          <TableCell className="text-right text-neutral-600">231.7<span className="text-xs text-neutral-400 pl-1">V</span></TableCell>
                          <TableCell className="text-right text-neutral-600">28.7<span className="text-xs text-neutral-400 pl-1">W</span></TableCell>
                          <TableCell className="text-right text-neutral-600">0.5<span className="text-xs text-neutral-400 pl-1">A</span></TableCell>
                          <TableCell className="flex items-center justify-end"><Image src="../images/C13.svg" width={6} height={6} alt="Switch" className="h-6" /></TableCell>
                            <TableCell className="">
                              <div className="flex items-center h-6 w-6 justify-center bg-green-400 rounded text-xs">
                                <FontAwesomeIcon icon={faPowerOff} />
                              </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-right">A1</TableCell>
                          <TableCell className=" text-neutral-600">USV</TableCell>
                          <TableCell className="text-right text-neutral-600">494.36<span className="text-xs text-neutral-400 pl-1">kWh</span></TableCell>
                          <TableCell className="text-right text-neutral-600">491.41<span className="text-xs text-neutral-400 pl-1">kWh</span></TableCell>
                          <TableCell className="text-right text-neutral-600">109.36<span className="text-xs text-neutral-400 pl-1">vA</span></TableCell>
                          <TableCell className="text-right text-neutral-600">-109<span className="text-xs text-neutral-400 pl-1">VAR</span></TableCell>
                          <TableCell className="text-right text-neutral-600">-76<span className="text-xs text-neutral-400 pl-1">º</span></TableCell>
                          <TableCell className="text-right text-neutral-600">231.7<span className="text-xs text-neutral-400 pl-1">V</span></TableCell>
                          <TableCell className="text-right text-neutral-600">28.7<span className="text-xs text-neutral-400 pl-1">W</span></TableCell>
                          <TableCell className="text-right text-neutral-600">0.5<span className="text-xs text-neutral-400 pl-1">A</span></TableCell>
                          <TableCell className="flex items-center justify-end"><Image src="../images/C13.svg" width={6} height={6} alt="Switch" className="h-6" /></TableCell>
                            <TableCell className="">
                              <div className="flex items-center h-6 w-6 justify-center bg-green-400 rounded text-xs">
                                <FontAwesomeIcon icon={faPowerOff} />
                              </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-right">A1</TableCell>
                          <TableCell className=" text-neutral-600">USV</TableCell>
                          <TableCell className="text-right text-neutral-600">494.36<span className="text-xs text-neutral-400 pl-1">kWh</span></TableCell>
                          <TableCell className="text-right text-neutral-600">491.41<span className="text-xs text-neutral-400 pl-1">kWh</span></TableCell>
                          <TableCell className="text-right text-neutral-600">109.36<span className="text-xs text-neutral-400 pl-1">vA</span></TableCell>
                          <TableCell className="text-right text-neutral-600">-109<span className="text-xs text-neutral-400 pl-1">VAR</span></TableCell>
                          <TableCell className="text-right text-neutral-600">-76<span className="text-xs text-neutral-400 pl-1">º</span></TableCell>
                          <TableCell className="text-right text-neutral-600">231.7<span className="text-xs text-neutral-400 pl-1">V</span></TableCell>
                          <TableCell className="text-right text-neutral-600">28.7<span className="text-xs text-neutral-400 pl-1">W</span></TableCell>
                          <TableCell className="text-right text-neutral-600">0.5<span className="text-xs text-neutral-400 pl-1">A</span></TableCell>
                          <TableCell className="flex items-center justify-end"><Image src="../images/C13.svg" alt="Switch" width={6} height={6} className="h-6" /></TableCell>
                            <TableCell className="">
                              <div className="flex items-center h-6 w-6 justify-center bg-green-400 rounded text-xs">
                                <FontAwesomeIcon icon={faPowerOff} />
                              </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-right">A1</TableCell>
                          <TableCell className=" text-neutral-600">USV</TableCell>
                          <TableCell className="text-right text-neutral-600">494.36<span className="text-xs text-neutral-400 pl-1">kWh</span></TableCell>
                          <TableCell className="text-right text-neutral-600">491.41<span className="text-xs text-neutral-400 pl-1">kWh</span></TableCell>
                          <TableCell className="text-right text-neutral-600">109.36<span className="text-xs text-neutral-400 pl-1">vA</span></TableCell>
                          <TableCell className="text-right text-neutral-600">-109<span className="text-xs text-neutral-400 pl-1">VAR</span></TableCell>
                          <TableCell className="text-right text-neutral-600">-76<span className="text-xs text-neutral-400 pl-1">º</span></TableCell>
                          <TableCell className="text-right text-neutral-600">231.7<span className="text-xs text-neutral-400 pl-1">V</span></TableCell>
                          <TableCell className="text-right text-neutral-600">28.7<span className="text-xs text-neutral-400 pl-1">W</span></TableCell>
                          <TableCell className="text-right text-neutral-600">0.5<span className="text-xs text-neutral-400 pl-1">A</span></TableCell>
                          <TableCell className="flex items-center justify-end"><Image src="../images/C13.svg" width={6} height={6} alt="Switch" className="h-6" /></TableCell>
                            <TableCell className="">
                              <div className="flex items-center h-6 w-6 justify-center bg-green-400 rounded text-xs">
                                <FontAwesomeIcon icon={faPowerOff} />
                              </div>
                            </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                    
                  </CardContent>
                </Card>

                <div className="flex flex-col gap-4">
                <Card className="max-w-3xl">
                    <CardHeader className="p-6 pb-6">
                      <CardTitle>General Setup</CardTitle>
                    </CardHeader>
                    
                    <CardContent className="p-4 pt-0">
                      
                      <Table className="">
                        <TableHeader>
                          <TableRow>
                            <TableHead className="text-blue-600 flex items-center gap-2">
                              Parameters
                            </TableHead>
                            <TableHead className="text-right text-gray-400">Settings</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="">Name</TableCell>
                            <TableCell className="text-right text-neutral-600">PDU-C1-9</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="">Extra info.</TableCell>
                            <TableCell className="text-right text-neutral-600"></TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="">Feed</TableCell>
                            <TableCell className="text-right">
                              <Badge variant="outline" className=" text-blue-600 inline-flex items-center gap-2 px-2 text-sm">
                                <FontAwesomeIcon className="text-blue-600" icon={faSquareBolt} /> {Math.random() < 0.5 ? 'A' : 'B'}
                              </Badge>    
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="">Location</TableCell>
                            <TableCell className="text-right text-neutral-600">My Location</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                  
                  <Card className="max-w-3xl">
                    <CardHeader className="p-6 pb-6">
                      <CardTitle>Input Measurements</CardTitle>
                    </CardHeader>
                    
                    <CardContent className="p-4 pt-0">
                      <Table className="">
                        <TableHeader>
                          <TableRow>
                            <TableHead className="text-blue-600 flex items-center gap-2">
                              Parameters
                            </TableHead>
                            <TableHead className="text-right text-gray-400">All</TableHead>
                            <TableHead className="text-right text-gray-400">L1</TableHead>
                            <TableHead className="text-right text-gray-400">L2</TableHead>
                            <TableHead className="text-right text-gray-400">L3</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="">Voltage</TableCell>
                            <TableCell className="text-right"></TableCell>
                            <TableCell className="text-right text-neutral-600">199.81<span className="text-xs text-neutral-400 pl-1">v</span></TableCell>
                            <TableCell className="text-right text-neutral-600">200.36<span className="text-xs text-neutral-400 pl-1">v</span></TableCell>
                            <TableCell className="text-right text-neutral-600">198.41<span className="text-xs text-neutral-400 pl-1">v</span></TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="">L-L Voltage</TableCell>
                            <TableCell className="text-right text-neutral-600">199.88<span className="text-xs text-neutral-400 pl-1">v</span></TableCell>
                            <TableCell className="text-right text-neutral-600">199.81<span className="text-xs text-neutral-400 pl-1">v</span></TableCell>
                            <TableCell className="text-right text-neutral-600">200.36<span className="text-xs text-neutral-400 pl-1">v</span></TableCell>
                            <TableCell className="text-right text-neutral-600">198.41<span className="text-xs text-neutral-400 pl-1">v</span></TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="">Current</TableCell>
                            <TableCell className="text-right text-neutral-600">30.14<span className="text-xs text-neutral-400 pl-1">A</span></TableCell>
                            <TableCell className="text-right text-neutral-600">9.56<span className="text-xs text-neutral-400 pl-1">A</span></TableCell>
                            <TableCell className="text-right text-neutral-600">11.24<span className="text-xs text-neutral-400 pl-1">A</span></TableCell>
                            <TableCell className="text-right text-neutral-600">10.51<span className="text-xs text-neutral-400 pl-1">A</span></TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                      <Table className="mt-6">
                        <TableHeader>
                          <TableRow>
                            <TableHead className="text-blue-600 flex items-center gap-2">
                              Parameters
                            </TableHead>
                            <TableHead className="text-right text-gray-400">Values</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="">Unbalanced Current</TableCell>
                            <TableCell className="text-right text-neutral-600">3.81<span className="text-xs text-neutral-400 pl-1">%</span></TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="">Active Power</TableCell>
                            <TableCell className="text-right text-neutral-600">3881.07<span className="text-xs text-neutral-400 pl-1">w</span></TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="">Apparent Power</TableCell>
                            <TableCell className="text-right text-neutral-600">4501.00<span className="text-xs text-neutral-400 pl-1">VA</span></TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="">Power Factor</TableCell>
                            <TableCell className="text-right text-neutral-600">0.86</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                  <Card className="max-w-3xl">
                    <CardHeader className="p-6 pb-6">
                      <CardTitle>Environment Sensors</CardTitle>
                    </CardHeader>
                    
                    <CardContent className="p-4 pt-0">
                      <Table className="">
                        <TableHeader>
                          <TableRow>
                            <TableHead className="text-blue-600 flex items-center gap-2">
                              #
                            </TableHead>
                            <TableHead className=" text-gray-400">Name</TableHead>
                            <TableHead className=" text-gray-400">Type</TableHead>
                            <TableHead className="text-right text-gray-400">Value</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="">24</TableCell>
                            <TableCell className="">Temperature 1</TableCell>
                            <TableCell className="">Temperature</TableCell>
                            <TableCell className="text-right text-neutral-600">24.00<span className="text-xs text-neutral-400 pl-1">°C</span></TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="">25</TableCell>
                            <TableCell className="">Relative Humidity 1</TableCell>
                            <TableCell className="">Humidity</TableCell>
                            <TableCell className="text-right text-neutral-600">42.47<span className="text-xs text-neutral-400 pl-1">%</span></TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="">26</TableCell>
                            <TableCell className="">Temperature 2</TableCell>
                            <TableCell className="">Temperature</TableCell>
                            <TableCell className="text-right text-neutral-600">24.00<span className="text-xs text-neutral-400 pl-1">°C</span></TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </div>
                <div className="flex flex-col gap-4">
                  
                  <Card className="max-w-3xl">
                    <CardHeader className="p-6 pb-6">
                      <CardTitle>Digital Outputs</CardTitle>
                    </CardHeader>
                    
                    <CardContent className="p-4 pt-0">
                      <Table className="">
                        <TableHeader>
                          <TableRow>
                            <TableHead className="text-blue-600 flex items-center gap-2">
                              #
                            </TableHead>
                            <TableHead className=" text-gray-400">Name</TableHead>
                            <TableHead className="w-6 text-gray-400"></TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="h-6">7</TableCell>
                            <TableCell className="h-6">Dry Contact 1</TableCell>
                            <TableCell className="">
                              <div className="flex items-center h-6 w-6 justify-center bg-red-400 rounded text-xs">
                                <FontAwesomeIcon icon={faPowerOff} />
                              </div>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="h-6">8</TableCell>
                            <TableCell className="h-6">Dry Contact 2</TableCell>
                            <TableCell className="">
                              <div className="flex items-center h-6 w-6 justify-center bg-red-400 rounded text-xs">
                                <FontAwesomeIcon icon={faPowerOff} />
                              </div>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="h-6">15</TableCell>
                            <TableCell className="h-6">Dry Contact 3</TableCell>
                            <TableCell className="">
                              <div className="flex items-center h-6 w-6 justify-center bg-red-400 rounded text-xs">
                                <FontAwesomeIcon icon={faPowerOff} />
                              </div>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="h-6">16</TableCell>
                            <TableCell className="h-6">Dry Contact 4</TableCell>
                            <TableCell className="">
                              <div className="flex items-center h-6 w-6 justify-center bg-red-400 rounded text-xs">
                                <FontAwesomeIcon icon={faPowerOff} />
                              </div>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="h-6">22</TableCell>
                            <TableCell className="h-6">Powered Dry Contact 1</TableCell>
                            <TableCell className="">
                              <div className="flex items-center h-6 w-6 justify-center bg-red-400 rounded text-xs">
                                <FontAwesomeIcon icon={faPowerOff} />
                              </div>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="h-6">23</TableCell>
                            <TableCell className="h-6">Powered Dry Contact 2</TableCell>
                            <TableCell className="">
                              <div className="flex items-center h-6 w-6 justify-center bg-red-400 rounded text-xs">
                                <FontAwesomeIcon icon={faPowerOff} />
                              </div>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                  <Card className="max-w-3xl">
                    <CardHeader className="p-6 pb-6">
                      <CardTitle>Digital Inputs</CardTitle>
                    </CardHeader>
                    
                    <CardContent className="p-4 pt-0">
                      <Table className="">
                        <TableHeader>
                          <TableRow>
                            <TableHead className="text-blue-600 flex items-center gap-2">
                              #
                            </TableHead>
                            <TableHead className=" text-gray-400">Name</TableHead>
                            <TableHead className=" text-gray-400">State</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="">1</TableCell>
                            <TableCell className="">Hall Effect 1</TableCell>
                            <TableCell className="">Inactive</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="">2</TableCell>
                            <TableCell className="">On_Off 1</TableCell>
                            <TableCell className="">Inactive</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="">3</TableCell>
                            <TableCell className="">On_Off 2</TableCell>
                            <TableCell className="">Inactive</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="">4</TableCell>
                            <TableCell className="">On_Off 3</TableCell>
                            <TableCell className="">Inactive</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="">5</TableCell>
                            <TableCell className="">On_Off 4</TableCell>
                            <TableCell className="">Inactive</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="">6</TableCell>
                            <TableCell className="">Hall Effect 2</TableCell>
                            <TableCell className="">Inactive</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="">7</TableCell>
                            <TableCell className="">On_Off 5</TableCell>
                            <TableCell className="">Inactive</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="">8</TableCell>
                            <TableCell className="">On_Off 6</TableCell>
                            <TableCell className="">Inactive</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="">9</TableCell>
                            <TableCell className="">On_Off 7</TableCell>
                            <TableCell className="">Inactive</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="">10</TableCell>
                            <TableCell className="">On_Off 8</TableCell>
                            <TableCell className="">Inactive</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="">11</TableCell>
                            <TableCell className="">On_Off 9</TableCell>
                            <TableCell className="">Inactive</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="">12</TableCell>
                            <TableCell className="">On_Off 10</TableCell>
                            <TableCell className="">Inactive</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="">13</TableCell>
                            <TableCell className="">On_Off 11</TableCell>
                            <TableCell className="">Inactive</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="">14</TableCell>
                            <TableCell className="">On_Off 12</TableCell>
                            <TableCell className="">Inactive</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </div>
                
              </div>
            </TopTabsContent>
            <TopTabsContent value="config">Configuration</TopTabsContent>
            <TopTabsContent value="notifications">Notifications</TopTabsContent>
            <TopTabsContent value="backups">Backups</TopTabsContent>
          </TopTabs>
          </main>
        </div>
      </div>

      
        
        <DrawerContent>
          <DrawerHeader>
            <DrawerDescription>
              <DialogComponent />
            </DrawerDescription>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>


    </TooltipProvider>
  )
}



/* eslint-enable @typescript-eslint/no-unused-vars */
