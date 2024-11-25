import React from 'react'
import Image from 'next/image';
import CatalogItemImg from "../../public/assets/catalog_item.jpg";

const CatalogRelatedProduct = () => {
  return (
    <div className='flex flex-col px-5 py-3 bg-white rounded-md w-max shadow-md !w-full'>
      <div className='flex items-center justify-center w-full'>
        <Image src={CatalogItemImg} alt="CatalogItemImg" className='w-96'/>
      </div>
      <div className='flex flex-col mt-5'>
        <div className='text-[#753F21]'>Donuts</div>
        <div className='text-[#753F21] font-bold text-[27px]'>Honey Donuts</div>
        <div className='flex justify-between'>
            <div className='text-[#753F21] text-[19px]'>Rs 250</div>
        </div>
      </div>
    </div>
  )
}

export default CatalogRelatedProduct;
