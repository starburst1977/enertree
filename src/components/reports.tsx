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
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import {
  SidebarTrigger,
} from "@/components/ui/sidebar"
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





export function Reports() {
  return (
    <div className="flex flex-col">
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-white sm:static sm:h-auto sm:border-0 sm:bg-transparent dark:bg-neutral-950 py-4">
      
        <Breadcrumb className="hidden md:flex">
          <SidebarTrigger />
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="#" className="text-blue-700 font-bold text-lg">Reports</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="relative ml-auto flex-1 md:grow-0 flex items-center justify-end gap-4">
          <Button variant="outline" size="default" className="flex items-center gap-2">
            <FontAwesomeIcon icon={faPlus} /> Create New Report
          </Button>
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
              <th scope="col" className="px-4 py-3.5  text-xs text-gray-400 font-normal text-right">
                Options
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            <tr>
              <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 align-top">
                <p className="text-lg text-gray-800 font-bold">Test</p>
              </td>
              <td className="px-4 py-4 text-base text-gray-800 font-normal">
                <div className="text-sm text-gray-600 flex items-center gap-2">
                  <span className="text-white bg-blue-600 px-2 py-1 rounded-md">VA</span>
                  Apparent power (VA) on any Inlets for "any PDU" 
                </div>
              </td>
              
              <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 align-top">
                <div className="flex items-center gap-2 justify-end">
                  <Button size="default" variant="outline">
                    <span className="text-gray-800">Generate Report</span>
                  </Button>
                  
                  <Button size="default" variant="outline">
                    <FontAwesomeIcon icon={faEnvelopeOpenText} /> 
                  </Button>
                  <Button size="default" variant="outline">
                    <FontAwesomeIcon icon={faTrashCan} /> 
                  </Button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 align-top">
                <p className="text-lg text-gray-800 font-bold">Custom Power</p>
              </td>
              <td className="px-4 py-4 text-base text-gray-800 font-normal">
                <div className="flex flex-col gap-1">
                  <div className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="text-white bg-blue-600 px-2 py-1 rounded-md">W</span>
                    null for Donau 'Active power (W)'
                  </div>
                  <div className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="text-white bg-blue-600 px-2 py-1 rounded-md">W</span>
                    null for Reihe 1 li 'Active power (W)'
                  </div>
                </div>
              </td>
              <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 align-top">
                <div className="flex items-center gap-2 justify-end">
                  <Button size="default" variant="outline">
                    <span className="text-gray-800">Generate Report</span>
                  </Button>
                  
                  <Button size="default" variant="outline">
                    <FontAwesomeIcon icon={faEnvelopeOpenText} /> 
                  </Button>
                  <Button size="default" variant="outline">
                    <FontAwesomeIcon icon={faTrashCan} /> 
                  </Button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 align-top">
                <p className="text-lg text-gray-800 font-bold">RZ PDU temps</p>
              </td>
              <td className="px-4 py-4 text-base text-gray-800 font-normal">
                <div className="flex flex-col gap-1">
                  <div className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="text-white bg-blue-600 px-2 py-1 rounded-md">ºC</span>
                    Temperature (ºC) on Sensors 'Temperature 1' for PDU 'PDU-B1-4'
                  </div>
                  <div className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="text-white bg-blue-600 px-2 py-1 rounded-md">ºC</span>
                    Temperature (ºC) on Sensors 'Temperature 1' for PDU "PDU-K1-2'
                  </div>
                  <div className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="text-white bg-blue-600 px-2 py-1 rounded-md">ºC</span>
                    Temperature (ºC) on Sensors 'Temperature 1' for PDU "PDU-K6-1'
                  </div>
                  <div className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="text-white bg-blue-600 px-2 py-1 rounded-md">ºC</span>
                    Temperature (ºC) on Sensors 'Temperature 1' for PDU "PDU-K6-1'
                  </div>
                </div>
              </td>
              <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 align-top">
                <div className="flex items-center gap-2 justify-end">
                  <Button size="default" variant="outline">
                    <span className="text-gray-800">Generate Report</span>
                  </Button>
                  
                  <Button size="default" variant="outline">
                    <FontAwesomeIcon icon={faEnvelopeOpenText} /> 
                  </Button>
                  <Button size="default" variant="outline">
                    <FontAwesomeIcon icon={faTrashCan} /> 
                  </Button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 align-top">
                <p className="text-lg text-gray-800 font-bold">Test</p>
              </td>
              <td className="px-4 py-4 text-base text-gray-800 font-normal">
                <div className="text-sm text-gray-600 flex items-center gap-2">
                  <span className="text-white bg-blue-600 px-2 py-1 rounded-md">VA</span>
                  Apparent power (VA) on any Inlets for "any PDU" 
                </div>
              </td>
              
              <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 align-top">
                <div className="flex items-center gap-2 justify-end">
                  <Button size="default" variant="outline">
                    <span className="text-gray-800">Generate Report</span>
                  </Button>
                  
                  <Button size="default" variant="outline">
                    <FontAwesomeIcon icon={faEnvelopeOpenText} /> 
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