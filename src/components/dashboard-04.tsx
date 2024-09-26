"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Search,
} from "lucide-react"
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
  Charts,
} from "@/components/charts-01"
import {
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faServer as farServer } from '@fortawesome/pro-regular-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'


export default function Dashboard() {
  return (
    <TooltipProvider>
    <div className="flex min-h-screen mx-auto max-w-screen-2xl flex-col bg-neutral-100/40 dark:bg-neutral-800/40">
      
      <div className="flex flex-col sm:gap-4 sm:py-4">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-white px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6 dark:bg-neutral-950">
         
          <Breadcrumb className="hidden md:flex">
            <SidebarTrigger />
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="#" className="text-blue-700 font-bold text-lg">Dashboard Room</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              
            </BreadcrumbList>
          </Breadcrumb>
          <Button variant="outline" size="default" className="flex items-center gap-2">
            <FontAwesomeIcon icon={farServer} /> Show all devices in room
          </Button>
          <div className="relative ml-auto flex-1 md:grow-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-neutral-500 dark:text-neutral-400" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-white pl-8 md:w-[200px] lg:w-[320px] dark:bg-neutral-950"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="overflow-hidden rounded-full"
              >
                <Image
                  src="/images/user1.jpg"
                  width={36}
                  height={36}
                  alt="Avatar"
                  className="overflow-hidden rounded-full"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="">
          <Charts />
        </main>
      </div>
    </div>
    </TooltipProvider>
  )
}
