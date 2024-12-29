import React, { ReactNode } from 'react';
import { SidebarProvider, SidebarTrigger } from '../_components/ui/sidebar';
import { AppSidebar } from '../_components/app-sidebar';

export default async function DashboardLayout({
	children,
}: {
	children: ReactNode;
}) {
	return (
		<SidebarProvider>
			<AppSidebar />
			<main className='w-full'>
				<SidebarTrigger />
				{children}
			</main>
		</SidebarProvider>
	);
}