/** @format */

import React from 'react';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/app/_components/ui/breadcrumb';
import { Button } from '@/app/_components/ui/button';
import { ProductsTable } from '@/app/_components/productsTable';
import ContentCards from '@/app/_components/product-card';
import { CirclePlus } from 'lucide-react';

const Products = () => {
	return (
		<div className='p-4'>
			<div className='flex items-center justify-between gap-5 divide-x mb-4'>
				<div className='flex items-center gap-2'>
					<h1 className='text-2xl font-bold'>Products</h1>
					<Breadcrumb className='ps-6'>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink href='/admin'>admin</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage>products</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>
				<Button>
					<CirclePlus />
					Create Products
				</Button>
			</div>
			<div className='grid grid-cols-4 space-x-5 mb-5'>
				<ContentCards
					title={'Total Sales'}
					revenue={'$45,231.89'}
					margin={'+20.1% from last month'}
				/>
				<ContentCards
					title={'Number of Sales'}
					revenue={'987'}
					margin={'+20.1% from last month'}
				/>
			</div>
			<ProductsTable />
		</div>
	);
};

export default Products;
