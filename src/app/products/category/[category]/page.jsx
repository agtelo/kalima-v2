import React from 'react'
import { QueryClient, dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { ProductByCategory } from '@/services/productByCategory'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import Spinner from '@/components/Spinner'

// Lazy load ProductContainer and CategoriesTidesRelated components
const ProductContainer = dynamic(() => import('@/components/products/ProductContainer'), {
	loading: () => <Spinner />,
})
const CategoriesTidesRelated = dynamic(() => import('@/components/CategoriesTidesRelated'), {
	loading: () => <Spinner />,
})

export default async function CategoryPage({ params }) {
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
	const { category } = params
	const queryClient = new QueryClient()
	await queryClient.prefetchQuery({
		queryKey: ['fetchProductByCategory', category],
		queryFn: () => ProductByCategory(category),
	})

	return (
		<>
			<div className='flex flex-col'>
				<h1 className='p-10 text-3xl antialiased font-bold text-center uppercase'>{category}</h1>
				<Image
					src={images.find(image => image.name === category).src}
					alt={category}
					width={1920}
					height={100}
					className='object-cover w-full h-96'
				/>
				<HydrationBoundary state={dehydrate(queryClient)}>
					<ProductContainer category={category} />
				</HydrationBoundary>
				<h1 className='p-10 text-3xl antialiased font-bold uppercase text-start'>
					Productos relacionados
				</h1>
				<CategoriesTidesRelated />
			</div>
		</>
	)
}
