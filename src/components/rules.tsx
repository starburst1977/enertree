/* eslint-disable @typescript-eslint/no-unused-vars */

"use client"

import { addDays, format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"
import { Calendar } from "@/components/ui/calendar"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { Input } from "@/components/ui/input"
import { useState, ReactNode } from 'react'
import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTriangle as faTriangle, faCircle as faCircle, faArrowUpRightFromSquare } from '@fortawesome/pro-solid-svg-icons'
import { faTrashCan as faTrashCan, faEnvelopeOpenText as faEnvelopeOpenText, faPlus as faPlus, faPenToSquare as faPenToSquare } from '@fortawesome/pro-solid-svg-icons'
import { Switch } from "@/components/ui/switch"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
} from "@/components/ui/breadcrumb"
import Link from "next/link"
import {
  Search,
  ChevronsUpDown,
  ChevronLeft,
  ChevronRight,
  Eye,
  Bell,
  Check,
} from "lucide-react"
import { Button } from "@/components/ui/button"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

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

const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5']

interface StepContentProps {
  children: ReactNode
  isActive: boolean
}

function StepContent({ children, isActive }: StepContentProps) {
  if (!isActive) return null
  return (
    <div className="mt-8 p-4">
      {children}
    </div>
  )
}

function Stepper() {
  const [currentStep, setCurrentStep] = useState(0)

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
  }

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0))
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-8 relative">
        <div className="flex items-center justify-between w-full relative z-20">
          {steps.map((step, index) => (
            <div key={step} className="flex flex-col items-center">
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  index <= currentStep ? 'bg-blue-600 text-white' : 'bg-gray-200 text-muted-foreground'
                }`}
              >
                {index + 1}
              </div>
            </div>
          ))}
        </div>
        <div className="">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2" />
          <div 
            className="absolute top-1/2 left-0 h-1 bg-primary -translate-y-1/2 transition-all duration-300 ease-in-out"
            style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
          />
        </div>
      </div>

      <StepContent isActive={currentStep === 0}>
        
        <div className="text-sm text-gray-600 flex justify-center pb-8">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-lg font-bold text-blue-700">I want to create a new report concerning</CardTitle>
            </CardHeader>
            <CardContent>

              <RadioGroup defaultValue="option-one" className="border border-gray-200 rounded-lg flex flex-col gap-0">
                <div className="flex items-center space-x-4 h-16 px-8 py-8 border-b border-gray-200">
                  <RadioGroupItem value="option-one" id="option-one" />
                  <Label htmlFor="option-one" className="font-bold">Actual devices</Label>
                  
                </div>
                <div className="flex items-center space-x-4 h-16 px-8 py-8">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <Label htmlFor="option-two" className="font-bold">DC devices</Label>
                </div>
              </RadioGroup>
              
            </CardContent>
          </Card>
        </div>

      </StepContent>

      <StepContent isActive={currentStep === 1}>
        
        <div className="text-sm text-gray-600 flex justify-center pb-8">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-lg font-bold text-blue-700">This report should consist of</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup defaultValue="option-one" className="border border-gray-200 rounded-lg flex flex-col gap-0">
                <div className="flex items-center space-x-4 h-16 px-8 py-8 border-b border-gray-200">
                  <RadioGroupItem value="option-one" id="option-one" />
                  <Label htmlFor="option-one" className="font-bold">All devices</Label>
                  
                </div>
                <div className="flex items-center space-x-4 h-16 px-8 py-8 border-b border-gray-200">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <Label htmlFor="option-two" className="font-bold">Specific type of devices</Label>
                  <Combobox />  
                </div>
                <div className="flex items-center space-x-4 h-16 px-8 py-8 border-b border-gray-200">
                  <RadioGroupItem value="option-three" id="option-three" />
                  <Label htmlFor="option-two" className="font-bold">Specific devices</Label>
                  <Combobox /> 
                </div>
              </RadioGroup>
              
            </CardContent>
          </Card>
        </div>
      </StepContent>

      <StepContent isActive={currentStep === 2}>
        <div className="text-sm text-gray-600 flex justify-center pb-8">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-lg font-bold text-blue-700">What type of value should this report target?</CardTitle>
            </CardHeader>
            <CardContent>


              <RadioGroup defaultValue="option-one" className="border border-gray-200 rounded-lg flex flex-col gap-0">
                <div className="flex items-center space-x-4 h-16 px-8 py-8 border-b border-gray-200">
                  <RadioGroupItem value="option-one" id="option-one" />
                  <Label htmlFor="option-one" className="font-bold">Outlets</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a value" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Active power (W)</SelectItem>
                      <SelectItem value="2">Apparent power (VA)</SelectItem>
                      <SelectItem value="3">Crest factor</SelectItem>
                      <SelectItem value="4">Current (A)</SelectItem>
                      <SelectItem value="5">Voltage (V)</SelectItem>
                      <SelectItem value="6">Power factor</SelectItem>
                      <SelectItem value="7">Reactive power (VAR)</SelectItem>
                      <SelectItem value="8">Temperature (ºC)</SelectItem>
                    </SelectContent>
                  </Select> 
                </div>
                <div className="flex items-center space-x-4  h-16 px-8 py-8 border-b border-gray-200">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <Label htmlFor="option-two" className="font-bold">Inlets</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a value" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Active power (W)</SelectItem>
                      <SelectItem value="2">Apparent power (VA)</SelectItem>
                      <SelectItem value="3">Crest factor</SelectItem>
                      <SelectItem value="4">Current (A)</SelectItem>
                      <SelectItem value="5">Voltage (V)</SelectItem>
                      <SelectItem value="6">Power factor</SelectItem>
                      <SelectItem value="7">Reactive power (VAR)</SelectItem>
                      <SelectItem value="8">Temperature (ºC)</SelectItem>
                    </SelectContent>
                  </Select>  
                </div>
                <div className="flex items-center space-x-4  h-16 px-8 py-8">
                  <RadioGroupItem value="option-three" id="option-three" />
                  <Label htmlFor="option-three" className="font-bold">Sensors</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a value" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Active power (W)</SelectItem>
                      <SelectItem value="2">Apparent power (VA)</SelectItem>
                      <SelectItem value="3">Crest factor</SelectItem>
                      <SelectItem value="4">Current (A)</SelectItem>
                      <SelectItem value="5">Voltage (V)</SelectItem>
                      <SelectItem value="6">Power factor</SelectItem>
                      <SelectItem value="7">Reactive power (VAR)</SelectItem>
                      <SelectItem value="8">Temperature (ºC)</SelectItem>
                    </SelectContent>
                  </Select>  
                </div>
              </RadioGroup>
              
            </CardContent>
          </Card>
        </div>
      </StepContent>

      <StepContent isActive={currentStep === 3}>
        <div className="text-sm text-gray-600 flex justify-center pb-8">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-lg font-bold text-blue-700">Further restrict Outlet for this report?</CardTitle>
            </CardHeader>
            <CardContent>

              <RadioGroup defaultValue="option-one" className="border border-gray-200 rounded-lg flex flex-col gap-0">
                <div className="flex items-center space-x-4 h-16 px-8 py-8 border-b border-gray-200">
                  <RadioGroupItem value="option-one" id="option-one" />
                  <Label htmlFor="option-one" className="font-bold">No</Label>
                  
                </div>
                <div className="flex items-center space-x-4 h-16 px-8 py-8">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <Label htmlFor="option-two" className="font-bold whitespace-nowrap">By name?</Label>
                  <Select>
                    <SelectTrigger className="w-auto">
                      <SelectValue placeholder="Select a value" />
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
                  <Input placeholder="Enter a name" />
                </div>
              </RadioGroup>
              
            </CardContent>
          </Card>
        </div>
      </StepContent>

      <StepContent isActive={currentStep === 4}>
        <div className="text-sm text-gray-600 flex justify-center pb-8">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-lg font-bold text-blue-700">Nearly done</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4 pb-6">
                Please enter a name for this report:
              </div>
              <Input placeholder="Enter a name" />
            </CardContent>
          </Card>
        </div>
      </StepContent>

      <div className="flex justify-between py-4">
        <Button onClick={handleBack} disabled={currentStep === 0}>
          Back
        </Button>
        <Button onClick={handleNext} disabled={currentStep === steps.length - 1}>
          {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
        </Button>
      </div>
    </div>
  )
}

export function DatePickerWithRange({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  })
 
  return (
    <div className={cn("grid gap-4", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[250px] justify-start text-left font-normal pl-3",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="size-4 text-gray-400 mr-2" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}

const frameworks = [
  {
    value: "PDU-B1-9",
    label: "PDU-B1-9",
  },
  {
    value: "PDU-B1-10",
    label: "PDU-B1-10",
  },
  {
    value: "PDU-B1-11",
    label: "PDU-B1-11",
  },
  {
    value: "PDU-B1-12",
    label: "PDU-B1-12",
  },
  {
    value: "PDU-B1-13",
    label: "PDU-B1-13",
  },
]
 
export function Combobox() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
 
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[250px] justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Search Reports..."}
          <ChevronsUpDown className="opacity-50 size-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder="Search device..." className="h-9" />
          <CommandList>
            <CommandEmpty>No device found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {framework.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}





export function Rules() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="flex flex-col">
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-white sm:static sm:h-auto sm:border-0 sm:bg-transparent dark:bg-neutral-950 py-4">
      
        <Breadcrumb className="hidden md:flex">
          <SidebarTrigger />
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="#" className="text-blue-700 font-bold text-lg">Rules</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="relative ml-auto flex-1 md:grow-0 flex items-center justify-end gap-4">
          <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
              <Button variant="outline" size="default" className="flex items-center gap-2">
                <FontAwesomeIcon icon={faPlus} /> Create New Rule
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle className="text-2xl font-light text-blue-700 text-center py-4">Create New Rule</DrawerTitle>
              </DrawerHeader>

              <Stepper />

                
              </DrawerContent>
            </Drawer>
          <Combobox />
        </div>
        
      </header>
      
      <div className="overflow-hidden ring-1 ring-neutral-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-neutral-200">
          <thead className="bg-white">
            <tr>
              <th scope="col" className="px-4 py-3.5 text-left text-xs text-gray-400 font-normal">
                Name
              </th>
              <th scope="col" className="px-4 py-3.5 text-left text-xs text-gray-400 font-normal">
                Description
              </th>
              <th scope="col" className="px-4 py-3.5 text-xs text-gray-400 font-normal text-right">
                Options
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            
            <tr>
              <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 align-top">
                <p className="text-lg text-gray-800 font-bold">Test</p>
              </td>
              <td className="px-4 py-4 text-base text-gray-800 font-normal legacyBe">
                <div className="flex flex-col gap-1">
                  <div className="text-sm text-gray-600 flex items-center gap-2">
                    Active power (W) on any Branches for "any device"
                  </div>
                  <div className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="text-white bg-blue-600 px-2 py-1 rounded-md">⇞ 0 W</span>
                    <span className="text-white bg-blue-600 px-2 py-1 rounded-md">⤉ 0 W</span>
                    <span className="text-white bg-blue-600 px-2 py-1 rounded-md">⤈ 0 W</span>
                    <span className="text-white bg-blue-600 px-2 py-1 rounded-md">⇟ 0 W</span>
                  </div>
                </div>
              </td>
              <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 align-top">
                <div className="flex items-center gap-2 justify-end">
                  <Button size="default" variant="outline">
                    <Link href="/reports/detail" target="_blank" rel="noopener noreferrer" passHref legacyBehavior>
                      <a target="_blank">
                        <span className="text-gray-800">Generate Report</span>
                      </a>
                    </Link>
                  </Button>
                  
                  <Button size="default" variant="outline"> 
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </Button>
                  <Button size="default" variant="outline">
                    <FontAwesomeIcon icon={faTrashCan} /> 
                  </Button>
                </div>
              </td>
            </tr>
            
          </tbody>
        </table>
        
      </div>
      <br/>

    </div>
  )
}

/* eslint-enable @typescript-eslint/no-unused-vars */