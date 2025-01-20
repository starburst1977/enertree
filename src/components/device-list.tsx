"use client";
import * as React from "react"
import { TopTabs, TopTabsList, TopTabsTrigger } from "@/components/ui/tabs-top"
import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Tally3,
  Tally1,
} from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquareBolt as faSquareBolt } from '@fortawesome/pro-solid-svg-icons'
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from "@/components/ui/breadcrumb";
import {
  SidebarTrigger,
} from "@/components/ui/sidebar"

// Mock data for devices
const devices = [
  {
    id: 1,
    name: "A-34221",
    type: "PDU",
    vendor: "Schleifenbauer BV",
    location: "Unassigned",
    value: 30.88,
    state: "unassigned",
    modules: "Controller",
    phase: true,
    rating: "32 A",
    serial: "58395102",
  },
  {
    id: 2,
    name: "A-34221",
    type: "PDU",
    vendor: "Schleifenbauer BV",
    location: "Unassigned",
    value: 0.67,
    state: "unassigned",
    modules: "Daisy Chain",
    phase: false,
    rating: "16 A",
    serial: "58395102",
  },
  {
    id: 3,
    name: "A-34277",
    type: "PDU",
    vendor: "Schleifenbauer BV",
    location: "RowA_Rack2_A",
    value: 25.0,
    state: "warning",
    modules: "Gateway",
    phase: true,
    rating: "32 A",
    serial: "58395102",
  },
  {
    id: 4,
    name: "APCUPS",
    type: "UPS",
    vendor: "APC",
    location: "RowA_Rack1_A",
    value: 32.0,
    state: "ok",
    modules: "",
    phase: false,
    rating: "",
    serial: "5594-20",
  },
  {
    id: 5,
    name: "DSTE2",
    type: "Sensor Box",
    vendor: "HW Group",
    location: "RowA_Rack1_A",
    value: 0,
    state: "alert",
    modules: "",
    phase: true,
    rating: "",
    serial: "683951",
  },
  {
    id: 6,
    name: "A-81123",
    type: "PDU",
    vendor: "Schleifenbauer BV",
    location: "RowA_Rack1_B",
    value: 30.11,
    state: "ok",
    modules: "Daisy Chain",
    phase: false,
    rating: "16 A",
    serial: "55326546",
  },
  {
    id: 7,
    name: "A-34221",
    type: "PDU",
    vendor: "Schleifenbauer BV",
    location: "RowA_Rack1_C",
    value: 0.67,
    state: "ok",
    modules: "Daisy Chain",
    phase: false,
    rating: "16 A",
    serial: "58395102",
  },
  {
    id: 8,
    name: "A-34277",
    type: "PDU",
    vendor: "Schleifenbauer BV",
    location: "RowA_Rack2_A",
    value: 25.0,
    state: "warning",
    modules: "Gateway",
    phase: true,
    rating: "32 A",
    serial: "58395102",
  },
  {
    id: 9,
    name: "A-34221",
    type: "PDU",
    vendor: "Schleifenbauer BV",
    location: "RowA_Rack1_C",
    value: 0.67,
    state: "ok",
    modules: "Daisy Chain",
    phase: false,
    rating: "16 A",
    serial: "58395102",
  },
  {
    id: 10,
    name: "A-34277",
    type: "PDU",
    vendor: "Schleifenbauer BV",
    location: "RowA_Rack2_A",
    value: 25.0,
    state: "warning",
    modules: "Gateway",
    phase: true,
    rating: "32 A",
    serial: "58395102",
  },
  {
    id: 11,
    name: "A-81123",
    type: "PDU",
    vendor: "Schleifenbauer BV",
    location: "RowA_Rack1_B",
    value: 30.11,
    state: "ok",
    modules: "Daisy Chain",
    phase: false,
    rating: "16 A",
    serial: "55326546",
  },
  {
    id: 12,
    name: "A-34221",
    type: "PDU",
    vendor: "Schleifenbauer BV",
    location: "RowA_Rack1_C",
    value: 0.67,
    state: "ok",
    modules: "Daisy Chain",
    phase: false,
    rating: "16 A",
    serial: "58395102",
  },
  {
    id: 13,
    name: "A-34277",
    type: "PDU",
    vendor: "Schleifenbauer BV",
    location: "RowA_Rack2_A",
    value: 25.0,
    state: "warning",
    modules: "Gateway",
    phase: true,
    rating: "32 A",
    serial: "58395102",
  },
];

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
    
    <TopTabs value={activeType} className="mr-4" onValueChange={(value) => setActiveType(value)}>
      <TopTabsList>
        <TopTabsTrigger value="bothtype">All devices</TopTabsTrigger>
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

