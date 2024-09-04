'use client'
import * as React from 'react'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'

export function CarouselHome() {
	const images = [
		{
			id: 1,
			src: '/assets/images/slide3.webp',
			alt: 'Slide 1',
		},
		{
			id: 2,
			src: '/assets/images/slide2.png',
			alt: 'Slide 2',
		},
	]
	return (
		<Carousel
			plugins={[
				Autoplay({
					delay: 4000,
				}),
			]}
			className='w-full'
		>
			<CarouselContent>
				{images.map(image => (
					<CarouselItem key={image.id} className='border-none basis-full'>
						<Image
							src={image.src}
							alt={image.alt}
							width={1920}
							height={780}
							className='h-[600px] object-cover md:object-cover'
							priority
						/>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	)
}
