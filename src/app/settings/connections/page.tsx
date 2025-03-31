import { AppSidebar } from "@/components/app-sidebar"
import { SettingsConnectionsComponent } from "@/components/settings-connections"
import {
  SidebarLayout,
} from "@/components/ui/sidebar"

export default async function Page() {
  return (
    <SidebarLayout >
      <AppSidebar />
      
      <SettingsConnectionsComponent />

    </SidebarLayout>
  )
}
