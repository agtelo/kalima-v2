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
import { Button } from '../ui/button'
import { useUser } from '@clerk/nextjs'

const schema = z.object({
	fullName: z.string().min(4, 'Este campo es obligatorio'),
	email: z.string().email('Correo electrónico inválido').min(1, 'Este campo es obligatorio'),
})

export default function ContactForm() {
	const { user } = useUser()
	const setContactInfo = useCheckoutStore(state => state.setContactInfo)

	const formMethods = useForm({
		mode: 'onBlur',
		defaultValues: {
			fullName: user?.fullName || '',
			email: user?.emailAddresses[0].emailAddress || '',
		},
		resolver: zodResolver(schema),
	})

	const onSubmit = formMethods.handleSubmit(data => {
		setContactInfo(data)
		console.log('Contact Info Saved:', data)
	})

	return (
		<Form {...formMethods}>
			<form onSubmit={onSubmit}>
				<Card>
					<CardHeader>
						<CardTitle>Datos de contacto</CardTitle>
					</CardHeader>
					<CardContent className='grid gap-4'>
						<FormField
							control={formMethods.control}
							name='fullName'
							render={({ field }) => (
								<FormItem>
									<FormLabel htmlFor='fullName'>Nombre Completo</FormLabel>
									<FormControl>
										<Input
											id='fullName'
											placeholder='Ingresa tu nombre'
											autoComplete='name'
											{...field}
											disabled={!!user?.fullName}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={formMethods.control}
							name='email'
							render={({ field }) => (
								<FormItem>
									<FormLabel htmlFor='email'>Correo electrónico</FormLabel>
									<FormControl>
										<Input
											id='email'
											placeholder='Ingresa tu email'
											{...field}
											disabled={user?.emailAddresses}
										/>
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
