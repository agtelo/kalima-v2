import axios from 'axios'

export async function ProductByCategory(category) {
	const baseURL = process.env.DATABASE_URL || 'http://localhost:3000'
	try {
		const res = await axios.get(`${baseURL}/api/products/category/${category}`)
		return res.data
	} catch (error) {
		throw new Error('Network response was not ok')
	}
}
