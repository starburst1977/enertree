/* eslint-disable @typescript-eslint/no-unused-vars */

"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Search,
} from "lucide-react"
import { Charts } from "@/components/charts-03"
import { Button } from "@/components/ui/button"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb"
import {
  TooltipProvider,
} from "@/components/ui/tooltip"
import {
  SidebarTrigger,
} from "@/components/ui/sidebar"
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faServer as farServer } from '@fortawesome/pro-regular-svg-icons'
import { CardTitle } from "./ui/card"


export default function Dashboard() {
  return (
    <TooltipProvider>
      <div className="flex min-h-screen w-full mx-auto max-w-screen-2xl flex-col bg-neutral-100/40 dark:bg-neutral-800/40">
        <div className="flex flex-col sm:gap-4 sm:py-4">
          <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-white px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6 dark:bg-neutral-950">
            <Breadcrumb className="hidden md:flex">
              <SidebarTrigger />
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="#" className="text-blue-700 font-bold text-lg">Dashboard Row</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <Button variant="outline" size="default" className="flex items-center gap-2">
              <FontAwesomeIcon icon={farServer} /> Show all devices in row
            </Button>
            <div className="relative ml-auto flex-1 md:grow-0 flex flex-row gap-4">
              <div className="flex flex-row items-baseline gap-2">
                <div className="text-xs text-neutral-500 whitespace-nowrap">Total Devices</div>
                <div className="flex items-baseline gap-1 text-2xl tabular-nums font-bold">694</div>
              </div>
              <div className="flex flex-row items-baseline gap-2">
                <div className="text-xs text-neutral-500 whitespace-nowrap">Active Alerts</div>
                <div className="flex items-baseline gap-1 text-2xl tabular-nums font-bold text-red-600">5</div>
              </div>
            </div>
          </header>
          <main className="">
            <Charts />
          </main>
        </div>
      </div>
    </TooltipProvider>
  )
}

/* eslint-enable @typescript-eslint/no-unused-vars */
