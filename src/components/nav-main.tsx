/* eslint-disable @typescript-eslint/no-unused-vars */

"use client"

import Link from "next/link"
import { ChevronRight, type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

export interface NavItem {
  title?: string
  url?: string
  icon?: LucideIcon
  isActive?: boolean
  items?: NavItem[]
}

export const NavMain: React.FC<NavItem> = ({ items }) => {
  return (
    <ul className={cn("grid gap-0.5")}>
      
      {items.map((item) => (
        <Collapsible key={item.title} asChild defaultOpen={item.isActive}>
          <li>
            <div className="relative flex items-center">
              <Link
                href={item.url}
                className="min-w-8 flex h-8 flex-1 items-center gap-2 overflow-hidden rounded-md px-1.5 text-sm font-medium outline-none ring-neutral-950 transition-all hover:bg-neutral-100 hover:text-neutral-900 focus-visible:ring-2 dark:ring-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-neutral-50"
              >
                <item.icon className="h-4 w-4 shrink-0" />
                <div className="flex flex-1 overflow-hidden">
                  <div className="line-clamp-1 pr-6">{item.title}</div>
                </div>
              </Link>
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  className="absolute right-1 h-6 w-6 rounded-md p-0 ring-neutral-950 transition-all focus-visible:ring-2 data-[state=open]:rotate-90 dark:ring-neutral-300"
                >
                  <ChevronRight className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="px-l py-0.5">
              <ul className="grid border-l border-blue-600 pl-2 ml-3">
                {item.items?.map((subItem) => (
                  <SubCollapsible key={subItem.title} item={subItem} />
                ))}
              </ul>
            </CollapsibleContent>
          </li>
        </Collapsible>
      ))}
    </ul>
  )
}

function SubCollapsible({ item }: { item: { title: string; url: string; icon: LucideIcon; items?: { title: string; icon: LucideIcon; url: string }[] } }) {
  return (
    <Collapsible asChild defaultOpen={item.isActive}>
      <li>
        <div className="relative flex items-center justify-between w-full">
          <Link
            href={item.url}
            className="min-w-8 flex h-8 flex-1 items-center gap-2 overflow-hidden rounded-md px-2 text-sm font-medium text-neutral-500 ring-neutral-950 transition-all hover:bg-neutral-100 hover:text-neutral-900 focus-visible:ring-2 dark:text-neutral-400 dark:ring-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-neutral-50"
          >
            <item.icon className="h-4 w-4 shrink-0" />
            <div className="line-clamp-1 pr-4">{item.title}</div>
          </Link>
          {item.items && (
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                className="absolute right-1 h-6 w-6 rounded-md p-0 ring-neutral-950 transition-all focus-visible:ring-2 data-[state=open]:rotate-90 dark:ring-neutral-300"
              >
                <ChevronRight className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          )}
        </div>
        {item.items && (
          <CollapsibleContent className="pl-2 py-0.5 ml-1.5">
            <ul className="grid border-l border-purple-600 px-2">
              {item.items.map((subSubItem) => (
                <li key={subSubItem.title}>
                  <Link
                    href={subSubItem.url}
                    className="min-w-8 flex h-8 items-center gap-2 overflow-hidden rounded-md px-2 text-sm font-medium text-neutral-500 ring-neutral-950 transition-all hover:bg-neutral-100 hover:text-neutral-900 focus-visible:ring-2 dark:text-neutral-400 dark:ring-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-neutral-50"
                  >
                    <subSubItem.icon className="h-4 w-4 shrink-0" />
                    <div className="line-clamp-1">{subSubItem.title}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </CollapsibleContent>
        )}
      </li>
    </Collapsible>
  )
}

/* eslint-enable @typescript-eslint/no-unused-vars */