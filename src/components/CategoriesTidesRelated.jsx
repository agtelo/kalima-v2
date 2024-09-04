'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { AspectRatio } from '@/components/AspectRatio'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
export default function CategoriesTidesMenu() {
	const images = [
		{
			id: 1,
			name: 'card-sliders',
			src: '/assets/images/categories/card-slider.jpg',
			alt: 'Category 1',
		},
		{
			id: 2,
			name: 'billeteras',
			src: '/assets/images/categories/wallet.jpg',
			alt: 'Category 2',
		},
		{
			id: 3,
			name: 'billeteras-dobles',
			src: '/assets/images/categories/double-wallet.jpg',
			alt: 'Category 3',
		},
		{
			id: 4,
			name: 'relojes',
			src: '/assets/images/categories/watch.jpg',
			alt: 'Category 4',
		},
		{
			id: 5,
			name: 'mochilas',
			src: '/assets/images/categories/bag.jpg',
			alt: 'Category 5',
		},
		{
			id: 6,
			name: 'caps',
			src: '/assets/images/categories/cap.jpg',
			alt: 'Category 6',
		},
	]
	const randomImages = images.sort(() => 0.5 - Math.random()).slice(0, 2)
	return (
		<section className='flex flex-wrap'>
			{randomImages.map(image => (
				<Card key={image.id} className='w-full border-none basi-1/2 md:basis-1/2 lg:basis-1/2'>
					<AspectRatio ratio={16 / 9}>
						<Link href={`/products/category/${image.name}`}>
							<CardContent>
								<CardHeader className='absolute z-10'>
									<CardTitle className='text-3xl font-bold uppercase text-secondary'>
										{image.name}
									</CardTitle>
								</CardHeader>
								<Image
									src={image.src}
									alt={image.alt}
									priority
									sizes='50vw'
									fill
									className='object-cover h-11'
								/>
							</CardContent>
						</Link>
					</AspectRatio>
				</Card>
			))}
		</section>
	)
}
