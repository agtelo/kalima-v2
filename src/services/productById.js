import axios from 'axios'

export async function ProductById(id) {
	const baseURL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
	try {
		const res = await axios.get(`${baseURL}/api/products/${id}`)
		return res.data
	} catch (error) {
		throw new Error('Network response was not ok')
	}
}
