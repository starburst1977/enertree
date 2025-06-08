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
import { faTriangle as faTriangle, faCircle as faCircle, faDiamonds4 as faDiamonds4 } from '@fortawesome/pro-solid-svg-icons'
import { faCircleDot as faCircleDot, faCircleSmall as faCircleSmall, faEye as faEye, faBell as faBell, faBellSlash as faBellSlash, faDiamond as faDiamond } from '@fortawesome/pro-solid-svg-icons'
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
            : "Select device or location..."}
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


 
export function ToggleGroupType() {
  const [activeType, setActiveType] = React.useState("bothtype");
  return (
    <TopTabs className="rounded"  value={activeType} onValueChange={(value) => setActiveType(value)}>
      <TopTabsList>
        <TopTabsTrigger value="bothtype">All</TopTabsTrigger>
        <TopTabsTrigger value="alert"><FontAwesomeIcon className="text-blue-600" size="sm" icon={faDiamond} /></TopTabsTrigger>
        <TopTabsTrigger value="alert"><FontAwesomeIcon className="text-yellow-600" size="sm" icon={faTriangle} /></TopTabsTrigger>
        <TopTabsTrigger value="warning"><FontAwesomeIcon className="text-red-600" size="sm" icon={faCircle} /></TopTabsTrigger>
        <TopTabsTrigger value="critical"><FontAwesomeIcon className="text-red-900" size="sm" icon={faDiamonds4} /></TopTabsTrigger>
      </TopTabsList>
    </TopTabs>
    
  )
}

export function ToggleGroupState() {
  const [activeState, setActiveState] = React.useState("bothstate");
  return (
    
    <TopTabs className=""  value={activeState} onValueChange={(value) => setActiveState(value)}>
      <TopTabsList>
        <TopTabsTrigger value="bothstate">Both</TopTabsTrigger>
        <TopTabsTrigger value="alert"><FontAwesomeIcon className="text-gray-600" size="sm" icon={faBell} /></TopTabsTrigger>
        <TopTabsTrigger value="warning"><FontAwesomeIcon className="text-gray-600" size="sm" icon={faBellSlash} /></TopTabsTrigger>
      </TopTabsList>
    </TopTabs>
    
  )
}


