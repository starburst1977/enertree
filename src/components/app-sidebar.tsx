/* eslint-disable @typescript-eslint/no-unused-vars */

"use client"

import Image from "next/image"
import Link from "next/link"
import {
  FileCog,
  Check,
  ClipboardList,
  FolderCog,
  Bell,
  Rabbit,
  Send,
  TableProperties,
  AlignJustify,
  Square,
  Rows3,
  GitFork,
  Info,
  BookOpen,
  Settings,
  Settings2,
  Bot,
  Image as ImageIcon,
  Video,
  Mic2,
} from "lucide-react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGauge as farGauge } from '@fortawesome/pro-regular-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
} from "@/components/ui/sidebar"

const data = {
  teams: [
    {
      name: "Frankfurt ",
      logo: Check,
      plan: "Connected",
    },
    {
      name: "München",
      logo: Check,
      plan: "Connected",
    },
    {
      name: "Salzburg",
      logo: Check,
      plan: "Degraded",
    },
  ],
  user: {
    name: "Sven Read",
    email: "me@svenread.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Room 1",
      url: "/room?=1",
      alarm: true,
      alarmamount: 3,
      warning: true,
      warningamount: 2,
      isActive: true,
      items: [
        {
          title: "Row 1",
          icon: AlignJustify,
          url: "/row?=1",
          isActive: true,
          alarm: true,
          alarmamount: 2,
          warning: true,
          warningamount: 1,
          items: [
            {
              title: "Rack 1",
              icon: Rows3,
              alarm: true,
              alarmamount: 1,
              warning: false,
              url: "/rack?=2"
            },
            {
              title: "Rack 2",
              icon: Rows3,
              warning: true,
              warningamount: 1,
              url: "/rack?=3"
            }
          ]
        },
        {
          title: "Row 2",
          url: "/row?=2",
          icon: AlignJustify,
          alarm: true,
          alarmamount: 1,
          items: [
            {
              title: "Rack 1",
              icon: Rows3,
              url: "/rack?=4"
            },
            {
              title: "Rack 2",
              icon: Rows3,
              alarm: true,
              alarmamount: 1,
              url: "/rack?=5"
            },
            {
              title: "Rack 3",
              icon: Rows3,
              url: "/rack?=6"
            },
            {
              title: "Rack 4",
              icon: Rows3,
              url: "/rack?=7"
            },
            {
              title: "Rack 5",
              icon: Rows3,
              url: "/rack?=8"
            }
          ]
        },
        {
          title: "Row 3",
          url: "/row?=3",
          icon: AlignJustify,
          warning: true,
          warningamount: 1,
          items: [
            {
              title: "Rack 1",
              icon: Rows3,
              url: "/rack?=9"
            },
            {
              title: "Rack 2",
              icon: Rows3,
              url: "/rack?=10"
            },
            {
              title: "Rack 3",
              icon: Rows3,
              warning: true,
              warningamount: 1,
              url: "/rack"
            },
            {
              title: "Rack 4",
              icon: Rows3,
              url: "/rack"
            }
          ]
        }
      ]
    },
    {
      title: "Room 2",
      url: "/room",
      alarm: false,
      warning: true,
      warningamount: 1,
      items: [
        {
          title: "Row 1",
          icon: AlignJustify,
          url: "/row",
          isActive: true,
          items: [
            {
              title: "Rack 1",
              icon: Rows3,
              url: "/rack"
            },
            {
              title: "Rack 2",
              icon: Rows3,
              url: "/rack"
            }
          ]
        },
        {
          title: "Row 2",
          url: "/row",
          icon: AlignJustify,
          items: [
            {
              title: "Rack 1",
              icon: Rows3,
              url: "/rack"
            },
            {
              title: "Rack 2",
              icon: Rows3,
              url: "/rack"
            },
            {
              title: "Rack 3",
              icon: Rows3,
              url: "/rack"
            },
            {
              title: "Rack 4",
              icon: Rows3,
              url: "/rack"
            },
            {
              title: "Rack 5",
              icon: Rows3,
              url: "/rack"
            }
          ]
        },
        {
          title: "Row 3",
          url: "/row",
          icon: AlignJustify,
          items: [
            {
              title: "Rack 1",
              icon: Rows3,
              url: "/rack"
            },
            {
              title: "Rack 2",
              icon: Rows3,
              url: "/rack"
            },
            {
              title: "Rack 3",
              icon: Rows3,
              url: "/rack"
            },
            {
              title: "Rack 4",
              icon: Rows3,
              url: "/rack"
            }
          ]
        }
      ]
    },
    {
      title: "Room 3",
      url: "/room",
      icon: Square,
      alarm: true,
      alarmamount: 2,
      warning: false,
      items: [
        {
          title: "Row 1",
          icon: AlignJustify,
          url: "/row",
          alarm: true,
          alarmamount: 1,
          isActive: true,
          items: [
            {
              title: "Rack 1",
              icon: Rows3,
              url: "/rack"
            },
            {
              title: "Rack 2",
              icon: Rows3,
              alarm: true,
              alarmamount: 1,
              url: "/rack"
            }
          ]
        },
        {
          title: "Row 2",
          url: "/row",
          alarm: true,
          alarmamount: 1,
          icon: AlignJustify,
          items: [
            {
              title: "Rack 1",
              icon: Rows3,
              alarm: true,
              alarmamount: 1,
              url: "/rack"
            },
            {
              title: "Rack 2",
              icon: Rows3,
              url: "/rack"
            },
            {
              title: "Rack 3",
              icon: Rows3,
              url: "/rack"
            },
            {
              title: "Rack 4",
              icon: Rows3,
              url: "/rack"
            },
            {
              title: "Rack 5",
              icon: Rows3,
              url: "/rack"
            }
          ]
        },
        {
          title: "Row 3",
          url: "/row",
          icon: AlignJustify,
          items: [
            {
              title: "Rack 1",
              icon: Rows3,
              url: "/rack"
            },
            {
              title: "Rack 2",
              icon: Rows3,
              url: "/rack"
            },
            {
              title: "Rack 3",
              icon: Rows3,
              url: "/rack"
            },
            {
              title: "Rack 4",
              icon: Rows3,
              url: "/rack"
            }
          ]
        }
      ]
    },
    
  ],

  navSecondary: [
    {
      title: "Configure DC Structure",
      url: "/structure", // Change this line
      icon: GitFork,
    },
    {
      title: "Manage Settings Profiles",
      url: "#",
      icon: FolderCog,
    },
    {
      title: "Manage Switch Profiles",
      url: "#",
      icon: FileCog,
    },
  ],
  projects: [
    {
      name: "Device List",
      url: "devices",
      icon: TableProperties,
    },
    {
      name: "Alarms",
      url: "/notifications",
      icon: Bell,
    },
    {
      name: "Reports",
      url: "#",
      icon: ClipboardList,
    },
  ],
}

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
      <Link
            href="/"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-md bg-blue-700 text-lg font-semibold text-neutral-50 md:h-8 md:w-8 md:text-base dark:bg-neutral-50 dark:text-neutral-900"
          >
            <Image 
              src="images/logo.svg" 
              alt="logo" 
              width={16} 
              height={16} 
              className="transition-all group-hover:scale-110"
            />
            <span className="sr-only">Acme Inc</span>
        </Link>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarItem>
          <SidebarLabel className="text-blue-600">DC</SidebarLabel>
          <Link href="/dc" className="flex h-8 text-sm items-center gap-2.5 overflow-hidden text-neutral-700 rounded-md px-1.5 outline-none ring-neutral-950 transition-all hover:bg-neutral-100 hover:text-blue-600 focus-visible:ring-2 dark:ring-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-neutral-50">
            <FontAwesomeIcon icon={farGauge} />
            Overview
          </Link>
          <SidebarLabel className="text-blue-600 pt-4">Rooms</SidebarLabel>
          <NavMain items={data.navMain} />
        </SidebarItem>
        <SidebarItem>
          <SidebarLabel className="text-blue-600">Views</SidebarLabel>
          <NavProjects projects={data.projects} />
        </SidebarItem>
        <SidebarItem className="mt-auto">
          <SidebarLabel className="text-blue-600">Settings</SidebarLabel>
          <NavSecondary items={data.navSecondary} />
        </SidebarItem>
        
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}


/* eslint-enable @typescript-eslint/no-unused-vars */