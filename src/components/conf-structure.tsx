/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Search,
} from "lucide-react"
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
  Settings,
  Trash2,
  ChevronUp,
  ChevronDown,
  Plus,
} from "lucide-react"
import { useState } from "react";


export default function Structure() {
  const [showThirdRack, setShowThirdRack] = useState(false);

  return (
    <div className="flex min-h-screen mx-auto w-full max-w-screen-2xl flex-col bg-neutral-100/40 dark:bg-neutral-800/40">
      
      <div className="flex flex-col sm:gap-4 sm:py-4">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-white px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6 dark:bg-neutral-950">
        
          <Breadcrumb className="hidden md:flex">
            <SidebarTrigger />
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="#" className="text-blue-700 font-bold text-lg">Structure Data Center</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              
            </BreadcrumbList>
          </Breadcrumb>
          
          <div className="relative ml-auto flex-1 md:grow-0">
            
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-neutral-500 dark:text-neutral-400" />
            <Input
              type="search"
              placeholder="Search......."
              className="w-full rounded-lg bg-white pl-8 md:w-[200px] lg:w-[320px] dark:bg-neutral-950"
            />
          </div>
          
        </header>
        <main className="w-full max-w-screen-2xl px-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between gap-4 bg-white pl-4 pr-6 py-2 rounded-lg border border-gray-200">
              <span className="text-base font-bold flex items-center gap-2">
                <Button variant="ghost" size="icon" className="overflow-hidden rounded-full"><ChevronDown className="h-4 w-4 text-blue-600 dark:text-neutral-400" /></Button>
                Room 1
              </span>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="overflow-hidden rounded-full"><Settings className="h-4 w-4 text-neutral-500 dark:text-neutral-400" /></Button>
                <Button variant="ghost" size="icon" className="overflow-hidden rounded-full"><Trash2 className="h-4 w-4 text-neutral-500 dark:text-neutral-400" /></Button>
              </div>
            </div>
            <div className="flex flex-col gap-2 border-l-4 border-blue-400 ml-1">
              <div className="flex items-center justify-between gap-4 bg-white pl-4 pr-6 py-2 rounded-lg border border-gray-200 ml-4">
                <span className="text-base font-bold flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="overflow-hidden rounded-full"><ChevronDown className="h-4 w-4 text-green-600 dark:text-neutral-400" /></Button>
                  Row 1
                </span>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="overflow-hidden rounded-full"><Settings className="h-4 w-4 text-neutral-500 dark:text-neutral-400" /></Button>
                  <Button variant="ghost" size="icon" className="overflow-hidden rounded-full"><Trash2 className="h-4 w-4 text-neutral-500 dark:text-neutral-400" /></Button>
                </div>
              </div>
              <div className="flex flex-col gap-2 border-l-4 border-green-400 ml-6">
                <div className="flex items-center justify-between gap-4 bg-white px-6 py-2 rounded-lg border border-gray-200 ml-4">
                  <span className="text-base font-bold">Rack 1</span>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="overflow-hidden rounded-full"><Settings className="h-4 w-4 text-neutral-500 dark:text-neutral-400" /></Button>
                    <Button variant="ghost" size="icon" className="overflow-hidden rounded-full"><Trash2 className="h-4 w-4 text-neutral-500 dark:text-neutral-400" /></Button>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4 bg-white px-6 py-2 rounded-lg border border-gray-200 ml-4">
                  <span className="text-base font-bold">Rack 2</span>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="overflow-hidden rounded-full"><Settings className="h-4 w-4 text-neutral-500 dark:text-neutral-400" /></Button>
                    <Button variant="ghost" size="icon" className="overflow-hidden rounded-full"><Trash2 className="h-4 w-4 text-neutral-500 dark:text-neutral-400" /></Button>
                  </div>
                </div>
                {showThirdRack && (
                  <div className="flex items-center justify-between gap-4 bg-blue-50 px-2 py-2 rounded-lg border border-blue-200 ml-4">
                    <span className="text-base font-bold flex items-center gap-2">
                      <Input type="text" className="font-normal bg-white border-gray-400" placeholder="New Rack Name" />
                      <Button size="default" variant="outline" className="border-blue-400 text-blue-600 bg-blue-100">
                        Create New Rack
                      </Button>
                    </span>
                    
                  </div>
                )}
                <div className="flex justify-between items-center gap-2 px-4 pb-2">
                  <a href="#" onClick={(e) => { e.preventDefault(); setShowThirdRack(true); }} className="text-sm text-green-600 flex items-center gap-2">
                    <Plus className="h-4 w-4 text-green-600 dark:text-neutral-400" />Add New Rack
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-between gap-4 bg-white pl-4 pr-6 py-2 rounded-lg border border-gray-200 ml-4">
                <span className="text-base font-bold flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="overflow-hidden rounded-full"><ChevronUp className="h-4 w-4 text-neutral-400 dark:text-neutral-400" /></Button>
                  Row 2
                </span>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="overflow-hidden rounded-full"><Settings className="h-4 w-4 text-neutral-500 dark:text-neutral-400" /></Button>
                  <Button variant="ghost" size="icon" className="overflow-hidden rounded-full"><Trash2 className="h-4 w-4 text-neutral-500 dark:text-neutral-400" /></Button>
                </div>
              </div>
              <div className="flex justify-between items-center gap-2 px-4 pb-2">
                <a href="#" className="text-sm text-blue-600 flex items-center gap-2"><Plus className="h-4 w-4 text-blue-600 dark:text-neutral-400" />Add New Row</a>
              </div>
            </div>
            <div className="flex items-center justify-between gap-4 bg-white pr-6 pl-4 py-2 rounded-lg border border-gray-200">
              <span className="text-base font-bold flex items-center gap-2">
                <Button variant="ghost" size="icon" className="overflow-hidden rounded-full"><ChevronUp className="h-4 w-4 text-neutral-400 dark:text-neutral-400" /></Button>
                Room 2
              </span>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="overflow-hidden rounded-full"><Settings className="h-4 w-4 text-neutral-500 dark:text-neutral-400" /></Button>
                <Button variant="ghost" size="icon" className="overflow-hidden rounded-full"><Trash2 className="h-4 w-4 text-neutral-500 dark:text-neutral-400" /></Button>
              </div>
            </div>
            <div className="flex items-center justify-between gap-4 bg-white pr-6 pl-4 py-2 rounded-lg border border-gray-200">
              <span className="text-base font-bold flex items-center gap-2">
                <Button variant="ghost" size="icon" className="overflow-hidden rounded-full"><ChevronUp className="h-4 w-4 text-neutral-400 dark:text-neutral-400" /></Button>
                Room 3
              </span>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="overflow-hidden rounded-full"><Settings className="h-4 w-4 text-neutral-500 dark:text-neutral-400" /></Button>
                <Button variant="ghost" size="icon" className="overflow-hidden rounded-full"><Trash2 className="h-4 w-4 text-neutral-500 dark:text-neutral-400" /></Button>
              </div>
            </div>
            <div className="flex justify-between items-center gap-2 px-4 ">
              <a href="#" className="text-sm text-gray-600 pb-2 flex items-center gap-2"><Plus className="h-4 w-4 text-gray-600 dark:text-neutral-400" />Add New Room</a>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

/* eslint-enable @typescript-eslint/no-unused-vars */