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
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts'


export function Page404() {
  return (
    <div className="flex min-h-screen mx-auto w-full max-w-screen-2xl flex-col px-6 py-4">
      
      <div className="">
        <div className="container min-h-screen px-6 py-12">
          <div className="relative w-full mt-12 flex flex-col items-center justify-center">
            <svg width="514" height="164" viewBox="0 0 514 164" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="8.74228e-08" y1="1" x2="513" y2="1.00004" stroke="#ddd" stroke-width="2"/>
            <line x1="-8.74228e-08" y1="163" x2="513" y2="163" stroke="#ddd" stroke-width="2"/>
              <path d="M1 102C1 90.9543 9.9543 82 21 82H141C152.046 82 161 90.9543 161 102C161 113.046 152.046 122 141 122H21C9.9543 122 1 113.046 1 102Z" stroke="#ddd" stroke-width="2"/>
              <path d="M101 162C89.9543 162 81 153.046 81 142L81 22C81 10.9543 89.9543 2 101 2C112.046 2 121 10.9543 121 22L121 142C121 153.046 112.046 162 101 162Z" stroke="#ddd" stroke-width="2"/>
              <path d="M7.14214 115.995C-0.668351 108.184 -0.668351 95.5211 7.14214 87.7106L86.7107 8.1421C94.5212 0.331614 107.184 0.331607 114.995 8.14209C122.805 15.9526 122.805 28.6159 114.995 36.4264L35.4264 115.995C27.6159 123.805 14.9526 123.805 7.14214 115.995Z" stroke="#ddd" stroke-width="2"/>
              <path d="M353 102C353 90.9543 361.954 82 373 82H493C504.046 82 513 90.9543 513 102C513 113.046 504.046 122 493 122H373C361.954 122 353 113.046 353 102Z" stroke="#ddd" stroke-width="2"/>
              <path d="M453 162C441.954 162 433 153.046 433 142L433 22C433 10.9543 441.954 2 453 2C464.046 2 473 10.9543 473 22L473 142C473 153.046 464.046 162 453 162Z" stroke="#ddd" stroke-width="2"/>
              <path d="M359.142 115.995C351.332 108.184 351.332 95.5211 359.142 87.7106L438.711 8.1421C446.521 0.331614 459.184 0.331607 466.995 8.14209C474.805 15.9526 474.805 28.6159 466.995 36.4264L387.426 115.995C379.616 123.805 366.953 123.805 359.142 115.995Z" stroke="#ddd" stroke-width="2"/>
              <circle cx="253" cy="82" r="80" stroke="#ddd" stroke-width="2"/>
              <circle cx="253" cy="82" r="40" stroke="#ddd" stroke-width="2"/>
              <circle cx="101" cy="22" r="20" stroke="#1C4ED8" stroke-width="2"/>
              <circle cx="101" cy="142" r="20" stroke="#1C4ED8" stroke-width="2"/>
              <circle cx="21" cy="102" r="20" stroke="#1C4ED8" stroke-width="2"/>
              <circle cx="141" cy="102" r="20" stroke="#1C4ED8" stroke-width="2"/>
              <circle cx="193" cy="82" r="20" stroke="#1C4ED8" stroke-width="2"/>
              <circle cx="313" cy="82" r="20" stroke="#1C4ED8" stroke-width="2"/>
              <circle cx="253" cy="22" r="20" stroke="#1C4ED8" stroke-width="2"/>
              <circle cx="253" cy="142" r="20" stroke="#1C4ED8" stroke-width="2"/>
              
              <circle cx="453" cy="22" r="20" stroke="#1C4ED8" stroke-width="2"/>
              <circle cx="453" cy="142" r="20" stroke="#1C4ED8" stroke-width="2"/>
              <circle cx="373" cy="102" r="20" stroke="#1C4ED8" stroke-width="2"/>
              <circle cx="493" cy="102" r="20" stroke="#1C4ED8" stroke-width="2"/>
              
              
              
            </svg>
          </div>
          <div className="w-full pt-12 flex flex-col items-center justify-center">
            <h1 className="mt-3 text-2xl font-bold text-blue-600">Page not found</h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400">Sorry, the page you are looking for doesn't exist.</p>

            <div className="flex items-center mt-6 gap-x-3">
                <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>


                    <span>Go back</span>
                </button>

                
            </div>
          </div>

          
        </div>
      </div>


    </div>
  )
} 

/* eslint-enable @typescript-eslint/no-unused-vars */