'use client'
import { MinusIcon, PlusIcon } from 'lucide-react'
import { Button } from './ui/button'
import useCartStore from '@/store/useCartStore'

const Counter = ({ quantity, onQuantityChange }) => {
	const handleIncrease = () => onQuantityChange(quantity + 1)
	const handleDecrease = () => onQuantityChange(Math.max(1, quantity - 1)) // Evitar cantidades negativas

	return (
		<div className='flex items-center justify-between'>
			<div className='flex items-center gap-2'>
				<Button variant='outline' size='icon' onClick={handleDecrease}>
					<MinusIcon className='w-4 h-4' />
					<span className='sr-only'>Decrement</span>
				</Button>
				<div className='text-lg font-medium'>{quantity}</div>
				<Button variant='outline' size='icon' onClick={handleIncrease}>
					<PlusIcon className='w-4 h-4' />
					<span className='sr-only'>Increment</span>
				</Button>
			</div>
		</div>
	)
}

export default Counter
