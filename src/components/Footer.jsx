import React from 'react'
import { Camera, Heart, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import BrandLogo from '@/components/BrandLogo'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-react'
import { ThumbsUp } from 'lucide-react'

export default function Footer() {
	return (
		<footer className='py-10 text-black border-t '>
			<div className='grid grid-cols-1 gap-8 px-10 mx-auto lg:px-40 md:grid-cols-4'>
				<div className='flex justify-center md:justify-start'>
					<div className=''>
						<BrandLogo />
					</div>
				</div>
				<div>
					<h3 className='mb-4 text-lg font-bold'>NAVIGACIÓN</h3>
					<ul className='flex flex-col space-y-2'>
						<Link href={'/products/category/card-sliders'} className='hover:text-gray-400'>
							Card sliders
						</Link>
						<Link href={'/products/category/billeteras'} className='hover:text-gray-400'>
							Billeteras
						</Link>
						<Link href={'/products/category/billeteras-dobles'} className='hover:text-gray-400'>
							Billeteras dobles
						</Link>
						<Link href={'/products/category/relojes'} className='hover:text-gray-400'>
							Relojes
						</Link>
						<Link href={'/products/category/mochilas'} className='hover:text-gray-400'>
							Mochilas
						</Link>
						<Link href={'/products/category/caps'} className='hover:text-gray-400'>
							Gorras
						</Link>
					</ul>
				</div>
				<div>
					<h3 className='mb-4 text-lg font-bold'>CONTACTO</h3>
					<ul className='space-y-2'>
						<li>
							<Link href='/' className='flex items-center'>
								<ThumbsUp className='w-5 h-5 mr-2' />
								Facebook
							</Link>
						</li>
						<li>
							<Link href='#' className='flex items-center'>
								<Camera className='w-5 h-5 mr-2' />
								Instagram
							</Link>
						</li>
						<li>
							<a href='#' className='flex items-center'>
								<Mail className='w-5 h-5 mr-2' />
								info@kalimawallets.com
							</a>
						</li>
					</ul>
				</div>
				<div>
					<h3 className='mb-4 text-lg font-bold'>NEWSLETTER</h3>
					<p className='mb-4'>Ingresá tu mail y recibí novedades</p>
					<form className='flex gap-2'>
						<Input type='email' placeholder='E-mail' className='flex-1 p-2' />
						<Button type='submit' className='p-2 text-black bg-white'>
							<ArrowRight className='w-5 h-5' />
						</Button>
					</form>
				</div>
			</div>
			<div className='container mx-auto mt-8 text-sm text-center'>
				<p>Copyright Tienda Oficial de KALIMA - 2024.</p>

				<div className='flex items-center justify-center mt-4'>
					<p className='mr-2'>Creado con</p>
					<Heart className='w-5 h-5 text-red-500' />
					<p className='ml-2'>por KALIMA</p>
				</div>
			</div>
		</footer>
	)
}
