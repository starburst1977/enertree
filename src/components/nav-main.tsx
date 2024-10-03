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
import { usePathname } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle as fasCircle, faTriangle as fasTriangle } from '@fortawesome/pro-solid-svg-icons'
import { faCircle as farCircle, faTriangle as farTriangle } from '@fortawesome/pro-regular-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

// Prevent Font Awesome from adding its CSS since we did it manually above
config.autoAddCss = false

export interface NavItem {
  title: string;
  url?: string;
  icon?: LucideIcon;
  items?: NavItem[];
  isActive?: boolean;
  alarm?: boolean;
  alarmamount?: number;
  warning?: boolean;
  warningamount?: number;
}

interface NavMainProps {
  items?: NavItem[]
}

export const NavMain: React.FC<NavMainProps> = ({ items = [] }) => {
  const pathname = usePathname()

  return (
    <ul className={cn("grid gap-0.5")}>
      {items.map((item) => (
        <Collapsible key={item.title} asChild defaultOpen={item.isActive}>
          <li>
            <div className="relative flex items-center">
              <Link
                href={item.url || '#'}
                className={cn(
                  "min-w-8 flex h-8 flex-1 items-center gap-1 overflow-hidden rounded-md px-1.5 text-sm font-medium outline-none ring-neutral-950 transition-all hover:bg-neutral-100 hover:text-neutral-900 focus-visible:ring-2 dark:ring-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",
                  pathname === item.url && ""
                )}
              >
                <div className="flex items-end">
                  <FontAwesomeIcon
                    icon={item.alarm ? fasCircle : farCircle}
                    className={cn(
                      "text-[8px]",
                      item.alarm
                        ? "text-red-600 dark:text-red-400"
                        : "text-neutral-300 dark:text-neutral-400"
                    )}
                  />
                  
                </div>
                
                <div className="flex items-end">
                  <FontAwesomeIcon
                    icon={item.warning ? fasTriangle : farTriangle}
                    className={cn(
                      "text-[9px]",
                      item.warning
                        ? "text-yellow-600 dark:text-red-400"
                        : "text-neutral-300 dark:text-neutral-400"
                    )}
                  />
                  
                </div>
                <div className="flex flex-1 overflow-hidden pl-2">
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
              <ul className="grid border-l border-blue-600 pl-[0.3rem] ml-[0.6rem]">
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

function SubCollapsible({ item }: { item: NavItem }) {
  const pathname = usePathname()
  return (
    <Collapsible asChild defaultOpen={item.isActive}>
      <li>
        <div className="relative flex items-center justify-between w-full">
          <Link
            href={item.url || '#'}
            className={cn(
              " flex h-8 flex-1 items-center gap-1 overflow-hidden rounded-md px-1.5 text-sm font-medium outline-none ring-neutral-950 transition-all hover:bg-neutral-100 hover:text-neutral-900 focus-visible:ring-2 dark:ring-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",
              pathname === item.url && ""
            )}>
            <div className="flex items-end gap-0.5">
              <FontAwesomeIcon
                icon={item.alarm ? fasCircle : farCircle}
                className={cn(
                  "text-[8px]",
                  item.alarm
                    ? "text-red-600 dark:text-red-400"
                    : "text-neutral-300 dark:text-neutral-400"
                )}
              />
              
            </div>
            
            <div className="flex items-end gap-0.5">
              <FontAwesomeIcon
                icon={item.warning ? fasTriangle : farTriangle}
                className={cn(
                  "text-[9px]",
                  item.warning
                    ? "text-yellow-600 dark:text-yellow-400"
                    : "text-neutral-300 dark:text-neutral-400"
                )}
              />
              
            </div>
            <div className="line-clamp-1 pr-4 pl-2">{item.title}</div>
          </Link>
          {item.items && item.items.length > 0 && (
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
        {item.items && item.items.length > 0 && (
          <CollapsibleContent className="px-l py-0.5">
            <ul className="grid border-l border-blue-600 pl-[0.3rem] ml-[0.6rem]">
              {item.items.map((subItem) => (
                <SubCollapsible key={subItem.title} item={subItem} />
              ))}
            </ul>
          </CollapsibleContent>
        )}
      </li>
    </Collapsible>
  )
}

/* eslint-enable @typescript-eslint/no-unused-vars */