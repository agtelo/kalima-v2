import { create } from 'zustand'

const useUserStore = create(set => ({
	// User  state
	user: [],
}))

export default useUserStore
