'use client'
import ProductCard from './ProductCard'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '../ui/carousel'
import { FeaturedProducts } from '@/services/featuredProducts'
import { useQuery } from '@tanstack/react-query'
import Autoplay from 'embla-carousel-autoplay'
import Spinner from '../Spinner'

export default function FeaturedProductsSlider() {
	const { data, error, isLoading } = useQuery({
		queryKey: ['featuredProducts'],
		queryFn: FeaturedProducts,
	})

	if (isLoading) return <Spinner />
	if (error) return <div>{error.message}</div>
	if (!data || data.length === 0) return <div>No featured products available.</div> //

	return (
		<>
			<h1 className='pt-10 text-2xl antialiased font-bold uppercase ps-10 text-start'>
				Productos Destacados
			</h1>
			<section className='flex flex-col items-center p-20 my-5'>
				<Carousel
					className='flex justify-center max-w-[1620px]  flex-col items-center my-5'
					opts={{ align: 'start', loop: true }}
					plugins={[
						Autoplay({
							delay: 2000,
						}),
					]}
				>
					<CarouselContent className='h-auto '>
						{data.map(product => (
							<CarouselItem
								key={product.id}
								className='basis-1/3 md:basis-1/2 lg:basis-1/5 xl:basis-1/4'
							>
								<ProductCard product={product} />
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</section>
		</>
	)
}
