import { AppSidebar } from "@/components/app-sidebar"
import { DeviceListComponent } from "@/components/device-list"
import {
  SidebarLayout,
} from "@/components/ui/sidebar"

export default async function Page() {
  return (
    <SidebarLayout >
      <AppSidebar />
      
      <DeviceListComponent />

    </SidebarLayout>
  )
}
