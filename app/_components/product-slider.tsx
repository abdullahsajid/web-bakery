import React from 'react';
import { Card, CardContent } from '@/app/_components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/app/_components/ui/carousel';

const ProductSlider = () => {
	return (
		<Carousel className='w-full max-w-xs'>
			<CarouselContent>
				{Array.from({ length: 5 }).map((_, index) => (
					<CarouselItem key={index}>
						<div className='p-1'>
							<Card className='border-none shadow-none'>
								<CardContent className='flex aspect-square items-center justify-center p-6'>
									<span className='text-4xl font-semibold'>{index + 1}</span>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
};

export default ProductSlider;
