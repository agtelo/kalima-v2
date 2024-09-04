import { CarouselHome } from '@/components/CarouselHome'
import CategoriesTides from '@/components/CategoriesTides'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import { FeaturedProducts } from '@/services/featuredProducts'
import Banner from '@/components/Banner'
import Banner2 from '@/components/Banner2'
import Title from '@/components/Title'
import FeaturedProductsSlider from '@/components/products/FeaturedProductsSlider'

export default async function Home() {
	const queryClient = new QueryClient()
	await queryClient.prefetchQuery({
		queryKey: ['products'],
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
