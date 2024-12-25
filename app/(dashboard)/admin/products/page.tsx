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
				<Button>Create Products</Button>
            </div>
            <ProductsTable/>
		</div>
	);
};

export default Products;
