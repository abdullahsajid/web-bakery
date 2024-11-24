'use client'
import Image from 'next/image';
import React from 'react'
import ContactBanner from "../../public/assets/contact-banner.jpg";

const ContactHero = () => {
  return (
    <div>
        <div className="relative">
            <Image src={ContactBanner} className="w-full object-cover" alt="contact Banner" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center mb-5">
                <span className="text-[53px] text-[#ffffff] font-bold max-sm:text-[30px]">Contact Us</span>
                <span>Super Sweet</span>
            </div>
        </div>
    </div>
  )
}

export default ContactHero;


