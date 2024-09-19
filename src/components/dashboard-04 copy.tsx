"use client"

import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGauge } from '@awesome.me/kit-c673e78a4a/icons/classic/regular'
import { faServer } from '@awesome.me/kit-c673e78a4a/icons/classic/regular'
import { faBell } from '@awesome.me/kit-c673e78a4a/icons/classic/regular'
import { faFileLines } from '@awesome.me/kit-c673e78a4a/icons/classic/regular'
import Image from "next/image"
import Link from "next/link"

import {
  Home,
  LineChart,
  Package,
  Package2,
  PanelLeft,
  Search,
  Settings,
  ShoppingCart,
  Users2,
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
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Charts,
} from "@/components/charts-01"


export default function Dashboard() {
  return (
    <TooltipProvider>
    <div className="flex min-h-screen w-full flex-col bg-neutral-100/40 dark:bg-neutral-800/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-white sm:flex dark:bg-neutral-950">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
          <Link
            href="#"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-md bg-blue-700 text-lg font-semibold text-neutral-50 md:h-8 md:w-8 md:text-base dark:bg-neutral-50 dark:text-neutral-900"
          >
            <Image 
              src="/images/logo.svg" 
              alt="logo" 
              width={16} 
              height={16} 
              className="transition-all group-hover:scale-110"
            />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-200 text-sky-800 transition-colors hover:text-neutral-950 md:h-8 md:w-8 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:text-neutral-50"
              >
                <FontAwesomeIcon icon={faGauge} className="h-5 w-5" />
                <span className="sr-only">Dashboard</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Dashboard</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-neutral-500 transition-colors hover:text-neutral-950 md:h-8 md:w-8 dark:text-neutral-400 dark:hover:text-neutral-50"
              >
                <FontAwesomeIcon icon={faServer} className="h-5 w-5" />
                <span className="sr-only">Devices</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Devices</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-neutral-500 transition-colors hover:text-neutral-950 md:h-8 md:w-8 dark:text-neutral-400 dark:hover:text-neutral-50"
              >
                <FontAwesomeIcon icon={faBell} className="h-5 w-5" />
                <span className="sr-only">Alerts</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Alerts</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-neutral-500 transition-colors hover:text-neutral-950 md:h-8 md:w-8 dark:text-neutral-400 dark:hover:text-neutral-50"
              >
                <FontAwesomeIcon icon={faFileLines} className="h-5 w-5" />
                <span className="sr-only">Customers</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Customers</TooltipContent>
          </Tooltip>
          
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-neutral-500 transition-colors hover:text-neutral-950 md:h-8 md:w-8 dark:text-neutral-400 dark:hover:text-neutral-50"
              >
                <Settings className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Settings</TooltipContent>
          </Tooltip>
        </nav>
      </aside>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-white px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6 dark:bg-neutral-950">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="#"
                  className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-neutral-900 text-lg font-semibold text-neutral-50 md:text-base dark:bg-neutral-50 dark:text-neutral-900"
                >
                  <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-neutral-950 dark:text-neutral-50"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Orders
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50"
                >
                  <Package className="h-5 w-5" />
                  Products
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50"
                >
                  <Users2 className="h-5 w-5" />
                  Customers
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50"
                >
                  <LineChart className="h-5 w-5" />
                  Settings
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="#" className="text-blue-700 font-bold text-lg">Dashboard</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              
            </BreadcrumbList>
          </Breadcrumb>
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
