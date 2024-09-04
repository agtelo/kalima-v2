'use client'
import { useQuery } from '@tanstack/react-query'
import ProductCard from '@/components/products/ProductCard'
import { ProductByCategory } from '@/services/productByCategory'
import Spinner from '../Spinner'

export default function ProductContainer({ category }) {
	const { data, error, isLoading } = useQuery({
		queryKey: ['featuredProducts'],
		queryFn: () => ProductByCategory(category),
	})

	if (isLoading) return <Spinner />
	if (error) return <div>{error.message}</div>
	if (!data || data.length === 0) return <div>No products available for this category.</div>

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
