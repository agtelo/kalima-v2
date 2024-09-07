'use client'
import { Button } from '@/components/ui/button'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import useCartStore from '@/store/useCartStore'
import { toast } from 'sonner'
import Link from 'next/link'
import Counter from '../Counter'
import { Trash2 } from 'lucide-react'
import Image from 'next/image'

export default function Cart() {
	const { items, getTotalPrice, removeItem, updateItemQuantity, deleteCart } = useCartStore()
	const handleRemoveItem = itemId => {
		removeItem(itemId)
		toast('Eliminste un producto del carrito')
	}
	const handleDeleteCart = () => {
		deleteCart()
		toast('Carrito eliminado')
	}
	return (
		<div className='p-4 sm:p-6 md:p-8 lg:p-40'>
			{items.length > 0 ? (
				<Card className='border-none'>
					<CardHeader>
						<CardTitle className='text-xl text-center sm:text-2xl md:text-3xl md:text-left'>
							Tu Carrito
						</CardTitle>
					</CardHeader>
					<CardContent className='overflow-x-auto'>
						<Table>
							<TableHeader className='hidden sm:table-header-group'>
								<TableRow>
									<TableHead className='w-1/2'>Producto</TableHead>
									<TableHead>Precio</TableHead>
									<TableHead>Cantidad</TableHead>
									<TableHead>Total</TableHead>
									<TableHead></TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{items.map(item => (
									<TableRow
										key={item.id}
										className='flex flex-col pb-4 mb-6 border-b sm:table-row sm:mb-0 sm:pb-0'
									>
										<TableCell className='flex flex-col items-center gap-2 py-2 sm:flex-row sm:items-center sm:table-cell'>
											<div className='flex flex-col items-center gap-2 sm:flex-row sm:items-center'>
												<Image
													src={`/assets/images/products/${item.image}`}
													alt={item.model}
													width={80}
													height={80}
													className='object-cover w-24 h-24 sm:w-20 sm:h-20'
												/>
												<span className='mt-2 font-medium text-center sm:text-left sm:mt-0 '>
													{item.model}
												</span>
											</div>
										</TableCell>
										<TableCell
											data-label='Precio'
											className='flex justify-between py-2 sm:table-cell'
										>
											<span className='font-medium sm:hidden'>Precio:</span>
											<span>${item.price.toFixed(2)}</span>
										</TableCell>
										<TableCell
											data-label='Cantidad'
											className='flex items-center justify-between py-2 sm:table-cell'
										>
											<span className='font-medium sm:hidden'>Cantidad:</span>
											<Counter
												quantity={item.quantity}
												onQuantityChange={newQuantity => updateItemQuantity(item.id, newQuantity)}
											/>
										</TableCell>
										<TableCell
											data-label='Total'
											className='flex justify-between py-2 sm:table-cell'
										>
											<span className='font-medium sm:hidden'>Total:</span>
											<span>${(item.price * item.quantity).toFixed(2)}</span>
										</TableCell>
										<TableCell className='flex justify-end py-2 sm:table-cell'>
											<Button variant='ghost' size='icon' onClick={() => handleRemoveItem(item.id)}>
												<Trash2 className='w-4 h-4' />
											</Button>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</CardContent>
					<CardFooter className='flex flex-col items-center justify-between gap-4 sm:flex-row'>
						<p className='text-lg font-semibold'>Total: ${getTotalPrice().toFixed(2)}</p>
						<div className='flex flex-col w-full gap-3 sm:w-auto sm:flex-row'>
							<Button variant='ghost' onClick={handleDeleteCart} className='w-full sm:w-auto'>
								Vaciar carrito
							</Button>
							<Button asChild className='w-full sm:w-auto'>
								<Link href={'/checkout'}>Continuar con la compra</Link>
							</Button>
						</div>
					</CardFooter>
				</Card>
			) : (
				<div className='flex flex-col items-center justify-center gap-5 min-h-[50vh]'>
					<p className='text-lg text-center'>No hay productos en el carrito</p>
					<Button asChild>
						<Link href='/'>Ir a la tienda</Link>
					</Button>
				</div>
			)}
		</div>
	)
}
