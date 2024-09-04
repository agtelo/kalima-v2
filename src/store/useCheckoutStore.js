import { create } from 'zustand'

const useCheckoutStore = create(set => ({
	contactInfo: {
		fullName: '',
		email: '',
	},
	shippingInfo: {
		fullName: '',
		city: '',
		state: '',
		zip: '',
		country: '',
	},
	paymentInfo: {
		cardNumber: '',
		expirationMonth: '',
		expirationYear: '',
		cvc: '',
	},
	setContactInfo: data => set(state => ({ contactInfo: { ...state.contactInfo, ...data } })),
	setShippingInfo: data => set(state => ({ shippingInfo: { ...state.shippingInfo, ...data } })),
	setPaymentInfo: data => set(state => ({ paymentInfo: { ...state.paymentInfo, ...data } })),
}))

export default useCheckoutStore
