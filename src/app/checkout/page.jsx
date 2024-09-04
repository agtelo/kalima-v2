import OrderSummary from '@/components/checkout/OrderSummary'
import PlaceOrder from '@/components/checkout/PlaceOrder'
import PaymentForm from '@/components/checkout/PaymentForm'
import OrderTotal from '@/components/checkout/OrderTotal'
import ShippingForm from '@/components/checkout/ShippingForm'
import ContactForm from '@/components/checkout/ContactForm'

export default function Checkout() {
	return (
		<div className='flex flex-col w-full min-h-screen overflow-hidden lg:p-20 md:flex-row'>
			<div className='flex flex-col flex-1 gap-8 p-6 md:p-10'>
				<div>
					<h1 className='text-2xl font-bold'>Checkout</h1>
					<p className='text-muted-foreground'>
						Revisa los detalles de tu compra y procede al pago
					</p>
				</div>
				<div className='flex flex-col gap-6 md:gap-8'>
					<div className='flex-1'>
						<OrderSummary />
					</div>
					<div className='flex-1'>
						<OrderTotal />
					</div>
				</div>
				<div className='flex flex-col gap-6'>
					<ContactForm />
					<PaymentForm />
					<ShippingForm />
				</div>
			</div>
			<div className='flex-none w-full p-6 md:w-96 md:p-10'>
				<div className='flex flex-col gap-6'>
					<PlaceOrder />
				</div>
			</div>
		</div>
	)
}
