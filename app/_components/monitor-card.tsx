import React from 'react'

const MonitorCard = () => {
  return (
    <div className='flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md w-full'>
      <div className='flex gap-6'>
        <div className='text-black'>Product Viewed</div>
        <div className='text-green-600'>2.9% +</div>
      </div>
      <div className='flex'>
        <div className='font-bold text-2xl text-black'>
            411.9K
        </div>
      </div>
      <div className='flex justify-between items-center text-black'>
        <div>vs. last month</div>
        <div>313.2k</div>
      </div>
    </div>
  )
};

export default MonitorCard
