import React from 'react'
import FormRegister from '@/components/auth/FormRegister'
import { SignUp } from '@clerk/nextjs'

export default function page() {
	return (
		<div className='flex justify-center p-40'>
			{/* <FormRegister /> */}
			<SignUp />
		</div>
	)
}
