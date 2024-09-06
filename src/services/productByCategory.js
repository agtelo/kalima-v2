import axios from 'axios'

export async function ProductByCategory(category) {
	const baseURL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3001'
	try {
		const res = await axios.get(`${baseURL}/api/products/category/${category}`, {
			headers: {
				'Content-Type': 'application/json',
			},
		})
		if (res.status !== 200) {
			throw new Error('Network response was not ok')
		}
		return res.data
	} catch (error) {
		console.error('Error:', error)
		throw new Error('Network response was not ok')
	}
}
