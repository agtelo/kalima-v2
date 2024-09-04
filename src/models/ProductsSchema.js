import { sql } from 'drizzle-orm'
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const productSchema = sqliteTable('products', {
	id: integer('id').primaryKey(),
	model: text('model').notNull(),
	brand: text('brand').notNull(),
	category: text('category').notNull(),
	price: integer('price').notNull(),
	description: text('description').notNull(),
	image: text('image').notNull(),
	featured: integer('featured').default(0),
	createdAt: integer('created_at', { mode: 'timestamp' }).default(sql`(strftime('%s', 'now'))`),
	updatedAt: integer('updated_at', { mode: 'timestamp' }).default(sql`(strftime('%s', 'now'))`),
})
