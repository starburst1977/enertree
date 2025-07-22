import { AppSidebar } from "@/components/app-sidebar"
import { Rules } from "@/components/rules"
import {
  SidebarLayout,
} from "@/components/ui/sidebar"

export default async function Page() {
  return (
    <SidebarLayout >
      <AppSidebar />
      <div className="flex min-h-screen mx-auto w-full max-w-screen-2xl flex-col bg-neutral-100/40 dark:bg-neutral-800/40 px-6">
        
        <div className="flex flex-col">
          <Rules/>
        </div>
      </div>

    </SidebarLayout>
  )
}
