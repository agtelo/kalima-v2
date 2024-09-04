'use client'
import React from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Separator } from '@radix-ui/react-dropdown-menu'
import useCartStore from '@/store/useCartStore'

export default function OrderTotal() {
	const { getTotalPrice } = useCartStore()
	return (
		<>
			<Card>
				<CardHeader>
					<CardTitle>Total Orden</CardTitle>
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
					<Separator />
					<div className='flex items-center justify-between font-medium'>
						<div>Total</div>
						<div>${getTotalPrice().toFixed(2)}</div>
					</div>
				</CardContent>
			</Card>
		</>
	)
}
