import { db } from '@/libs/DB'
import { productSchema } from '@/models/ProductsSchema'

export async function GET(request) {
	try {
		const products = await db.select().from(productSchema).all()
		return new Response(JSON.stringify(products), {
			status: 200,
			headers: { 'Content-Type': 'application/json' },
		})
	} catch (error) {
		return new Response(JSON.stringify({ error: error.message }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' },
		})
	}
}
