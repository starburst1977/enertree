  /* eslint-disable @typescript-eslint/no-unused-vars */

"use client"

import * as React from "react"

import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTriangle as faTriangle, faCircle as faCircle, faArrowUpRightFromSquare, faXmark } from '@fortawesome/pro-solid-svg-icons'
import { faTrashCan as faTrashCan, faEnvelopeOpenText as faEnvelopeOpenText, faPlus as faPlus } from '@fortawesome/pro-solid-svg-icons'
import { Switch } from "@/components/ui/switch"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Badge } from "@/components/ui/badge"
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
} from "@/components/ui/breadcrumb"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"

import { TopTabs, TopTabsList, TopTabsTrigger, TopTabsContent } from "@/components/ui/tabs-top"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerClose,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  TooltipProvider,
} from "@/components/ui/tooltip"


export function DialogComponent() {
  

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-row justify-between gap-1 px-6 py-5 sm:py-6">
          <CardTitle className="text-xl">
            <div>User Details</div>
            <span className="text-sm font-light text-gray-400">Define User Role</span>
          </CardTitle>
          
        </div>
        
        
        <div className="flex">
          <div className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6">
            <span className="text-xs text-muted-foreground">
              Active
            </span>
            <span className="leading-none flex items-center gap-2 pt-2 pb-3">
              <Switch defaultChecked />
            </span>
          </div>
        </div>
        <div className="flex">
          <div className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6">
            <span className="text-xs text-muted-foreground">
              External Customer Employee
            </span>
            <span className="leading-none flex items-center gap-2 pt-2 pb-3">
              <Switch  />
            </span>
          </div>
        </div>
        <div className="flex">
          <div className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-t-0 sm:px-8 sm:py-6">
            <span className="text-xs text-muted-foreground">
              Select External Company
            </span>
            <Select defaultValue="4hours">
              <SelectTrigger className="w-[180px]">
                <SelectValue/>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="realtime">Microsoft</SelectItem>
                <SelectItem value="4hours">Apple</SelectItem>
                <SelectItem value="3days">Amazon</SelectItem>
                <SelectItem value="7days">Google</SelectItem>
                <SelectItem value="system">Tesla</SelectItem>
                <SelectItem value="system">Space X</SelectItem>
              </SelectContent>
            </Select>
          </div>
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
      <CardContent className="flex flex-row  px-0">
        <div className="flex-1">
          <div className="flex">
            <div className="relative z-30 flex flex-1 flex-col justify-center gap-1 px-6 py-4 text-left data-[active=true]:bg-muted/50 sm:border-t-0">
              <span className="text-xs text-blue-700">
                First Name
              </span>
              <span className="leading-none flex items-center gap-2 pt-2">
                <Input type="text" className="w-full" value="Frank" />
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="relative z-30 flex flex-1 flex-col justify-center gap-1 px-6 py-4 text-left data-[active=true]:bg-muted/50 sm:border-t-0">
              <span className="text-xs text-blue-700">
                Last Name
              </span>
              <span className="leading-none flex items-center gap-2 pt-2">
                <Input type="text" className="w-full" value="Mustermann" />
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="relative z-30 flex flex-1 flex-col justify-center gap-1 px-6 py-4 text-left data-[active=true]:bg-muted/50 sm:border-t-0">
              <span className="text-xs text-blue-700">
                eMail
              </span>
              <span className="leading-none flex items-center gap-2 pt-2">
                <Input type="text" className="w-full" value="frank.mustermann@example.com" />
              </span>
            </div>
          </div>
          <div className="flex flex-1">
            <div className="relative z-30 flex flex-1 flex-col justify-center gap-1 px-6 py-4 text-left data-[active=true]:bg-muted/50 sm:border-t-0">
              <span className="text-xs text-blue-700">
                Description
              </span>
              <span className="leading-none flex items-center gap-2 pt-2">
                <Input type="text" className="w-full" value="Just some information" />
              </span>
            </div>
          </div>
          
        </div>
        <div className="px-6 py-6 flex flex-col flex-1 gap-4">
          <div className="text-xs text-blue-700 pb-2">
            Available Roles
          </div>
          <div className="flex gap-4">
            <Switch defaultChecked />
            <Badge variant="default">System Administrator</Badge>
          </div>
          <div className="flex gap-4">
            <Switch  />
            <Badge variant="va2">Owner</Badge>
          </div>
          <div className="flex gap-4">
            <Switch  />
            <Badge variant="secondary">Standard User</Badge>
          </div>
          <div className="flex gap-4">
            <Switch  />
            <Badge variant="va3">Designer</Badge>
          </div>
          
          
        </div>
        
        
        
        
      </CardContent>
      <CardFooter className="w-full p-0">
          <div className="relative z-30 flex w-full items-center justify-between gap-2 border-t border-gray-200 px-8 py-4 text-left">
            <Button variant="destructive" className="w-24 flex items-center gap-2">Delete User</Button>
            <Button variant="default" className="w-24 flex items-center gap-2">Save User</Button>
          </div>

      </CardFooter>
    </Card>
  )
}

