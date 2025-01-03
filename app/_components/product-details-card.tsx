import React from 'react';

type Props = {
	icon: string;
	heading: string;
	value: string;
};

const ProductDetailsCard : React.FC<Props> = ({icon,heading,value}) => {
	return (
		<div className='flex items-center gap-3 border p-4 hover:border-primary/30 transition-all'>
            <span className='border p-3 py-1 rounded-full'>{icon}</span>
			<div className='flex flex-col'>
                <div className='font-bold'>{heading}</div>
                <div>{value}</div>
			</div>
		</div>
	);
};

export default ProductDetailsCard;
