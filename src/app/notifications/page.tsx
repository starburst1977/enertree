import { AppSidebar } from "@/components/app-sidebar"
import { Notifications } from "@/components/notifications"
import {
  SidebarLayout,
} from "@/components/ui/sidebar"

export default async function Page() {
  return (
    <SidebarLayout >
      <AppSidebar />
      
      <Notifications/>

    </SidebarLayout>
  )
}
