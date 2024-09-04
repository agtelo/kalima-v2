import { db } from '@/libs/DB'
import { productSchema } from '@/models/ProductsSchema'
import { eq } from 'drizzle-orm'

export async function GET(request, { params }) {
	const { id } = params

	try {
		const product = await db.select().from(productSchema).where(eq(productSchema.id, id)).get()

		if (!product) {
			return new Response(JSON.stringify({ error: 'Product not found' }), {
				status: 404,
				headers: { 'Content-Type': 'application/json' },
			})
		}

		return new Response(JSON.stringify(product), {
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
