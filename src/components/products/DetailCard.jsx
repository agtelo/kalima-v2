'use client'
import React, { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import productById from '@/services/productById'
import Spinner from '../Spinner'
import useCartStore from '@/store/useCartStore'
import Counter from '../Counter'
import { toast } from 'sonner'

export default function DetailCard() {
	const [quantity, setQuantity] = useState(1)
	const { addItem } = useCartStore()
	const { id } = useParams()
	const { data, error, isLoading } = useQuery({
		queryKey: ['productDetail', id],
		queryFn: () => productById(id),
	})

	const handleAddToCart = () => {
		addItem({ ...data, quantity })
		setQuantity(1)
		toast('Agretaste un producto a carrito')
	}
	const handleQuantityChange = newQuantity => {
		setQuantity(newQuantity)
	}

	if (error) return <div> {error.message} </div>
	if (isLoading) return
	if (!data || data.length === 0) return <div>No featured products available.</div> //
	return (
		<div className='flex flex-col max-w-6xl gap-8 p-20 mx-auto md:flex-row md:px-0'>
			<div className='flex flex-col gap-4'>
				<Image
					src={`/assets/images/products/${data.image}`}
					alt={data.model}
					width={1200}
					height={800}
					priority={true}
					className='object-cover rounded-lg aspect-square'
				/>
			</div>
			<div className='flex flex-col gap-6'>
				<div className='flex flex-col gap-2'>
					<h1 className='text-3xl font-bold'>{data.model}</h1>
					<p className='text-muted-foreground'>{data.description}</p>
				</div>
				<div className='flex flex-col justify-between gap-4'>
					<div className='flex items-center gap-2'>
						<div className='text-4xl font-bold'>${data.price.toFixed(2)}</div>
					</div>
					<div className='grid gap-2'>
						<Label htmlFor='quantity' className='text-base'>
							Cantidad
						</Label>
						<Counter quantity={quantity} onQuantityChange={handleQuantityChange} />
					</div>
					<Button size='lg' onClick={handleAddToCart} className='mt-20'>
						Agregar al carrito
					</Button>
				</div>
			</div>
		</div>
	)
}
