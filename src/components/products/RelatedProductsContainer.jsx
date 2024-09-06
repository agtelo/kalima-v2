'use client'
import { useQuery } from '@tanstack/react-query'
import dynamic from 'next/dynamic'
import { ProductByCategory } from '@/services/productByCategory'
import Spinner from '../Spinner'

// Lazy load ProductCard component with a loading spinner
const ProductCard = dynamic(() => import('@/components/products/ProductCard'))

function RelatedProductsContainer({ categoryId }) {
	const { data, error } = useQuery({
		queryKey: ['productByCategory', categoryId],
		queryFn: () => ProductByCategory(categoryId),
	})

	if (error) return <div>{error.message}</div>
	if (!data || data.length === 0) return

	return (
		<section className='flex flex-wrap justify-center py-28'>
			{data.slice(0, 4).map(product => (
				<ProductCard key={product.id} product={product} />
			))}
		</section>
	)
}

export default RelatedProductsContainer
