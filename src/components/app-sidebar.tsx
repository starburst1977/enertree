"use client"

import Image from "next/image"
import Link from "next/link"
import {
  Atom,
  Bird,
  Check,
  Bot,
  Code2,
  Eclipse,
  Frame,
  ClipboardList,
  LifeBuoy,
  Map,
  Bell,
  Rabbit,
  Send,
  TableProperties,
  AlignJustify,
  Square,
  Rows3,
  Turtle,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import { StorageCard } from "@/components/storage-card"
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
          description: "Our fastest model for general use cases.",
        },
        {
          title: "Explorer",
          url: "#",
          icon: Bird,
          description: "Performance and speed for efficiency.",
        },
        {
          title: "Quantum",
          url: "#",
          icon: Turtle,
          description: "The most powerful model for complex computations.",
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
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Room 4",
      url: "#",
      icon: Square,
      items: [
        {
          title: "Chat",
          url: "#",
        },
        {
          title: "Completion",
          url: "#",
        },
        {
          title: "Images",
          url: "#",
        },
        {
          title: "Video",
          url: "#",
        },
        {
          title: "Speech",
          url: "#",
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
  searchResults: [
    {
      title: "Routing Fundamentals",
      teaser:
        "The skeleton of every application is routing. This page will introduce you to the fundamental concepts routing for web and how handle in Next.js.",
      url: "#",
    },
    {
      title: "Layouts and Templates",
      teaser:
        "The special files layout.js and template.js allow you to create UI that is shared between routes. This page will guide through how when use these files.",
      url: "#",
    },
    {
      title: "Data Fetching, Caching, and Revalidating",
      teaser:
        "Data fetching is a core part of any application. This page goes through how you can fetch, cache, and revalidate data in React Next.js.",
      url: "#",
    },
    {
      title: "Server and Client Composition Patterns",
      teaser:
        "When building React applications, you will need to consider what parts of your application should be rendered on the server or client.",
      url: "#",
    },
    {
      title: "Server Actions and Mutations",
      teaser:
        "Server Actions are asynchronous functions that executed on the server. They can be used in and Client Components to handle form submissions data mutations Next.js applications.",
      url: "#",
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
          <NavMain items={data.navMain} searchResults={data.searchResults} />
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
