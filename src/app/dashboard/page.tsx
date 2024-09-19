import { AppSidebar } from "@/components/app-sidebar"
import Dashboard from "@/components/dashboard-04"
import {
  SidebarLayout,
} from "@/components/ui/sidebar"

export default async function Page() {
  const { cookies } = await import("next/headers")
  return (
    <SidebarLayout
      defaultOpen={cookies().get("sidebar:state")?.value === "true"}
    >
      <AppSidebar />
      
      <Dashboard />

    </SidebarLayout>
  )
}
