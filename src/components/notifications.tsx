/* eslint-disable @typescript-eslint/no-unused-vars */

"use client"

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
import { faTriangle as faTriangle, faCircle as faCircle } from '@fortawesome/pro-solid-svg-icons'
import { faCircleDot as faCircleDot, faCircleSmall as faCircleSmall, faEye as faEye, faBell as faBell, faBellSlash as faBellSlash } from '@fortawesome/pro-solid-svg-icons'
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
  ChevronRight,
  Eye,
  Bell,
  Check,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { TopTabs, TopTabsList, TopTabsTrigger } from "@/components/ui/tabs-top"

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
          className="w-[300px] justify-between"
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
    <TopTabs className="mr-4"  value={activeType} onValueChange={(value) => setActiveType(value)}>
      <TopTabsList>
        <TopTabsTrigger value="bothtype">Both</TopTabsTrigger>
        <TopTabsTrigger value="alert"><FontAwesomeIcon className="text-yellow-600" size="sm" icon={faTriangle} /></TopTabsTrigger>
        <TopTabsTrigger value="warning"><FontAwesomeIcon className="text-red-600" size="sm" icon={faCircle} /></TopTabsTrigger>
      </TopTabsList>
    </TopTabs>
    
  )
}

export function ToggleGroupState() {
  const [activeState, setActiveState] = React.useState("bothstate");
  return (
    
    <TopTabs className="mr-4"  value={activeState} onValueChange={(value) => setActiveState(value)}>
      <TopTabsList>
        <TopTabsTrigger value="bothstate">Both</TopTabsTrigger>
        <TopTabsTrigger value="alert"><FontAwesomeIcon className="text-gray-600" size="sm" icon={faBell} /></TopTabsTrigger>
        <TopTabsTrigger value="warning"><FontAwesomeIcon className="text-gray-600" size="sm" icon={faBellSlash} /></TopTabsTrigger>
      </TopTabsList>
    </TopTabs>
    
  )
}


