import { AppSidebar } from "@/components/app-sidebar"
import { ProfilesComponent } from "@/components/profiles"
import {
  SidebarLayout,
} from "@/components/ui/sidebar"

export default async function Page() {
  return (
    <SidebarLayout >
      <AppSidebar />
      
      <ProfilesComponent />

    </SidebarLayout>
  )
}
