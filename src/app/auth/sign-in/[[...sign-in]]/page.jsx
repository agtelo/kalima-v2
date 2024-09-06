import React from 'react'
import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
	return (
		<div className='flex justify-center p-40'>
			<SignIn />
		</div>
	)
}
