import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core'

export const ordersSchema = sqliteTable('orders', {
	id: integer('id').primaryKey(),
	contactInfo: text('contactInfo').notNull(),
	orderNumber: integer('orderNumber').notNull(),
	shippingInfo: text('shippingInfo').notNull(),
	paymentInfo: text('paymentInfo').notNull(),
	totalPrice: integer('totalPrice').notNull(),
	totalQuantity: integer('totalQuantity').notNull(),
	items: integer('items').notNull(),
})
