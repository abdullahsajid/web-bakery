import { OrdersTable } from '@/app/_components/orders';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/app/_components/ui/breadcrumb';
import { Button } from '@/app/_components/ui/button';
import React from 'react'

const Page = () => {
  return (
    <div className='p-4'>
      <div className='flex items-center justify-between gap-5 divide-x mb-4'>
        <div className='flex items-center gap-2'>
          <h1 className='text-2xl font-bold'>
            Orders
          </h1>
          <Breadcrumb className='ps-6'>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/admin">admin</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>orders</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <Button>
          Create Order
        </Button>
      </div>
      <OrdersTable/>
    </div>
  )
}

export default Page;