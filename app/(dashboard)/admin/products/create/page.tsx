
import React from 'react';
import { AccountForm } from './product-form';

const CreateProduct = () => {
	return (
		<div className='flex flex-col mx-auto w-full max-w-3xl p-4 space-y-3'>
			<div>
				<h1 className='text-2xl font-bold'>Create Product</h1>
            </div>
            <AccountForm/>
		</div>
	);
};

export default CreateProduct;
