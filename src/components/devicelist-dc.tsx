/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";
import * as React from "react"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Tally3,
  Tally1,
} from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquareBolt as faSquareBolt } from '@fortawesome/pro-solid-svg-icons'
import {
  Search,
} from "lucide-react"
import { TopTabs, TopTabsList, TopTabsTrigger } from "@/components/ui/tabs-top"
import {
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb"
import Link from "next/link"
import {
  Settings,
  Trash2,
  ChevronUp,
  ChevronDown,
  Plus,
} from "lucide-react"

const deviceItemColors = {
  ok: "border border-gray-200 bg-white text-lime-800 rounded-lg grid grid-cols-5",
  warning: "border border-gray-200 bg-white text-yellow-800 rounded-lg grid grid-cols-5",
  alert: "border-2 border-red-400 bg-white text-red-800 rounded-lg grid grid-cols-5",
  unassigned: "border-2 border-blue-400 bg-white text-blue-800 rounded-lg grid grid-cols-5",
};

const deviceBgBarColors = {
  ok: "bg-lime-400/35",
  warning: "bg-yellow-400/35",
  alert: "bg-red-400/25",
  unassigned: "bg-lime-400/25",
};

const deviceBarColors = {
  ok: "bg-lime-400 text-black/80",
  warning: "bg-yellow-400 text-black/80",
  alert: "bg-red-400 text-black/80",
  unassigned: "bg-lime-400 text-black/80",
};

export function ToggleGroupType() {
  const [activeType, setActiveType] = React.useState("bothtype");
  return (
    
    <TopTabs value="assigned" className="mr-4">
      <TopTabsList>
        <TopTabsTrigger value="bothtype"><Link href="/devices">All devices</Link></TopTabsTrigger>
        <TopTabsTrigger value="unassigend" className="flex items-center gap-2">
          Unassigned
          <Badge variant="default">
            4
          </Badge>
        </TopTabsTrigger>
        <TopTabsTrigger value="assigned">
          <Link href="/devices/daisy">Assigned</Link>
        </TopTabsTrigger>
      </TopTabsList>
    </TopTabs>
    
  )
}


export default function DeviceListDCComponent() {

  return (
    <div className="flex min-h-screen mx-auto w-full max-w-screen-2xl flex-col bg-neutral-100/40 dark:bg-neutral-800/40">
      
      <div className="flex flex-col sm:gap-4 sm:py-4">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-white sm:static sm:h-auto sm:border-0 sm:bg-transparent dark:bg-neutral-950 pb-4 px-2">
          <Breadcrumb className="hidden md:flex">
            <SidebarTrigger />
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="#" className="text-blue-700 font-bold text-lg">Device List</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              
            </BreadcrumbList>
          </Breadcrumb>
          
          <div className="relative ml-auto flex-1 md:grow-0 flex items-center justify-end gap-4">
            <div className="flex flex-row gap-2 items-center">
                <div className="text-xs text-neutral-400">Status</div>
                <ToggleGroupType />
              </div>
            <Input
              type="text"
              placeholder="Search devices..."
              className="flex-grow bg-white"
            />
            <Select >
            <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Devices</SelectItem>
                <SelectItem value="PDU">PDUs</SelectItem>
                <SelectItem value="UPS">UPS</SelectItem>
                <SelectItem value="Sensor Box">Sensor Boxes</SelectItem>
              </SelectContent>
            </Select>
            <Select >
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Sort by Name</SelectItem>
                <SelectItem value="type">Sort by Type</SelectItem>
                <SelectItem value="type">Sort by Daisy Chain</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </header>
        <main className="w-full max-w-screen-2xl px-8">
          <div className="flex flex-col gap-0">
            
            <div className="border border-gray-300 bg-white text-lime-800 rounded-lg grid grid-cols-5">
              <div className="flex items-center">
                <div className="pl-6 py-4">
                  <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                </div>
                <div className="pl-6 py-4">
                  <div className="text-base text-black/75 font-bold flex items-center gap-2">
                    <Badge variant="outline" className="text-xs text-blue-600 flex items-center gap-1 px-1.5">
                      <FontAwesomeIcon className="text-blue-600 text-xs" icon={faSquareBolt} /> {Math.random() < 0.5 ? 'A' : 'B'}
                    </Badge>
                    <Link href={`/devices/detail`} >A-34221</Link>
                  </div>
                  <div className="text-sm text-black/40 flex items-center gap-2">
                    <Link href={`/rack/`}>RowA_Rack1_C</Link>
                  </div>
                </div>
              </div>
              <div className="pl-2 py-4">
                <div className="text-base text-black/50">58395102</div>
                <div className="text-sm text-black/40 dark:text-neutral-400 flex items-center gap-2">
                  PDU
                </div>
              </div>
              <div className="pl-2 py-4">
                <div className="text-base text-black/50">Controller</div>
                <div className="text-sm text-black/40 dark:text-neutral-400 flex items-center gap-2">
                  <div className="flex items-center justify-center bg-blue-100 rounded-sm p-1 pr-0.5">
                    <Tally1  className="text-blue-600 size-3" />
                  </div>
                  32 A
                </div>
              </div>
              <div className="col-span-2 px-4 py-4">
                <div className="bg-lime-400/35 rounded-md flex justify-end" >
                  <div className="bg-lime-400 text-black/80 whitespace-nowrap py-2 rounded-md text-right px-4 text-lg flex items-center justify-end" style={{ width: '36%' }} >
                    30.9 A
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-0 border-l-4 border-blue-400 ml-8">
              <div className="">
                <div className="border-l-4 border-blue-400 ml-12 h-4"></div>
              </div>
              <div className="border border-gray-300 bg-white text-lime-800 rounded-lg grid grid-cols-5 ml-4">
                <div className="flex items-center">
                  <div className="pl-6 py-4">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  </div>
                  <div className="pl-6 py-4">
                    <div className="text-base text-black/75 font-bold flex items-center gap-2">
                      <Badge variant="outline" className="text-xs text-blue-600 flex items-center gap-1 px-1.5">
                        <FontAwesomeIcon className="text-blue-600 text-xs" icon={faSquareBolt} /> {Math.random() < 0.5 ? 'A' : 'B'}
                      </Badge>
                      <Link href={`/devices/detail`} >A-34221</Link>
                    </div>
                    <div className="text-sm text-black/40 flex items-center gap-2">
                      <Link href={`/rack/`}>RowA_Rack1_C</Link>
                    </div>
                  </div>
                </div>
                <div className="pl-2 py-4">
                  <div className="text-base text-black/50">58395102</div>
                  <div className="text-sm text-black/40 dark:text-neutral-400 flex items-center gap-2">
                    PDU
                  </div>
                </div>
                <div className="pl-2 py-4">
                  <div className="text-base text-black/50">Daisy Chain</div>
                  <div className="text-sm text-black/40 dark:text-neutral-400 flex items-center gap-2">
                    <div className="flex items-center justify-center bg-blue-100 rounded-sm p-1 pr-0.5">
                      <Tally1  className="text-blue-600 size-3" />
                    </div>
                    32 A
                  </div>
                </div>
                <div className="col-span-2 px-4 py-4">
                  <div className="bg-lime-400/35 rounded-md flex justify-end" >
                    <div className="bg-lime-400 text-black/80 whitespace-nowrap py-2 rounded-md text-right px-4 text-lg flex items-center justify-end" style={{ width: '36%' }} >
                      30.9 A
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="border-l-4 border-blue-400 ml-12 h-4"></div>
              </div>
              
              <div className="border border-gray-300 bg-white text-lime-800 rounded-lg grid grid-cols-5 ml-4">
                <div className="flex items-center">
                  <div className="pl-6 py-4">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  </div>
                  <div className="pl-6 py-4">
                    <div className="text-base text-black/75 font-bold flex items-center gap-2">
                      <Badge variant="outline" className="text-xs text-blue-600 flex items-center gap-1 px-1.5">
                        <FontAwesomeIcon className="text-blue-600 text-xs" icon={faSquareBolt} /> {Math.random() < 0.5 ? 'A' : 'B'}
                      </Badge>
                      <Link href={`/devices/detail`} >A-34221</Link>
                    </div>
                    <div className="text-sm text-black/40 flex items-center gap-2">
                      <Link href={`/rack/`}>RowA_Rack1_C</Link>
                    </div>
                  </div>
                </div>
                <div className="pl-2 py-4">
                  <div className="text-base text-black/50">58395102</div>
                  <div className="text-sm text-black/40 dark:text-neutral-400 flex items-center gap-2">
                    PDU
                  </div>
                </div>
                <div className="pl-2 py-4">
                  <div className="text-base text-black/50">Daisy Chain</div>
                  <div className="text-sm text-black/40 dark:text-neutral-400 flex items-center gap-2">
                    <div className="flex items-center justify-center bg-blue-100 rounded-sm p-1 pr-0.5">
                      <Tally1  className="text-blue-600 size-3" />
                    </div>
                    32 A
                  </div>
                </div>
                <div className="col-span-2 px-4 py-4">
                  <div className="bg-lime-400/35 rounded-md flex justify-end" >
                    <div className="bg-lime-400 text-black/80 whitespace-nowrap py-2 rounded-md text-right px-4 text-lg flex items-center justify-end" style={{ width: '36%' }} >
                      30.9 A
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="border-l-4 border-blue-400 ml-12 h-4"></div>
              </div>
              
              <div className="border border-gray-300 bg-white text-lime-800 rounded-lg grid grid-cols-5 ml-4">
                <div className="flex items-center">
                  <div className="pl-6 py-4">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  </div>
                  <div className="pl-6 py-4">
                    <div className="text-base text-black/75 font-bold flex items-center gap-2">
                      <Badge variant="outline" className="text-xs text-blue-600 flex items-center gap-1 px-1.5">
                        <FontAwesomeIcon className="text-blue-600 text-xs" icon={faSquareBolt} /> {Math.random() < 0.5 ? 'A' : 'B'}
                      </Badge>
                      <Link href={`/devices/detail`} >A-34221</Link>
                    </div>
                    <div className="text-sm text-black/40 flex items-center gap-2">
                      <Link href={`/rack/`}>RowA_Rack1_C</Link>
                    </div>
                  </div>
                </div>
                <div className="pl-2 py-4">
                  <div className="text-base text-black/50">58395102</div>
                  <div className="text-sm text-black/40 dark:text-neutral-400 flex items-center gap-2">
                    PDU
                  </div>
                </div>
                <div className="pl-2 py-4">
                  <div className="text-base text-black/50">Daisy Chain</div>
                  <div className="text-sm text-black/40 dark:text-neutral-400 flex items-center gap-2">
                    <div className="flex items-center justify-center bg-blue-100 rounded-sm p-1 pr-0.5">
                      <Tally1  className="text-blue-600 size-3" />
                    </div>
                    32 A
                  </div>
                </div>
                <div className="col-span-2 px-4 py-4">
                  <div className="bg-lime-400/35 rounded-md flex justify-end" >
                    <div className="bg-lime-400 text-black/80 whitespace-nowrap py-2 rounded-md text-right px-4 text-lg flex items-center justify-end" style={{ width: '36%' }} >
                      30.9 A
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="border-l-4 border-blue-400 ml-12 h-4"></div>
              </div>
              
              <div className="border border-gray-300 bg-white text-lime-800 rounded-lg grid grid-cols-5 ml-4">
                <div className="flex items-center">
                  <div className="pl-6 py-4">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  </div>
                  <div className="pl-6 py-4">
                    <div className="text-base text-black/75 font-bold flex items-center gap-2">
                      <Badge variant="outline" className="text-xs text-blue-600 flex items-center gap-1 px-1.5">
                        <FontAwesomeIcon className="text-blue-600 text-xs" icon={faSquareBolt} /> {Math.random() < 0.5 ? 'A' : 'B'}
                      </Badge>
                      <Link href={`/devices/detail`} >A-34221</Link>
                    </div>
                    <div className="text-sm text-black/40 flex items-center gap-2">
                      <Link href={`/rack/`}>RowA_Rack1_C</Link>
                    </div>
                  </div>
                </div>
                <div className="pl-2 py-4">
                  <div className="text-base text-black/50">58395102</div>
                  <div className="text-sm text-black/40 dark:text-neutral-400 flex items-center gap-2">
                    PDU
                  </div>
                </div>
                <div className="pl-2 py-4">
                  <div className="text-base text-black/50">Daisy Chain</div>
                  <div className="text-sm text-black/40 dark:text-neutral-400 flex items-center gap-2">
                    <div className="flex items-center justify-center bg-blue-100 rounded-sm p-1 pr-0.5">
                      <Tally1  className="text-blue-600 size-3" />
                    </div>
                    32 A
                  </div>
                </div>
                <div className="col-span-2 px-4 py-4">
                  <div className="bg-lime-400/35 rounded-md flex justify-end" >
                    <div className="bg-lime-400 text-black/80 whitespace-nowrap py-2 rounded-md text-right px-4 text-lg flex items-center justify-end" style={{ width: '36%' }} >
                      30.9 A
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="border-r-4 border-blue-400 w-14 border-b-4 h-4"></div>
              </div>
              
            </div>

            <div className="border border-gray-300 bg-white text-lime-800 rounded-lg grid grid-cols-5 mt-4">
              <div className="flex items-center">
                <div className="pl-6 py-4">
                  <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                </div>
                <div className="pl-6 py-4">
                  <div className="text-base text-black/75 font-bold flex items-center gap-2">
                    <Badge variant="outline" className="text-xs text-blue-600 flex items-center gap-1 px-1.5">
                      <FontAwesomeIcon className="text-blue-600 text-xs" icon={faSquareBolt} /> {Math.random() < 0.5 ? 'A' : 'B'}
                    </Badge>
                    <Link href={`/devices/detail`} >A-34221</Link>
                  </div>
                  <div className="text-sm text-black/40 flex items-center gap-2">
                    <Link href={`/rack/`}>RowA_Rack1_C</Link>
                  </div>
                </div>
              </div>
              <div className="pl-2 py-4">
                <div className="text-base text-black/50">58395102</div>
                <div className="text-sm text-black/40 dark:text-neutral-400 flex items-center gap-2">
                  PDU
                </div>
              </div>
              <div className="pl-2 py-4">
                <div className="text-base text-black/50">Controller</div>
                <div className="text-sm text-black/40 dark:text-neutral-400 flex items-center gap-2">
                  <div className="flex items-center justify-center bg-blue-100 rounded-sm p-1 pr-0.5">
                    <Tally1  className="text-blue-600 size-3" />
                  </div>
                  32 A
                </div>
              </div>
              <div className="col-span-2 px-4 py-4">
                <div className="bg-lime-400/35 rounded-md flex justify-end" >
                  <div className="bg-lime-400 text-black/80 whitespace-nowrap py-2 rounded-md text-right px-4 text-lg flex items-center justify-end" style={{ width: '36%' }} >
                    30.9 A
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-0 border-l-4 border-blue-400 ml-8">
              <div className="">
                <div className="border-l-4 border-blue-400 ml-12 h-4"></div>
              </div>
              <div className="border border-gray-300 bg-white text-lime-800 rounded-lg grid grid-cols-5 ml-4">
                <div className="flex items-center">
                  <div className="pl-6 py-4">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  </div>
                  <div className="pl-6 py-4">
                    <div className="text-base text-black/75 font-bold flex items-center gap-2">
                      <Badge variant="outline" className="text-xs text-blue-600 flex items-center gap-1 px-1.5">
                        <FontAwesomeIcon className="text-blue-600 text-xs" icon={faSquareBolt} /> {Math.random() < 0.5 ? 'A' : 'B'}
                      </Badge>
                      <Link href={`/devices/detail`} >A-34221</Link>
                    </div>
                    <div className="text-sm text-black/40 flex items-center gap-2">
                      <Link href={`/rack/`}>RowA_Rack1_C</Link>
                    </div>
                  </div>
                </div>
                <div className="pl-2 py-4">
                  <div className="text-base text-black/50">58395102</div>
                  <div className="text-sm text-black/40 dark:text-neutral-400 flex items-center gap-2">
                    PDU
                  </div>
                </div>
                <div className="pl-2 py-4">
                  <div className="text-base text-black/50">Daisy Chain</div>
                  <div className="text-sm text-black/40 dark:text-neutral-400 flex items-center gap-2">
                    <div className="flex items-center justify-center bg-blue-100 rounded-sm p-1 pr-0.5">
                      <Tally1  className="text-blue-600 size-3" />
                    </div>
                    32 A
                  </div>
                </div>
                <div className="col-span-2 px-4 py-4">
                  <div className="bg-lime-400/35 rounded-md flex justify-end" >
                    <div className="bg-lime-400 text-black/80 whitespace-nowrap py-2 rounded-md text-right px-4 text-lg flex items-center justify-end" style={{ width: '36%' }} >
                      30.9 A
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="border-l-4 border-red-400 ml-12 h-4"></div>
              </div>
              
              <div className="border border-gray-300 bg-white text-lime-800 rounded-lg grid grid-cols-5 ml-4">
                <div className="flex items-center">
                  <div className="pl-6 py-4">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  </div>
                  <div className="pl-6 py-4">
                    <div className="text-base text-black/75 font-bold flex items-center gap-2">
                      <Badge variant="outline" className="text-xs text-blue-600 flex items-center gap-1 px-1.5">
                        <FontAwesomeIcon className="text-blue-600 text-xs" icon={faSquareBolt} /> {Math.random() < 0.5 ? 'A' : 'B'}
                      </Badge>
                      <Link href={`/devices/detail`} >A-34221</Link>
                    </div>
                    <div className="text-sm text-black/40 flex items-center gap-2">
                      <Link href={`/rack/`}>RowA_Rack1_C</Link>
                    </div>
                  </div>
                </div>
                <div className="pl-2 py-4">
                  <div className="text-base text-black/50">58395102</div>
                  <div className="text-sm text-black/40 dark:text-neutral-400 flex items-center gap-2">
                    PDU
                  </div>
                </div>
                <div className="pl-2 py-4">
                  <div className="text-base text-black/50">Daisy Chain</div>
                  <div className="text-sm text-black/40 dark:text-neutral-400 flex items-center gap-2">
                    <div className="flex items-center justify-center bg-blue-100 rounded-sm p-1 pr-0.5">
                      <Tally1  className="text-blue-600 size-3" />
                    </div>
                    32 A
                  </div>
                </div>
                <div className="col-span-2 px-4 py-4">
                  <div className="bg-lime-400/35 rounded-md flex justify-end" >
                    <div className="bg-lime-400 text-black/80 whitespace-nowrap py-2 rounded-md text-right px-4 text-lg flex items-center justify-end" style={{ width: '36%' }} >
                      30.9 A
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="border-r-4 border-blue-400 w-14 border-b-4 h-4"></div>
              </div>
              
            </div>
            
          </div>
        </main>
      </div>
    </div>
  )
}

/* eslint-enable @typescript-eslint/no-unused-vars */