export function DeviceListComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [checkedDevices, setCheckedDevices] = useState<Set<number>>(new Set());

  const filteredAndSortedDevices = useMemo(() => {
    return devices
      .filter((device) => {
        const matchesSearch = device.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        const matchesFilter =
          filterType === "all" || device.type === filterType;
        return matchesSearch && matchesFilter;
      })
      .sort((a, b) => {
        if (sortBy === "name") {
          return a.name.localeCompare(b.name);
        } else if (sortBy === "type") {
          return a.type.localeCompare(b.type);
        }
        return 0;
      });
  }, [searchTerm, filterType, sortBy]);

  return (
    <div className="flex min-h-screen mx-auto w-full max-w-screen-2xl flex-col p-4">
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
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow bg-white"
          />
          <Select value={filterType} onValueChange={setFilterType}>
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
          <Select value={sortBy} onValueChange={setSortBy}>
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

      <div className="flex gap-4">
        <div className="flex flex-col gap-2 flex-1">
          {filteredAndSortedDevices.map((device) => (
            
              <div
                key={device.id}
                className={
                  deviceItemColors[device.state as keyof typeof deviceItemColors]
                }>
                
                <div className="flex items-center">
                  <div className="pl-6 py-4">
                    <input 
                      type="checkbox" 
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      checked={checkedDevices.has(device.id)}
                      onChange={(e) => {
                        const newCheckedDevices = new Set(checkedDevices);
                        if (e.target.checked) {
                          newCheckedDevices.add(device.id);
                        } else {
                          newCheckedDevices.delete(device.id);
                        }
                        setCheckedDevices(newCheckedDevices);
                      }}
                    />
                  </div>
                  <div className="pl-6 py-4">
                    <div className="text-base text-black/75 font-bold flex items-center gap-2">
                      <Badge variant="outline" className="text-xs text-blue-600 flex items-center gap-1 px-1.5">
                        <FontAwesomeIcon className="text-blue-600 text-xs" icon={faSquareBolt} /> {Math.random() < 0.5 ? 'A' : 'B'}
                      </Badge>
                      <Link href={`/devices/detail`} >{device.name}</Link>
                    </div>
                    <div className="text-sm text-black/40 flex items-center gap-2">
                      
                      <Link href={`/rack/`}>{device.location}</Link>
                    </div>
                  </div>
                </div>
                
                <div className="pl-2 py-4">
                  <div className="text-base text-black/50">{device.serial}</div>
                  <div className="text-sm text-black/40 dark:text-neutral-400 flex items-center gap-2">
                    
                    
                    {device.type}
                  </div>
                </div>

                <div className="pl-2 py-4">
                  <div className="text-base text-black/50">{device.modules}</div>
                  <div className="text-sm text-black/40 dark:text-neutral-400 flex items-center gap-2">
                    <div className="flex items-center justify-center text-blue-600">
                      1 Ph&nbsp;<span className="text-xs text-neutral-400">|</span>&nbsp;
                      {device.rating}
                    </div>
                  </div>
                </div>

                <div className="col-span-2 px-4 py-4">
                  <div
                      className={cn(
                        deviceBgBarColors[
                          device.state as keyof typeof deviceBarColors
                        ],
                        "rounded-md flex justify-end" // Add minimum width here
                      )}
                    >
                    <div
                      className={cn(
                        deviceBarColors[
                          device.state as keyof typeof deviceBarColors
                        ],
                        "whitespace-nowrap py-2 rounded-md text-right px-4 text-lg flex items-center justify-end",
                        "min-w-[2rem] font-bold" // Add minimum width here
                      )}
                      style={{ 
                        width: `${Math.max(Math.min(device.value, 100), 16)}%`  // 16% is roughly 4rem of 25rem
                      }}
                    >
                      {device.value.toFixed(1)} A
                    </div>
                  </div>
                </div>
              </div>
          ))}
        </div>
        {checkedDevices.size > 0 && (
          <div className="flex flex-col gap-2 border-l border-gray-200 p-2 pl-4 pr-0">
            <Button size="default" variant="outline">
              <span className="sm:whitespace-nowrap">
                Apply Settings Profile
              </span>
            </Button>
            <Button size="default" variant="outline">
              <span className="sm:whitespace-nowrap">
                Apply Switch Profile
              </span>
            </Button>
            <Button size="default" variant="outline">
              <span className="sm:whitespace-nowrap">
                Firmware update
              </span>
            </Button>
            <Button size="default" variant="outline">
              <span className="sm:whitespace-nowrap">
                Perform Self Test
              </span>
            </Button>
          </div>
        )}
      </div>
      {filteredAndSortedDevices.length === 0 && (
        <p className="text-center text-neutral-500 mt-4 dark:text-neutral-400">
          No devices found.
        </p>
      )}
    </div>
  );
}