export function Example() {
  return (
    <div className="flex flex-col">
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-white sm:static sm:h-auto sm:border-0 sm:bg-transparent dark:bg-neutral-950 py-4">
      
        <Breadcrumb className="hidden md:flex">
          <SidebarTrigger />
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="#" className="text-blue-700 font-bold text-lg">Active Alarms</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="relative ml-auto flex-1 md:grow-0 flex items-center justify-end gap-2">
          <div className="flex flex-row gap-2 items-center">
            <div className="text-xs text-neutral-400">Type</div>
            <ToggleGroupType />
          </div>
          <div className="flex flex-row gap-2 items-center">
            <div className="text-xs text-neutral-400">State</div>
            <ToggleGroupState />
          </div>
          
          
          <Combobox />
        </div>
        
      </header>
      
      <div className="overflow-hidden ring-1 ring-neutral-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-neutral-200">
          <thead className="bg-white">
            <tr>
              <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-xs text-gray-400 font-normal">
                Severity
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-xs text-gray-400 font-normal">
                Description
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-xs text-gray-400 font-normal">
                Time
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-xs text-gray-400 font-normal">
                Location
              </th>
              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6 text-xs text-gray-400 font-normal">
                Acknowledged
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            <tr>
              <td className="whitespace-nowrap py-2 px-4 text-sm font-medium text-gray-900">
                <div className="w-12 flex-shrink-0 h-12 flex items-center justify-center rounded-full bg-yellow-100">
                  <FontAwesomeIcon className="text-yellow-600" icon={faTriangle} />
                </div>
              </td>
              <td className="px-4 py-4 text-lg text-gray-800 font-normal">
                Value of 200.00 at inlet &quot;total&quot; (1) has exceeded the warning threshold of 180.00 via rule &quot;Schieflast&quot; for PDU "real PDU 3.6.1".
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                <p className="text-md text-gray-600">12:07:04</p>
                <p className="text-sm text-gray-400">26/11/2024 </p>
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                <p className="text-md text-gray-600">real PDU 3.6.22</p>
                <p className="text-sm text-gray-400">RowA_Rack1_A</p>
              </td>
              <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap py-2 px-4 text-sm font-medium text-gray-900">
                <div className="w-12 flex-shrink-0 h-12 flex items-center justify-center rounded-full bg-red-100">
                  <FontAwesomeIcon className="text-red-600" icon={faCircle} />
                </div>
              </td>
              <td className="px-4 py-4 text-lg text-gray-800 font-normal">
                The Schleifenbauer device &quot;real PDU 3.6.1&quot;, sensor &quot;Presence Detector 1&quot; for slot 1 is in an alarmed state.
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                <p className="text-md text-gray-600">12:07:04</p>
                <p className="text-sm text-gray-400">26/11/2024 </p>
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                <p className="text-md text-gray-600">real PDU 3.6.1</p>
                <p className="text-sm text-gray-400">RowA_Rack1_ABA</p>
              </td>
              <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                <div className="flex items-center justify-center bg-blue-100 rounded-lg px-3 py-3 gap-x-2">
                  <p className="text-xs text-gray-400/50"><FontAwesomeIcon className="text-gray-500/50" icon={faBell} /></p>
                  <Switch defaultChecked />
                  <p className="text-xs text-gray-400"><FontAwesomeIcon className="text-blue-700" icon={faBellSlash} /></p>
                </div>
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap py-2 px-4 text-sm font-medium text-gray-900">
                <div className="w-12 flex-shrink-0 h-12 flex items-center justify-center rounded-full bg-red-100">
                  <FontAwesomeIcon className="text-red-600" icon={faCircle} />
                </div>
              </td>
              <td className="px-4 py-4 text-lg text-gray-800 font-normal">
                Value of 200.00 at inlet &quot;total&quot; (1) has exceeded the warning threshold of 180.00 via rule &quot;Schieflast&quot; for PDU "real PDU 3.6.1".
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                <p className="text-md text-gray-600">12:07:04</p>
                <p className="text-sm text-gray-400">26/11/2024 </p>
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                <p className="text-md text-gray-600">real PDU 3.6.1</p>
                <p className="text-sm text-gray-400">RowA_Rack1_A</p>
              </td>
              <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                <div className="flex items-center justify-center bg-gray-100 rounded-lg px-2 py-2 gap-x-2">
                  <p className="text-xs text-gray-400"><FontAwesomeIcon className="text-red-700" icon={faBell} /></p>
                    <Switch />
                  <p className="text-xs text-gray-400"><FontAwesomeIcon className="text-gray-500/50" icon={faBellSlash} /></p>
                </div>
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap py-2 px-4 text-sm font-medium text-gray-900">
                <div className="w-12 flex-shrink-0 h-12 flex items-center justify-center rounded-full bg-red-100">
                  <FontAwesomeIcon className="text-red-600" icon={faCircle} />
                </div>
              </td>
              <td className="px-4 py-4 text-lg text-gray-800 font-normal">
              The device &quot;192.168.33.223&quot; could not connect, it will be retried.
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                <p className="text-md text-gray-600">11:44:04</p>
                <p className="text-sm text-gray-400">26/11/2024 </p>
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                <p className="text-md text-gray-600">real PDU 3.6.1</p>
                <p className="text-sm text-gray-400">RowA_Rack1_A</p>
              </td>
              <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                <div className="flex items-center justify-center bg-gray-100 rounded-lg px-2 py-2 gap-x-2">
                  <p className="text-xs text-gray-400"><FontAwesomeIcon className="text-red-700" icon={faBell} /></p>
                  <Switch />
                  <p className="text-xs text-gray-400"><FontAwesomeIcon className="text-gray-500/50" icon={faBellSlash} /></p>
                </div>
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap py-2 px-4 text-sm font-medium text-gray-900">
                <div className="w-12 flex-shrink-0 h-12 flex items-center justify-center rounded-full bg-red-100">
                  <FontAwesomeIcon className="text-red-600" icon={faCircle} />
                </div>
              </td>
              <td className="px-4 py-4 text-lg text-gray-800 font-normal">
              The device at the IP address &quot;192.168.33.249&quot; has not responded to an SNMP request. Perhaps the Community or IP address is incorrect. Om7Sense Gateway will try to poll the device again in several minutes.
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                <p className="text-md text-gray-600">11:44:04</p>
                <p className="text-sm text-gray-400">26/11/2024 </p>
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                <p className="text-md text-gray-600">real PDU 3.6.1</p>
                <p className="text-sm text-gray-400">RowA_Rack1_A</p>
              </td>
              <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                <div className="flex items-center justify-center bg-gray-100 rounded-lg px-2 py-2 gap-x-2">
                  <p className="text-xs text-gray-400"><FontAwesomeIcon className="text-red-700" icon={faBell} /></p>
                  <Switch />
                  <p className="text-xs text-gray-400"><FontAwesomeIcon className="text-gray-500/50" icon={faBellSlash} /></p>
                </div>
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap py-2 px-4 text-sm font-medium text-gray-900">
                <div className="w-12 flex-shrink-0 h-12 flex items-center justify-center rounded-full bg-yellow-100">
                  <FontAwesomeIcon className="text-yellow-600" icon={faTriangle} />
                </div>
              </td>
              <td className="px-4 py-4 text-lg text-gray-800 font-normal">
              Unsuccessful login attempt into Om7Sense Gateway as user &quot;admin&quot; from IP address &quot;172.20.0.2&quot;.
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                <p className="text-md text-gray-600">12:07:04</p>
                <p className="text-sm text-gray-400">26/11/2024 </p>
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                
              </td>
              <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
}

/* eslint-enable @typescript-eslint/no-unused-vars */