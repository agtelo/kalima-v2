'use client'
import { useQuery } from '@tanstack/react-query'
import dynamic from 'next/dynamic'
import { ProductByCategory } from '@/services/productByCategory'
import Spinner from '../Spinner'

// Lazy load ProductCard component with a loading spinner
const ProductCard = dynamic(() => import('@/components/products/ProductCard'))

export default function ProductContainer({ category, initialData }) {
	const { data, error, isLoading } = useQuery({
		queryKey: ['featuredProducts', category],
		queryFn: () => ProductByCategory(category),
		initialData,
	})
	if (isLoading) return <Spinner />
	if (error) return <div>{error.message}</div>
	if (!data || data.length === 0) return

	return (
		<>
			<section className='flex flex-wrap justify-center py-28 '>
				{data.map(product => (
					<ProductCard key={product.id} product={product} />
				))}
			</section>
		</>
	)
}
