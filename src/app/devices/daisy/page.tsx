import { AppSidebar } from "@/components/app-sidebar"
import DeviceListDCComponent from "@/components/devicelist-dc"
import {
  SidebarLayout,
} from "@/components/ui/sidebar"

export default async function Page() {
  return (
    <SidebarLayout >
      <AppSidebar />
      
      <DeviceListDCComponent />

    </SidebarLayout>
  )
}
