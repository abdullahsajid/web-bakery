import React from 'react'
import CatalogItem from '../_components/catalog-item';
import CatalogRelatedProduct from '../_components/catalog-related-product';

const Catalog = () => {
  return (
    <div className='px-10 py-7'>
      <CatalogItem/>
      <hr className='border border-[#753F21] mt-10 px-32'/>
      <div className='text-[#753F21] text-center font-bold text-[35px] max-sm:text-[25px] mt-10 px-32 max-sm:px-0'>
        RELATED PRODUCTS
      </div>
      <div className='grid grid-cols-3 max-sm:grid-cols-1 items-center 
      justify-center gap-3 mt-10 px-32 max-sm:px-0'>
        <CatalogRelatedProduct/>
        <CatalogRelatedProduct/>
        <CatalogRelatedProduct/>
      </div>
    </div>
  )
}

export default Catalog;
