import { AppSidebar } from "@/components/app-sidebar"
import { UsersComponent } from "@/components/users"
import {
  SidebarLayout,
} from "@/components/ui/sidebar"

export default async function Page() {
  return (
    <SidebarLayout >
      <AppSidebar />
      
      <UsersComponent />

    </SidebarLayout>
  )
}