export function UsersComponent() {

  return (
    <TooltipProvider>
      <Drawer >
    <div className="flex min-h-screen mx-auto w-full max-w-screen-2xl flex-col p-4">
      <TopTabs defaultValue="users" className="px-8 py-4">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-white sm:static sm:h-auto sm:border-0 sm:bg-transparent dark:bg-neutral-950 pb-4 px-2">
          <Breadcrumb className="hidden md:flex">
            <SidebarTrigger />
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="#" className="text-blue-700 font-bold text-lg">User Management</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              
            </BreadcrumbList>
          </Breadcrumb>
          
          <div className="relative ml-auto flex-1 md:grow-0 flex items-center justify-end gap-4">
            <div className="flex flex-row gap-2 items-center">
                <div className="text-xs text-neutral-400">View</div>
                <TopTabsList>
                  <TopTabsTrigger value="users">Users</TopTabsTrigger>
                  <TopTabsTrigger value="roles">Roles</TopTabsTrigger>
                </TopTabsList>
                
            </div>
          </div>
        </header>

        <TopTabsContent value="users">
        <div className="overflow-hidden ring-1 ring-neutral-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-neutral-200">
            <thead className="bg-white">
              <tr>
                <th scope="col" className="px-4 py-3.5 text-left text-xs text-gray-400 font-normal">
                  First Name
                </th>
                <th scope="col" className="px-4 py-3.5 text-left text-xs text-gray-400 font-normal">
                  Last Name
                </th>
                <th scope="col" className="px-4 py-3.5 text-left text-xs text-gray-400 font-normal">
                  Information
                </th>
                <th scope="col" className="px-4 py-3.5 text-xs text-gray-400 font-normal text-right">
                  Role
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr>
                <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                  <DrawerTrigger><p className=" text-gray-800 font-bold">Frank</p></DrawerTrigger>
                </td>
                <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                  <DrawerTrigger><p className=" text-gray-800 font-bold">Mustermann</p></DrawerTrigger>
                </td>
                <td className="px-4 py-4 text-base text-gray-800 font-normal">
                <DrawerTrigger><div className="text-sm text-gray-600 flex items-center gap-2">
                    Just some information
                  </div></DrawerTrigger>
                </td>
                <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 align-top">
                  <div className="flex items-center gap-2 justify-end"> <DrawerTrigger>
                    <Badge variant="default">System Administrator</Badge>
                  </DrawerTrigger></div>
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                  <p className=" text-gray-800 font-bold">Sven</p>
                </td>
                <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                  <p className=" text-gray-800 font-bold">Read</p>
                </td>
                <td className="px-4 py-4 text-base text-gray-800 font-normal">
                  <div className="text-sm text-gray-600 flex items-center gap-2">
                    Just some information
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 align-top">
                  <div className="flex items-center gap-2 justify-end">
                    <Badge variant="secondary">Standard User</Badge><Badge variant="va3">Designer</Badge>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                  <p className=" text-gray-800 font-bold">Mark</p>
                </td>
                <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                  <p className=" text-gray-800 font-bold">Zuckerberg</p>
                </td>
                <td className="px-4 py-4 text-base text-gray-800 font-normal">
                  <div className="text-sm text-gray-600 flex items-center gap-2">
                    Just some information
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 align-top">
                  <div className="flex items-center gap-2 justify-end">
                    <Badge variant="va2">Owner</Badge>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          
        </div>
        </TopTabsContent>
        <TopTabsContent value="roles">
        <div className="overflow-hidden ring-1 ring-neutral-200 sm:rounded-lg">
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
                <th scope="col" className="px-4 py-3.5 text-left text-xs text-gray-400 font-normal text-right">
                  Permissions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr>
                <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                  <DrawerTrigger><p className=" text-gray-800 font-bold">Administrator</p></DrawerTrigger>
                </td>
                <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                  <DrawerTrigger><p className=" text-gray-600">Full access to all features</p></DrawerTrigger>
                </td>
                <td className="px-4 py-4 text-base text-gray-800 font-normal">
                  <DrawerTrigger className="flex items-center gap-2">
                    <div className="bg-blue-600 rounded w-4 h-4"></div>
                  </DrawerTrigger>
                </td>
                <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 align-top">
                  <div className="flex items-center gap-2 justify-end"> <DrawerTrigger>
                    <Badge variant="outline">13</Badge>
                  </DrawerTrigger></div>
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                  <DrawerTrigger><p className=" text-gray-800 font-bold">Owner</p></DrawerTrigger>
                </td>
                <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                  <DrawerTrigger><p className=" text-gray-600">Full access to all features</p></DrawerTrigger>
                </td>
                <td className="px-4 py-4 text-base text-gray-800 font-normal">
                  <DrawerTrigger className="flex items-center gap-2">
                    <div className="bg-red-600 rounded w-4 h-4"></div>
                  </DrawerTrigger>
                </td>
                <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 align-top">
                  <div className="flex items-center gap-2 justify-end"> <DrawerTrigger>
                    <Badge variant="outline">16</Badge>
                  </DrawerTrigger></div>
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                  <DrawerTrigger><p className=" text-gray-800 font-bold">Designer</p></DrawerTrigger>
                </td>
                <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                  <DrawerTrigger><p className=" text-gray-600">Full access to all features</p></DrawerTrigger>
                </td>
                <td className="px-4 py-4 text-base text-gray-800 font-normal">
                  <DrawerTrigger className="flex items-center gap-2">
                    <div className="bg-green-600 rounded w-4 h-4"></div>
                  </DrawerTrigger>
                </td>
                <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 align-top">
                  <div className="flex items-center gap-2 justify-end"> <DrawerTrigger>
                    <Badge variant="outline">8</Badge>
                  </DrawerTrigger></div>
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                  <DrawerTrigger><p className=" text-gray-800 font-bold">Standard User</p></DrawerTrigger>
                </td>
                <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                  <DrawerTrigger><p className=" text-gray-600">Restricted access</p></DrawerTrigger>
                </td>
                <td className="px-4 py-4 text-base text-gray-800 font-normal">
                  <DrawerTrigger className="flex items-center gap-2">
                    <div className="bg-gray-400 rounded w-4 h-4"></div>
                  </DrawerTrigger>
                </td>
                <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 align-top">
                  <div className="flex items-center gap-2 justify-end"> <DrawerTrigger>
                    <Badge variant="outline">4</Badge>
                  </DrawerTrigger></div>
                </td>
              </tr>
            </tbody>
          </table>

          
        </div>
        </TopTabsContent>
      </TopTabs>
      <br/>
    </div>
    <DrawerContent>
      <DrawerHeader>
        <DrawerDescription>
          <DialogComponent />
        </DrawerDescription>
      </DrawerHeader>
    </DrawerContent>
  </Drawer>


    </TooltipProvider>  
  )
}

/* eslint-enable @typescript-eslint/no-unused-vars */