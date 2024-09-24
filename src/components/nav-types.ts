/* eslint-disable @typescript-eslint/no-unused-vars */

import { LucideIcon, type LucideIcon  } from "lucide-react"

export interface NavItem {
  title: string
  url: string
  icon?: LucideIcon
  isActive?: boolean
  items?: NavItem[]
}

/* eslint-enable @typescript-eslint/no-unused-vars */