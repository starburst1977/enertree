import Link from "next/link"
import { MoreHorizontal, PlusSquare, type LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function NavProjects({
  projects,
  className,
}: {
  projects: {
    name: string
    url: string
    icon: LucideIcon
  }[]
} & React.ComponentProps<"ul">) {
  return (
    <ul className={cn("grid gap-0.5", className)}>
      {projects.map((item) => (
        <li
          key={item.name}
          className="has-[[data-state=open]]:bg-neutral-100 has-[[data-state=open]]:text-neutral-900 group relative rounded-md hover:bg-neutral-100 hover:text-neutral-900 dark:has-[[data-state=open]]:bg-neutral-800 dark:has-[[data-state=open]]:text-neutral-50 dark:hover:bg-neutral-800 dark:hover:text-neutral-50"
        >
          <Link
            href={item.url}
            className="flex h-8 text-sm items-center gap-2.5 overflow-hidden rounded-md px-1.5 outline-none ring-neutral-950 transition-all hover:bg-neutral-100 hover:text-neutral-900 focus-visible:ring-2 dark:ring-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-neutral-50"
          >
            <item.icon className="h-4 w-4 shrink-0 translate-x-0.5 text-neutral-500 dark:text-neutral-400" />
            <div className="line-clamp-1 grow overflow-hidden pr-6 font-medium">
              {item.name}
            </div>
          </Link>
          
        </li>
      ))}
    </ul>
  )
}
