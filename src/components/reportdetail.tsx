/* eslint-disable @typescript-eslint/no-unused-vars */

"use client"

import { useState, ReactNode } from 'react'
import * as React from "react"
import { Card } from "@/components/ui/card"
import { DatePickerWithRange } from "./reports"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
import { faChartLine } from '@fortawesome/pro-solid-svg-icons'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload, faFileExport, faEnvelopeOpenText } from '@fortawesome/pro-solid-svg-icons'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

 
export function DropdownMenuCheckboxes() {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
  const [showPanel, setShowPanel] = React.useState<Checked>(false)
 
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <FontAwesomeIcon icon={faChartLine} className="mr-2" />
          Select sources
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Data sources</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          Status Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showActivityBar}
          onCheckedChange={setShowActivityBar}
          disabled
        >
          Activity Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showPanel}
          onCheckedChange={setShowPanel}
        >
          Panel
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

type Checked = DropdownMenuCheckboxItemProps["checked"]

// Dummy data for demonstration
const data = [
  { timestamp: '00:00', value: 400 },
  { timestamp: '01:00', value: 300 },
  { timestamp: '02:00', value: 600 },
  { timestamp: '03:00', value: 500 },
  { timestamp: '04:00', value: 700 },
  { timestamp: '05:00', value: 400 },
  { timestamp: '06:00', value: 300 },
]

export function ReportDetail() {
  const [showLegend, setShowLegend] = React.useState(true)
  const [showMinMax, setShowMinMax] = React.useState(false)

  return (
    <div className="flex flex-col h-full">
      {/* Options Header */}
      <div className="sticky top-0 z-10 bg-white border-b">
        <div className="p-4 flex justify-between items-center print:hidden">
          <div className="flex items-center gap-4">
            <DatePickerWithRange />
            <Select defaultValue="15m">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select interval" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="15m">Group by hours</SelectItem>
                <SelectItem value="1h">Group by days</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">Pivot</Button>
            <div className="flex items-center space-x-2">
              <Switch
                id="show-legend"
                checked={showLegend}
                onCheckedChange={setShowLegend}
              />
              <Label htmlFor="show-legend">Show Legend</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                id="show-minmax"
                checked={showMinMax}
                onCheckedChange={setShowMinMax}
              />
              <Label htmlFor="show-minmax">Show Min/Max</Label>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="outline">
              <FontAwesomeIcon icon={faDownload} className="mr-2" />
              Download as XSL
            </Button>
            <Button variant="outline">
              <FontAwesomeIcon icon={faFileExport} className="mr-2" />
              Print your Report
            </Button>
          </div>
        </div>
      </div>

      {/* Chart Area */}
      <div className="flex items-center justify-center pt-16 pb-8">
        <h1 className="text-2xl font-bold">Report for strom - 1/1/2025, 12:00:00 AM to 1/2/2025, 11:59:59 PM</h1>
      </div>
      <div className="flex-grow p-4">
        <Card className="p-4 h-[500px]">
          <div className="flex p-4 gap-2 items-center text-sm">
            <DropdownMenuCheckboxes />
            <div className="flex items-center gap-2 text-sm border border-blue-600 rounded-md px-4 h-9">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Daisy Chain PDU #1
            </div>
            <div className="flex items-center gap-2 text-sm border border-pink-600 rounded-md px-4 h-9">
              <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
              Daisy Chain PDU #3
            </div>
            <div className="flex items-center gap-2 text-sm border border-green-600 rounded-md px-4 h-9">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              Daisy Chain PDU #12
            </div>
            <div className="flex items-center gap-2 text-sm border border-yellow-600 rounded-md px-4 h-9">
              <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
              Daisy Chain PDU #19
            </div>
          </div>
          <ResponsiveContainer width="100%" height="85%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="timestamp" />
              <YAxis />
              <Tooltip />
              {showLegend && <Legend />}
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#2563eb" 
                name="Power Usage (W)"
              />
              {showMinMax && (
                <>
                  <Line
                    type="monotone"
                    dataKey={(data) => data.value - 50}
                    stroke="#dc2626"
                    name="Min"
                    strokeDasharray="3 3"
                  />
                  <Line
                    type="monotone"
                    dataKey={(data) => data.value + 50}
                    stroke="#16a34a"
                    name="Max"
                    strokeDasharray="3 3"
                  />
                </>
              )}
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Data Table */}
      <div className="p-4">
        <Card className="overflow-hidden">
          <table className="min-w-full divide-y divide-neutral-200">
            <thead className="bg-neutral-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Timestamp
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Value
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Min
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Max
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Average
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-neutral-200">
              {data.map((row, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900">
                    {row.timestamp}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900">
                    {row.value}W
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900">
                    {row.value - 50}W
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900">
                    {row.value + 50}W
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900">
                    {row.value}W
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  )
} 

/* eslint-enable @typescript-eslint/no-unused-vars */