import { AppSidebar } from "@/components/app-sidebar"
import { SettingsRulesDetailComponent } from "@/components/settings-rules-detail"
import {
  SidebarLayout,
} from "@/components/ui/sidebar"

export default async function Page() {
  return (
    <SidebarLayout >
      <AppSidebar />
      
      <SettingsRulesDetailComponent />

    </SidebarLayout>
  )
}
