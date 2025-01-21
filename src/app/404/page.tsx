import { AppSidebar } from "@/components/app-sidebar"
import { Page404 } from "@/components/p404"
import {
  SidebarLayout,
} from "@/components/ui/sidebar"

export default async function Page() {
  return (
    <SidebarLayout >
      <AppSidebar />
      
      <Page404 />
    </SidebarLayout>
  )
}
