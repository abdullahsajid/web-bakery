import MonitorCard from '@/app/_components/monitor-card';
import React from 'react'

const Page = () => {
  return (
    <div className='flex px-7'>
      <div className='grid grid-cols-4 gap-4 w-full'>
        <MonitorCard/>
        <MonitorCard/>
        <MonitorCard/>
        <MonitorCard/>
      </div>
    </div>
  )
}

export default Page;
