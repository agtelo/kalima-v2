import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function LoginForm() {
	return (
		<></>
		// <Card className='max-w-sm mx-auto'>
		// 	<CardHeader>
		// 		<CardTitle className='text-2xl'>Inicia sesión</CardTitle>
		// 		<CardDescription>
		// 			Ingrese su correo electrónico a continuación para iniciar sesión en su cuenta.
		// 		</CardDescription>
		// 	</CardHeader>
		// 	<CardContent>
		// 		<div className='grid gap-4'>
		// 			<div className='grid gap-2'>
		// 				<Label htmlFor='email'>Correo electrónico</Label>
		// 				<Input id='email' type='email' placeholder='m@example.com' required />
		// 			</div>
		// 			<div className='grid gap-2'>
		// 				<div className='flex items-center'>
		// 					<Label htmlFor='password'>Contraseña</Label>
		// 					<Link href='#' className='inline-block ml-auto text-sm underline'>
		// 						Olvidaste tu contraseña?
		// 					</Link>
		// 				</div>
		// 				<Input id='password' type='password' required />
		// 			</div>
		// 			<Button type='submit' className='w-full'>
		// 				Iniciar sesión
		// 			</Button>
		// 			<Button variant='outline' className='w-full'>
		// 				Iniciar sesión con Google
		// 			</Button>
		// 		</div>
		// 		<div className='mt-4 text-sm text-center'>
		// 			No tienes una cuenta?{' '}
		// 			<Link href='/auth/sign-up' className='underline'>
		// 				Crear cuenta
		// 			</Link>
		// 		</div>
		// 	</CardContent>
		// </Card>
	)
}
