"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

// Mock data for devices
const devices = [
  {
    id: 1,
    name: "PX3-482",
    type: "PDU",
    vendor: "Raritan Inc.",
    location: "Schnaitsee",
    value: 30.88,
    state: "ok",
  },
  {
    id: 2,
    name: "PX3-484",
    type: "PDU",
    vendor: "Schleifenbauer BV",
    location: "Default",
    value: 0.67,
    state: "ok",
  },
  {
    id: 3,
    name: "real PDU 3.6.1",
    type: "PDU",
    vendor: "Raritan Inc.",
    location: "Labor",
    value: 25.0,
    state: "warning",
  },
  {
    id: 4,
    name: "APCUPS",
    type: "UPS",
    vendor: "APC",
    location: "Labor",
    value: 32.0,
    state: "ok",
  },
  {
    id: 5,
    name: "DSTE2",
    type: "Sensor Box",
    vendor: "HW Group",
    location: "Default",
    value: 0,
    state: "alert",
  },
  {
    id: 6,
    name: "EPC-8225",
    type: "PDU",
    vendor: "Gude",
    location: "Labor",
    value: 30.11,
    state: "ok",
  },
];

const deviceItemColors = {
  ok: "border border-gray-200 bg-white text-lime-800 rounded-lg grid grid-cols-4",
  warning: "border border-gray-200 bg-white text-yellow-800 rounded-lg grid grid-cols-4",
  alert: "border-2 border-red-400 bg-white text-red-800 rounded-lg grid grid-cols-4",
};

const deviceBgBarColors = {
  ok: "bg-lime-400/35",
  warning: "bg-yellow-400/35",
  alert: "bg-red-400/25",
};

const deviceBarColors = {
  ok: "bg-lime-400 text-black/80",
  warning: "bg-yellow-400 text-black/80",
  alert: "bg-red-400 text-black/80",
};

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
      <div className="mb-4 flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4">
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
          </SelectContent>
        </Select>
      </div>

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
                    <div className="text-base text-black/75 font-bold">
                    <Link href={`/devices/detail`} >{device.name}</Link>
                    </div>
                    <div className="text-sm text-black/40">{device.location}</div>
                  </div>
                </div>
                <div className="pl-6 py-4">
                  <div className="text-base text-black/50">{device.vendor}</div>
                  <div className="text-sm text-black/40 dark:text-neutral-400">
                    {device.type}
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
