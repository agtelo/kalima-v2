import axios from 'axios'

const baseURL = 'http://localhost:3000' // Move outside the function

const createOrder = async order => {
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
