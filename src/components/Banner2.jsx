import Image from 'next/image'
import React from 'react'

export default function Banner2() {
	return (
		<>
			<div>
				<Image
					src='/assets/images/slide4.png'
					className='object-scale-down w-full h-auto '
					width={1800}
					height={400}
					alt='banner'
				/>
			</div>
		</>
	)
}
