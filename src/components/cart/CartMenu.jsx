'use client'
import useCartStore from '@/store/useCartStore'
import React from 'react'
import { Trash2Icon } from 'lucide-react'
import Counter from '../Counter'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { toast } from 'sonner'

export default function CartMenu() {
	const { items, getTotalPrice, removeItem, updateItemQuantity } = useCartStore()

	const handleRemoveItem = itemId => {
		removeItem(itemId)
		toast('Eliminste un producto del carrito')
	}
	return (
		<>
			<div className='flex items-center justify-between'>
				<h2 className='mt-10 mb-4 text-xl font-bold uppercase md:text-2xl'>Carrito de compras</h2>
			</div>
			{items.length == 0 ? (
				<div className='flex items-center justify-center p-2 border'>
					El carrito de compras esta vacío
				</div>
			) : (
				<div className='flex flex-col gap-6'>
					{' '}
					<div className='flex flex-col gap-4'>
						{' '}
						{items.map(item => (
							<div key={item.id} className='flex items-center gap-4'>
								{' '}
								<Image
									src={`/assets/images/products/${item.image}`}
									alt={item.model}
									width={80}
									height={80}
									className='object-cover rounded-md'
								/>
								<div className='flex flex-col flex-grow gap-1'>
									{' '}
									<h3 className='font-medium'>{item.model}</h3>
									<div className='flex items-center gap-2'>
										<Counter
											quantity={item.quantity}
											onQuantityChange={newQuantity => updateItemQuantity(item.id, newQuantity)}
										/>
										<Button variant='ghost' size='icon' onClick={() => handleRemoveItem(item.id)}>
											<Trash2Icon className='w-4 h-4' />
										</Button>
									</div>
								</div>
								<div className='font-medium text-right'>${item.price.toFixed(2)}</div>
							</div>
						))}
					</div>
					<div className='pt-4 border-t'>
						<div className='flex items-center justify-between'>
							<span className='text-lg font-medium'>Total</span>
							<span className='text-2xl font-bold'>${getTotalPrice().toFixed(2)}</span>
						</div>
					</div>
				</div>
			)}
		</>
	)
}
