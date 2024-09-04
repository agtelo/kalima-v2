'use client'
import React from 'react'
import { MenuIcon, ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import BrandLogo from '@/components/BrandLogo'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import CategoriesTides from './CategoriesTides'
import useCartStore from '@/store/useCartStore'

import CartMenu from './cart/CartMenu'
import { SignInButton, SignedIn, SignUpButton, SignedOut, UserButton, useUser } from '@clerk/nextjs'
import CategoriesTidesMenu from './CategoriesTidesMenu'

export default function Navbar() {
	const { getTotalQuantity, items } = useCartStore()
	const { isSignedIn } = useUser()

	return (
		<>
			{!isSignedIn && (
				<div className='flex items-center justify-between px-6 py-2 bg-background'>
					<div>
						<p className='text-xs font-medium uppercase '>Envios a todo el país </p>
					</div>
					<div className='flex gap-4'>
						<Link
							href={'/auth/sign-up'}
							className='text-xs font-medium uppercase text-muted-foreground'
						>
							Crear cuenta
						</Link>
						<Link
							href={'/auth/sign-in'}
							className='text-xs font-medium uppercase text-muted-foreground'
						>
							Inicia sesión
						</Link>
					</div>
				</div>
			)}
			<div className=' flex p-2  h-20 w-full items-center justify-between gap-5 border-y-[0.5px] border-primary bg-white md:justify-between'>
				<nav className='hidden gap-6 text-sm font-normal uppercase md:flex md:gap-3'>
					<DropdownMenu className=''>
						<DropdownMenuTrigger asChild>
							<Button
								variant='primary'
								className='flex h-20 w-24 items-center border-r-[0.5px] border-primary font-medium antialiased gap-2 rounded-none uppercase decoration-none decoration-none focus:outline-none'
								size='icon'
							>
								<MenuIcon className='size-6' />
								Menú
								<span className='sr-only'>Toggle navigation menu</span>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent className='bg-transparent border-none rounded-none shadow-none'>
							<div className='border border-none animate__animated animate__slideInDown'>
								<CategoriesTidesMenu />
							</div>
						</DropdownMenuContent>
					</DropdownMenu>
				</nav>
				<Link href='/' className='flex items-center gap-2 lg:ms-24' prefetch={false}>
					<BrandLogo />
				</Link>
				<nav className='flex items-center'>
					<SignedIn>
						<UserButton />
					</SignedIn>
					<Sheet>
						<SheetTrigger asChild>
							<Button className='gap-2 uppercase border-none' variant='default '>
								<ShoppingBag className='hidden md:block' />
								Mi carrito ({getTotalQuantity()})
							</Button>
						</SheetTrigger>
						<SheetContent className='sm:max-w-[600px] '>
							<CartMenu />
							{items.length == 0 ? (
								<div></div>
							) : (
								<>
									<SheetClose asChild>
										<Button className='w-full mt-4' asChild>
											<Link href='/cart'>Iniciar compra</Link>
										</Button>
									</SheetClose>
									<SheetClose asChild>
										<Button className='w-full mt-4' variant='primary' asChild>
											<Link href='/'>Seguir comprando </Link>
										</Button>
									</SheetClose>
								</>
							)}
						</SheetContent>
					</Sheet>
				</nav>
				<Sheet>
					<SheetTrigger asChild>
						<Button variant='outline' size='icon' className='md:hidden'>
							<MenuIcon className='size-6' />
							<span className='sr-only'>Toggle navigation menu</span>
						</Button>
					</SheetTrigger>
					<SheetContent side='right'>
						<div className='grid gap-4 p-4 mt-10 text-xl uppercase'>
							<SheetClose asChild>
								<Link
									href='/products/category/card-sliders'
									className='font-medium'
									prefetch={false}
								>
									Card-Sliders
								</Link>
							</SheetClose>
							<SheetClose asChild>
								<Link href='/products/category/billeteras' className='font-medium' prefetch={false}>
									Billeteras
								</Link>
							</SheetClose>
							<SheetClose asChild>
								<Link
									href='/products/category/billeteras-dobles'
									className='font-medium'
									prefetch={false}
								>
									Billeteras dobles
								</Link>
							</SheetClose>
							<SheetClose asChild>
								<Link href='/products/category/relojes' className='font-medium' prefetch={false}>
									Relojes
								</Link>
							</SheetClose>
							<SheetClose asChild>
								<Link href='/products/category/mochilas' className='font-medium' prefetch={false}>
									Mochilas
								</Link>
							</SheetClose>
							<SheetClose asChild>
								<Link href='/products/category/gorras' className='font-medium' prefetch={false}>
									Gorras
								</Link>
							</SheetClose>
						</div>
					</SheetContent>
				</Sheet>
			</div>
		</>
	)
}
