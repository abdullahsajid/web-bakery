import { OrdersTable } from '@/app/_components/orders';
import React from 'react'

const Page = () => {
  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-3'>
        Orders
      </h1>
      <OrdersTable/>
    </div>
  )
}

export default Page;