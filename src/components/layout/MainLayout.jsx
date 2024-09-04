import React from 'react'
import Navbar from '../Nabvar'
import Footer from '../Footer'

export default function MainLayout({ children }) {
	return (
		<>
			<Navbar />
			<main className='relative h-screen '>{children}</main>
			<Footer />
		</>
	)
}
