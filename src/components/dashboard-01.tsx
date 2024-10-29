/* eslint-disable @typescript-eslint/no-unused-vars */

"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Search,
} from "lucide-react"
import { TopTabs, TopTabsList, TopTabsTrigger } from "@/components/ui/tabs-top"
import { Charts } from "@/components/charts-02"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  TooltipProvider,
} from "@/components/ui/tooltip"
import {
  SidebarTrigger,
} from "@/components/ui/sidebar"
import '@fortawesome/fontawesome-svg-core/styles.css'


export default function Dashboard() {

  const [activeTimeFrame, setActiveTimeFrame] = React.useState("30");
  const [activePhase, setActivePhase] = React.useState("L1");
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
                  <Link href="#" className="text-blue-700 font-bold text-lg">Dashboard DC</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              
            </BreadcrumbList>
          </Breadcrumb>
          
          <div className="relative ml-auto flex items-center gap-2">
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
            <TopTabs value={activePhase} className=""  onValueChange={(value) => setActivePhase(value)}>
              <TopTabsList>
                <TopTabsTrigger value="All">All</TopTabsTrigger>
                <TopTabsTrigger value="L1">L1</TopTabsTrigger>
                <TopTabsTrigger value="L2">L2</TopTabsTrigger>
                <TopTabsTrigger value="L3">L3</TopTabsTrigger>
              </TopTabsList>
            </TopTabs>
          </div>
          
        </header>
        <main className="">
          <Charts activeTimeFrame={activeTimeFrame} activePhase={activePhase} />
        </main>
      </div>
    </div>
    </TooltipProvider>
  )
}

/* eslint-enable @typescript-eslint/no-unused-vars */
