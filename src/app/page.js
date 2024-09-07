import Banner from '@/components/Banner'
import Banner2 from '@/components/Banner2'
import { CarouselHome } from '@/components/CarouselHome'
import CategoriesTides from '@/components/CategoriesTides'
import Title from '@/components/Title'
import FeaturedProductsSlider from '@/components/products/FeaturedProductsSlider'
import { FeaturedProducts } from '@/services/featuredProducts'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'

export default async function Home() {
	const queryClient = new QueryClient()
	await queryClient.prefetchQuery({
		queryKey: ['FeaturedProducts'],
		queryFn: FeaturedProducts,
	})
	return (
		<main className='relative flex flex-col '>
			<CarouselHome />
			<Banner />
			<CategoriesTides />
			<HydrationBoundary state={dehydrate(queryClient)}>
				<FeaturedProductsSlider />
			</HydrationBoundary>
			<Title />
			<Banner2 />
		</main>
	)
}
