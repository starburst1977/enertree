/* eslint-disable @typescript-eslint/no-unused-vars */

"use client"

import * as React from "react"

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
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb"
import Link from "next/link"

import { Button } from "@/components/ui/button"


import { TopTabs, TopTabsList, TopTabsTrigger } from "@/components/ui/tabs-top"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Card, CardContent, CardTitle, CardHeader } from "./ui/card"





export function SettingsComponent() {

  return (
    <div className="flex flex-col">
      
      
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
              <th scope="col" className="px-4 py-3.5 text-xs text-gray-400 font-normal text-right">
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
                  Apparent power (VA) on any Inlets for &apos;any PDU&apos; 
                </div>
              </td>
              
              <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 align-top">
                <div className="flex items-center gap-2 justify-end">
                  <Button size="default" variant="outline">
                    <Link href="/reports/detail" target="_blank" rel="noopener noreferrer">
                      <span className="text-gray-800">Generate Report</span>
                    </Link>
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
              <td className="px-4 py-4 text-base text-gray-800 font-normal legacyBe">
                <div className="flex flex-col gap-1">
                  <div className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="text-white bg-blue-600 px-2 py-1 rounded-md">W</span>
                    null for Donau &apos;Active power (W)&apos;
                  </div>
                  <div className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="text-white bg-blue-600 px-2 py-1 rounded-md">W</span>
                    null for Reihe 1 li &apos;Active power (W)&apos;
                  </div>
                </div>
              </td>
              <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 align-top">
                <div className="flex items-center gap-2 justify-end">
                  <Button size="default" variant="outline">
                    <Link href="/reports/detail" target="_blank" rel="noopener noreferrer" passHref legacyBehavior>
                      <a target="_blank">
                        <span className="text-gray-800">Generate Report</span>
                      </a>
                    </Link>
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
                    Temperature (ºC) on Sensors &apos;Temperature 1&apos; for PDU &apos;PDU-B1-4&apos;
                  </div>
                  <div className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="text-white bg-blue-600 px-2 py-1 rounded-md">ºC</span>
                    Temperature (ºC) on Sensors &apos;Temperature 1&apos; for PDU &apos;PDU-K1-2&apos;
                  </div>
                  <div className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="text-white bg-blue-600 px-2 py-1 rounded-md">ºC</span>
                    Temperature (ºC) on Sensors &apos;Temperature 1&apos; for PDU &apos;PDU-K6-1&apos;
                  </div>
                  <div className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="text-white bg-blue-600 px-2 py-1 rounded-md">ºC</span>
                    Temperature (ºC) on Sensors &apos;Temperature 1&apos; for PDU &apos;PDU-K6-1&apos;
                  </div>
                </div>
              </td>
              <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 align-top">
                <div className="flex items-center gap-2 justify-end">
                  <Button size="default" variant="outline">
                    <Link href="/reports/detail" target="_blank" rel="noopener noreferrer" passHref legacyBehavior>
                      <a target="_blank">
                        <span className="text-gray-800">Generate Report</span>
                      </a>
                    </Link>
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
                  Apparent power (VA) on any Inlets for &apos;any PDU&apos; 
                </div>
              </td>
              
              <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 align-top">
                <div className="flex items-center gap-2 justify-end">
                  <Button size="default" variant="outline">
                    <Link href="/reports/detail" target="_blank" rel="noopener noreferrer" passHref legacyBehavior>
                      <a target="_blank">
                        <span className="text-gray-800">Generate Report</span>
                      </a>
                    </Link>
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