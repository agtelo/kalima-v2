import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function LoginForm() {
	return (
		<Card className='max-w-sm mx-auto'>
			<CardHeader>
				<CardTitle className='text-xl'>Registrate</CardTitle>
				<CardDescription>Ingresa tu información para crear una cuanta</CardDescription>
			</CardHeader>
			<CardContent>
				<div className='grid gap-4'>
					<div className='grid gap-4 '>
						<div className='grid gap-2'>
							<Label htmlFor='full-name'>Nombre completo</Label>
							<Input id='full-name' placeholder='' required />
						</div>
					</div>
					<div className='grid gap-2'>
						<Label htmlFor='email'>Correo electrónico</Label>
						<Input id='email' type='email' placeholder='' required />
					</div>
					<div className='grid gap-2'>
						<Label htmlFor='password'>Contraseña</Label>
						<Input id='password' type='password' />
					</div>
					<Button type='submit' className='w-full'>
						Crear cuenta
					</Button>
					<Button variant='outline' className='w-full'>
						Craar cuenta con Google
					</Button>
				</div>
				<div className='mt-4 text-sm text-center'>
					Ya tienes una cuenta?{' '}
					<Link href='/auth/login' className='underline'>
						Inicia sesión
					</Link>
				</div>
			</CardContent>
		</Card>
	)
}
