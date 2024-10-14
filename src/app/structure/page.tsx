import { AppSidebar } from "@/components/app-sidebar"
import Structure from "@/components/conf-structure"
import {
  SidebarLayout,
} from "@/components/ui/sidebar"

export default async function Page() {
  return (
    <SidebarLayout >
      <AppSidebar />
      
      <Structure/>

    </SidebarLayout>
  )
}
