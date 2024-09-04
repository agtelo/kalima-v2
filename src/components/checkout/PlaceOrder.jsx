'use client'
import React from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import useCartStore from '@/store/useCartStore'
import useOrderStore from '@/store/useOrderStore'
import { useRouter } from 'next/navigation'

export default function PlaceOrder() {
	const router = useRouter()
	const { getTotalPrice, deleteCart } = useCartStore()
	const { generateOrder, placeOrder } = useOrderStore()
	const handlePlaceOrder = async () => {
		generateOrder()
		placeOrder()
		router.push('/confirmation')
		deleteCart()
	}

	return (
		<>
			<Card className=''>
				<CardHeader>
					<CardTitle>Resumen del pedido</CardTitle>
				</CardHeader>
				<CardContent className='grid gap-2'>
					<div className='flex items-center justify-between'>
						<div className='text-muted-foreground'>Subtotal</div>
						<div>${getTotalPrice().toFixed(2)}</div>
					</div>
					<div className='flex items-center justify-between'>
						<div className='text-muted-foreground'>Envío</div>
						<div>$0.00</div>
					</div>
					<div className='flex items-center justify-between font-medium'>
						<div>Total</div>
						<div>${getTotalPrice().toFixed(2)}</div>
					</div>
				</CardContent>
				<CardFooter>
					<Button className='w-full' onClick={handlePlaceOrder}>
						Finalizar Compra
					</Button>
				</CardFooter>
			</Card>
		</>
	)
}
