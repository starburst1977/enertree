import { AppSidebar } from "@/components/app-sidebar"
import Dashboard from "@/components/dashboard-04"
import {
  SidebarLayout,
} from "@/components/ui/sidebar"

export default async function Page() {
  return (
    <SidebarLayout >
      <AppSidebar />
      
      <Dashboard />

    </SidebarLayout>
  )
}
