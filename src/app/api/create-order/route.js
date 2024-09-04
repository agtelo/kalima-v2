import { db } from '@/libs/DB'
import { ordersSchema } from '@/models/OrdersSchema'

export async function POST(request) {
	try {
		const orderData = await request.json()

		// Desglosar los datos
		const preparedOrderData = {
			...orderData,
			contactInfo: orderData.contactInfo.fullName, // O el campo relevante
			shippingInfo: orderData.shippingInfo.address, // O el campo relevante
			paymentInfo: orderData.paymentInfo.cardNumber, // O el campo relevante
			items: orderData.items.map(item => item.model).join(','), // O la representación deseada
		}

		console.log('Prepared Order Data:', preparedOrderData)

		try {
			const insertedOrder = await db.insert(ordersSchema).values(preparedOrderData).returning()
			console.log('Inserted Order:', insertedOrder)

			return new Response(JSON.stringify(insertedOrder), {
				status: 201,
				headers: { 'Content-Type': 'application/json' },
			})
		} catch (dbError) {
			console.error('Database insertion error:', dbError)
			return new Response(JSON.stringify({ error: 'Database insertion failed' }), {
				status: 500,
				headers: { 'Content-Type': 'application/json' },
			})
		}
	} catch (error) {
		console.error('Error creating order API:', error)
		return new Response(JSON.stringify({ error: error.message }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' },
		})
	}
}
