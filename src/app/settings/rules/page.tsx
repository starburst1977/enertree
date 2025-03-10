import { AppSidebar } from "@/components/app-sidebar"
import { SettingsRulesComponent } from "@/components/settings-rules"
import {
  SidebarLayout,
} from "@/components/ui/sidebar"

export default async function Page() {
  return (
    <SidebarLayout >
      <AppSidebar />
      
      <SettingsRulesComponent />

    </SidebarLayout>
  )
}
