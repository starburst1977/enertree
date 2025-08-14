/* eslint-disable @typescript-eslint/no-unused-vars */

"use client"

import * as React from "react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTriangle as faTriangle, faCircle as faCircle, faArrowUpRightFromSquare } from '@fortawesome/pro-solid-svg-icons'
import { faTrashCan as faTrashCan, faEnvelopeOpenText as faEnvelopeOpenText, faPlus as faPlus } from '@fortawesome/pro-solid-svg-icons'
import { Switch } from "@/components/ui/switch"
import {
  Search,
  ChevronsUpDown,
  Pen,
  ChevronRight,
  Eye,
  Bell,
  Check,
  Siren, ArrowUpToLine, TriangleAlert, ArrowDownToLine, PowerOff, Power 
} from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sidebar, SidebarHeader } from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import {
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from "next/link"

import { Button } from "@/components/ui/button"


import { TopTabs, TopTabsList, TopTabsTrigger } from "@/components/ui/tabs-top"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Card, CardContent, CardTitle, CardHeader } from "./ui/card"





export function SettingsComponent() {

  return (
    <div className=" min-h-screen mx-auto w-full max-w-screen-2xl p-4">
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-white sm:static sm:h-auto sm:border-0 sm:bg-transparent dark:bg-neutral-950 pb-4 px-2">
        <Breadcrumb className="hidden md:flex">
          <SidebarTrigger />
          
          <BreadcrumbList>
            
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="#" className="text-blue-700 font-bold text-lg">Settings</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">General <ChevronsUpDown className="ml-4 h-4 w-4" /></Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>General Settings</DropdownMenuLabel>
            <DropdownMenuItem>General</DropdownMenuItem>
            <DropdownMenuItem>Rules</DropdownMenuItem>
            <DropdownMenuItem>Web Access</DropdownMenuItem>
            
            <DropdownMenuItem>Notifications</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Connections</DropdownMenuLabel>
            <DropdownMenuItem>Authentication Settings</DropdownMenuItem>
            <DropdownMenuItem>LDAP / Active Directory</DropdownMenuItem>
            <DropdownMenuItem>PUE Items</DropdownMenuItem>
            <DropdownMenuItem>SQL Data Logger</DropdownMenuItem>
            
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Utilites</DropdownMenuLabel>
            <DropdownMenuItem>SNMP Agent</DropdownMenuItem>
            <DropdownMenuItem>SNMP Client</DropdownMenuItem>
            <DropdownMenuItem>Syslog</DropdownMenuItem>
            <DropdownMenuItem>Email</DropdownMenuItem>
            <DropdownMenuItem>Device Backup</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Advanced</DropdownMenuLabel>
            <DropdownMenuItem>DC Consistency</DropdownMenuItem>
            <DropdownMenuItem>Task Scheduler</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
      </header>
      <div className="flex flex-row w-full">
        

        <div className="flex-1 px-6 py-4 w-full">
          <div className="overflow-hidden ring-1 ring-neutral-200 sm:rounded-lg w-full">
            Settings

            
          </div>
        </div>
      </div>
    </div>
  )
}

/* eslint-enable @typescript-eslint/no-unused-vars */