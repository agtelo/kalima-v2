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

const schema = z.object({
	cardNumber: z.string().min(1, 'Este campo es obligatorio'),
	expirationMonth: z.string().min(1, 'Este campo es obligatorio'),
	expirationYear: z.string().min(1, 'Este campo es obligatorio'),
	cvc: z.string().min(1, 'Este campo es obligatorio'),
})

export default function PaymentForm() {
	const form = useForm({
		mode: 'onBlur',
		defaultValues: {
			cardNumber: '',
			expirationMonth: '',
			expirationYear: '',
			cvc: '',
		},
		resolver: zodResolver(schema),
	})

	const setPaymentInfo = useCheckoutStore(state => state.setPaymentInfo)

	const onSubmit = data => {
		setPaymentInfo(data)
		console.log('Payment Info Saved:', data)
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<Card>
					<CardHeader>
						<CardTitle>Método de pago</CardTitle>
					</CardHeader>
					<CardContent className='grid gap-4'>
						<FormField
							control={form.control}
							name='cardNumber'
							render={({ field }) => (
								<FormItem>
									<FormLabel htmlFor='cardNumber'>Número de tarjeta</FormLabel>
									<FormControl>
										<Input id='cardNumber' placeholder='0000 0000 000 0000' {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<div className='grid gap-4 sm:grid-cols-2'>
							<FormField
								control={form.control}
								name='expirationMonth'
								render={({ field }) => (
									<FormItem>
										<FormLabel htmlFor='expirationMonth'>Mes de expiración</FormLabel>
										<FormControl>
											<Select onValueChange={field.onChange} value={field.value}>
												<SelectTrigger>
													<SelectValue placeholder='Selecciona un mes' />
												</SelectTrigger>
												<SelectContent>
													<SelectItem value='01'>01</SelectItem>
													<SelectItem value='02'>02</SelectItem>
													<SelectItem value='03'>03</SelectItem>
													<SelectItem value='04'>04</SelectItem>
													<SelectItem value='05'>05</SelectItem>
													<SelectItem value='06'>06</SelectItem>
													<SelectItem value='07'>07</SelectItem>
													<SelectItem value='08'>08</SelectItem>
													<SelectItem value='09'>09</SelectItem>
													<SelectItem value='10'>10</SelectItem>
													<SelectItem value='11'>11</SelectItem>
													<SelectItem value='12'>12</SelectItem>
												</SelectContent>
											</Select>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name='expirationYear'
								render={({ field }) => (
									<FormItem>
										<FormLabel htmlFor='expirationYear'>Año de expiración</FormLabel>
										<FormControl>
											<Select onValueChange={field.onChange} value={field.value}>
												<SelectTrigger>
													<SelectValue placeholder='Selecciona un año' />
												</SelectTrigger>
												<SelectContent>
													<SelectItem value='2023'>2023</SelectItem>
													<SelectItem value='2024'>2024</SelectItem>
													<SelectItem value='2025'>2025</SelectItem>
													<SelectItem value='2026'>2026</SelectItem>
													<SelectItem value='2027'>2027</SelectItem>
													<SelectItem value='2028'>2028</SelectItem>
												</SelectContent>
											</Select>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						<FormField
							control={form.control}
							name='cvc'
							render={({ field }) => (
								<FormItem>
									<FormLabel htmlFor='cvc'>CVC</FormLabel>
									<FormControl>
										<Input id='cvc' placeholder='***' {...field} />
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
