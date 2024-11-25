import React from 'react'
import Image from 'next/image';
import CatalogItemImg from "../../public/assets/catalog_item.jpg";
import { Facebook,Twitter,Instagram} from "lucide-react"

const CatalogItem = () => {
  return (
    <div className='flex mt-10 max-sm:flex-col transition-all'>
      <div className='flex items-center justify-center w-full'>
        <Image src={CatalogItemImg} alt="CatalogItemImg"/>
      </div>
      <div className='flex flex-col gap-y-4 mt-5 w-full'>
        <div className='text-[#753F21] text-[14px]'>Donuts</div>
        <div className='text-[#753F21] text-[30px] font-bold'>Glazed Donuts</div>
        <div className='text-[#753F21]'>
            These donuts are iconic in cafes and bakeries around the world, with many enjoying them freshly made. While the classic recipe is popular, variations abound, including chocolate, maple, and fruit-flavored glazes, and even fillings like cream or jam.
        </div>
        <div className='text-[#753F21] text-[25px] font-bold'>
            Rs 260
        </div>
        <div className='flex gap-5'>
            <div className='flex items-center bg-white rounded-lg p-3 py-2 w-max gap-10 shadow-md'>
                <div className='text-[#753F21] cursor-pointer font-bold'>-</div>
                <div className='text-[#753F21] font-bold'>1</div>
                <div className='text-[#753F21] cursor-pointer font-bold'>+</div>
            </div>
            <div>
                <button className='bg-[#753F21] text-white py-2 px-7 rounded-lg shadow-md'>Add to Cart</button>
            </div>
        </div>
        <div className='text-[#753F21]'>
            Create your perfect product, tailored to your style and needs—choose colors, materials, sizes, and add your personal touch for a truly one-of-a-kind experience!
        </div>
        <div>
            <button className='bg-[#753F21] text-white py-2 px-7 rounded-lg shadow-md'>Customize</button>
        </div>
        <div className="flex justify-start items-center gap-5 mt-5 me-5 max-sm:me-0 max-sm:justify-center">
            <div className="bg-[#1D9BF0] rounded-md p-1 shadow">
                <Twitter color="#fff"/>
            </div>
            <div className="bg-[#1877F2] rounded-md p-1 shadow">
                <Facebook/>
            </div>
            <div className="insta rounded-md p-1 shadow">
                <Instagram/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CatalogItem
