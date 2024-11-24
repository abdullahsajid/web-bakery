import React from 'react'
import Image from 'next/image';
import AboutBanner from "../../public/assets/about-banner.png"

const AboutHero = () => {
  return (
    <div>
        <div className="relative">
            <Image src={AboutBanner} className="w-full object-cover max-sm:h-[170px]" alt="contact Banner" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center mb-5">
                <span className="text-[53px] text-[#ffffff] font-bold max-sm:text-[30px]">About Us</span>
                <span className='bg-[#753F21] px-5 py-1 rounded-md max-sm:text-[12px]'>Super Sweet</span>    
            </div>
        </div>
    </div>
  )
}

export default AboutHero
