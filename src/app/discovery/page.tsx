import { AppSidebar } from "@/components/app-sidebar"
import { DiscoveryListComponent } from "@/components/discovery-list"
import {
  SidebarLayout,
} from "@/components/ui/sidebar"

export default async function Page() {
  return (
    <SidebarLayout >
      <AppSidebar />
      
      <DiscoveryListComponent />

    </SidebarLayout>
  )
}
