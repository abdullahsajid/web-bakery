import React from 'react'
import { MapPin,Phone,Mail } from 'lucide-react';

const ContactAddress = () => {
  return (
    <div className='w-full px-10 max-sm:p-0 max-sm:mb-5'>
      <div className='flex flex-col max-sm:justify-center max-sm:items-center'>
        <div className='text-[#753F21] text-[35px] max-sm:text-[25px] font-bold mb-1'>
            LETS TALK WITH US
        </div>
        <div className='flex flex-col max-sm:justify-center max-sm:items-center text-[#753F21]'>
            <span className='max-sm:text-center'>Questions,  comments or suggestions? </span>
            <span className='max-sm:text-center'>Simply fill in the form and we’ll be in touch shortly </span>
        </div>
      </div>
      <div className='flex flex-col gap-7 mt-10'>
        <div className='flex items-center gap-3'>
            <MapPin className='fill-[#753F21]' size={'25px'}/>
            <span className='text-[#753F21] font-semibold'>Shop 5 Laiq Ali Chowk Wah Cantt</span>
        </div>
        <div className='flex items-center gap-3'>
            <Phone className='fill-[#753F21]' size={'25px'}/>
            <span className='text-[#753F21] font-semibold'>+92 324 5452289</span>
        </div>
        <div className='flex items-center gap-3'>
            <Mail className='fill-[#753F21]' size={'25px'}/>
            <span className='text-[#753F21] font-semibold'>supersweetbakery@gmail.com</span>
        </div>
      </div>
    </div>
  )
}

export default ContactAddress
