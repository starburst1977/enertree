/* eslint-disable @typescript-eslint/no-unused-vars */

"use client"

import * as React from "react"

import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPen, faPlus, faTrash, faXmark } from '@fortawesome/pro-regular-svg-icons'
import { faGripDotsVertical } from '@fortawesome/pro-solid-svg-icons'
import { Badge } from "@/components/ui/badge"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Label } from "@/components/ui/label"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardTitle, CardHeader, CardDescription, CardFooter } from "./ui/card"

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerClose,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"


export function DialogComponent() {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-row justify-between gap-1 px-6 py-5 sm:py-6">
          <CardTitle className="text-xl">
            <div>Define Rule</div>
            <span className="text-sm font-light text-gray-400">Here you can define what is allowed and what not.</span>
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
        <div className="px-12 py-6">
          <h4 className="text-base text-blue-700 pb-4 font-bold">Permission</h4>
          <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2 h-12">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one">You can</Label>
            </div>
            <div className="flex items-center space-x-2 h-12">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two">You can&apos;t</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="px-12 py-6">
          <h4 className="text-base text-blue-700 pb-4 font-bold">Actions</h4>
          <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2 h-12">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one">Read</Label>
            </div>
            <div className="flex items-center space-x-2 h-12">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two">Write</Label>
            </div>
            <div className="flex items-center space-x-2 h-12">
              <RadioGroupItem value="option-three" id="option-two" />
              <Label htmlFor="option-two">Both</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="flex-1 px-12 py-6">
          <h4 className="text-base text-blue-700 pb-4 font-bold">Objects</h4>
          <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2 h-12">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one">Everything</Label>
            </div>
            <div className="flex items-center space-x-2 h-12">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two">Specific Room</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a room" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option-one">Room 1</SelectItem>
                  <SelectItem value="option-two">Room 2</SelectItem>
                  <SelectItem value="option-three">Room 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-2 h-12">
              <RadioGroupItem value="option-four" id="option-two" />
              <Label htmlFor="option-two">Specific Row</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a room" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option-one">Room 1</SelectItem>
                  <SelectItem value="option-two">Room 2</SelectItem>
                  <SelectItem value="option-three">Room 3</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a row" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option-one">Row 1</SelectItem>
                  <SelectItem value="option-two">Row 2</SelectItem>
                  <SelectItem value="option-three">Row 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-2 h-12">
              <RadioGroupItem value="option-five" id="option-two" />
              <Label htmlFor="option-two">Specific Rack</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a room" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option-one">Room 1</SelectItem>
                  <SelectItem value="option-two">Room 2</SelectItem>
                  <SelectItem value="option-three">Room 3</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a row" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option-one">Row 1</SelectItem>
                  <SelectItem value="option-two">Row 2</SelectItem>
                  <SelectItem value="option-three">Row 3</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a rack" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option-one">Rack 1</SelectItem>
                  <SelectItem value="option-two">Rack 2</SelectItem>
                  <SelectItem value="option-three">Rack 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-2 h-12">
              <RadioGroupItem value="option-six" id="option-two" />
              <Label htmlFor="option-two">Specific Device</Label>
              
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a Device" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option-one">Device 1</SelectItem>
                  <SelectItem value="option-two">Device 2</SelectItem>
                  <SelectItem value="option-three">Device 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </RadioGroup>
        </div>
      </CardContent>
      <CardContent className="px-12 py-6">
        <h4 className="text-base text-yellow-700 pb-4 font-bold">Preview</h4>
        <div className="flex flex-row items-center gap-4 bg-gray-50 py-2 px-4 rounded-lg border border-gray-200">
          <div className="flex font-bold text-green-800 border border-green-300 rounded-md px-2 py-1 bg-green-200">
            You can
          </div>
          <div className="flex font-bold text-gray-800 border border-blue-200 rounded-md px-2 py-1 bg-blue-100">
            Read
          </div>
          <div className="flex font-bold text-gray-800 border border-blue-200 rounded-md px-2 py-1 bg-blue-100">
            Everything
          </div>
          
        </div>
      </CardContent>
      <CardFooter className="w-full p-0">
          <div className="relative z-30 flex w-full items-center justify-between gap-2 border-t border-gray-200 px-8 py-4 text-left">
            <Button variant="outline" className="w-24 flex items-center gap-2">Cancel</Button>
            <Button variant="default" className="w-24 flex items-center gap-2">Save Rule</Button>
          </div>

      </CardFooter>
    </Card>
  )
}


