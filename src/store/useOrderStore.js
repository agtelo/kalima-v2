import { create } from 'zustand'
import useCheckoutStore from '@/store/useCheckoutStore'
import useCartStore from '@/store/useCartStore'
import createOrder from '@/services/createOrder'

const useOrderStore = create(set => ({
	order: {
		id: null,
		contactInfo: '',
		orderNumber: null,
		shippingInfo: {},
		paymentInfo: {},
		totalPrice: 0,
		totalQuantity: 0,
		items: [],
	},
	generateOrder: () => {
		const { contactInfo, shippingInfo, paymentInfo } = useCheckoutStore.getState()
		const { items, getTotalQuantity, getTotalPrice } = useCartStore.getState()

		const orderNumber = Math.floor(Math.random() * 1000000)

		const order = {
			contactInfo: contactInfo,
			items: items,
			orderNumber: orderNumber,
			paymentInfo: paymentInfo,
			shippingInfo: shippingInfo,
			totalPrice: getTotalPrice(),
			totalQuantity: getTotalQuantity(),
		}
		console.log('Order:', order)
		set({ order }) // Update the order state in the store
	},
	placeOrder: async () => {
		const { order } = useOrderStore.getState()

		try {
			const createdOrder = await createOrder(order)
			console.log('Order created successfully:', createdOrder)
		} catch (error) {
			console.error('Error creating order:', error)
		}
	},
	deleteOrder: () => {
		set({ order: {} })
	},
}))

export default useOrderStore
