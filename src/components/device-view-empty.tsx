/* eslint-disable @typescript-eslint/no-unused-vars */

"use client"

import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

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
  CardFooter,
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






export default function DeviceViewComponent() {
  return (
    <TooltipProvider>
        
        
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
              <h1 className="text-3xl font-bold text-blue-600">PDU A15</h1>
              <TopTabsList>
                <TopTabsTrigger value="info">Configuration</TopTabsTrigger>
                <TopTabsTrigger value="notifications">Audit Log</TopTabsTrigger>
                <TopTabsTrigger value="backups">Backups</TopTabsTrigger>
              </TopTabsList>
            </div>
            <TopTabsContent value="info">
              <div className="grid grid-cols-2 gap-4">

                  <Card className="max-w-3xl">
                    <CardHeader className="p-6 pb-6">
                      <CardTitle className="text-red-700">Unable to connect to device.</CardTitle>
                    </CardHeader>
                    
                    <CardContent className="p-6 pt-0">
                      <p className="text-sm">Please verify your device connection and try again.</p>
                      <ul className="list-inside list-disc text-sm py-4">
                        <li>Ensure device is powered on</li>
                        <li>Verify device is connected to the network</li>
                      </ul>
                      <p className="text-sm">If this device is permanently unavailable, you can remove it.</p>
                      <Button variant="destructive" className="mt-4">Remove Device</Button>
                    </CardContent>
                  </Card>

              
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
                  
                  
                  
                
                
              </div>
            </TopTabsContent>
            <TopTabsContent value="config">Configuration</TopTabsContent>
            <TopTabsContent value="notifications" className="relative h-96">
            </TopTabsContent>
            <TopTabsContent value="backups">
              <div className="flex gap-4">
                <Card className="w-full">
                  <CardHeader>
                    <CardTitle>Form Examples</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-4 p-4">
                      <div className="flex items-center gap-4 relative">
                        <Label>Name</Label>
                        <Input className="bg-gray-50 border-gray-300"/>
                        
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 p-4">
                      <div className="flex items-center gap-4 relative">
                        <Label className="flex items-center gap-2">Name <span className="text-red-600 font-bold">*</span></Label>
                        <Input className="bg-gray-50 border-gray-300"/>
                        
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 p-4">
                      <div className="flex items-center gap-4 relative">
                        <Label>Name</Label>
                        <Input className="bg-gray-50 border-red-700" value="test"/>
                        <div className="absolute bottom-full left-1/2 z-20 mb-0.5 -translate-x-1/2 whitespace-nowrap rounded-md bg-red-700 py-1 px-2 text-xs text-white font-medium " role="tooltip" id="top-tooltip">
                          <span className="absolute -bottom-1 left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 border-b border-r border-white bg-red-700"></span>
                          Please enter a valid name
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 p-4">
                      <div className="flex items-center gap-4 relative">
                      <Label className="flex items-center gap-2">Name <span className="text-red-600 font-bold">*</span></Label>
                        <Input  className="bg-gray-50 border-red-600" />
                        <div className="absolute bottom-full left-1/2 z-20 mb-0.5 -translate-x-1/2 whitespace-nowrap rounded-md bg-red-600 py-1 px-2 text-xs text-white font-medium " role="tooltip" id="top-tooltip">
                          <span className="absolute -bottom-1 left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 border-b border-r border-white bg-red-600"></span>
                          Missing required field
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 p-4">
                      <div className="flex items-center gap-4 relative">
                        <Label className="flex items-center gap-2">Optional</Label>
                        <Checkbox />
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 p-4">
                      <div className="flex items-center gap-4 relative">
                        <Label className="flex items-center gap-2">Mandatory</Label>
                        <RadioGroup>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option-one" id="option-one" checked />
                            <Label htmlFor="option-one">Option One</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option-two" id="option-two" />
                            <Label htmlFor="option-two">Option Two</Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 p-4">
                      <div className="flex items-center gap-4 relative">
                        <Label className="flex items-center gap-2">Mandatory</Label>
                        <RadioGroup className="relative">
                          <div className="absolute bottom-full left-2.5 z-20 mb-0.5 -translate-x-1/2 whitespace-nowrap rounded-md bg-red-600 py-1 px-2 text-xs text-white font-medium " role="tooltip" id="top-tooltip">
                            <span className="absolute -bottom-1 left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 border-b border-r border-white bg-red-600"></span>
                            Missing required field
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option-one" className="border-red-600" id="option-one" />
                            <Label htmlFor="option-one">Option One</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option-two" className="border-red-600" id="option-two" />
                            <Label htmlFor="option-two">Option Two</Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="w-full">
                  <CardHeader>
                    <CardTitle>Button Examples</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-4 p-4">
                      <div className="flex items-center gap-4 relative">
                        <Label>Standard</Label>
                        <Button variant="default">Button</Button>
                        
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 p-4">
                      <div className="flex items-center gap-4 relative">
                        <Label>Secondary</Label>
                        <Button variant="secondary">Button</Button>
                        
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 p-4">
                      <div className="flex items-center gap-4 relative">
                      <Label>Delete</Label>
                      <Button variant="destructive">Button</Button>
                        
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 p-4">
                      <div className="flex items-center gap-4 relative">
                        <Label>Outline</Label>
                        <Button variant="outline">Button</Button>
                        
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 p-4">
                      <div className="flex items-center gap-4 relative">
                      <Label>Disabled</Label>
                      <Button variant="disabled">Button</Button>
                        
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 p-4">
                      <div className="flex items-center gap-4 relative">
                      <Label>Loading</Label>
                        
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 p-4">
                      <div className="flex items-center gap-4 relative">
                      <Label>Form Error</Label>
                      <Button variant="error" className="relative">Button
                      <div className="absolute bottom-full left-1/2 z-20 mb-0.5 -translate-x-1/2 whitespace-nowrap rounded-md bg-orange-600 py-1 px-2 text-xs text-white font-medium " role="tooltip" id="top-tooltip">
                        <span className="absolute -bottom-1 left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 border-b border-r border-white bg-orange-600"></span>
                        Form Error
                      </div>
                      </Button>
                      
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TopTabsContent>
          </TopTabs>
          </main>
        </div>
      </div>


    </TooltipProvider>
  )
}



/* eslint-enable @typescript-eslint/no-unused-vars */
