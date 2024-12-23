import MonitorCard from '@/app/_components/monitor-card';
import { RevenueChart } from '@/app/_components/revenue-chart';
import React from 'react'

const Page = () => {
  return (
    <div className='flex flex-col gap-y-5 px-7'>
      <div className='grid grid-cols-4 gap-4 w-full'>
        <MonitorCard/>
        <MonitorCard/>
        <MonitorCard/>
        <MonitorCard/>
      </div>
      <div className='grid grid-cols-2 gap-4 w-full'>
        <RevenueChart/>
      </div>
    </div>
  )
}

export default Page;