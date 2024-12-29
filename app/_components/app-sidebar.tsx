import {
	LayoutDashboard,
	Store,
	ShoppingBag,
	Users,
	Box,
	ChartArea,
	Folder,
	Download,
	ShoppingBasket,
} from 'lucide-react';

import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/app/_components/ui/sidebar';
import { DropdownMenu, DropdownMenuTrigger } from './ui/dropdown-menu';

const items = [
	{
		title: 'Dashboard',
		url: '/admin',
		icon: LayoutDashboard,
	},
	{
		title: 'Orders',
		url: '/admin/orders',
		icon: Store,
	},
	{
		title: 'Sales',
		url: '#',
		icon: ShoppingBag,
	},
	{
		title: 'Users',
		url: '/admin/users',
		icon: Users,
	},
	{
		title: 'Products',
		url: '/admin/products',
		icon: Box,
	},
	{
		title: 'Statistics',
		url: '#',
		icon: ChartArea,
	},
	{
		title: 'Files',
		url: '#',
		icon: Folder,
	},
	{
		title: 'Reports',
		url: '#',
		icon: Download,
	},
];

export function AppSidebar() {
	return (
		<Sidebar collapsible='icon'>
			<SidebarHeader className='p-2'>
				<SidebarMenu>
					<SidebarMenuItem>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<SidebarMenuButton
									size='lg'
									className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'>
									<div className='flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground'>
										<ShoppingBasket className='size-4' />
									</div>
									<div className='grid flex-1 text-left text-sm leading-tight'>
										<span className='truncate font-semibold'>
											{'Dashboard'}
										</span>
									</div>
								</SidebarMenuButton>
							</DropdownMenuTrigger>
						</DropdownMenu>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
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
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
