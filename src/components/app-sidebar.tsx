/* eslint-disable @typescript-eslint/no-unused-vars */

"use client"

import Image from "next/image"
import Link from "next/link"
import {
  Bird,
  Check,
  ClipboardList,
  LifeBuoy,
  Bell,
  Rabbit,
  Send,
  TableProperties,
  AlignJustify,
  Square,
  Rows3,
  Turtle,
  Info,
  BookOpen,
  Settings,
  Bot,
  Image as ImageIcon,
  Video,
  Mic2,
  LucideIcon, // Add this import
} from "lucide-react"

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
      url: "#",
      icon: Square,
      isActive: true,
      items: [
        {
          title: "Row 1",
          icon: AlignJustify,
          url: "#",
          isActive: true,
          items: [
            {
              title: "Rack 1",
              icon: Rows3,
              url: "#"
            },
            {
              title: "Rack 2",
              icon: Rows3,
              url: "#"
            }
          ]
        },
        {
          title: "Row 2",
          url: "#",
          icon: AlignJustify,
          items: [
            {
              title: "Rack 1",
              icon: Rows3,
              url: "#"
            },
            {
              title: "Rack 2",
              icon: Rows3,
              url: "#"
            },
            {
              title: "Rack 3",
              icon: Rows3,
              url: "#"
            },
            {
              title: "Rack 4",
              icon: Rows3,
              url: "#"
            },
            {
              title: "Rack 5",
              icon: Rows3,
              url: "#"
            }
          ]
        },
        {
          title: "Row 3",
          url: "#",
          icon: AlignJustify,
          items: [
            {
              title: "Rack 1",
              icon: Rows3,
              url: "#"
            },
            {
              title: "Rack 2",
              icon: Rows3,
              url: "#"
            },
            {
              title: "Rack 3",
              icon: Rows3,
              url: "#"
            },
            {
              title: "Rack 4",
              icon: Rows3,
              url: "#"
            }
          ]
        }
      ]
    },
    {
      title: "Room 2",
      url: "#",
      icon: Square,
      items: [
        {
          title: "Genesis",
          url: "#",
          icon: Rabbit,
        },
        {
          title: "Explorer",
          url: "#",
          icon: Bird,
        },
        {
          title: "Quantum",
          url: "#",
          icon: Turtle,
        },
      ],
    },
    {
      title: "Room 3",
      url: "#",
      icon: Square,
      items: [
        {
          title: "Introduction",
          url: "#",
          icon: Info,
        },
        {
          title: "Get Started",
          url: "#",
          icon: BookOpen,
        },
        {
          title: "Tutorials",
          url: "#",
          icon: Settings,
        },
        {
          title: "Changelog",
          url: "#",
          icon: Info,
        },
      ],
    },
    {
      title: "Room 4",
      url: "#",
      icon: Square,
      items: [
        {
          title: "Bot",
          url: "#",
          icon: Bot,
        },
        {
          title: "Completion",
          url: "#",
          icon: Check,
        },
        {
          title: "Images",
          url: "#",
          icon: ImageIcon,
        },
        {
          title: "Video",
          url: "#",
          icon: Video,
        },
        {
          title: "Speech",
          url: "#",
          icon: Mic2,
        },
      ],
    },
    
  ],

  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "Device List",
      url: "#",
      icon: TableProperties,
    },
    {
      name: "Notifications",
      url: "#",
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
            href="#"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-md bg-blue-700 text-lg font-semibold text-neutral-50 md:h-8 md:w-8 md:text-base dark:bg-neutral-50 dark:text-neutral-900"
          >
            <Image 
              src="/images/logo.svg" 
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
          <SidebarLabel className="text-blue-600">Rooms</SidebarLabel>
          <NavMain items={data.navMain} />
        </SidebarItem>
        <SidebarItem>
          <SidebarLabel className="text-blue-600">Options</SidebarLabel>
          <NavProjects projects={data.projects} />
        </SidebarItem>
        <SidebarItem className="mt-auto">
          <SidebarLabel className="text-blue-600">Help</SidebarLabel>
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