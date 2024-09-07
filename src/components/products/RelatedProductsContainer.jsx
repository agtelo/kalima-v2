'use client'
import { useQuery } from '@tanstack/react-query'
import dynamic from 'next/dynamic'
import { ProductByCategory } from '@/services/productByCategory'
import Spinner from '../Spinner'

// Lazy load ProductCard component with a loading spinner
const ProductCard = dynamic(() => import('@/components/products/ProductCard'))

function RelatedProductsContainer({ categoryId }) {
	const { data, error, isLoading } = useQuery({
		queryKey: ['productByCategory', categoryId],
		queryFn: () => ProductByCategory(categoryId),
	})
	if (isLoading) return <Spinner />
	if (error) return <div>{error.message}</div>
	if (!data || data.length === 0) return

	return (
		<div className='flex flex-col'>
			<h1 className='mt-20 text-3xl antialiased font-bold uppercase md:mt-10 lg:mt-20 ps-10 text-start'>
				Productos relacionados
			</h1>
			<section className='flex flex-wrap justify-center py-28'>
				{data.slice(0, 4).map(product => (
					<ProductCard key={product.id} product={product} />
				))}
			</section>
		</div>
	)
}

export default RelatedProductsContainer
