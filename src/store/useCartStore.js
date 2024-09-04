import { create } from 'zustand'

const useCartStore = create((set, get) => ({
	items: [],
	addItem: product => {
		set(state => ({
			items: state.items.some(item => item.id === product.id)
				? state.items.map(item =>
						item.id === product.id
							? { ...item, quantity: item.quantity + product.quantity } // Suma la cantidad del nuevo producto
							: item,
				  )
				: [...state.items, product],
		}))
	},
	updateItemQuantity: (productId, newQuantity) => {
		set(state => ({
			items: state.items.map(item =>
				item.id === productId ? { ...item, quantity: newQuantity } : item,
			),
		}))
	},
	removeItem: productId => {
		set(state => ({
			items: state.items.filter(item => item.id !== productId),
		}))
	},
	deleteCart: () => {
		set({ items: [] })
	},
	getTotalQuantity: () => {
		return get().items.reduce((total, item) => total + item.quantity, 0)
	},
	getTotalPrice: () => {
		return get().items.reduce((acc, item) => acc + item.price * item.quantity, 0)
	},
}))

export default useCartStore
