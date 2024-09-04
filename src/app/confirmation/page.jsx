'use client'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import useOrderStore from '@/store/useOrderStore'
import { LucideCircleCheck } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function Page() {
	const router = useRouter()
	const { order, deleteOrder } = useOrderStore()
	const { orderNumber, items, shippingInfo, totalPrice } = order

	const handleClick = () => {
		router.push('/')
	}

	return (
		<main className='flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-background sm:px-6 md:py-12 lg:px-8'>
			<div className='w-full max-w-md mx-auto space-y-6'>
				<div className='flex flex-col items-center justify-center gap-6'>
					<LucideCircleCheck className='text-green-500 size-12' />
					<div className='space-y-2 text-center'>
						<h1 className='text-2xl font-bold'>Pedido Completado</h1>
						<p>¡Gracias por tu pedido! Tu compra ha sido confirmada.</p>
					</div>
				</div>
				<div className='p-6 text-sm border rounded-md bg-muted/50'>
					<div className='font-medium'>Detalles del Pedido</div>
					<div className='flex items-center justify-between mb-2'>
						<span>Número de Orden: #{orderNumber}</span>
					</div>
					<ul className='grid gap-2'>
						{items.map(item => (
							<li key={item.id} className='flex items-center justify-between'>
								<span>
									{item.model} x {item.quantity}
								</span>
								<span>${item.price.toFixed(2)}</span>
							</li>
						))}
					</ul>
					<Separator className='my-2' />
					<ul className='grid gap-2'>
						<li className='flex items-center justify-between'>
							<span className='text-muted-foreground'>Subtotal</span>
							<span>${totalPrice.toFixed(2)}</span>
						</li>
						<li className='flex items-center justify-between'>
							<span className='text-muted-foreground'>Envío</span>
							<span>$0.00</span>
						</li>
						<li className='flex items-center justify-between font-medium'>
							<span className='text-muted-foreground'>Total</span>
							<span>${totalPrice.toFixed(2)}</span>
						</li>
					</ul>
					<Separator className='my-2' />
					<div className='not-italic text-muted-foreground'>
						<div className='font-medium'>Información de Entrega</div>
						<div>{shippingInfo.fullName}</div>
						<div>{shippingInfo.address}</div>
						<div>
							{shippingInfo.city}, {shippingInfo.state} CP {shippingInfo.zip}
						</div>
					</div>
				</div>
				<Button className='mt-6 ' variant='link' onClick={handleClick}>
					Volver a la Tienda
				</Button>
			</div>
		</main>
	)
}
