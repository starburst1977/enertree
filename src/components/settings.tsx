/* eslint-disable @typescript-eslint/no-unused-vars */

"use client"

import * as React from "react"

import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTriangle as faTriangle, faCircle as faCircle, faArrowUpRightFromSquare } from '@fortawesome/pro-solid-svg-icons'
import { faTrashCan as faTrashCan, faEnvelopeOpenText as faEnvelopeOpenText, faPlus as faPlus } from '@fortawesome/pro-solid-svg-icons'
import { Switch } from "@/components/ui/switch"
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
              <BreadcrumbLink className="text-lg pl-2" href="/settings/">Settings</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="#" className="text-blue-700 font-bold text-lg">General</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        
      </header>
      <div className="flex flex-row w-full">
        <div className="flex flex-col   h-full text-sm p-2">
          <a href="/settings" className="text-blue-700 px-4 py-2 bg-blue-100 rounded-md">General</a>
          <a href="../settings/rules" className="text-gray-700 px-4 py-2 hover:bg-gray-100 rounded-md">Rules</a>
          <a href="/settings" className="text-gray-700 px-4 py-2 hover:bg-gray-100 rounded-md">PUE Items</a>
          <a href="/settings" className="text-gray-700 px-4 py-2 hover:bg-gray-100 rounded-md">Web Access</a>
          <a href="/settings" className="text-gray-700 px-4 py-2 hover:bg-gray-100 rounded-md">Connections</a>
          <a href="/settings" className="text-gray-700 px-4 py-2 hover:bg-gray-100 rounded-md">PUE Items</a>
          <a href="/settings" className="text-gray-700 px-4 py-2 hover:bg-gray-100 rounded-md">SQL Data Logger</a>
          <a href="/settings" className="text-gray-700 px-4 py-2 hover:bg-gray-100 rounded-md">Syslog</a>
          <a href="/settings" className="text-gray-700 px-4 py-2 hover:bg-gray-100 rounded-md">SNMP Agent</a>
          <a href="/settings" className="text-gray-700 px-4 py-2 hover:bg-gray-100 rounded-md">SNMP Client</a>
          <a href="/settings" className="text-gray-700 px-4 py-2 hover:bg-gray-100 rounded-md">Email</a>
          <a href="/settings" className="text-gray-700 px-4 py-2 hover:bg-gray-100 rounded-md">Device Backup</a>
          <a href="/settings" className="text-gray-700 px-4 py-2 hover:bg-gray-100 rounded-md">Notifications</a>
          <a href="/settings" className="text-gray-700 px-4 py-2 hover:bg-gray-100 rounded-md">Authentication Settings</a>
          <a href="/settings" className="text-gray-700 px-4 py-2 hover:bg-gray-100 rounded-md">LDAP / Active Directory</a>
          <a href="/settings" className="text-gray-700 px-4 py-2 hover:bg-gray-100 rounded-md">DC Consistency</a>
          <a href="/settings" className="text-gray-700 px-4 py-2 hover:bg-gray-100 rounded-md">Task Scheduler</a>
        </div>

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