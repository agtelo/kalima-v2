import Image from 'next/image'
import React from 'react'
import logo from '../../public/assets/images/logo.png'

export default function BrandLogo() {
	return (
		<Image src={logo} width={150} height='auto' alt='logo' />
		// <svg
		// 	xmlns='http://www.w3.org/2000/svg'
		// 	xmlnsXlink='http://www.w3.org/1999/xlink'
		// 	width='150'
		// 	zoomAndPan='magnify'
		// 	viewBox='0 0 375 374.999991'
		// 	height='140'
		// 	preserveAspectRatio='xMidYMid meet'
		// 	version='1.0'
		// >
		// 	<defs>
		// 		<g />
		// 		<clipPath id='772b159e5f'>
		// 			<path
		// 				d='M 0 125.417969 L 375 125.417969 L 375 238.210938 L 0 238.210938 Z M 0 125.417969 '
		// 				clipRule='nonzero'
		// 			/>
		// 		</clipPath>
		// 		<clipPath id='80f37a99ae'>
		// 			<path
		// 				d='M 0.015625 125.417969 L 374.984375 125.417969 L 374.984375 237.917969 L 0.015625 237.917969 Z M 0.015625 125.417969 '
		// 				clipRule='nonzero'
		// 			/>
		// 		</clipPath>
		// 	</defs>
		// 	<g clipPath='url(#772b159e5f)'>
		// 		<path
		// 			fill='#ffffff'
		// 			d='M 0 125.417969 L 374.945312 125.417969 L 374.945312 238.210938 L 0 238.210938 Z M 0 125.417969 '
		// 			fillOpacity='1'
		// 			fillRule='nonzero'
		// 		/>
		// 	</g>
		// 	<g clipPath='url(#80f37a99ae)'>
		// 		<path
		// 			strokeLinecap='butt'
		// 			transform='matrix(0.75, 0, 0, 0.75, 0.0172083, 125.417951)'
		// 			fill='none'
		// 			strokeLinejoin='miter'
		// 			d='M -0.00211108 0.0000237144 L 499.956255 0.0000237144 L 499.956255 150.375034 L -0.00211108 150.375034 Z M -0.00211108 0.0000237144 '
		// 			stroke='#000000'
		// 			strokeWidth='14'
		// 			strokeOpacity='1'
		// 			strokeMiterlimit='4'
		// 		/>
		// 	</g>
		// 	<g fill='#000000' fillOpacity='1'>
		// 		<g transform='translate(42.620872, 198.263747)'>
		// 			<g>
		// 				<path d='M 20.1875 -22.96875 L 37.46875 0 L 32.015625 0 L 17 -20.015625 L 9.046875 -12.59375 L 9.046875 0 L 4.703125 0 L 4.703125 -38.390625 L 9.046875 -38.390625 L 9.046875 -18.390625 L 30.390625 -38.390625 L 36.546875 -38.390625 Z M 20.1875 -22.96875 ' />
		// 			</g>
		// 		</g>
		// 	</g>
		// 	<g fill='#000000' fillOpacity='1'>
		// 		<g transform='translate(96.906399, 198.263747)'>
		// 			<g>
		// 				<path d='M 38.21875 0 L 33.40625 0 L 28.703125 -11.140625 L 9.6875 -11.140625 L 4.984375 0 L 0.171875 0 L 16.46875 -38.390625 L 21.921875 -38.390625 Z M 27.03125 -15.140625 L 19.203125 -33.875 L 11.375 -15.140625 Z M 27.03125 -15.140625 ' />
		// 			</g>
		// 		</g>
		// 	</g>
		// 	<g fill='#000000' fillOpacity='1'>
		// 		<g transform='translate(152.40984, 198.263747)'>
		// 			<g>
		// 				<path d='M 9.046875 -38.390625 L 9.046875 -4.171875 L 29.984375 -4.171875 L 29.984375 0 L 4.703125 0 L 4.703125 -38.390625 Z M 9.046875 -38.390625 ' />
		// 			</g>
		// 		</g>
		// 	</g>
		// 	<g fill='#000000' fillOpacity='1'>
		// 		<g transform='translate(200.431775, 198.263747)'>
		// 			<g>
		// 				<path d='M 9.046875 0 L 4.703125 0 L 4.703125 -38.390625 L 9.046875 -38.390625 Z M 9.046875 0 ' />
		// 			</g>
		// 		</g>
		// 	</g>
		// 	<g fill='#000000' fillOpacity='1'>
		// 		<g transform='translate(231.286852, 198.263747)'>
		// 			<g>
		// 				<path d='M 42.046875 -38.390625 L 42.046875 0 L 37.703125 0 L 37.703125 -31.78125 L 23.484375 -13.515625 L 9.046875 -31.78125 L 9.046875 0 L 4.703125 0 L 4.703125 -38.390625 L 9.75 -38.390625 L 23.484375 -20.1875 L 37 -38.390625 Z M 42.046875 -38.390625 ' />
		// 			</g>
		// 		</g>
		// 	</g>
		// 	<g fill='#000000' fillOpacity='1'>
		// 		<g transform='translate(295.141745, 198.263747)'>
		// 			<g>
		// 				<path d='M 38.21875 0 L 33.40625 0 L 28.703125 -11.140625 L 9.6875 -11.140625 L 4.984375 0 L 0.171875 0 L 16.46875 -38.390625 L 21.921875 -38.390625 Z M 27.03125 -15.140625 L 19.203125 -33.875 L 11.375 -15.140625 Z M 27.03125 -15.140625 ' />
		// 			</g>
		// 		</g>
		// 	</g>
		// </svg>
	)
}
