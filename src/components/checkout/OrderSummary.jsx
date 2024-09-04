'use client'
import useCartStore from '@/store/useCartStore'
import React from 'react'
import {
	Table,
	TableHeader,
	TableRow,
	TableHead,
	TableBody,
	TableCell,
} from '@/components/ui/table'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import Image from 'next/image'

export default function OrderSummary() {
	const { items } = useCartStore()
	return (
		<>
			<Card>
				<CardHeader>
					<CardTitle>Resumen de compra</CardTitle>
				</CardHeader>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Producto</TableHead>
								<TableHead className='flex items-center justify-start'>Cantidad</TableHead>
								<TableHead className='text-right'>Precio</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{items.map(item => (
								<TableRow key={item.id}>
									<TableCell>
										<div className='flex items-center gap-4'>
											<Image
												src={`/assets/images/products/${item.image}`}
												alt='Product Image'
												width={64}
												height={64}
												className='rounded-md'
											/>
											<div>
												<div className='font-medium'>{item.model}</div>
											</div>
										</div>
									</TableCell>
									<TableCell className='flex-col justify-end'>{item.quantity}</TableCell>
									<TableCell className='text-right'>${item.price.toFixed(2)}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</CardContent>
			</Card>
		</>
	)
}
