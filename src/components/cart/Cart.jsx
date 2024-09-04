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
		<div className='p-40'>
			{items.length > 0 ? (
				<Card className='border-none'>
					<CardHeader>
						<CardTitle>Tu Carrito</CardTitle>
					</CardHeader>
					<CardContent>
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead>Producto</TableHead>
									<TableHead>Precio</TableHead>
									<TableHead>Cantidad</TableHead>
									<TableHead>Total</TableHead>
									<TableHead></TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{items.map(item => (
									<TableRow key={item.id}>
										<TableCell>
											<div className='flex items-center gap-2'>
												<Image
													src={`/assets/images/products/${item.image}`}
													alt={item.model}
													width={80}
													height={80}
												/>
												{item.model}
											</div>
										</TableCell>
										<TableCell>${item.price.toFixed(2)}</TableCell>
										<TableCell>
											<Counter
												quantity={item.quantity}
												onQuantityChange={newQuantity => updateItemQuantity(item.id, newQuantity)}
											/>
										</TableCell>
										<TableCell>${(item.price * item.quantity).toFixed(2)}</TableCell>
										<TableCell>
											<Button variant='ghost' size='icon' onClick={() => handleRemoveItem(item.id)}>
												<Trash2 className='w-4 h-4' />
											</Button>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</CardContent>
					<CardFooter className='flex justify-between'>
						<p className='text-lg font-semibold'>Total: ${getTotalPrice().toFixed(2)}</p>
						<div className='space-x-3 '>
							<Button variant='ghost' onClick={handleDeleteCart}>
								Vaciar carrito
							</Button>
							<Button asChild>
								<Link href={'/checkout'}>Continuar con la compra</Link>
							</Button>
						</div>
					</CardFooter>
				</Card>
			) : (
				<div className='flex flex-col items-center justify-center gap-5'>
					<p>No hay productos en el carrito</p>
					<Button asChild>
						<Link href='/'>Ir a la tienda</Link>
					</Button>
				</div>
			)}
		</div>
	)
}
