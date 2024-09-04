import React from 'react'
import FormLogin from '@/components/auth/FormLogin'
import { SignIn } from '@clerk/nextjs'

export default function page() {
	return (
		<div className='flex justify-center p-40'>
			{/* <FormLogin /> */}
			<SignIn
				appearance={{
					custom: {
						signIn: {
							title: 'Iniciar sesión',
							signInButton: 'Entrar',
							signUpLink: '¿No tienes cuenta? Regístrate aquí',
							forgotPasswordLink: '¿Olvidaste tu contraseña?',
							emailLabel: 'Correo electrónico',
							passwordLabel: 'Contraseña',
						},
					},
				}}
			/>
		</div>
	)
}