export function SettingsRulesDetailComponent() {

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
              <BreadcrumbLink className="text-lg pl-2" href="/settings/rules">Roles</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="#" className="text-blue-700 font-bold text-lg">Administrator</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        
      </header>
      <div className="flex flex-row w-full gap-4">
        <div className="flex flex-col   h-full text-sm p-2">
          <a href="/settings" className="text-gray-700 px-4 py-2 hover:bg-gray-100 rounded-md">General</a>
          <a href="/settings/rules" className="text-blue-700 px-4 py-2 bg-blue-100 rounded-md">Roles</a>
          <a href="/settings" className="text-gray-700 px-4 py-2 hover:bg-gray-100 rounded-md">PUE Items</a>
          <a href="/settings" className="text-gray-700 px-4 py-2 hover:bg-gray-100 rounded-md">Web Access</a>
          <a href="/settings/connections" className="text-gray-700 px-4 py-2 hover:bg-gray-100 rounded-md">Connections</a>
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
        <Drawer >
          <div className="w-full">
            
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Role Details</CardTitle>
              <CardDescription>
                Edit name, description and the necessary rules below.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="flex flex-row gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="email" className="text-sm text-gray-400">Name</Label>
                    <Input
                      id="email"
                      type="text"
                      value="Administrator"
                    />
                  </div>
                  <div className="flex-1 grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password" className="text-sm text-gray-400">Description</Label>
                    </div>
                    <Input id="password" type="text" value="Full access to all features" />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password" className="text-sm text-gray-400">Select a color</Label>
                    </div>
                    <div className="flex items-center gap-2 h-10">
                      <div className="border-blue-600 border-2 rounded"><div className="bg-blue-600 rounded w-4 h-4 border-2 border-white"></div></div>
                      <div className="bg-green-600 rounded w-4 h-4"></div>
                      <div className="bg-red-600 rounded w-4 h-4"></div>
                      <div className="bg-yellow-600 rounded w-4 h-4"></div>
                      <div className="bg-purple-600 rounded w-4 h-4"></div>
                      <div className="bg-orange-600 rounded w-4 h-4"></div>
                      <div className="bg-gray-600 rounded w-4 h-4"></div>
                    </div>
                  </div>
                  
                </div>
                
              </form>
              
              <h2 className="text-md font-bold mt-12 text-blue-700">Rules</h2>
              <br></br>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row items-center gap-4 bg-gray-50 py-2 px-2 rounded-lg border border-gray-200">
                  <FontAwesomeIcon icon={faGripDotsVertical} className="text-gray-400 ml-2" /> 
                  <div className="flex font-bold text-green-800 border border-green-300 rounded-md px-2 py-1 bg-green-200">
                    You can
                  </div>
                  <div className="flex font-bold text-gray-800 border border-blue-200 rounded-md px-2 py-1 bg-blue-100">
                    Read & Write
                  </div>
                  <div className="flex font-bold text-gray-800 border border-blue-200 rounded-md px-2 py-1 bg-blue-100">
                    Everything
                  </div>
                  <div className="flex-1 flex items-center gap-6 justify-end px-4">
                  <DrawerTrigger><FontAwesomeIcon icon={faPen} className="text-gray-400 hover:text-blue-600" /></DrawerTrigger>
                    <FontAwesomeIcon icon={faTrash} className="text-gray-400 hover:text-red-600" /> 
                  </div>
                </div>
                <div className="flex flex-row items-center gap-4 bg-gray-50 py-2 px-2 rounded-lg border border-gray-200">
                  <FontAwesomeIcon icon={faGripDotsVertical} className="text-gray-400 ml-2" /> 
                  <div className="flex font-bold text-green-800 border border-green-300 rounded-md px-2 py-1 bg-green-200">
                    You can
                  </div>
                  <div className="flex font-bold text-gray-800 border border-blue-200 rounded-md px-2 py-1 bg-blue-100">
                    Read
                  </div>
                  <div className="flex font-bold text-gray-800 border border-blue-200 rounded-md px-2 py-1 bg-blue-100">
                    Room 1
                  </div>
                  <div className="flex-1 flex items-center gap-6 justify-end px-4">
                  <DrawerTrigger><FontAwesomeIcon icon={faPen} className="text-gray-400 hover:text-blue-600" /></DrawerTrigger>
                    <FontAwesomeIcon icon={faTrash} className="text-gray-400 hover:text-red-600" /> 
                  </div>
                </div>
                <div className="flex flex-row items-center gap-4 bg-gray-50 py-2 px-2 rounded-lg border border-gray-200">
                  <FontAwesomeIcon icon={faGripDotsVertical} className="text-gray-400 ml-2" /> 
                  <div className="flex font-bold text-red-800 border border-red-300 rounded-md px-2 py-1 bg-red-200">
                    You can&apos;t
                  </div>
                  <div className="flex font-bold text-gray-800 border border-blue-200 rounded-md px-2 py-1 bg-blue-100">
                    Read
                  </div>
                  <div className="flex font-bold text-gray-800 border border-blue-200 rounded-md px-2 py-1 bg-blue-100">
                    DC Overview
                  </div>
                  <div className="flex-1 flex items-center gap-6 justify-end px-4">
                  <DrawerTrigger><FontAwesomeIcon icon={faPen} className="text-gray-400 hover:text-blue-600" /></DrawerTrigger>
                    <FontAwesomeIcon icon={faTrash} className="text-gray-400 hover:text-red-600" /> 
                  </div>
                </div>
                
                <DrawerTrigger><Button variant="link" size="default" className="flex items-center gap-2 justify-start">
                  <FontAwesomeIcon icon={faPlus} /> Add New Rule
                </Button></DrawerTrigger>
                <h2 className="text-md font-bold mt-8 mb-4 text-blue-700">Summary</h2>
                <div className="flex bg-yellow-100 rounded-lg py-4 px-6 border border-yellow-300 text-yellow-800 text-md">
                  You have read & write access to everything, except read access to DC Overview page.
                </div>
                
              </div>
            </CardContent>
          </Card>

            
          </div>
          <DrawerContent>
            <DrawerHeader>
              <DrawerDescription>
                <DialogComponent />
              </DrawerDescription>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>
        </div>

      </div>
      
    </div>
  )
}

/* eslint-enable @typescript-eslint/no-unused-vars */