import { BoxIcon, WalletMinimal, CreditCardIcon } from 'lucide-react'

export default function Banner() {
	return (
		<section className='flex flex-col items-center justify-around gap-4 p-4 md:flex-row md:p-10 md:gap-0'>
			<div className='flex items-center'>
				<BoxIcon className='mr-2' />
				<p className='text-center uppercase md:text-left'>Envíos sin cargo</p>
			</div>
			<div className='flex items-center'>
				<WalletMinimal className='mr-2' />
				<p className='text-center uppercase md:text-left'>Múltiples formas de pago</p>
			</div>
			<div className='flex items-center'>
				<CreditCardIcon className='mr-2' />
				<p className='text-center uppercase md:text-left'>Cuotas sin interés</p>
			</div>
		</section>
	)
}
