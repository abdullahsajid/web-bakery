import { LayoutDashboard ,Store ,ShoppingBag ,Users ,Box ,ChartArea
   ,Folder , Download,ShoppingBasket } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/app/_components/ui/sidebar"

const items = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Orders",
    url: "/admin/orders",
    icon: Store,
  },
  {
    title: "Sales",
    url: "#",
    icon: ShoppingBag,
  },
  {
    title: "Users",
    url: "#",
    icon: Users,
  },
  {
    title: "Products",
    url: "#",
    icon: Box ,
  },
  {
    title: "Statistics",
    url: "#",
    icon: ChartArea,
  },
  {
    title: "Files",
    url: "#",
    icon: Folder ,
  },
  {
    title: "Reports",
    url: "#",
    icon: Download,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent className="bg-[#ffffff]">
        <SidebarGroup>
          <SidebarGroupLabel>
            <ShoppingBasket/>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}