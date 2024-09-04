'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import useCheckoutStore from '@/store/useCheckoutStore'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
	Form,
	FormControl,
	FormLabel,
	FormItem,
	FormMessage,
	FormField,
} from '@/components/ui/form'
import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'

// Array de provincias
const provinces = [
	{ value: '01', label: 'Buenos Aires' },
	{ value: '02', label: 'Catamarca' },
	{ value: '03', label: 'Chaco' },
	{ value: '04', label: 'Chubut' },
	{ value: '05', label: 'CABA' },
	{ value: '06', label: 'Córdoba' },
	{ value: '07', label: 'Corrientes' },
	{ value: '08', label: 'Entre Ríos' },
	{ value: '09', label: 'Formosa' },
	{ value: '10', label: 'Jujuy' },
	{ value: '11', label: 'La Pampa' },
	{ value: '12', label: 'La Rioja' },
	{ value: '13', label: 'Mendoza' },
	{ value: '14', label: 'Misiones' },
	{ value: '15', label: 'Neuquén' },
	{ value: '16', label: 'Río Negro' },
	{ value: '17', label: 'Salta' },
	{ value: '18', label: 'San Juan' },
	{ value: '19', label: 'San Luis' },
	{ value: '20', label: 'Santa Cruz' },
	{ value: '21', label: 'Santa Fe' },
	{ value: '22', label: 'Santiago del Estero' },
	{ value: '23', label: 'Tierra del Fuego' },
	{ value: '24', label: 'Tucumán' },
]

const schema = z.object({
	address: z.string().min(1, 'Este campo es obligatorio'),
	city: z.string().min(1, 'Este campo es obligatorio'),
	province: z.string().min(1, 'Este campo es obligatorio'),
	postalCode: z.string().min(1, 'Este campo es obligatorio'),
})

export default function ShippingForm() {
	const form = useForm({
		mode: 'onBlur',
		defaultValues: {
			address: '',
			city: '',
			province: '',
			postalCode: '',
		},
		resolver: zodResolver(schema),
	})

	const setShippingInfo = useCheckoutStore(state => state.setShippingInfo)

	const onSubmit = data => {
		setShippingInfo(data)
		console.log('Shipping Info Saved:', data)
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<Card>
					<CardHeader>
						<CardTitle>Información de Envío</CardTitle>
					</CardHeader>
					<CardContent className='grid gap-4'>
						<FormField
							control={form.control}
							name='address'
							render={({ field }) => (
								<FormItem>
									<FormLabel htmlFor='address'>Dirección</FormLabel>
									<FormControl>
										<Input id='address' placeholder='123 Calle Principal' {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name='city'
							render={({ field }) => (
								<FormItem>
									<FormLabel htmlFor='city'>Ciudad</FormLabel>
									<FormControl>
										<Input id='city' placeholder='Ciudad' {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name='province'
							render={({ field }) => (
								<FormItem>
									<FormLabel htmlFor='province'>Provincia</FormLabel>
									<FormControl>
										<Select onValueChange={field.onChange} value={field.value}>
											<SelectTrigger>
												<SelectValue placeholder='Selecciona una provincia' />
											</SelectTrigger>
											<SelectContent>
												{provinces.map(province => (
													<SelectItem key={province.value} value={province.value}>
														{province.label}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name='postalCode'
							render={({ field }) => (
								<FormItem>
									<FormLabel htmlFor='postalCode'>Código Postal</FormLabel>
									<FormControl>
										<Input id='postalCode' placeholder='1234' {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<div className='grid gap-2'>
							<Button type='submit'>Confirmar</Button>
						</div>
					</CardContent>
				</Card>
			</form>
		</Form>
	)
}
