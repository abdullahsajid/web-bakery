import React from 'react'
import { UserTable } from '@/app/_components/user-table'

const page = () => {
  return (
    <div className='px-4'>
        <h1 className='text-2xl font-semibold mb-4'>Users</h1>
        <UserTable />
    </div>
  )
}

export default page
