import ProductDetailsCard from '@/app/_components/product-details-card';
import ProductSlider from '@/app/_components/product-slider';
import { Separator } from '@/app/_components/ui/separator';
import React from 'react';

const ProductView = () => {
	return (
        <div className='grid grid-cols-3 space-x-5 mb-5 px-14 transition-all'>
            <div className='bg-[#fff] flex items-center justify-center border p-4 py-7 mb-5 space-y-4'>
                <ProductSlider />
            </div>
            <div className='bg-[#fff] col-span-2 border p-7 mb-5 space-y-6'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-xl font-bold'>Acme Prism T-Shirt</h1>
                    <span>id: WH1000XM4</span>
                </div>
                <div className='flex items-center gap-3'>
                    <div className='flex items-center gap-2'>
                        <span className='font-bold'>Seller:</span>
                        <span>Zoetic Fashion</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <span className='font-bold'>Published :</span>
                        <span>20 Oct, 2024</span>
                    </div>
                </div>
                <Separator />
                <div className='grid grid-cols-4 gap-4 transition-all'>
                    <ProductDetailsCard icon={"$"} heading={"Price"} value={"$120.40"} />
                    <ProductDetailsCard icon={"$"} heading={"No. of Orders"} value={"250"} />
                    <ProductDetailsCard icon={"$"} heading={"Available Stocks"} value={"2,550"} />
                    <ProductDetailsCard icon={"$"} heading={"Total Revenue"} value={"$45,938"} />
                </div>
                <div className='grid grid-cols-3 gap-4 space-x-2 transition-all'>
                    <div className='flex flex-col space-y-3 border p-4 hover:bg-muted/50'>
                        <div className='flex items-center gap-2 justify-between'>
                            <div className='font-bold'>Category</div>
                            <div>Bakery</div>
                        </div>
                        <Separator/>
                        <div className='flex items-center gap-2 justify-between'>
                            <div className='font-bold'>Brand</div>
                            <div>Bakery</div>
                        </div>
                    </div>
                    <div className='flex flex-col space-y-3 col-span-2'>
                        <div className='flex flex-col gap-2'>
                            <div className='font-bold'>Description:</div>
                            <div>Acme Prism T-Shirt is a high quality product with a unique design and comfortable fabric.Acme Prism T-Shirt is a high quality product with a unique design and comfortable fabric.</div>
                        </div>
                    </div>
                </div>
            </div>
		</div>
	);
};

export default ProductView;