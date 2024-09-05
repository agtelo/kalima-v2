import axios from 'axios'

const createOrder = async order => {
	const baseURL = process.env.DATABASE_URL || 'http://localhost:3000'
	try {
		const response = await axios.post(`${baseURL}/api/create-order`, order, {
			headers: {
				'Content-Type': 'application/json',
			},
		})

		return response.data
	} catch (error) {
		console.error('Error creating order FETCH:', error)
		throw { message: error.message, status: error.response?.status || 500 }
	}
}

export default createOrder
