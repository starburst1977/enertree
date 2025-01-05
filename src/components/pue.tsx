/* eslint-disable @typescript-eslint/no-unused-vars */

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { ChevronLeft, ChevronRight, Search } from "lucide-react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb"
import { SidebarTrigger } from "@/components/ui/sidebar"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

// Helper function to get days in a month
const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate()
}

// Helper function to format date as DD.MM.YYYY
const formatDate = (date: Date) => {
  return date.toLocaleDateString('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })
}

export function PUE() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [searchQuery, setSearchQuery] = useState("")

  // Generate days for the current month
  const daysInMonth = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth())
  const days = Array.from({ length: daysInMonth }, (_, i) => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i + 1)
    return {
      date: formatDate(date),
      pue: (1 + Math.random() * 0.5).toFixed(2), // Random PUE value between 1 and 1.5
    }
  })

  const handlePreviousMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))
  }

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))
  }

  // Add this function to check if a date is today
  const isToday = (dateStr: string) => {
    const today = formatDate(new Date())
    return dateStr === today
  }

  return (
    <div className="flex min-h-screen mx-auto w-full max-w-screen-2xl flex-col px-6 py-4">
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-white sm:static sm:h-auto sm:border-0 sm:bg-transparent dark:bg-neutral-950">
      
        <Breadcrumb className="hidden md:flex">
          <SidebarTrigger />
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="#" className="text-blue-700 font-bold text-lg">PUE</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="relative ml-auto flex-1 md:grow-0 flex items-center justify-end gap-4">
          
        </div>
        
      </header>

      {/* Month Navigation */}
      <div className="py-4 flex items-center justify-between">
        <Button variant="outline" onClick={handlePreviousMonth}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <div className="flex items-center gap-2">
          <Select
            value={currentDate.getMonth().toString()}
            onValueChange={(value) => {
              const newDate = new Date(currentDate)
              newDate.setMonth(parseInt(value))
              setCurrentDate(newDate)
            }}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue>
                {currentDate.toLocaleString('default', { month: 'long' })}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: 12 }, (_, i) => (
                <SelectItem key={i} value={i.toString()}>
                  {new Date(2024, i).toLocaleString('default', { month: 'long' })}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={currentDate.getFullYear().toString()}
            onValueChange={(value) => {
              const newDate = new Date(currentDate)
              newDate.setFullYear(parseInt(value))
              setCurrentDate(newDate)
            }}
          >
            <SelectTrigger className="w-[120px]">
              <SelectValue>{currentDate.getFullYear()}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: 5 }, (_, i) => (
                <SelectItem key={i} value={(2024 - 2 + i).toString()}>
                  {2024 - 2 + i}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button variant="outline" onClick={handleNextMonth}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Table */}
      <div className="">
        <Card className="overflow-hidden">
          <table className="min-w-full divide-y divide-neutral-200">
            <thead className="bg-neutral-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase text-right">
                  IT Power (kW)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase">
                  Total Power (kW)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase">
                  PUE
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-neutral-200">
              {days.map((day) => (
                <tr 
                  key={day.date}
                  className={isToday(day.date) ? "bg-blue-50/50" : ""}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900">
                    {day.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900 text-right">
                    {(parseFloat(day.pue) * 1000).toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900">
                    <Input
                      type="number"
                      defaultValue="0"
                      className="w-48 bg-white"
                      step="1"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900">
                    <Badge variant="outline" className="text-md">
                      No Data
                    </Badge>
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