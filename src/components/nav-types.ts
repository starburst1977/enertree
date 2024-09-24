import { LucideIcon } from "lucide-react"

export interface NavItem {
  title: string
  url: string
  icon: React.ElementType 
  isActive?: boolean
  items?: NavItem[]
}