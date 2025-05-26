/* eslint-disable @typescript-eslint/no-unused-vars */

"use client"

import * as React from "react"
import { ChevronsUpDown, Plus } from "lucide-react"
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlug, faGlobe } from "@fortawesome/pro-regular-svg-icons"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function TeamSwitcher({
  teams,
}: {
  teams: {
    name: string
    logo: React.ElementType
    plan: string
  }[]
}) {
  const [activeTeam, setActiveTeam] = React.useState(teams[0])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-full rounded-md ring-neutral-950 focus-visible:outline-none focus-visible:ring-2 data-[state=open]:bg-neutral-100 dark:ring-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 dark:data-[state=open]:bg-neutral-800">
        <div className="flex items-center gap-1.5 overflow-hidden px-4 py-1.5 text-left text-sm transition-all">
          
          <div className="flex-1">
            
            <div className="flex items-center justify-start">
              <div className="leading-3">
                <h1 className="text-blue-600 text-sm font-bold">Unnamed Installation</h1>
                <h2 className="font-normal text-blue-400 text-xs">Enertree Platform</h2>
              </div>
            </div>
          </div>
        </div>
      </DropdownMenuTrigger>
      
    </DropdownMenu>
  )
}

/* eslint-enable @typescript-eslint/no-unused-vars */