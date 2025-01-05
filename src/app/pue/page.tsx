import { AppSidebar } from "@/components/app-sidebar"
import { PUE } from "@/components/pue"
import {
  SidebarLayout,
} from "@/components/ui/sidebar"

export default async function Page() {
  return (
    <SidebarLayout >
      <AppSidebar />
      
      <PUE />

    </SidebarLayout>
  )
}
