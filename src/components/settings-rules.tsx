/* eslint-disable @typescript-eslint/no-unused-vars */

"use client"

import * as React from "react"

import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from '@fortawesome/pro-solid-svg-icons'
import { Badge } from "@/components/ui/badge"
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





export function SettingsRulesComponent() {

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
                <Link href="#" className="text-blue-700 font-bold text-lg">Roles</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="relative ml-auto flex-1 md:grow-0 flex flex-row gap-4">
          <Button variant="outline" size="default" className="flex items-center gap-2">
            <FontAwesomeIcon icon={faPlus} /> Add New Role
          </Button>
        </div>
        
      </header>
      <div className="flex flex-row w-full gap-4">
        <div className="flex flex-col   h-full text-sm p-2">
          <a href="/settings" className="text-gray-700 px-4 py-2 hover:bg-gray-100 rounded-md">General</a>
          <a href="/settings/rules" className="text-blue-700 px-4 py-2 bg-blue-100 rounded-md">Roles</a>
          <a href="/settings" className="text-gray-700 px-4 py-2 hover:bg-gray-100 rounded-md">PUE Items</a>
          <a href="/settings/connections" className="text-gray-700 px-4 py-2 hover:bg-gray-100 rounded-md">Web Access</a>
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

        <div className="flex-1 px-2 py-4 w-full">
          <div className="overflow-hidden ring-1 ring-neutral-200 sm:rounded-lg w-full">
            <table className="min-w-full divide-y divide-neutral-200">
              <thead className="bg-white">
                <tr>
                  <th scope="col" className="px-4 py-3.5 text-left text-xs text-gray-400 font-normal">
                    Role Name
                  </th>
                  <th scope="col" className="px-4 py-3.5 text-left text-xs text-gray-400 font-normal">
                    Description
                  </th>
                  <th scope="col" className="px-4 py-3.5 text-left text-xs text-gray-400 font-normal">
                    Color
                  </th>
                  <th scope="col" className="px-4 py-3.5 text-xs text-gray-400 font-normal text-right">
                    Rules
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                    <p className=" text-gray-800 font-bold"><Link href="/settings/rules/detail">Administrator</Link></p>
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                    <p className=" text-gray-600">Full access to all features</p>
                  </td>
                  <td className="px-4 py-4 text-base text-gray-800 font-normal">
                    <div className="flex items-center gap-2">
                      <div className="bg-blue-600 rounded w-4 h-4"></div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 align-top">
                    <div className="flex items-center gap-2 justify-end"> 
                      <Badge variant="outline">13</Badge>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                    <p className=" text-gray-800 font-bold">Owner</p>
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                    <p className=" text-gray-600">Full access to all features</p>
                  </td>
                  <td className="px-4 py-4 text-base text-gray-800 font-normal">
                    <div className="flex items-center gap-2">
                      <div className="bg-red-600 rounded w-4 h-4"></div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 align-top">
                    <div className="flex items-center gap-2 justify-end"> 
                      <Badge variant="outline">16</Badge>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                    <p className=" text-gray-800 font-bold">Designer</p>
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                    <p className=" text-gray-600">Full access to all features</p>
                  </td>
                  <td className="px-4 py-4 text-base text-gray-800 font-normal">
                    <div className="flex items-center gap-2">
                      <div className="bg-green-600 rounded w-4 h-4"></div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 align-top">
                    <div className="flex items-center gap-2 justify-end"> 
                      <Badge variant="outline">8</Badge>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                    <p className=" text-gray-800 font-bold">Standard User</p>
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                    <p className=" text-gray-600">Restricted access</p>
                  </td>
                  <td className="px-4 py-4 text-base text-gray-800 font-normal">
                    <div className="flex items-center gap-2">
                      <div className="bg-gray-400 rounded w-4 h-4"></div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 align-top">
                    <div className="flex items-center gap-2 justify-end"> 
                      <Badge variant="outline">4</Badge>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            
          </div>
        </div>
      </div>
    </div>
  )
}

/* eslint-enable @typescript-eslint/no-unused-vars */