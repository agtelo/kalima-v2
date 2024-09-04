import { db } from '@/libs/DB'
import { productSchema } from '@/models/ProductsSchema'
import { eq } from 'drizzle-orm'

export async function GET(request, { params }) {
	try {
		const products = await db
			.select()
			.from(productSchema)
			.where(eq(productSchema.featured, 1))
			.all()

		if (!products) {
			return new Response(JSON.stringify({ error: 'Product not found' }), {
				status: 404,
				headers: { 'Content-Type': 'application/json' },
			})
		}

		return new Response(JSON.stringify(products), {
			status: 200,
			headers: { 'Content-Type': 'application/json' },
		})
	} catch (error) {
		console.error('Error fetching product:', error) // Añadir registro de error
		return new Response(JSON.stringify({ error: error.message }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' },
		})
	}
}
