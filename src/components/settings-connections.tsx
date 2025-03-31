/* eslint-disable @typescript-eslint/no-unused-vars */

"use client"

import * as React from "react"

import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faTrash, faXmark } from '@fortawesome/pro-solid-svg-icons'
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import {
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Checkbox } from "@/components/ui/checkbox"
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
  DrawerClose,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Card, CardContent, CardTitle, CardHeader, CardFooter } from "./ui/card"


export function DialogComponent() {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-row justify-between gap-1 px-6 py-5 sm:py-6">
          <CardTitle className="text-xl">
            <div>Scan for New Connections</div>
            <span className="text-sm font-light text-gray-400">Adding new connections, manually or by scanning and autodetecting them.</span>
          </CardTitle>
          
        </div>
        <div className="flex">
          <div className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6">
            <DrawerClose>
              <Button variant="ghost" size="icon" className="p-0">
                <FontAwesomeIcon icon={faXmark} />
              </Button>
            </DrawerClose>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-row px-0">
        <RadioGroup defaultValue="option-one" className="">
        <div className="grid grid-cols-2 px-12 py-8 w-full">
          <div className="pr-12">
          
            <h4 className="text-base text-blue-700 pb-4 font-bold flex items-center gap-4"><RadioGroupItem value="option-one" id="option-one" /> Auto-Detecting New Connections</h4>
            <div className="flex flex-col gap-2">
              <div className="grid grid-cols-12 border border-gray-200 rounded-lg">
                <div className="whitespace-nowrap px-4 py-2 text-sm text-gray-500">
                  <Checkbox></Checkbox>
                </div>
                <div className="whitespace-nowrap px-4 py-2 text-sm text-gray-5000 col-span-2 flex items-center">
                  <p className=" text-gray-800 font-bold">10.4.8.10</p>
                </div>
                <div className="px-2 py-2 text-sm text-gray-500 col-span-4 overflow-hidden flex items-center">
                  <p className=" text-gray-600">Raritan PX2/PX3 PDU, PMC or EMX</p>
                </div>
                <div className="px-2 py-2 text-base text-gray-800 font-normal col-span-4 flex items-center">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge variant="outline"><Link href="/devices/detail">My PDU</Link></Badge>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 border border-gray-200 rounded-lg">
                <div className="whitespace-nowrap px-4 py-2 text-sm text-gray-500">
                  <Checkbox></Checkbox>
                </div>
                <div className="whitespace-nowrap px-4 py-2 text-sm text-gray-5000 col-span-2 flex items-center">
                  <p className=" text-gray-800 font-bold">10.4.8.10</p>
                </div>
                <div className="px-2 py-2 text-sm text-gray-500 col-span-4 overflow-hidden flex items-center">
                  <p className=" text-gray-600">Raritan PX2/PX3 PDU, PMC or EMX</p>
                </div>
                <div className="px-2 py-2 text-base text-gray-800 font-normal col-span-4 flex items-center">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge variant="outline"><Link href="/devices/detail">My PDU</Link></Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-base text-blue-700 pb-4 font-bold flex items-center gap-4"><RadioGroupItem value="option-two" id="option-two" /> Manually adding New Connection</h4>
            <div className="flex items-center space-x-4 pl-8 py-2">
              <Label htmlFor="option-two" className="font-bold whitespace-nowrap">Device Type</Label>
              <Select>
                <SelectTrigger className="w-auto">
                  <SelectValue placeholder="Select device type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Name is</SelectItem>
                  <SelectItem value="2">Name starts with</SelectItem>
                  <SelectItem value="3">Name ends with</SelectItem>
                  <SelectItem value="4">Name contains</SelectItem>
                  <SelectItem value="5">Name does not contain</SelectItem>
                  <SelectItem value="6">Name is not</SelectItem>
                  <SelectItem value="7">Name is</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-4 pl-8 py-2">
              <Label htmlFor="option-two" className="font-bold whitespace-nowrap">Hostname / IP (e.g. 192.168.20.16, abc.demo.org)</Label>
              
              <Input placeholder="Enter a IP adresse" />
            </div>
          </div>
        </div>
        </RadioGroup>
      </CardContent>
      <CardFooter className="w-full p-0">
          <div className="relative z-30 flex w-full items-center justify-between gap-2 border-t border-gray-200 px-8 py-4 text-left">
            <Button variant="outline" className="w-24 flex items-center gap-2">Cancel</Button>
            <Button variant="default" className="w-24 flex items-center gap-2">Adopt Device</Button>
          </div>

      </CardFooter>
    </Card>
  )
}


