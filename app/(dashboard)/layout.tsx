import React, { ReactNode } from 'react';
import { SidebarProvider, SidebarTrigger } from '../_components/ui/sidebar';
import { AppSidebar } from '../_components/app-sidebar';
import { Avatar, AvatarFallback, AvatarImage } from '../_components/ui/avatar';

export default async function DashboardLayout({
	children,
}: {
	children: ReactNode;
}) {
	return (
		<SidebarProvider>
			<AppSidebar />
			<main className='w-full'>
				<div className='sticky top-0 z-10 flex flex-col mb-3'>
					<header className='flex h-14 items-center justify-between gap-2 border-b bg-background px-4 lg:h-[60px]'>
                        <SidebarTrigger />
                        <div className='flex gap-x-4'>
						    <Avatar>
                                <AvatarImage
                                    src='https://github.com/shadcn.png'
                                    alt='@shadcn'
                                />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div>
					</header>
				</div>
				{children}
			</main>
		</SidebarProvider>
	);
}