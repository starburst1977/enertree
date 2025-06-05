import { AppSidebar } from "@/components/app-sidebar"
import DeviceViewComponent from "@/components/device-view-empty"
import {
  SidebarLayout,
} from "@/components/ui/sidebar"

export default async function Page() {
  return (
    <SidebarLayout >
      <AppSidebar />
      
      <DeviceViewComponent />

    </SidebarLayout>
  )
}
