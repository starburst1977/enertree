/* eslint-disable @typescript-eslint/no-unused-vars */

"use client"

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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  TooltipProvider,
} from "@/components/ui/tooltip"
import {
  SidebarTrigger,
} from "@/components/ui/sidebar"
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquareBolt as faSquareBolt, faCircleEllipsis as faCircleEllipsis } from '@fortawesome/pro-solid-svg-icons'
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
    </TooltipProvider>
  )
}

/* eslint-enable @typescript-eslint/no-unused-vars */
