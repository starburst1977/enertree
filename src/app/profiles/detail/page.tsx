import { AppSidebar } from "@/components/app-sidebar"
import { ProfilesDetailComponent } from "@/components/profiles-detail"
import {
  SidebarLayout,
} from "@/components/ui/sidebar"

export default async function Page() {
  return (
    <SidebarLayout >
      <AppSidebar />
      
      <ProfilesDetailComponent />

    </SidebarLayout>
  )
}
