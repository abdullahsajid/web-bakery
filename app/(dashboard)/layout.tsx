import React, { ReactNode } from 'react'
import { SidebarProvider } from '../_components/ui/sidebar'
import { AppSidebar } from '../_components/app-sidebar'



export default async function DashboardLayout({
children,
}:{children:ReactNode}){
return (
    <SidebarProvider>
        <AppSidebar/>
        <main>
            {children}
        </main>
    </SidebarProvider>
  )
}