export function SettingsConnectionsComponent() {

  return (
    
    <Drawer >
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
                <Link href="#" className="text-blue-700 font-bold text-lg">Connections</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="relative ml-auto flex-1 md:grow-0 flex flex-row gap-4">
        <DrawerTrigger><Button variant="outline" size="default" className="flex items-center gap-2">
            <FontAwesomeIcon icon={faPlus} /> Scan for New Connections
          </Button></DrawerTrigger>
          <Button variant="outline" size="default" className="flex items-center gap-2">
            <FontAwesomeIcon icon={faPlus} /> Import from Excel or CSV
          </Button>
        </div>
        
      </header>
      <div className="flex flex-row w-full gap-4">
        <div className="flex flex-col   h-full text-sm p-2">
          <a href="/enertree/settings" className="text-gray-700 px-4 py-2 hover:bg-gray-100 rounded-md">General</a>
          <a href="/enertree/settings/rules" className="text-gray-700 px-4 py-2 hover:bg-gray-100 rounded-md">Roles</a>
          <a href="/settings" className="text-gray-700 px-4 py-2 hover:bg-gray-100 rounded-md">PUE Items</a>
          <a href="/settings" className="text-gray-700 px-4 py-2 hover:bg-gray-100 rounded-md">Web Access</a>
          <a href="/enertree/settings/connections" className="text-blue-700 px-4 py-2 bg-blue-100 rounded-md">Connections</a>
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
                    Remove
                  </th>
                  <th scope="col" className="px-4 py-3.5 text-left text-xs text-gray-400 font-normal">
                    Connection
                  </th>
                  <th scope="col" className="px-4 py-3.5 text-left text-xs text-gray-400 font-normal">
                    Vendor
                  </th>
                  <th scope="col" className="px-4 py-3.5 text-left text-xs text-gray-400 font-normal">
                    Devices on this connection
                  </th>
                  <th scope="col" className="px-4 py-3.5 text-xs text-gray-400 font-normal text-right">
                    State
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                    <Checkbox></Checkbox>
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                    <p className=" text-gray-800 font-bold">10.4.8.10</p>
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                    <p className=" text-gray-600">Raritan PX2/PX3 PDU, PMC or EMX</p>
                  </td>
                  <td className="px-4 py-4 text-base text-gray-800 font-normal">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline"><Link href="/devices/detail">My PDU</Link></Badge>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 align-top">
                    <div className="flex items-center gap-2 justify-end"> 
                      <Badge variant="default">Connected</Badge>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                    <Checkbox></Checkbox>
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                    <p className=" text-gray-800 font-bold">192.168.33.250</p>
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                    <p className=" text-gray-600">Raritan PX2/PX3 PDU, PMC or EMX</p>
                  </td>
                  <td className="px-4 py-4 text-base text-gray-800 font-normal">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline"><Link href="/devices/detail">real PDU 3.6.1</Link></Badge> 
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 align-top">
                    <div className="flex items-center gap-2 justify-end"> 
                    <Badge variant="default">Connected</Badge>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                    <Checkbox></Checkbox>
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                    <p className=" text-gray-800 font-bold">10.4.5.11</p>
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                    <p className=" text-gray-600">Raritan PX2/PX3 PDU, PMC or EMX</p>
                  </td>
                  <td className="px-4 py-4 text-base text-gray-800 font-normal">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline"><Link href="/devices/detail">PDU-C1-4</Link></Badge>
                      <Badge variant="outline"><Link href="/devices/detail">PDU-C1-4</Link></Badge>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 align-top">
                    <div className="flex items-center gap-2 justify-end"> 
                    <Badge variant="default">Connected</Badge>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                    <Checkbox></Checkbox>
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                    <p className=" text-gray-800 font-bold">epc8226</p>
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                    <p className=" text-gray-600">GUDE PDU/ATS</p>
                  </td>
                  <td className="px-4 py-4 text-base text-gray-800 font-normal">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline"><Link href="/devices/detail">EPC-8226</Link></Badge>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 align-top">
                    <div className="flex items-center gap-2 justify-end"> 
                    <Badge variant="default">Connected</Badge>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                    <Checkbox></Checkbox>
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                    <p className=" text-gray-800 font-bold">192.168.33.221</p>
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                    <p className=" text-gray-600">Device via SNMP</p>
                  </td>
                  <td className="px-4 py-4 text-base text-gray-800 font-normal">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline"><Link href="/devices/detail">APCUPS</Link></Badge>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 align-top">
                    <div className="flex items-center gap-2 justify-end"> 
                    <Badge variant="default">Connected</Badge>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                    <Checkbox></Checkbox>
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                    <p className=" text-gray-800 font-bold">192.168.33.211</p>
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                    <p className=" text-gray-600">Device via SNMP</p>
                  </td>
                  <td className="px-4 py-4 text-base text-gray-800 font-normal">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline"><Link href="/devices/detail">MPX [417271G715C2016FEB180314]</Link></Badge>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 align-top">
                    <div className="flex items-center gap-2 justify-end"> 
                    <Badge variant="va2">Initializing</Badge>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                    <Checkbox></Checkbox>
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                    <p className=" text-gray-800 font-bold">pdu5:5000</p>
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                    <p className=" text-gray-600">Conteg PDU</p>
                  </td>
                  <td className="px-4 py-4 text-base text-gray-800 font-normal">
                    <div className="flex items-center flex-wrap gap-2">
                      <Badge variant="outline"><Link href="/devices/detail">Gateway PDU</Link></Badge>
                      <Badge variant="outline"><Link href="/devices/detail">Daisy-Chain PDU #9</Link></Badge>
                      <Badge variant="outline"><Link href="/devices/detail">Daisy-Chain PDU #10</Link></Badge>
                      <Badge variant="outline"><Link href="/devices/detail">Daisy-Chain PDU #11</Link></Badge>
                      <Badge variant="outline"><Link href="/devices/detail">Daisy-Chain PDU #12</Link></Badge>
                      <Badge variant="outline"><Link href="/devices/detail">Daisy-Chain PDU #13</Link></Badge>
                      <Badge variant="outline"><Link href="/devices/detail">Daisy-Chain PDU #14</Link></Badge>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 align-top">
                    <div className="flex items-center gap-2 justify-end"> 
                    <Badge variant="default">Connected</Badge>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                    <Checkbox></Checkbox>
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                    <p className=" text-gray-800 font-bold">192.168.33.221</p>
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                    <p className=" text-gray-600">Device via SNMP</p>
                  </td>
                  <td className="px-4 py-4 text-base text-gray-800 font-normal">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline"><Link href="/devices/detail">APCUPS</Link></Badge>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 align-top">
                    <div className="flex items-center gap-2 justify-end"> 
                    <Badge variant="default">Connected</Badge>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            
            
          </div>

          <div className="py-4 flex justify-end">
              <Button variant="outline" size="default" className="flex items-center gap-2">
                <FontAwesomeIcon icon={faTrash} /> Remove 0 connections
              </Button>
            </div>
        </div>
      </div>
    </div>
    <DrawerContent>
      <DrawerHeader>
        <DrawerDescription>
          <DialogComponent />
        </DrawerDescription>
      </DrawerHeader>
    </DrawerContent>
    </Drawer>
  )
}

/* eslint-enable @typescript-eslint/no-unused-vars */