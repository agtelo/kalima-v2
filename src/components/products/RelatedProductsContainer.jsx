'use client'
import { useQuery } from '@tanstack/react-query'
import ProductCard from '@/components/products/ProductCard'
import { ProductByCategory } from '@/services/productByCategory'
import Spinner from '../Spinner'

function RelatedProductsContainer({ categoryId }) {
	// Asegúrate de que la clave de consulta coincida con la usada en la precarga
	const { data, error, isLoading } = useQuery({
		queryKey: ['productByCategory', categoryId], // Cambiado a 'productByCategory' para coincidir
		queryFn: () => ProductByCategory(categoryId),
	})

	if (isLoading) return <Spinner />
	if (error) return <div>{error.message}</div>
	if (!data || data.length === 0)
		return <div>No hay productos relacionados para esta categoría.</div>

	return (
		<section className='flex flex-wrap justify-center py-28'>
			{data.slice(0, 4).map(product => (
				<ProductCard key={product.id} product={product} />
			))}
		</section>
	)
}

export default RelatedProductsContainer
