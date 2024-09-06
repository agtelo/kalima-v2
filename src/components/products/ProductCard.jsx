'use client'
import React, { useState } from 'react'
// import { Button } from '../ui/button'
import { Card, CardContent, CardTitle } from '../ui/card'
// import useCartStore from '@/store/useCartStore'
// import Counter from '../Counter'
import Image from 'next/image'
// import { toast } from 'sonner'
import 'animate.css'
import { useRouter } from 'next/navigation'

export default function ProductCard({ product }) {
	// const { addItem } = useCartStore()
	// const [quantity, setQuantity] = useState(1)
	const router = useRouter()
	const handleClick = () => {
		router.push(`/products/${product.id}`)
	}

	// const handleAddToCart = () => {
	// 	addItem({ ...product, quantity })
	// 	setQuantity(1)
	// 	toast('Agregaste un producto al carrito')
	// }

	return (
		<Card
			className='flex flex-col items-center justify-between border-none shadow-none md:basis-1/2 lg:basis-1/3 xl:basis-1/4 animate__animated animate__fadeIn'
			onClick={handleClick}
		>
			<Image
				src={`/assets/images/products/${product.image}`}
				alt={`${product.model} image`}
				width='0'
				height='0'
				sizes='100vw'
				className='aspect-[4/3] w-[1200px] rounded-t-lg object-contain h-auto'
			/>
			<CardContent className='flex flex-col p-4 space-y-2'>
				<CardTitle className='text-lg font-semibold text-center'>{product.model}</CardTitle>
				<p className='text-lg font-semibold text-center text-gray-700'>
					${product.price.toFixed(2)}
				</p>
			</CardContent>
			{/* <CardFooter className='w-full px-4 pb-4'>
				<Button
					className='w-full text-white transition-colors duration-200 bg-primary hover:bg-primary-dark focus:ring-2 focus:ring-primary focus:ring-opacity-50 peer'
					onClick={handleAddToCart}
					aria-label={`Comprar ahora ${product.model}`}
				>
					Comprar ahora
				</Button>
			</CardFooter> */}
		</Card>
	)
}