export function Audit() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row bg-fuchsia-600 border rounded-lg px-4 py-2 text-white mt-4">
        <div className="flex flex-row gap-4 items-center">
          <FontAwesomeIcon className="text-white animate-pulse" size="sm" icon={faDiamonds4} />
          <a href="#" className="text-fuchsia-100 text-sm hover:underline"><span className="font-bold text-white">Critical alert</span>. Click here for details.</a>

        </div>
      </div>
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-white sm:static sm:h-auto sm:border-0 sm:bg-transparent dark:bg-neutral-950 py-4">
      
        <Breadcrumb className="hidden md:flex">
          <SidebarTrigger />
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="#" className="text-blue-700 font-bold text-lg">Audit Log</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="relative ml-auto flex-1 md:grow-0 flex items-center justify-end gap-4">
          <div className="flex flex-row gap-2 items-center">
            <ToggleGroupType />
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option-one">Show all</SelectItem>
                  <SelectItem value="option-two">PDU-related</SelectItem>
                  <SelectItem value="option-three">Device connection</SelectItem>
                  <SelectItem value="option-four">UPS</SelectItem>
                  <SelectItem value="option-five">Login / Logout</SelectItem>
                  <SelectItem value="option-six">Thresholds</SelectItem>
                </SelectContent>
              </Select>
          </div>
          
          <DatePickerWithRange />
          <Combobox />
        </div>
        
      </header>
      
      <div className="overflow-hidden ring-1 ring-neutral-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-neutral-200">
          <thead className="bg-white">
            <tr>
              <th scope="col" className="px-4 py-3.5 text-left text-xs text-gray-400 font-normal">
                Time
              </th>
              <th scope="col" className="px-4 py-3.5 text-left text-xs text-gray-400 font-normal">
                Location
              </th>
              <th scope="col" className="py-3.5 px-2 text-left text-xs text-gray-400 font-normal">
                Severity
              </th>
              
              <th scope="col" className="px-4 py-3.5 text-left text-xs text-gray-400 font-normal">
                Description
              </th>
              
              
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            <tr>
              <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                <p className="text-md text-gray-600">12:07:04</p>
                <p className="text-xs text-gray-400">26/11/2024 </p>
              </td>
              <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                <p className="text-md text-gray-600"><Link href="devices/detail">A 93512</Link></p>
                <p className="text-xs text-gray-400"><Link href="rack/">RowA_Rack1_A</Link></p>
              </td>
              <td className="whitespace-nowrap py-2 px-4 text-sm font-medium text-gray-900">
                <div className="w-12 flex-shrink-0 h-12 flex items-center justify-center rounded-full bg-blue-100">
                  <FontAwesomeIcon className="text-blue-600" icon={faDiamond} />
                </div>
              </td>
              
              <td className="px-4 py-4 text-base text-gray-800 font-normal">
              The connection to the Schleifenbauer PDU, PMC or EMX at the IP address &quot;https://192.168.33.250&quot; is now started.
              </td>
              
              
            </tr>
            <tr>
              <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                <p className="text-md text-gray-600">12:07:04</p>
                <p className="text-xs text-gray-400">26/11/2024 </p>
              </td>
              <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                <p className="text-md text-gray-600"><Link href="devices/detail">A 81549</Link></p>
                <p className="text-xs text-gray-400"><Link href="rack/">RowA_Rack1_A</Link></p>
              </td>
              <td className="whitespace-nowrap py-2 px-4 text-sm font-medium text-gray-900">
                <div className="w-12 flex-shrink-0 h-12 flex items-center justify-center rounded-full bg-fuchsia-100 relative">
                  <FontAwesomeIcon className="text-fuchsia-800" icon={faDiamonds4} />
                  <div className="w-12 h-12 absolute top-0 left-0 border-2 border-fuchsia-400 rounded-full animate-pulse"></div>
                </div>
              </td>
              
              <td className="px-4 py-4 text-base text-gray-800 font-normal">
                Thats not good. We have a critical alert.
              </td>
              
              
            </tr>
            <tr>
              <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                <p className="text-md text-gray-600">12:07:04</p>
                <p className="text-xs text-gray-400">26/11/2024 </p>
              </td>
              <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                <p className="text-md text-gray-600"><Link href="devices/detail">A 27781</Link></p>
                <p className="text-xs text-gray-400"><Link href="rack/">RowA_Rack1_A</Link></p>
              </td>
              <td className="whitespace-nowrap py-2 px-4 text-sm font-medium text-gray-900">
                <div className="w-12 flex-shrink-0 h-12 flex items-center justify-center rounded-full bg-red-100">
                  <FontAwesomeIcon className="text-red-600" icon={faCircle} />
                </div>
              </td>
              
              <td className="px-4 py-4 text-base text-gray-800 font-normal">
                The Schleifenbauer device &quot;real PDU 3.6.1&quot;, sensor &quot;Presence Detector 1&quot; for slot 1 is in an alarmed state.
              </td>
              
              
            </tr>
            <tr>
              <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                <p className="text-md text-gray-600">12:07:04</p>
                <p className="text-xs text-gray-400">26/11/2024 </p>
              </td>
              <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                <p className="text-md text-gray-600"><Link href="devices/detail">A 43325</Link></p>
                <p className="text-xs text-gray-400"><Link href="rack/">RowA_Rack1_A</Link></p>
              </td>
              <td className="whitespace-nowrap py-2 px-4 text-sm font-medium text-gray-900">
                <div className="w-12 flex-shrink-0 h-12 flex items-center justify-center rounded-full bg-blue-100">
                  <FontAwesomeIcon className="text-blue-600" icon={faDiamond} />
                </div>
              </td>
              
              <td className="px-4 py-4 text-base text-gray-800 font-normal">
              The connection to the Schleifenbauer PDU, PMC or EMX at the IP address &quot;https://192.168.33.250&quot; is now started.
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                <p className="text-md text-gray-600">18:07:04</p>
                <p className="text-xs text-gray-400">26/11/2024 </p>
              </td>
              <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                <p className="text-md text-gray-600"><Link href="devices/detail">A 36142</Link></p>
                <p className="text-xs text-gray-400"><Link href="rack/">RowA_Rack1_A</Link></p>
              </td>
              <td className="whitespace-nowrap py-2 px-4 text-sm font-medium text-gray-900">
                <div className="w-12 flex-shrink-0 h-12 flex items-center justify-center rounded-full bg-red-100">
                  <FontAwesomeIcon className="text-red-600" icon={faCircle} />
                </div>
              </td>
              
              <td className="px-4 py-4 text-base text-gray-800 font-normal">
                Value of 200.00 at inlet &quot;total&quot; (1) has exceeded the warning threshold of 180.00 via rule &quot;Schieflast&quot; for PDU &quot;real PDU 3.6.1&quot;.
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                <p className="text-md text-gray-600">11:44:04</p>
                <p className="text-xs text-gray-400">26/11/2024 </p>
              </td>
              <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                <p className="text-md text-gray-600"><Link href="devices/detail">A 22481</Link></p>
                <p className="text-xs text-gray-400"><Link href="rack/">RowA_Rack1_A</Link></p>
              </td>
              <td className="whitespace-nowrap py-2 px-4 text-sm font-medium text-gray-900">
                <div className="w-12 flex-shrink-0 h-12 flex items-center justify-center rounded-full bg-red-100">
                  <FontAwesomeIcon className="text-red-600" icon={faCircle} />
                </div>
              </td>
              
              <td className="px-4 py-4 text-base text-gray-800 font-normal">
              The device &quot;192.168.33.223&quot; could not connect, it will be retried.
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                <p className="text-md text-gray-600">11:44:04</p>
                <p className="text-xs text-gray-400">26/11/2024 </p>
              </td>
              <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                <p className="text-md text-gray-600"><Link href="devices/detail">A 18873</Link></p>
                <p className="text-xs text-gray-400"><Link href="rack/">RowA_Rack1_A</Link></p>
              </td>
              <td className="whitespace-nowrap py-2 px-4 text-sm font-medium text-gray-900">
                <div className="w-12 flex-shrink-0 h-12 flex items-center justify-center rounded-full bg-red-100">
                  <FontAwesomeIcon className="text-red-600" icon={faCircle} />
                </div>
              </td>
              
              <td className="px-4 py-4 text-base text-gray-800 font-normal">
              The device at the IP address &quot;192.168.33.249&quot; has not responded to an SNMP request. Perhaps the Community or IP address is incorrect. Om7Sense Gateway will try to poll the device again in several minutes.
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                <p className="text-md text-gray-600">12:07:04</p>
                <p className="text-xs text-gray-400">26/11/2024 </p>
              </td>
              <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                <p className="text-md text-gray-600"><Link href="devices/detail">A 05842</Link></p>
                <p className="text-xs text-gray-400"><Link href="rack/">RowA_Rack1_A</Link></p>
              </td>
              <td className="whitespace-nowrap py-2 px-4 text-sm font-medium text-gray-900">
                <div className="w-12 flex-shrink-0 h-12 flex items-center justify-center rounded-full bg-blue-100">
                  <FontAwesomeIcon className="text-blue-600" icon={faDiamond} />
                </div>
              </td>
              
              <td className="px-4 py-4 text-base text-gray-800 font-normal">
              The connection to the Schleifenbauer PDU, PMC or EMX at the IP address &quot;https://192.168.33.250&quot; is now started.
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                <p className="text-md text-gray-600">12:07:04</p>
                <p className="text-xs text-gray-400">26/11/2024 </p>
              </td>
              <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                
              </td>
              <td className="whitespace-nowrap py-2 px-4 text-sm font-medium text-gray-900">
                <div className="w-12 flex-shrink-0 h-12 flex items-center justify-center rounded-full bg-yellow-100">
                  <FontAwesomeIcon className="text-yellow-600" icon={faTriangle} />
                </div>
              </td>
              
              <td className="px-4 py-4 text-base text-gray-800 font-normal">
              Unsuccessful login attempt into Om7Sense Gateway as user &quot;admin&quot; from IP address &quot;172.20.0.2&quot;.
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                <p className="text-md text-gray-600">12:07:04</p>
                <p className="text-xs text-gray-400">26/11/2024 </p>
              </td>
              <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                <p className="text-md text-gray-600"><Link href="devices/detail">A 84461</Link></p>
                <p className="text-xs text-gray-400"><Link href="rack/">RowA_Rack1_A</Link></p>
              </td>
              <td className="whitespace-nowrap py-2 px-4 text-sm font-medium text-gray-900">
                <div className="w-12 flex-shrink-0 h-12 flex items-center justify-center rounded-full bg-blue-100">
                  <FontAwesomeIcon className="text-blue-600" icon={faDiamond} />
                </div>
              </td>
              
              <td className="px-4 py-4 text-base text-gray-800 font-normal">
              The connection to the Schleifenbauer PDU, PMC or EMX at the IP address &quot;https://192.168.33.250&quot; is now started.
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-400">
            Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
            <span className="font-medium">97</span> results
          </p>
        </div>
        <div>
          <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md bg-gray-200 p-1">
            <a
              href="#"
              className="relative inline-flex items-center rounded-l-md px-4 py-1 text-gray-400 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeft aria-hidden="true" className="size-4" />
            </a>
            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
            <a
              href="#"
              aria-current="page"
              className="relative z-10 inline-flex items-center bg-white rounded px-4 py-1 text-sm text-blue-700 focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-1 text-sm text-gray-600 focus:z-20 focus:outline-offset-0"
            >
              2
            </a>
            <a
              href="#"
              className="relative hidden items-center px-4 py-1 text-sm text-gray-600 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              3
            </a>
            <span className="relative inline-flex items-center px-4 py-1 text-sm text-gray-600 focus:outline-offset-0">
              ...
            </span>
            <a
              href="#"
              className="relative hidden items-center px-4 py-1 text-sm text-gray-600 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              8
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-1 text-sm text-gray-600 focus:z-20 focus:outline-offset-0"
            >
              9
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-1 text-sm text-gray-600 focus:z-20 focus:outline-offset-0"
            >
              10
            </a>
            <a
              href="#"
              className="relative inline-flex items-center rounded-r-md px-4 py-1 text-gray-400 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <ChevronRight aria-hidden="true" className="size-4" />
            </a>
          </nav>
        </div>
      </div>
    </div>
      </div>
      <br/>

    </div>
  )
}

/* eslint-enable @typescript-eslint/no-unused-vars */