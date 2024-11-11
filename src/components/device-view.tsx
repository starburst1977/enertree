/* eslint-disable @typescript-eslint/no-unused-vars */

"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { TopTabs, TopTabsContent, TopTabsList, TopTabsTrigger } from "@/components/ui/tabs-top"
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
import { faArrowUpRightFromSquare as faArrowUpRightFromSquare } from '@fortawesome/pro-regular-svg-icons'


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
              <div className="flex flex-col gap-4">
                <Card className="max-w-xl">
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
