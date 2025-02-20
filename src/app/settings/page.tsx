import { AppSidebar } from "@/components/app-sidebar"
import { SettingsComponent } from "@/components/settings"
import {
  SidebarLayout,
} from "@/components/ui/sidebar"

export default async function Page() {
  return (
    <SidebarLayout >
      <AppSidebar />
      
      <SettingsComponent />

    </SidebarLayout>
  )
}
