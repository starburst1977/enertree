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





export function ProfilesComponent() {

  return (
    
    
    <div className=" min-h-screen mx-auto w-full max-w-screen-2xl p-4">
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-white sm:static sm:h-auto sm:border-0 sm:bg-transparent dark:bg-neutral-950 pb-4 px-2">
        <Breadcrumb className="hidden md:flex">
          <SidebarTrigger />
          
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink className="text-blue-700 font-bold text-lg">Device Profile Management</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="relative ml-auto flex-1 md:grow-0 flex flex-row gap-4">
          <Button variant="outline" size="default" className="flex items-center gap-2">
            <FontAwesomeIcon icon={faPlus} /> Add New Profile
          </Button>
        </div>
        
      </header>
      <div className="flex flex-row w-full gap-4">
        

        <div className="flex-1 px-2 py-4 w-full">
          <div className="overflow-hidden ring-1 ring-neutral-200 sm:rounded-lg w-full">
            <table className="min-w-full divide-y divide-neutral-200">
              <thead className="bg-white">
                <tr>
                  <th scope="col" className="px-4 py-3.5 text-left text-xs text-gray-400 font-normal">
                    Profile Name
                  </th>
                  <th scope="col" className="px-4 py-3.5 text-left text-xs text-gray-400 font-normal">
                    Description
                  </th>
                  <th scope="col" className="px-4 py-3.5 text-xs text-gray-400 font-normal text-right">
                    Rules
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                    <p className=" text-gray-800 font-bold"><Link href="/profiles/detail">Standard PDU</Link></p>
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                    <p className=" text-gray-600">Standard naming convention for new PDU</p>
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 align-top">
                    <div className="flex items-center gap-2 justify-end"> 
                      <Badge variant="outline">13</Badge>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                    <p className=" text-gray-800 font-bold">Special device</p>
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                    <p className=" text-gray-600">Whatever we want to write here</p>
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 align-top">
                    <div className="flex items-center gap-2 justify-end"> 
                      <Badge variant="outline">16</Badge>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                    <p className=" text-gray-800 font-bold">Sensors only</p>
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                    <p className=" text-gray-600">Standard naming for Sensors</p>
                  </td>
                  
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 align-top">
                    <div className="flex items-center gap-2 justify-end"> 
                      <Badge variant="outline">8</Badge>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                    <p className=" text-gray-800 font-bold">Outlets only</p>
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                    <p className=" text-gray-600">Restricted access</p>
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