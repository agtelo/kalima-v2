import axios from 'axios'

export async function FeaturedProducts() {
	const baseURL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
	try {
		const res = await axios.get(`${baseURL}/api/products/featured`)
		return res.data
	} catch (error) {
		throw new Error('Network response was not ok')
	}
}
