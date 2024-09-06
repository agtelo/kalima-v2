'use client'
import productById from '@/services/productById'
import { dehydrate, HydrationBoundary, QueryClient, useQuery } from '@tanstack/react-query'
import dynamic from 'next/dynamic'

const DetailCard = dynamic(() => import('@/components/products/DetailCard'), {
	loading: () => <div>Loading...</div>,
})
const RelatedProductsContainer = dynamic(
	() => import('@/components/products/RelatedProductsContainer'),
	{
		loading: () => <div>Loading...</div>,
	},
)

export default function ProductDetailPage({ params }) {
	const { id } = params
	const queryClient = new QueryClient()

	const { data: productData } = useQuery({
		queryKey: ['productDetail', id],
		queryFn: () => productById(id),
	})
	console.log(productData)
	return (
		<div>
			<HydrationBoundary state={dehydrate(queryClient)}>
				<DetailCard />
			</HydrationBoundary>
			<h1 className='text-3xl antialiased font-bold uppercase ps-10 text-start'>
				Productos relacionados
			</h1>
			<HydrationBoundary state={dehydrate(queryClient)}>
				<RelatedProductsContainer categoryId={productData?.category} />
			</HydrationBoundary>
		</div>
	)
}
