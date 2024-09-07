'use client'
import Spinner from '@/components/Spinner'
import productById from '@/services/productById'
import { dehydrate, HydrationBoundary, QueryClient, useQuery } from '@tanstack/react-query'
import dynamic from 'next/dynamic'

const DetailCard = dynamic(() => import('@/components/products/DetailCard'), {
	loading: () => <Spinner />,
})
const RelatedProductsContainer = dynamic(
	() => import('@/components/products/RelatedProductsContainer'),
	{
		loading: () => <Spinner />,
	},
)

export default function ProductDetailPage({ params }) {
	const { id } = params
	const queryClient = new QueryClient()

	const { data: productData } = useQuery({
		queryKey: ['productDetail', id],
		queryFn: () => productById(id),
	})

	return (
		<div className=''>
			<HydrationBoundary state={dehydrate(queryClient)}>
				<DetailCard />
			</HydrationBoundary>

			<HydrationBoundary state={dehydrate(queryClient)}>
				<RelatedProductsContainer categoryId={productData?.category} />
			</HydrationBoundary>
		</div>
	)
}
